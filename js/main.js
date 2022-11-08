const date = new Date().toLocaleDateString()
const counter = document.querySelector('.counter')
const quotediv = document.querySelector('.quote')
const title = document.querySelector('.title')

const quotes = [
  "Mathematics consists of proving the most obvious thing in the least obvious way. <br> — George Pólya, Hungarian mathematician",
  "In mathematics, you don't understand things. You just get used to them. <br> — John von Neumann",
  "Pure mathematics is, in its way, the poetry of logical ideas. <br> — Albert Einstein, German theoretical physicist",
  "Without mathematics, there's nothing you can do. Everything around you is mathematics. Everything around you is numbers. <br> — Shakuntala Devi, Indian writer and mental calculator",
  "Mathematics is the most beautiful and most powerful creation of the human spirit. <br> — Stefan Banach, Polish mathematician",
  "We will always have STEM with us. Some things will drop out of the public eye and go away, but there will always be science, engineering, and technology. And there will always, always be mathematics. <br> — Katherine Johnson, African-American mathematician",
  "Mathematics as an expression of the human mind reflects the active will, the contemplative reason, and the desire for aesthetic perfection. Its basic elements are logic and intuition, analysis and construction, generality and individuality.<br> — Richard Courant, German-American mathematician",
  "As far as the laws of mathematics refer to reality, they are not certain, and as far as they are certain, they do not refer to reality.<br> — Albert Einstein",
  "What is mathematics? It is only a systematic effort of solving puzzles posed by nature.<br> — Shakuntala Devi",
  "Just because we can't find a solution, it doesn't mean there isn't one.<br>— Andrew Wiles, English mathematician",
  "Mathematics is a place where you can do things which you can't do in the real world.<br>— Marcus du Sautoy",
  "Millions saw the apple fall, but Newton asked why.<br>— Bernard Baruch, American financier, philanthropist and statesman",
  "The definition of a good mathematical problem is the mathematics it generates rather than the problem itself.<br>— Andrew Wiles",
  "If I were again beginning my studies, I would follow the advice of Plato and start with mathematics.<br>— Galileo Galilei",
  "Pure mathematicians just love to try unsolved problems — they love a challenge.<br>— Andrew Wiles",
  "Pure mathematics is the world’s best game. It is more absorbing than chess, more of a gamble than poker, and lasts longer than Monopoly. It’s free. It can be played anywhere — Archimedes did it in a bathtub.<br>— Richard J. Trudeau, mathematician"
]

// Add quote
quotediv.innerHTML = quotes[Math.floor(Math.random() * quotes.length)]

// Set the date we're counting down to
const firstRoundDate = new Date("Nov 9, 2022 15:30:0").getTime()
const secoundRoundDate = new Date("Jan 11, 2023 15:30:0").getTime()

const rounds = [firstRoundDate, secoundRoundDate]


function counterFunc(){
  
  // Get today's date and time
  let dateNow = new Date().getTime()
  let distance

  
  for(let i = 0; i < rounds.length; i++){
    if(rounds[i] - dateNow < 0){
      continue
    }
    distance = rounds[i] - dateNow
    title.innerHTML= `Contador até à ${i+1}º eliminatória das OPM`
    break
  }

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24))
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  let seconds = Math.floor((distance % (1000 * 60)) / 1000)
  

  // Display the result in the element
  counter.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s "

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(counterInterval);
    counter.innerHTML = "War time!";
  }
}
counterFunc()

// Update the count down every 1 second
const counterInterval = setInterval(counterFunc, 1000);