const inputCep = document.getElementById('cep');

function onBlur() {
    const cep = inputCep.value
    searchCep(cep)
}

function searchCep(cep){
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(res => res.json())
    .then((data) => {
        document.getElementById('logradouro').value=(data.logradouro);
        document.getElementById('bairro').value=(data.bairro);
        document.getElementById('cidade').value=(data.localidade);
        document.getElementById('estado').value=(data.uf);
    })
}

