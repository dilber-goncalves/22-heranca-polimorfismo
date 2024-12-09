import express  from "express";
import { BadRequestError } from "./error";

const app = express()

type Usuario = {
    name: string,
    email: string
}

const usuarios: Usuario[] = []

app.use(express.json())

app.post('/usuario', (req: any, res: any) => {
    const { name, email } = req.body

    try {
        if (!name || !email) {
            throw new BadRequestError('Nome e email obrigatorio')
        }

        usuarios.push({
            name,
            email
        })

        return res.status(201).json(usuarios)
    
    } catch (error) {
        if(error instanceof BadRequestError){
            return res.status(error.statusCode).json({
                mensagem: error.message
            })
        }
        
        return res.status(500).json({
            mensagem: "Erro interno do servidor"
        })    
    }
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})