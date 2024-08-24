import express, { json } from "express"
import { PrismaClient } from "@prisma/client"

const app = express()

app.use(express.json());

const prisma = new PrismaClient();

//GET
app.get("/customers", async (req, res) => {    
    try {
        const customers = await prisma.customers.findMany();
        return res.send(customers);
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: error});
    }
});

//GET :id
app.get("/customers/:id", async (req, res) => {
    try {
        const id = req.params.id
        const customer = await prisma.customers.findUnique({
            where: {id: id}
        });
    
        if (customer == null){
            return res.status(404).json()
        }
    
        return res.send(customer);
    } catch (error) {
    console.log(error);
    res.status(500).json({error: error});
    }
});

//POST
app.post("/customers", async (req, res) => {
    try {
        const { name, email, document } = req.body;
        const customer = await prisma.customers.create({
            data:{
                name,
                email,
                document
            }
        });
        return res.status(201).json(customer);        
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: error});
    }
});

//DELETE
app.delete("/customers/:id", async (req, res) => {
    try {        
        const id = req.params.id;    
        const customer = await prisma.customers.findUnique({
            where: {id: id}
        });
        if (customer == null){
            return res.status(404).json()
        }
        await prisma.customers.delete({
            where: {id: id}
        });
        return res.status(204).json();
    } catch (error) {
        return res.status(500).json({error: error})
    }
});

//PUT
app.put("/customers/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const { name, email, document } = req.body;
    
        const customer = await prisma.customers.findUnique({
            where: {id: id}
        });
    
        if (customer == null){
            return res.status(404).json({message:"cliente não existe"})
        }
    
        const customerAtualizado = await prisma.customers.update({
            where: {id: id},
            data: {
                name,
                email,
                document
            }
        });
    
        return res.json(customerAtualizado);
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: error})
    }
});

app.listen(3000, () => console.log("Server is runing!"));