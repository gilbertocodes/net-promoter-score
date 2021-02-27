import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid'; // opções das formas como o id pode ser gerado: v1, v3, v4, v5
import { Survey } from "./Survey";
import { User } from "./User";

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

    @ManyToOne(()=> User)
    @JoinColumn({name: "user_id"})
    user: User;

    @Column()
    survey_id: string;

    @ManyToOne(()=> Survey)
    @JoinColumn({name: "survey_id"})
    survey: Survey;

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