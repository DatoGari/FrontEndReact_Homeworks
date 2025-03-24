const open = document.getElementById('openBtn')
const modalContainer = document.getElementById('modal-container')
const close = document.getElementById('closeBtn')

open.addEventListener('click',()=>{
    modalContainer.classList.add('show');
})

close.addEventListener('click',()=>{
    modalContainer.classList.remove('show');
})
