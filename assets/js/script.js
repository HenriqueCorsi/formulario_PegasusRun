const button = document.querySelector('button');

const addloading = () =>{
    button.innerHTML = '<img src="./assets/img/carregando.png" class="loading" alt=""></img>';
}

const removeloading = () =>{
    alert('Cadastro Realizado com Sucesso!')
    button.innerHTML = 'Enviar';
}

const handleSubmit = (event) => {
    event.preventDefault();
    addloading();

    const nome = document.getElementById('nome').value;
    const data = document.getElementById('data').value;
    const telefone = document.getElementById('tel').value;
    const equipe = document.getElementById('equipe').value;
    const instagram = document.getElementById('insta').value;
    
    fetch('https://api.sheetmonkey.io/form/ptA4mrNH7ahPoQMNbWuRPN', {
    method: 'post',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    
    body: JSON.stringify({Nome: nome, Data_nascimento: data, Telefone: telefone, Equipe: equipe, Instagram: instagram}),
    }).then(()=> removeloading())
}

document.querySelector('form').addEventListener('submit', handleSubmit);

