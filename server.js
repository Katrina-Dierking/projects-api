const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())
// const projects = require('./db.json')


//data 
let projects = {
         "the homeschool mom hive" : 
            {
              "id": 1,
              "title": "The Homeschool Mom Hive",
              "img": "",
              "alt": "",
              "subtitle": "Where community comes to life",
              "description": "A community site exclusively for homeschooling moms.",
              "github": "https://github.com/Katrina-Dierking/hs-mom-hive",
              "live": "", 
              "category": "social media", 
              "stack":""
            },
         "mom off the earth": {
           "id": 2,
           "title": "Mom Off the Earth",
           "subtitle": "",
           "description": "",
           "github": "",
           "live": "", 
            "category": "ecommerce",
            "stack": ""
         },
         "renaissance wife": {
           "id": 3,
           "title": "Renaissance Wife",
           "subtitle": "",
           "description": "It's never too late for a personal renaissance",
           "github": "https://github.com/Katrina-Dierking/RenaissanceWife",
           "live": "", 
            "category": "static page",
            "stack": ""
         },
         "queen bean design cafe funnel":{
            "id": 4,
            "title": "Queen Bean Design Cafe Funnel",
            "subtitle":"",
            "img":"https://blog.queenbeandesigncafe.com/wp-content/uploads/2023/05/QueenBeanFunnel.png",
            "alt": "design for queen bean funnel page", 
            "description": "Creating the life you want.",
            "github": "https://github.com/Katrina-Dierking/Queen-bean-funnel",
            "live": "", 
             "category": "funnel",
            "stack": ""
         },
         "model view controller":{
           "id": 5,
           "title": "Model View Controller",
           "subtitle": "",
           "description": "MVC Presentation.",
           "github": "https://github.com/Katrina-Dierking/mvc-presentation",
           "live": "", 
            "category": "presentation",
            "stack": ""
         }
  }


//set up server to hear request and generate a response




app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api', (req, res) => {
    res.json(projects)
})

app.get("/api/:name", (request, response) => {
  const proName = request.params.name.toLowerCase();
  if (projects[proName]) {
    response.json(projects[proName]);
  } else {
    response.json(projects["mom off the earth"]);
  }
});


app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on ${PORT}! Don't let it escape!`)
})