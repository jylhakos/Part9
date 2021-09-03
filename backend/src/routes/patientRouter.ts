import express, {Request, Response } from 'express';

import patientService from '../services/patientService';

const patientRouter = express.Router();

// 9.11
patientRouter.get('/patients', (_req : Request, res: Response) => {

  console.log('patients')

  res.json(patientService.getPatients());
});

patientRouter.post('/', (_req, res) => {
  res.send('Saving Patient');
});

export default patientRouter;