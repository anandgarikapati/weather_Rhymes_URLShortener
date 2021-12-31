const inputUrlField = document.querySelector("#urlinput")
const urlButton = document.querySelector("#urlsubmit")
const urlContent = document.getElementById("urllink")
const shortUrl = 'https://api.rebrandly.com/v1/links'
const apiKey = 'c160700a45a64093bef52ef7cdeb4e59'

inputUrlField.addEventListener("keyup", event => {
    if(event.keyCode === 13) {
        urlShorten()
    } else {
        event.preventDefault()
        urlButton.addEventListener("click", urlShorten)
    }
})
const urlShorten = () => {
    const input = inputUrlField.value 
    const data = JSON.stringify({destination: input})
    console.log(data)
    fetch(shortUrl, {method: 'POST', headers: {'Content-type': 'application/json','apikey': apiKey}, body: data})
    .then(response => {
        console.log(response)
        if(response.ok) {
            return response.json()
        }else {
         console.log("request failed")
        }
    }, networlError => {
        console.log("networkError")
    })
    .then(info => {
       // console.log(info)
        urlContent.innerHTML = `<p>Your shortened URL is </p> ${info.shortUrl}`
    })
}

