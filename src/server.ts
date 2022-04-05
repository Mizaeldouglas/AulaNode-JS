import { multiplicar,somar } from './matematica'

import painelRouter from './routes/painel'

import express,{ Request,Response } from 'express'
import router from './routes'
import path from 'path'
import mustache from 'mustache-express'

const server = express()

server.set('view engine', 'mustache')
server.set('views',path.join(__dirname,'views'))
server.engine('mustache', mustache())


server.use('/static', express.static(path.join(__dirname,'../public')))

server.use(express.urlencoded({extended: true}))



server.use(router)
server.use('/painel', painelRouter)

server.use((req:Request,res:Response) => {
  res.status(404).send(`Pagina não encontrada`)
})


server.listen(3000)



















// server.get('/',(req:Request, res:Response) => {
//   res.send(`Multiplicar: ${multiplicar(10,5)} Somar: ${somar(15,22)}`)
// })

// server.get('/noticia/:slug',(req:Request, res:Response) => {
// 	let slug = req.params.slug
// 	res.send(`Noticia: ${slug}`)
//   })

// server.get('/voo/:origem-:destino',(req:Request, res:Response) => {
// 	let { origem, destino } = req.params

// 	res.send(`Procurando Voos de ${origem.toLocaleUpperCase()} até ${destino.toLocaleUpperCase()}`)
// })