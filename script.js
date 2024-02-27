// Variáveis
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const clickTry = document.querySelector('#clickTry')
const clickReset = document.querySelector('#clickReset')
let randomNumber = Math.floor(Math.random() * 5)

// Array do biscoito
let message = [
  'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.',
  'Todo mundo tem seu próprio destino. Nem todos tomam a decisão de segui-lo. Tive a sorte de ter feito isso.',
  'Com sorte você atravessa o mundo, sem sorte você não atravessa a rua.',
  'O desejo muda de objeto o tempo todo. Pena de quem é vaso. Sorte de quem é terra.',
  'Sorte é estar pronto quando a oportunidade vem.'
]

// chamada das funções
clickTry.addEventListener('click', toggleScreen)
clickReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', pressEnter)

// Funções
function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')

  screen2.querySelector('p').innerText = `${message[randomNumber]}`
}

function pressEnter(event) {
  // console.log(event)
  if (event.key == 'Enter') {
    handleResetClick()
  }
}

function handleResetClick() {
  toggleScreen()
  randomNumber = Math.floor(Math.random() * 5)
}