function alo(){
    alert('Alo!')
}

function aloNome(nome){
    alert('Alo' + nome) //Concatenação de Strings
alert(`Alo ${nome}. Seja bem vindo ao curso!`) //interpolação
}

function saudacao(){
    const nome = document.getElementById('nome').value
    if (nome == ''){
        alert('Digite um nome.')
        document.getElementById('nome').focus() //foco no elemento
    }else{
        alert(`${nome} seja bem vindo ao curso.`)
    }
}

function mouseFora(){
    alert('O mouse saiu!')
}

function textoMudou(){
    alert('o texto mudou')
}

function emFoco(){
    const user = document.getElementById('user')
    user.style.border = '5px solid green' 
    user.style.backgroundColor = 'grey'
}

function semFoco(){
    const user = document.getElementById('user')
    user.style.border = '1px solid black'
    user.style.backgroundColor = 'white'
}