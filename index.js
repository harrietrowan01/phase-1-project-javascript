const URL = 'http://localhost:3000/hunters';
let hunters = []
fetch(URL)
.then(response => response.json())
.then(data => {
  console.log(data);
  hunters = data
  const ul = document.querySelector('#hunter-names');
  data.forEach(hunter => {
    const interhunters = `${hunter.id}. ${hunter.name}, ${hunter.specialty}`;
    const li = document.createElement('li')
    li.textContent = interhunters
    ul.append(li);
  })
})

function holdTheGlass (event) {
  console.log(hunters)
  const name = event.target.id
  console.log(name)
  function checkName (hunter) {
    return hunter.name === name
  }
  const theFoundHunter = hunters.find(checkName)
  console.log(theFoundHunter)
    if (theFoundHunter.category == "Enhancer") {
    alert ("The water is overflowing!")
    }
    else if (theFoundHunter.category == "Transmuter") {
    alert ("The water tastes different!")
    }
    else if (theFoundHunter.category == "Conjurer") {
    alert ("There is something forming in the water!")
    }
    else if (theFoundHunter.category == "Manipulator") {
    alert ("The leaf is moving!")
    }
    else if (theFoundHunter.category == "Emitter") {
    alert ("The water is changing colors!")
    }
    else {
    alert ("Something unexpected is happening to the water!")
    }
  }


document.getElementById("Gon").addEventListener("click", holdTheGlass);

document.getElementById("Killua").addEventListener("click", holdTheGlass);

document.getElementById("Hisoka").addEventListener("click", holdTheGlass);

document.getElementById("Illumi").addEventListener("click", holdTheGlass);

document.getElementById("Chrollo").addEventListener("click", holdTheGlass);