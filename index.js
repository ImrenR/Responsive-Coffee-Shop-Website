const search = document.querySelector('.search-box');


document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
}

const header = document.querySelector('header');
window.addEventListener('scrooll' , () => {
  header.classList.toggle('shadow', window.scrollY > 0 )
})
