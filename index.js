const express = require('express')
const app = express()
app.use(express.json())
app.set('views','./views')
app.set('view engine','ejs')    
const port = 3000 
//_____________________________________________
app.get('/', (pedido, respuesta) => {
    respuesta.render('index')
})
//--------------------------------------------
app.listen(port)
