const express = require('express')

const app = express();
app.use(express.json());

let personas = [
    {"id": 1, "nombre": 'lia'},
    {"id": 4, "nombre": 'aide'},
    {"id": 2, "nombre": 'juan'}
]
//Port
const port =  3010;

app.get('/', (req, res) =>{
    res.send(personas)
} );

app.post('/agregar', (req, res) =>{
    const id = req.body.id;
    const nombre = req.body.nombre;
    console.log(id, nombre)
    personas.push({id: parseInt(id), nombre: nombre})
    res.status(200).send({id, nombre});
} );

app.get('/buscarUser/:id', (req, res) => {
    const id = req.params.id;
    let persona = personas.find((personas) => id == personas.id);
    res.send(persona);
});

app.patch('/actualizarPersona', (req, res) => {
    const id = req.body.id;
    const nombre = req.body.nombre;
    let persona = personas.find((personas) => id == personas.id);
    persona.nombre = nombre;

});


app.listen(port, () => {
    console.log('server on port', port);
});