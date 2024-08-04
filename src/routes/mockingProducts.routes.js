import { Router } from "express"; //Import router de express
import productsControllers from "../controllers/products.controllers.js";//Import de los controllers de product

const router = Router(); //Inicializador del router de express

router.get("/", productsControllers.createProductsMocks ); //Ruta de los products creados con faker

export default router;