import { Request, Response } from "express";
import { getCustomRepository, Not, IsNull } from "typeorm";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";


class NpsController{

    /**
     * 
     * 1 2 3 4 5 6 7 8 9 10
     * 
     * Classifications:
     * Detractors => 0 - 6 
     * Passives => 7 - 8
     * Promoters => 9 - 10
     * 
     * 
     * (number of Promoters - number of Detractors) / (number of people who responded) * 100
     * return %
     */

    async execute(req: Request, res: Response){
        const { survey_id } = req.params;

        const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

        const surveysUsers = await surveysUsersRepository.find({
            survey_id,
            value: Not(IsNull())
        });

        const detractor = surveysUsers.filter((survey) => survey.value >= 0 && survey.value <= 6).length;
        const passive = surveysUsers.filter((survey) => survey.value >= 7 && survey.value <= 8).length;
        const promoters = surveysUsers.filter((survey) => survey.value >= 9 && survey.value <= 10).length;        
        const totalAnswers = surveysUsers.length;

        const calculate = (promoters - detractor) / (totalAnswers);

        return res.json(
            {
                detractor,
                promoters,
                passive,
                totalAnswers,
                nps: calculate
            }
        );

    }

}


export { NpsController }