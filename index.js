const URL = 'https://foodish-api.herokuapp.com/'

fetch(URL)
.then(response => response.json())
.then(data => {
    console.log(data)

})