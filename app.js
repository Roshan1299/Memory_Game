const cardArray = [
    {
        name : "fries",
        img: "https://t3.ftcdn.net/jpg/01/64/11/84/360_F_164118438_8cn5iGjdJfEynhbRujyx3a1ffcvJ2BZ0.jpg"
    },
    {
        name: "cheeseburger",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqtE7SVWq3Uv0As0Z4S4IG24G745FzXTgsl4sm4_dXKA&s"
    },
    {
        name : "hotdog",
        img : "https://t3.ftcdn.net/jpg/02/65/57/58/360_F_265575805_ivE7dEFyoVAaUdVDUi2phiqp6WGqzfAX.jpg"
    },
    {
        name : "ice-cream",
        img : "https://img.freepik.com/premium-vector/chocolate-ice-cream-cone-animated-illustration_585140-91.jpg"
    },
    {
        name : "milkshake",
        img : "https://t3.ftcdn.net/jpg/02/70/59/88/360_F_270598849_j5AhEVJeZmPXFM8QeGWNm35s6sisiUhH.jpg"
    },
    {
        name : 'pizza',
        img : 'https://t3.ftcdn.net/jpg/01/86/84/32/360_F_186843269_i8geR8vItswW09DfWQFHmQcgAbsgS3a0.jpg'
    },
    {
        name : "fries",
        img: "https://t3.ftcdn.net/jpg/01/64/11/84/360_F_164118438_8cn5iGjdJfEynhbRujyx3a1ffcvJ2BZ0.jpg"
    },
    {
        name: "cheeseburger",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqtE7SVWq3Uv0As0Z4S4IG24G745FzXTgsl4sm4_dXKA&s"
    },
    {
        name : "hotdog",
        img : "https://t3.ftcdn.net/jpg/02/65/57/58/360_F_265575805_ivE7dEFyoVAaUdVDUi2phiqp6WGqzfAX.jpg"
    },
    {
        name : "ice-cream",
        img : "https://img.freepik.com/premium-vector/chocolate-ice-cream-cone-animated-illustration_585140-91.jpg"
    },
    {
        name : "milkshake",
        img : "https://t3.ftcdn.net/jpg/02/70/59/88/360_F_270598849_j5AhEVJeZmPXFM8QeGWNm35s6sisiUhH.jpg"
    },
    {
        name : 'pizza',
        img : 'https://t3.ftcdn.net/jpg/01/86/84/32/360_F_186843269_i8geR8vItswW09DfWQFHmQcgAbsgS3a0.jpg'
    }
]

cardArray.sort(() => 0.5 - Math.random())           //Sorts by random 

const gridDisplay = document.querySelector('#grid') //Searches for grid in index.html
const cardChosen = []

function createBoard () {
    for (let i =0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'https://github.com/kubowania/memory-game/blob/master/images/blank.png?raw=true')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)  //Only will be called when clicked
        gridDisplay.appendChild(card)
    }
}

createBoard()

function flipCard() {
    console.log(cardArray)
    const cardId = this.getAttribute('data-id')
    cardChosen.push(cardArray[cardId].name)
    console.log('clicked', cardId)
    this.setAttribute('src', cardArray[cardId].img)
}

//https://www.pngitem.com/pimgs/m/71-718538_background-image-riddler-question-mark-png-transparent-png.png
//https://github.com/kubowania/memory-game/blob/master/images/blank.png?raw=true

