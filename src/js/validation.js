const form = document.getElementById('form')

function handleChange(e){
    const target = e.target;
    if (!target.checkValidity()){
        target.classList.add('invalid');
    }else {
        target.classList.remove('invalid');
    }
}
form.addEventListener('change', handleChange)

