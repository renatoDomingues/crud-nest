
//Import
import { ProductService } from "./product.service";
import { Product } from "../product.entity";

//Importar que dá suporte a base do decolator controller e o Get abaixo
import { Controller, Get } from "@nestjs/common";

//O decolator Controller, tem como objetivo dar super poder das Classes abaixos
@Controller('products') //Aproveitou e definou a ROTA

//Criação de uma Classe
export class ProductController{
    //Um metodo "constructor" que é chamado que está iniciando
    constructor(private readonly productService: ProductService){}

    @Get() //Para chamar o findAll()
    //Um metodo com função
    async findAll(): Promise<Product[]> {
        //return [{ id: 1 }]
        return this.productService.findAll()
    }
}
