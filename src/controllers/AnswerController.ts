import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";



class AnswerController{

    // http://localhost:9999/answers/1?u=02ca335e-5031-4828-a449-f01c20c7bbe6
    /**
     * 
     * Route Params => route compose by parameters
     * routes.get("/answers/:value")
     * 
     * Query Params => Search, Pagination, not required
     * ?
     * key=value
     * 
     */

    async execute(req: Request, res:Response){
        const { value } = req.params;
        const { u } = req.query;

        const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

        const surveyUser = await surveysUsersRepository.findOne({
            id: String(u)
        });

        if(!surveyUser){
            return res.status(400).json({
                error: "Survey User does not exists!"
            });
        }

        surveyUser.value = Number(value);

        await surveysUsersRepository.save(surveyUser);

        return res.json(surveyUser);
    }

}

export { AnswerController }