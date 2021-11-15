const inputField = document.querySelector("input")
const button = document.querySelector("button")
const displayContent = document.getElementById("link")
const url = 'https://api.rebrandly.com/v1/links'
const apiKey = 'c160700a45a64093bef52ef7cdeb4e59'

const urlShorten = () => {
    const input = inputField.value 
    const data = JSON.stringify({destination: input})
    console.log(data)
    fetch(url, {method: 'POST', headers: {'Content-type': 'application/json','apikey': apiKey}, body: data})
    .then(response => {
        //console.log(response)
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
        displayContent.innerHTML = `<p>Your shortened URL is </p> ${info.shortUrl}`
    })
}

button.addEventListener("click", urlShorten)