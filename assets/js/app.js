/* MENU DEROULANT */
let btnmenu = document.querySelector('.navbar-toggler')
let element = document.querySelector('#navbarCollapse')

btnmenu.addEventListener('click', navbar)
function navbar() {
  if (element.style.display == 'block') {
    element.style.display = 'none'
  } else {
    element.style.display = 'block'
  }
}

/* ALEATOIRE IMAGE */

let btnafficher = document.querySelector('.button');
let dogresult = document.querySelector('#dog_result');


btnafficher.addEventListener('click', getRandomDog)

function getRandomDog(){
fetch('https://dog.ceo/api/breeds/image/random')
.then(res=> res.json())
.then(data => dogresult.style.backgroundImage = "url(" + data.message + ")"
)

}
