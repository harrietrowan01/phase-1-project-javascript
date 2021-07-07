const URL = 'http://localhost:3000/hunters';

fetch(URL)
.then(response => response.json())
.then(data => {
    console.log(data);
    const ul = document.querySelector('#hunter-names');
    data.forEach(hunter => {
      const interhunters = `${hunter.id} ${hunter.name}`;
      const li = document.createElement('li')
      li.textContent = interhunters
        ul.append(li);

    })
  
  function holdTheGlass() {
    const ul =document.querySelector('#hunter-names');
    const interhunters = `${hunter.id} ${hunter.name} ${hunter.category}
    if (interhunters.category == Enhancer)
    "The water is overflowing!"
    elseif (interhunters.category == Transmuter)
    "This water tastes funny!"
    elsif (interhunter.category == Conjurer)
    "There's something in the water!"
    elsif (interhunter.category == Manipulator)
    "The leaf is moving!"
    elsif (interhunter.category == Emitter)
    "The water is changing colors!"
    else 
    "What is happening to the water? Must be a Specialist." 
  }
  
  document.getElementById("Gon").addEventListener("click", holdTheGlass());
