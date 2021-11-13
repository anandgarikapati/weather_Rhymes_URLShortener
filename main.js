const inputField = document.getElementById('text')
const button = document.getElementById('submit')
const content = document.getElementById('displaycontent')



button.addEventListener('click', () => {
    //console.log(inputField.value)
    const url = 'https://api.datamuse.com/words?sl='
    const word = inputField.value
    const endPoint = url + word
    //console.log(endPoint)
    fetch(endPoint).then(response => {
        if(response.ok) {
           // console.log(response.json())
            return response.json()
        }
        throw new Error('wrong rquest')
    }, networkError => {
        console.log('newtork error')
    })
    .then (response => {
       // console.log(response)
       if(inputField.value === '') {
          content.innerHTML = 'Please try again'
       } else {
           
        const list = []
        for(i = 0; i <= 9; i++) {
            list.push(`<li>${response[i].word}</li>`)
            //console.log(list)
            wordList = list.join("")

            content.innerHTML = `<ol>${wordList}</ol>` 
            
        }
       }


       
        
    })
})
