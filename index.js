const URL = 'http://localhost:3000/hunters';

fetch(URL)
.then(response => response.json())
.then(data => {
  console.log(data);
  const ul = document.querySelector('#hunter-names');
  data.forEach(hunter => {
    const interhunters = `${hunter.id} ${hunter.name} ${hunter.specialty}`;
    const li = document.createElement('li')
    li.textContent = interhunters
    ul.append(li);
  })
})

function holdTheGlass () {
  const ul = document.querySelector('#hunter-names');
  ul.forEach(hunter => {
    if hunters.category == "Enhancer"
    "The water is overflowing!"
    elsif hunters.category == "Transmuter"
    "The water tastes different!"
    elsif hunters.category == "Conjurer"
    "There is something forming in the water!"
    elsif hunters.category == "Manipulator"
    "The leaf is moving!"
    elsif hunters.category == "Emitter"
    "The water is changing colors!"
    else 
    "Something is unexpected is happening to the water!"
  })
}

