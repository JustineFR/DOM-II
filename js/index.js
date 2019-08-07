// The nav bar turns blue on mouseover
const navBar = document.querySelector('.nav-container')
const logo = document.querySelector(".logo-heading")
navBar.addEventListener('mouseover', () => {
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
        // Added stop propagation to stop background color to turn yellow (parent element)
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
        alert('Great Choice!')
    })
    button.addEventListener('click', () => {
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

// Added background color on top of content section
const contentSection = document.querySelector(".content-section")

contentSection.addEventListener('mouseover', (e) => {
    contentSection.style.backgroundColor = "#439fa2";
    // contentSection.style.opacity =  "0.5"
})

contentSection.addEventListener('mouseout', (e) => {
    contentSection.style.backgroundColor = "";
})


// The last image becomes more opaque while clicked on
const destinationImage = document.querySelector(".content-destination img")

destinationImage.addEventListener('mousedown', (e) => {
    // Added stoppropagation to prevent the text to turn blue when pic is clicked (red on parent element)
    e.stopPropagation();
    destinationImage.style.opacity = "0.5"
})

// The last image goes back to original once clicked is released
destinationImage.addEventListener('mouseup', (e) => {
    destinationImage.style.opacity = ""
})


const destination = document.querySelector(".content-destination")

destination.addEventListener('mousedown', (e) => {
    destination.style.color = "#1E8BB9"
})

// The last image goes back to original once clicked is released
destination.addEventListener('mouseup', (e) => {
    destination.style.color = ""
})

// Create a new element
const logo2 = document.createElement('img');
logo2.setAttribute("src", "./img/bird2.png");
logo2.setAttribute("width", "200");
logo2.classList.add("logoClass")


const header = document.querySelector('header')
header.appendChild(logo2)

TweenMax.to(".logoClass", 6, {
    left:1000, 
});





