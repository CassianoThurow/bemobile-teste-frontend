const form = document.getElementById('form')
const submit = document.querySelector('.btn')



function handleChange(e){
    const target = e.target;
    if (!target.checkValidity()){
        target.classList.add('invalid');
    }else {
        target.classList.remove('invalid');
    }
}
form.addEventListener('change', handleChange)


function handleSubmit() {
    alert("Formulário enviado com sucesso !");
}