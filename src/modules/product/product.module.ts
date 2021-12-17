
//Importar
import { ProductController } from "./product.controller";
import { ProductService } from "./product.service";

import { Module } from "@nestjs/common" //Importar que dá suporte a base do decolator module abaixo
//import { MySQLProvider } from "src/database/mysql.provider";

//O decolator Module, tem como objetivo dar super poder das Classes abaixos
@Module({
    controllers: [ ProductController ], //Para link no ProductController
    //providers: [ MySQLProvider, ProductService ] //=> Para link no MySQLProvider e ProductService
    providers: [ ProductService ]
})

//Criação de uma Classe
export class ProductModule{
}
