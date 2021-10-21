const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

app.get('/', (req, res)=>{
    res.send('Wow I am Excited to learn node js with express js')
})

const users = [
    {
        id: 0,
        name: 'Vanessa Carvajal',
        title: 'Gynecologist & Founder',
        img: 'https://i.ibb.co/9b6K9K9/doctor3.jpg'
    },
    {
        id: 1,
        name: 'Alexanser Perez',
        title: 'Surgeon',
        img: 'https://i.ibb.co/VBL1hG2/doctor2.jpg'
    },
    
    {
        id: 2,
        name: 'Delfina Villareal',
        title: 'Fertilization',
        img: 'https://i.ibb.co/LQsr0dc/doctor1.jpg'
    },
    {
        id: 3,
        name: 'Javier Arias',
        title: 'Laboratory',
        img: 'https://i.ibb.co/647Nwhy/Cute-girl-and-her-mother-looking-at-the-doctor-in-hospital.jpg'
    },
    {
        id: 4,
        name: 'Janna Gimenez',
        title: 'Gynecologist',
        img: 'https://i.ibb.co/X3RLFNF/doctor5.jpg'
    },
    {
        id: 5,
        name: 'Jorge Gavidia',
        title: 'Insemination',
        img: 'https://i.ibb.co/1LC9Lb5/doctor6.jpg'
    },
]

app.get('/users', (req, res)=>{
    const search =(req.query.search)
   if(search){
    const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search))
    res.send(searchResult)
   }
    else{
        res.send(users)
    }
})

//post method
app.post('/users' , (req , res) =>{
    const newUser = req.body
    newUser.id = users.length
    users.push(newUser)
    console.log('post hitted', req.body)
    res.send(JSON.stringify(newUser))
    // res.json(newUser)
})

// dynamic api
app.get('/users/:id', (req , res)=>{
    const id = req.params.id
    const doctor = users[id]
    res.send(doctor)
})

app.get('/fruits', (req, res)=>{
    res.send('fruirst khawa health er jonno valo')
})

app.get('/fruits/mangos', (req, res)=>{
    res.send('I like mangos')
})

app.listen(port , ()=>{
    console.log('liseting to ' , port)
})
