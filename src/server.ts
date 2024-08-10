import express, { json } from "express"
import { PrismaClient } from "@prisma/client"

const app = express()

app.use(express.json());

const prisma = new PrismaClient();

//GET
app.get("/customers", async (req, res) => {    
    const customers = await prisma.customers.findMany();
    return res.send(customers);
});

//GET :id
app.get("/customers/:id", async (req, res) => {
    const id = req.params.id
    const customer = await prisma.customers.findUnique({
        where: {id: id}
    });

    if (customer == null){
        return res.status(404).json()
    }

    return res.send(customer);
});

//POST
app.post("/customers", async (req, res) => {
    const { name, email, document } = req.body;
    const customer = await prisma.customers.create({
        data:{
            name,
            email,
            document
        }
    });
    return res.status(201).json(customer);
});

//DELETE
app.delete("/customers/:id", async (req, res) => {
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
});

//PUT
app.put("/customers/:id", async (req, res) => {
    const id = req.params.id;
    const { name, email, document } = req.body;
    const customer = await prisma.customers.update({
        where: {id: id},
        data: {
            name,
            email,
            document
        }
    });
    return res.json(customer);
});

app.listen(3000, () => console.log("Server is runing!"));