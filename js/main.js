document.querySelector('button').addEventListener('click',apiRequest)

async function apiRequest(){
     const playerName = document.querySelector('input').value
     try{
        const response = await fetch(`https://man-united-api.herokuapp.com/api/${playerName}`)
        const data = await response.json()
        console.log(data)

        document.getElementById('playerAge').innerText = data.age
        document.getElementById('playerBio').innerText = data.biography
        document.getElementById('playerCountry').innerText = data.country
        document.getElementById('playerPosition').innerText = data.position
        document.getElementById('playerGoals').innerText = data.goals
        document.getElementById('playerImage').src = data.image

     }catch(error) {
        console.log(error)
     }
}