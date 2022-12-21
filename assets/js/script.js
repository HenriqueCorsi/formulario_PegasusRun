
const handleSubmit = (event) => {
    event.preventDefault();

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
    });
}

document.querySelector('form').addEventListener('submit', handleSubmit);