
//Uma camada de negocios que vai lidar com banco e etc

//Importar
import { Inject, Injectable } from "@nestjs/common"; //Importar que dá suporte a base do decolator injectable abaixo
import { MySQLProvider } from "src/database/mysql.provider";

//O decolator Injectable, tem como objetivo dar super poder das Classes abaixos
@Injectable()

//Criação de uma Classe
export class ProductService{
    //Acessar por meio desta dependencia
    constructor(@Inject('DATABASE') private readonly mysql : MySQLProvider) {}

    //Um metodo com função
    async findAll(): Promise<any>{

        console.log(this.mysql.getValue())

        return [
            { id: 1 },
            { id: 2 }
        ]
    }
}
