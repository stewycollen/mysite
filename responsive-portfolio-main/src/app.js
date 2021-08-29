const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

function toggleButton() {
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)


const display = document.getElementById('text')

let size = 60
display.style.fontSize = size + 'px'
display.style.fontFamily = 'Fira Code'
display.style.color = 'red'


function disapear(){
    
    display.style.fontFamily = 'Ink Free'
    display.style.color = 'blue'
    
}

setTimeout(disapear, 1000)