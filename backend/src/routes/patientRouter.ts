import express, {Request, Response } from 'express';

const patientRouter = express.Router();

import patientService from '../services/patientService';

// $ curl -X "GET" http://localhost:3001/api/patients/:id

// 9.16
patientRouter.get('/patients/:id', async (req : Request, res: Response) => {

  const id = req.params.id

  console.log('id', id)

  const patient = await patientService.getPatient(id)

  console.log('patient', patient)

  res.json(patient);

});

// 9.11
patientRouter.get('/patients', (_req : Request, res: Response) => {

  console.log('patients')

  res.json(patientService.getPatients());
});

// 9.12
patientRouter.post('/patients', (req: Request, res: Response) => {

  const { name, dateOfBirth, ssn, gender, occupation, entries } = req.body;

  const newPatientEntry = patientService.addPatient({ 
    name,
    dateOfBirth,
    ssn,
    gender,
    occupation,
    entries
  });

  console.log('newPatientEntry', newPatientEntry)

  res.json(newPatientEntry);
});

export default patientRouter;