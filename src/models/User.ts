import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";


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
    creadted_at: Date;


}

export { User }