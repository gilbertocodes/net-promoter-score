import { Router } from 'express';
import { SurveysController } from './controllers/SurveysController';
import { UserController } from './controllers/UserController'; // ./controllers/UserController.ts


const router = Router();

const userController = new UserController();
const surveyController = new SurveysController();

router.post("/users", userController.create);

router.get("/surveys", surveyController.show);
router.post("/surveys", surveyController.create);

export { router };

