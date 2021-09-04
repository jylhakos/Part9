import express, {Request, Response } from 'express';

import patientService from '../services/patientService';

const patientRouter = express.Router();

// 9.11
patientRouter.get('/patients', (_req : Request, res: Response) => {

  console.log('patients')

  res.json(patientService.getPatients());
});

// 9.12
patientRouter.post('/patients', (req: Request, res: Response) => {

  const { name, dateOfBirth, ssn, gender, occupation } = req.body;

  const newPatientEntry = patientService.addPatient({ 
    name,
    dateOfBirth,
    ssn,
    gender,
    occupation 
  });

  console.log('newPatientEntry', newPatientEntry)

  res.json(newPatientEntry);
});

export default patientRouter;