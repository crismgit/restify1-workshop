const restify = require('restify')
const port = 3000

const server = restify.createServer();

const names = [
    {
      name: 'Caio',
      meaning: 'Feliz, contente'
    },
    {
      name: 'Ana',
      meaning: 'Graciosa, cheia de graça'
    },
    {
      name: 'Luna',
      meaning: 'Lua, a iluminada, a feminina'
    }
]

server.get('/nome', (req,res) => {
    res.send(names);
})

server.get('/', (req, res) => {
    res.send({msg: 'Names and meanings'})
  })

server.post('/nome',(req,res) => {
    const name =req.body;
    names.push(name);
    res.send(names);
})

server.del("/nome/:id",(req,res) => {
    const id = req.params.id;
    names.splice(id,1);
    res.send(names);

} )

server.put("/nome/:id",(req,res) => {
    const id = req.params.id;
    const name = req.body;
    names[id] = name;
    res.send(names);

} )

server.listen(port, () => {
    console.log(`Servidor em http://localhost:${port}`)
    console.log('Para derrubar o servidor: ctrl + c')
  })
