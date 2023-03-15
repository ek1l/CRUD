let botaoCadastro = document.getElementById('cadastro')
let containerCadastro = document.querySelector('.cadastro')
let botaoFecharCadastro = document.querySelector('#fechar-cadastro')

// ABRE E FECHA O FORMULÁRIO 

botaoCadastro.addEventListener('click',e => {
containerCadastro.style.display = 'block'
})

botaoFecharCadastro.addEventListener('click',e => {
    containerCadastro.style.display = 'none'
    })


// Não deixar a página recarregar após SUBMIT

    const form = document.getElementById('form-refresh')
    form.addEventListener('submit', e => {
        e.preventDefault()
        console.log("Não recarregou")
    })



    class Cadastro {
        constructor(nome,email,celular,cidade) {
            this.nome = nome,
            this.email = email,
            this.celular = celular,
            this.cidade = cidade
        }
    }

// LISTA DE CLIENTES 

    let guardarClientes = []



// ADICIONAR CLIENTES NO CONTAINER 


    const addCliente = () => {
        const pegarNome = document.querySelector('#name').value
        const pegarEmail = document.querySelector('#email').value
        const pegarCelular = document.querySelector('#celular').value
        const pegarCidade = document.querySelector('#cidade').value
        let chamarCadastro = new Cadastro(pegarNome, pegarEmail, pegarCelular, pegarCidade)
        guardarClientes.push(chamarCadastro)
        console.table(guardarClientes)
        containerCadastro.style.display = 'none'
        renderizar()
    }

    const adicionarCadastro = document.querySelector('#cadastrar-cliente')

    adicionarCadastro.addEventListener('click', addCliente)

// RENDERIZAR NA TELA 

function renderizar() {
    let clientes = document.querySelector('.clientes')
    clientes.innerHTML = ''
    guardarClientes.forEach(cliente => {
        clientes.innerHTML += `
        <div class="tabela-clientes">
            <div class="pegarinfo">
             <h2> Nome: </h2>
             <h2>${cliente.nome}</h2>
             </div>
             <div class="pegarinfo">
             <h2> Email:</h2>
             <h2> ${cliente.email}</h2>
             </div>
             <div class="pegarinfo">
             <h2> Celular: </h2>
             <h2>${cliente.celular}</h2>
             </div>
             <div class="pegarinfo">
             <h2> Cidade: </h2>
             <h2>${cliente.cidade}</h2>
             </div>
        <div class="button-delete-edit">
        <button class="edit-apg">Editar</button>
        <button class="edit-apg">Apagar</button>
        </div>
        </div>
        `
    })

    if(guardarClientes.length === 8) {
        guardarClientes.pop()
     alert(`O máximo de clientes é 8`)
    
    }
    
}







