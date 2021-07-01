const URL = 'http://localhost:3000/villagers';

fetch(URL)
.then(response => response.json())
.then(data => {
    console.log(data);
    const ul = document.querySelector('#villager-names');
    data.forEach(villager => {
      const intervillagers = `${villager.id} ${villager.name}`;
        ul.append(intervillagers);

    })

})