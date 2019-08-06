// The nav bar turns blue on mouseover
const navBar = document.querySelector('.nav-container')
navBar.addEventListener('mouseover', () => {
    navBar.style.backgroundColor = "#33E9FD";
})

// The nav bar goes back to original color on mouseout
navBar.addEventListener('mouseout', () => {
    navBar.style.backgroundColor = "#ffffff";
})

// The nav links turns blue when clicked
const navLinks = document.querySelectorAll('.nav-link')
navLinks.forEach((link) => {
    link.addEventListener('click', () => {
    link.style.color = '#D533FD';
    })
})


// The images get bigger once moused over
const images = document.querySelectorAll('.img-content')
images.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.width = "52%"
    })
})

// The images get back to original size when moused out
images.forEach(image => {
    image.addEventListener('mouseout', () => {
        image.style.width = "48%"
    })
})

// Change color of the buttons
const buttons = document.querySelectorAll('.btn')
buttons.forEach(button => {
    button.addEventListener('dblclick', () => {
        button.style.backgroundColor="#8DFEA7";
        button.style.color='#FEA08D'
    })
    button.addEventListener('mouseout', () => {
        button.style.backgroundColor="#FEA08D";
        button.style.color='#8DFEA7'
    })

})