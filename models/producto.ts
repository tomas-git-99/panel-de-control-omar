import {DataTypes, Model} from 'sequelize';

import db from '../DB/conectarDB'

export interface TodoAtributos {
    nombre: string;
    cantidad: number;
    local:string;
    tela:string;
    precio:number;
    talles: number; // que talles ahi

    talles_unidad: number;
}


export class Usuario extends Model <TodoAtributos>{

    public nombre!: string;
    public cantidad!: number;
    public local!:string;
    public tela!:string;
    public precio!:number;
    public talles!: number; // que talles ahi 
    public talles_unidad!: number;

}


Usuario.init(
    {
        nombre:{
            type:DataTypes.STRING
        },
        correo:{
            type:DataTypes.STRING,
        },
        password:{
            type:DataTypes.STRING
        },
        dni:{
            type:DataTypes.NUMBER

        },
        rol:{
            type:DataTypes.STRING
        }
        
    },{
        sequelize: db,
        tableName: "usuarios"
    }
)
