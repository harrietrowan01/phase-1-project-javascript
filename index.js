const URL = 'http://localhost:3000/hunters';

fetch(URL)
.then(response => response.json())
.then(data => {
    console.log(data);
    const ul = document.querySelector('#hunter-names');
    data.forEach(hunter => {
      const interhunters = `${hunter.id} ${hunter.name}`;
        ul.append(interhunters);

    })

})