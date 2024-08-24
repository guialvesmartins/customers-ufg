import { Router } from "express";
import { CustomerController } from "./controller/CustomerController";

const routes = Router();
const customerController = new CustomerController()
//GET
routes.get("/customers", customerController.findAll );

//GET :id
routes.get("/customers/:id", customerController.verifyIfExist , customerController.findById );

//POST
routes.post("/customers", customerController.create );

//DELETE
routes.delete("/customers/:id", customerController.verifyIfExist ,customerController.delete );

//PUT
routes.put("/customers/:id", customerController.verifyIfExist ,customerController.update );

export { routes }