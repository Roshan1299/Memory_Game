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

cardArray.sort(() => 0.5 - Math.random())
console.log(cardArray)