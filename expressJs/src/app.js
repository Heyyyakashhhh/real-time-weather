const exp = require('constants');
const express = require('express');
const app = new express();
const path = require('path');
const hbbs = require('hbs')

const PORT = process.env.PORT ||  9000;



const staticPath = path.join(__dirname, "../public")
const partialPath = path.join(__dirname, "../templates/views")
const registerPath = path.join(__dirname, "../templates/partials")

app.set('view engine' , 'hbs')
app.set('views', partialPath);
hbbs.registerPartials(registerPath);;


app.use(express.static(staticPath))
app.get('/', (req, res)=>{
    res.render("index")
})
app.get('/aboutt', (req, res)=>{
    res.render("aboutt")
})
app.get('/weather', (req, res)=>{
  res.render('weather.hbs')
})
app.get('*', (req, res)=>{
    res.render("error", {
        errorMsg: 'oops page not found'
    })
})

app.listen(PORT , ()=>{
    console.log(`server done: ${PORT}`);
})