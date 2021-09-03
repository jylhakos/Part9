import patients from '../../data/patients';

//import { Patient, NonSSN } from '../types'

import { NonSSN } from '../types'

// 9.11
//const getPatients = (): Array<Patient> => {

const getPatients = (): Array<NonSSN> => {

  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
  }));
}

const addPatient = () => {

  console.log('Patient')

  return null;
}

export default {
  getPatients,
  addPatient
};