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

@Entity("surveys_users")
class SurveyUser{

    @PrimaryColumn()
    readonly id: string;

    @Column()
    user_id: string;

    @Column()
    survey_id: string;

    @Column()
    value: number;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}
export { SurveyUser }