


let ler = require('readline-sync')

// ======================
// DADOS DO USUÁRIO
// ======================
let usuario = null

// ======================
// DADOS DA CONTA
// ======================
let saldo = 0
let caixinha = 0
let extrato = []

// ======================
// CONTROLE DE MENUS
// ======================
let opcao = -1
let opcao_conta = -1

// ======================
// CONTROLE DO SISTEMA
// ======================
let cadastro_realizado = false
let logado = false

function menu() {
    console.log(`
=======================================

|        Bem vindo ao Banco MPB       |
|                                     |
|        1 - Cadastrar conta          |
|        2 - Acessar conta            |
|        3 - Ajuda                    |
|        0 - Sair                     |
|                                     |
=======================================
`)

    opcao = Number(ler.question("Escolha uma opcao: "))
}

function cadastrar() {
    usuario = {
        nome: null,
        cpf: null,
        data_nascimento: null,

        endereco: {
            rua: null,
            numero: null,
            bairro: null,
            complemento: null,
            cidade: null,
            estado: null,
            cep: null
        },

        email: null,
        telefone: null,
        senha: null
    }
}

function cadastro() {
    usuario.nome = ler.question('Nome completo: ')
    usuario.cpf = ler.question('CPF: ')
    usuario.data_nascimento = ler.question('Data de nascimento (dd/mm/aaaa): ')

    usuario.endereco.rua = ler.question('Rua: ')
    usuario.endereco.numero = ler.question('Numero: ')
    usuario.endereco.bairro = ler.question('Bairro: ')
    usuario.endereco.complemento = ler.question('Complemento: ')
    usuario.endereco.cidade = ler.question('Cidade: ')
    usuario.endereco.estado = ler.question('Estado: ')
    usuario.endereco.cep = ler.question('CEP: ')

    usuario.telefone = ler.question('Telefone: ')
    usuario.email = ler.question('Email: ')
    usuario.senha = ler.question('Senha: ')

    cadastro_realizado = true

    console.log('\nCadastro realizado com sucesso!\n')
}

function acessarConta() {
    if (!cadastro_realizado) {
        console.log('\nVoce nao possui cadastro.\n')
        return
    }

    let cpf = ler.question('Digite seu CPF: ')
    let senha = ler.question('Digite sua senha: ')

    if (cpf === usuario.cpf && senha === usuario.senha) {
        console.log('\nLogin realizado com sucesso!\n')
        logado = true
    } else {
        console.log('\nCPF ou senha incorretos.\n')
    }
}

function ajuda() {
    console.log(`
=================================================
           CENTRAL DE ATENDIMENTO MPB
=================================================

Telefone: 0800 123 4567
WhatsApp: (11) 99999-9999
E-mail: atendimento@bancompb.com

Horário de Atendimento:
Segunda a Sexta: 08:00 às 18:00
Sábados: 08:00 às 12:00

=================================================
`)

    ler.question('Pressione Enter para voltar...')
}

function registrarTransacao(tipo, valor) {
    let dataHora = new Date().toLocaleString('pt-BR')

    extrato.push({
        oque: tipo,
        quanto: valor,
        dataHora: dataHora
    })
}

function menu_conta() {
    console.log(`
=======================================

| Ola, ${usuario.nome}
|
| Saldo em conta: R$ ${saldo.toFixed(2)}
| Saldo na Caixinha: R$ ${caixinha.toFixed(2)}
|
| 1 - Deposito
| 2 - Saque
| 3 - PIX e Transferir
| 4 - Caixinhas
| 5 - Extrato
| 0 - Voltar
|
=======================================
`)

    opcao_conta = Number(
        ler.question('Escolha o que deseja: ')
    )
}

function deposito() {
    console.log('\n======== DEPOSITO ========\n')

    let valorDeposito = Number(
        ler.question('Valor do deposito: ')
    )

    if (valorDeposito > 0) {
        saldo += valorDeposito

        registrarTransacao(
            'Deposito',
            valorDeposito
        )

        console.log('Deposito realizado com sucesso!')
    } else {
        console.log('Valor invalido!')
    }

    ler.question('\nPressione Enter para voltar...')
}

function saque() {
    console.log('\n======== SAQUE ========\n')

    let valorSaque = Number(
        ler.question('Valor do saque: ')
    )

    if (valorSaque > 0 && valorSaque <= saldo) {
        saldo -= valorSaque

        registrarTransacao(
            'Saque',
            valorSaque
        )

        console.log('Saque realizado com sucesso!')
    } else if (valorSaque > saldo) {
        console.log('Saldo insuficiente.')
    } else {
        console.log('Valor invalido.')
    }

    ler.question('\nPressione Enter para voltar...')
}

function pix_e_transferir() {
    console.log('\n======== PIX / TRANSFERENCIA ========\n')

    console.log('1 - PIX')
    console.log('2 - TED/DOC')

    let tipoTransferencia = Number(
        ler.question('Escolha o tipo: ')
    )

    if (tipoTransferencia !== 1 && tipoTransferencia !== 2) {
        console.log('Opcao invalida!')
        ler.question('\nPressione Enter para voltar...')
        return
    }

    let chaveOuConta = ler.question(
        tipoTransferencia === 1
            ? 'Digite a chave PIX: '
            : 'Digite a conta de destino: '
    )

    let valorTransferir = Number(
        ler.question('Valor a ser enviado: ')
    )

    if (valorTransferir > 0 && valorTransferir <= saldo) {
        saldo -= valorTransferir

        let descricao =
            tipoTransferencia === 1
                ? `PIX enviado para ${chaveOuConta}`
                : `Transferencia para ${chaveOuConta}`

        registrarTransacao(
            descricao,
            valorTransferir
        )

        console.log('Transferencia realizada com sucesso!')
    } else if (valorTransferir > saldo) {
        console.log('Saldo insuficiente.')
    } else {
        console.log('Valor invalido.')
    }

    ler.question('\nPressione Enter para voltar...')
}

function caixinhas() {
    console.log('\n======== CAIXINHAS ========\n')

    console.log('1 - Guardar dinheiro')
    console.log('2 - Resgatar dinheiro')

    let acao = Number(
        ler.question('Escolha uma opcao: ')
    )

    if (acao === 1) {
        let valorGuardar = Number(
            ler.question(
                'Valor para guardar na caixinha: '
            )
        )

        if (
            valorGuardar > 0 &&
            valorGuardar <= saldo
        ) {
            saldo -= valorGuardar
            caixinha += valorGuardar

            registrarTransacao(
                'Guardar Caixinha',
                valorGuardar
            )

            console.log(
                'Dinheiro guardado com sucesso!'
            )
        } else {
            console.log(
                'Saldo insuficiente ou valor invalido.'
            )
        }
    } else if (acao === 2) {
        let valorResgatar = Number(
            ler.question(
                'Valor para resgatar da caixinha: '
            )
        )

        if (
            valorResgatar > 0 &&
            valorResgatar <= caixinha
        ) {
            caixinha -= valorResgatar
            saldo += valorResgatar

            registrarTransacao(
                'Resgate Caixinha',
                valorResgatar
            )

            console.log(
                'Valor resgatado com sucesso!'
            )
        } else {
            console.log(
                'Valor insuficiente na caixinha.'
            )
        }
    } else {
        console.log('Opcao invalida!')
    }

    ler.question('\nPressione Enter para voltar...')
}

function mostrarExtrato() {
    console.log('\n======== EXTRATO ========\n')

    if (extrato.length === 0) {
        console.log(
            'Nenhuma movimentacao realizada.'
        )
    } else {
        for (let i = 0; i < extrato.length; i++) {
            console.log(
                `O que: ${extrato[i].oque}`
            )

            console.log(
                `Quanto: R$ ${extrato[i].quanto.toFixed(2)}`
            )

            console.log(
                `Data/Hora: ${extrato[i].dataHora}`
            )

            console.log(
                '--------------------------------'
            )
        }
    }

    ler.question('\nPressione Enter para voltar...')
}

// ======================
// FLUXO PRINCIPAL
// ======================

while (opcao !== 0) {
    menu()

    switch (opcao) {
        case 1:
            cadastrar()
            cadastro()
            break

        case 2:
            acessarConta()

            while (logado) {
                menu_conta()

                switch (opcao_conta) {
                    case 1:
                        deposito()
                        break

                    case 2:
                        saque()
                        break

                    case 3:
                        pix_e_transferir()
                        break

                    case 4:
                        caixinhas()
                        break

                    case 5:
                        mostrarExtrato()
                        break

                    case 0:
                        logado = false
                        break

                    default:
                        console.log(
                            'Opcao invalida!'
                        )
                }
            }
            break

        case 3:
            ajuda()
            break

        case 0:
            console.log(
                '\nEncerrando sistema...'
            )
            break

        default:
            console.log(
                '\nOpcao invalida.'
            )
    }
}

