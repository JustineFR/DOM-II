// The nav bar turns blue on mouseover
const navBar = document.querySelector('.nav-container')
navBar.addEventListener('mouseover', () => {
    navBar.style.backgroundColor = "#33E9FD";
})

// The nav bar goes back to original color on mouseout
navBar.addEventListener('mouseout', () => {
    navBar.style.backgroundColor = "#ffffff";
})

// The nav links turns 
const navLinks = document.querySelectorAll('.nav-link')
navLinks.forEach((link) => {
    link.addEventListener('click', () => {
    link.style.color = '#D533FD';
    })
})
