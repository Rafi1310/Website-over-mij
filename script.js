getName()

async function getName() {
    const baseURL = 'https://fdnd.directus.app'
    const endpoint = '/items/person/316'


const url = baseURL + endpoint

let response = await fetch(url)

let personInfo = await response.json();
console.log(personInfo.data.name)

const header = document.querySelector('header')
const overMij = document.querySelector('.over-mij')

header.insertAdjacentHTML("beforeend", `<h1>${personInfo.data.nickname}</h1>`);
overMij.insertAdjacentHTML("beforeend", 
    `<p>${personInfo.data.nickname}</p>
    <p>${personInfo.data.birthdate}</p>
    <p>🏠 ${personInfo.data.residency}</p>
    <p>${personInfo.data.bio}</p>`);
}


getRandomName()

async function getRandomName() {
    const baseURL = 'https://fdnd.directus.app/items'
    const endpoint = '/person?filter[squads][squad_id][tribe][name]=CMD%20Minor%20Web%20Dev&filter[squads][squad_id][cohort]=2526&sort=name&filter[fav_game][avatar][_nempty]'
    //Endpoint met behulp van Julius

const url = baseURL + endpoint

let response = await fetch(url)

let personInfo = await response.json()
const personenLijst = personInfo.data;

const randomIndex = Math.floor(Math.random() * personenLijst.length);
const willekeurigPersoon = personenLijst[randomIndex];
console.log("gekozen persoon", willekeurigPersoon.name);

const overMij = document.querySelector('.over-mij')
overMij.insertAdjacentHTML("beforeend", 
    `<h2>Over iemand anders</h2>
    <p>${willekeurigPersoon.name}</p>
    <p>Verjaardag: ${willekeurigPersoon.birthdate}</p>
    <p>🏠 ${willekeurigPersoon.residency}</p>
    <p>Bio: ${willekeurigPersoon.bio}</p>`)

}



const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + .button-1");
const closeButton = document.querySelector("dialog button")
const dialog2 = document.querySelector(".dialog2")
const showButton2 = document.querySelector(".dialog2 + button");
const closeButton2 = document.querySelector(".dialog2 button")
const dialog3 = document.querySelector(".dialog3");
const showButton3 = document.querySelector(".dialog3 + button");
const closeButton3 = document.querySelector(".dialog3 button")

showButton.addEventListener("click", () => {
    dialog.showModal();
})

closeButton.addEventListener("click", () => {
    dialog.close()
})

showButton2.addEventListener("click", () => {
    dialog2.showModal();
})

closeButton2.addEventListener("click", () => {
    dialog2.close()
})

showButton3.addEventListener("click", () => {
    dialog3.showModal();
})

closeButton3.addEventListener("click", () => {
    dialog3.close();
})


const output = document.body;

document.addEventListener('keydown', logToets);

function logToets(event) {
    const deToets = event.key
    if(deToets === 'w') {
        document.body.classList.toggle('wingdingsModus');
        console.log("wingdings geactiveerd")
    }
}
//met behulp van https://codepen.io/shooft/pen/emzvPRa
