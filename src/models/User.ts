import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid'; // opções das formas como o id pode ser gerado: v1, v3, v4, v5

/*
    // name attribute equals column name
    @Column()
    name: string;

    // name attribute different column name
    @Column("name")
    nameUser: string;
*/

@Entity('users')
class User{

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}

export { User }