const inputCep = document.querySelector("#cep")
const inputLogradouro = document.querySelector("#logradouro")
const inputNumero = document.querySelector("#numero")
const inputComplemento = document.querySelector("#complemento")
const inputBairro = document.querySelector("#bairro")
const inputCidade = document.querySelector("#localidade")
const inputEstado = document.querySelector("#estado")

const botaoEnviar = document.querySelector("#btn-enviar")

botaoEnviar.addEventListener("click",cadastrarEndereco)

function cadastrarEndereco(){
    event.preventDefault();
    const json = {
        "cep" : inputCep.value,
        "logradouro" : inputLogradouro.value,
        "complemento" : inputComplemento.value,
        "numero" : inputNumero,
        "bairro" : inputBairro.value,
        "localidade" : inputCidade.value,
        "estado" : inputEstado.value,

        
    }
    console.log("Meus dados do formulário",json)
}

inputCep.addEventListener("change",buscarCep);
async function buscarCep(event) {
    const cep = event.target.value
    
    // Se a quantidade de digitos for 8
    if(cep.length == 8){
        // Chamrar a API
        const url = `https://viacep.com.br/ws/${cep}/json`
        const response = await fetch(url)
        const json = await response.json()
        console.log(json)

        inputLogradouro.value = json.logradouro
        inputComplemento.value = json.complemento
        inputBairro.value = json.bairro
        inputCidade.value = json.localidade
        inputEstado.value = json.estado

    }
}