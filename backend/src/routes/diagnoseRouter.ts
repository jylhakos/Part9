import express from 'express';

import diagnoseService from '../services/diagnoseService';

const diagnoseRouter = express.Router();

// 9.10
diagnoseRouter.get('/diagnoses', (_req, res) => {

  console.log('diagnoses')

  res.json(diagnoseService.getDiagnoses());
});

diagnoseRouter.post('/', (_req, res) => {
  res.send('Saving Diagnose');
});

export default diagnoseRouter;