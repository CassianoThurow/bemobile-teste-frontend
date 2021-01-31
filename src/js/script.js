const openForm = document.querySelector('button')
const fielset = document.querySelector('fieldset')
const wrapper = document.querySelector('.wrapper')
const press = document.querySelector('.press')

function showForm(){
    fielset.classList.toggle('active')
    wrapper.classList.toggle('active')

}

function dismissPress(){
    press.style.display = 'none'
}

openForm.addEventListener('click', dismissPress)
openForm.addEventListener('click', showForm)
