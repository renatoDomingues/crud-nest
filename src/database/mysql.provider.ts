
//Importar
import { Injectable, Logger } from "@nestjs/common" //Importar que dá suporte a base do decolator injectable abaixo
import { createPool, Pool, Connection } from "mysql2/promise"
//import { Connection } from "mysql2/typings/mysql"
import { async } from "rxjs"

//O decolator Injectable, tem como objetivo dar super poder das Classes abaixos
@Injectable()

//Classe
export class MySQLProvider{
    //Criar um parametro
    private readonly logger : Logger
    private readonly pool : Pool
    
    constructor(){
        this.logger = new Logger('MySQLProvider')

        this.pool = createPool({
            host: 'localhost',
            user: 'root',
            database: 'cat-products',
            waitForConnections: true,
            connectionLimit: 20,
            queueLimit: 0
        })

        this.logger.log('Initialized!')
    }
    
    /*
    async getValue(): Promise<string>{

        const conn = await this.pool.getConnection()
        const [ results ] = await conn.query('select * from products')
        console.log(results)

        return 'Value from MySQL Provider!'
    }
    */
    async getConnection(): Promise<Connection> {

        return await this.pool.getConnection()
    }
}
