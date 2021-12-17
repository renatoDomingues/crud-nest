
//Uma camada de negocios que vai lidar com banco e etc

//Importar
import { Inject, Injectable } from "@nestjs/common"; //Importar que dá suporte a base do decolator injectable abaixo
import { MySQLProvider } from "src/database/mysql.provider";
import { Product } from "../product.entity";

//O decolator Injectable, tem como objetivo dar super poder das Classes abaixos
@Injectable()

//Criação de uma Classe
export class ProductService{
    //Acessar por meio desta dependencia
    constructor(@Inject('DATABASE') private readonly mysql : MySQLProvider) {}

    //Um metodo com função
    async findAll(): Promise<Product[]>{

        const conn = await this.mysql.getConnection()
        const [ results ] = await conn.query('select * from products')
        const resultsPlain = JSON.parse(JSON.stringify(results))

        const products = resultsPlain.map(product => {

            const productEntity = new Product()
            productEntity.product = product.product
            productEntity.product = product.price

            return productEntity
        })
        return products

        /*
        return [
            { id: 1 },
            { id: 2 }
        ]
        */
    }
}
