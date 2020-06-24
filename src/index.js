fetch("http://localhost:3000/hogs")
.then(resp => resp.json())
.then(hogs => {
    hogs.forEach(hog => {
        const { id, name, specialty, greased, weight,highest_medal_achieved, image } = hog
        new Hog(id, name, specialty, greased, weight,highest_medal_achieved, image)
    })
}) 

document.getElementById('form').addEventListener('submit', addHog)

// make our form work

function addHog(e){
    e.preventDefault()
    // capture our form data
    let data = {
        'name': e.target.name.value,
        'specialty': e.target.specialty.value,
        'greased': e.target.greased.checked,
        'weight': e.target.weight.value,
        'highest_medal_achieved': e.target.medal.value,
        'image': e.target.img.value
    }
    // write our fetch and send it to our back end
    fetch('http://localhost:3000/hogs', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    // grab our fetch response
    .then(resp => resp.json())
    .then(hog => {
        const { id, name, specialty, greased, weight,highest_medal_achieved, image } = hog
        new Hog(id, name, specialty, greased, weight,highest_medal_achieved, image)
        document.getElementById('hog-form').reset()
    })
    // create a new Hog object
    // clear our form
}