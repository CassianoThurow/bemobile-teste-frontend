const openForm = document.querySelector('button')
const fielset = document.querySelector('fieldset')
const wrapper = document.querySelector('.wrapper')


console.log(wrapper)

function showForm(){
    fielset.classList.toggle('active')
    wrapper.classList.toggle('active')

}

openForm.addEventListener('click', showForm)
