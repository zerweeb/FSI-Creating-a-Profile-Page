
let content = document.querySelector('.js-generated.content')

let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)

let dogContent = document.createElement('div')
dogContent.setAttribute('class', 'dog-content')
content.append(dogContent)



let dogDetails = document.createElement('div')
dogDetails.setAttribute('class', 'dog-details')
content.append(dogDetails)


let dogImage = document.createElement('img')
dogImage.setAttribute('class','dog-image' )
dogImage.setAttribute('src', './assets/rizzo.jpg')
content.append(dogImage)
