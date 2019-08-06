// The nav bar turns blue on mouseover
const navBar = document.querySelector('.nav-container')
const logo = document.querySelector(".logo-heading")
navBar.addEventListener('mouseover', () => {
    event.stopPropagation();
    navBar.style.backgroundColor = "#33E9FD";
    logo.style.fontSize = "5rem";
    logo.style.color = "yellow"

})

// The nav bar goes back to original color on mouseout
navBar.addEventListener('mouseout', () => {
    navBar.style.backgroundColor = "";
    logo.style.fontSize = "";
    logo.style.color = ""
})

// The nav links turns blue when clicked
const navLinks = document.querySelectorAll('.nav-link')
navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
    event.target.style.color = '#D533FD';
    // Add a timer on the links
    setTimeout(function() {
        event.target.style.color = "";
      }, 1000);
    }) 
})

// The images get bigger once moused over
const images = document.querySelectorAll('.img-content')
images.forEach(image => {
    image.addEventListener('mouseover', (e) => {
        e.stopPropagation();
        image.style.width = "52%"
    })
})

// The images get back to original size when moused out
images.forEach(image => {
    image.addEventListener('mouseout', () => {
        image.style.width = "48%"
    })
})

// Change color of the bottom buttons
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

// Add a backgound image on keydown
const body = document.querySelector('body')
const firstImage = document.querySelector('.intro img')

body.addEventListener('keydown', (e) => {
    // Add a background image on keydown
    body.setAttribute('style', 'background-image: url("./img/palm3.jpg")')
    // Hide the bus image on keydown
    firstImage.style.display = "none"
})


const contentSection = document.querySelector(".content-section")

contentSection.addEventListener('mouseover', (e) => {
    contentSection.style.backgroundColor = "#f5c945";

    setTimeout(function() {
        contentSection.style.backgroundColor = "";
      }, 1000);
})
console.log(contentSection)



