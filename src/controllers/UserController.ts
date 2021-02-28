import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from "../repositories/UsersRepository";
import * as yup from 'yup';
 
class UserController{

    async create(req: Request, res: Response){
        const { name, email } = req.body;

        const schema = yup.object().shape({
            name: yup.string().required("Name is required!!!"),
            email: yup.string().email().required("Email is required!!!")
        })
        
        /* if(!(await schema.isValid(req.body))){
           return res.status(400).json({
               error: "Validation Failed!"
           });
        } */
        try{
           await schema.validate(req.body);
        } catch(err){
            return res.status(400).json({
                error: err
            });
        }
        
        

        const usersRepository = getCustomRepository(UsersRepository);

        // SELECT * FROM users WHERE email = "email"
        const usersAlreadyExists = await usersRepository.findOne(
            {
                email
            }
        );
        
        if(usersAlreadyExists){
            return res.status(400).json(
                {
                    error: "User already exists!"
                }
            )
        }
        const user = usersRepository.create({
            name,
            email,
        })

        await usersRepository.save(user);

        return  res.status(201).json(user);
    }

}

export { UserController };
