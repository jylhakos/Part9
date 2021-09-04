import { Gender, NewPatientEntry } from './types'

const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isGender = (param: any): param is Gender => {
  return Object.values(Gender).includes(param);
};

// 9.13
export const parseGender = (gender: unknown): Gender => {

  if (!gender || !isGender(gender)) {

    console.log('Error', gender);

    throw new Error('Incorrect or missing gender: ' + gender);

  }

  return gender;

};

export const parseName = (name: unknown): string => {

  if (!name || !isString(name)) {

    console.log('Error', name);

    throw new Error('Incorrect or missing name: ' + name);

  }

  return name;

};


export const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

export const parseDateOfBirth = (dateOfBirth: unknown): string => {

  if (!dateOfBirth  || !isString(dateOfBirth) || !isDate(dateOfBirth)) {

    console.log('Error', dateOfBirth);

    throw new Error('Incorrect or missing date of birth: ' + dateOfBirth);

  }

  return dateOfBirth;

};

export const parseSSN = (ssn: unknown): string => {

  if (!ssn || !isString(ssn)) {

    console.log('Error', ssn);

    throw new Error('Incorrect or missing ssn: ' + ssn);

  }

  return ssn;

};

export const parseOccupation = (occupation: unknown): string => {

  if (!occupation  || !isString(occupation)) {

    console.log('Error', occupation);

    throw new Error('Incorrect or missing occupation: ' + occupation);

  }

  return occupation;

};

export type Fields = { name: unknown, dateOfBirth: unknown, ssn: unknown, gender: unknown , occupation: unknown };

export const toNewPatientEntry= ({ name, dateOfBirth, ssn, gender, occupation } : Fields): NewPatientEntry => {

  const newEntry: NewPatientEntry = {
    name: parseName(name),
    dateOfBirth: parseDateOfBirth(dateOfBirth),
    ssn: parseSSN(ssn),
    gender: parseGender(gender),
    occupation: parseOccupation(occupation)
  };

  console.log('newEntry', newEntry)

  return newEntry;
};