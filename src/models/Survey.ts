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

@Entity("surveys")
class Survey{

    @PrimaryColumn()
    readonly id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}
export { Survey }