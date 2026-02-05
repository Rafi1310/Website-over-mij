getName()

async function getName() {
    const baseURL = 'https://fdnd.directus.app'
    const endpoint = '/items/person/316'


const url = baseURL + endpoint

let response = await fetch(url)

let personInfo = await response.json();
console.log(personInfo.data.name)

const header = document.querySelector('header')

header.innerHTML =  `<h1>${personInfo.data.name}</h1>
<h2>${personInfo.data.nickname}</h2>
<h2>${personInfo.data.birthdate}</h2>`

}