import { v1 as uuid } from 'uuid'

import patients from '../../data/patients';

import { PatientEntry, PatientEntryNonSSN, NewPatientEntry } from '../types'

// 9.11
//const getPatients = (): Array<Patient> => {

const getPatients = (): Array<PatientEntryNonSSN> => {

  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
  }));
}

// 9.12
const addPatient = (entry: NewPatientEntry): PatientEntry => {

  const id: string = uuid();

  console.log(id,
    entry.name,
    entry.dateOfBirth,
    entry.ssn,
    entry.gender,
    entry.occupation);

  const newPatientEntry = {
    id: id,
    ...entry
  };

  patients.push(newPatientEntry);

  console.log(newPatientEntry);

  return newPatientEntry;
}

export default {
  getPatients,
  addPatient
};