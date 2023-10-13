const date = new Date().toLocaleDateString()
const counter = document.querySelector('.counter')
const title = document.querySelector('.title')


const firstRoundDate = new Date("Oct 11, 2023 15:30:0").getTime()

const rounds = [firstRoundDate]

function counterFunc(){
  
  let dateNow = new Date().getTime()
  let distance

  
  for(let i = 0; i < rounds.length; i++){
    if(rounds[i] - dateNow < 0){
      continue
    }
    distance = rounds[i] - dateNow
    break
  }

  let days = Math.floor(distance / (1000 * 60 * 60 * 24))
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  let seconds = Math.floor((distance % (1000 * 60)) / 1000)
  

  

  if (distance < 0) {
    clearInterval(counterInterval);
    counter.innerHTML = "You know how to invoke me: the sigil."
  }
  counter.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s "
}
counterFunc()

const counterInterval = setInterval(counterFunc, 1000);