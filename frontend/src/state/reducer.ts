import { State } from "./state";
import { Patient } from "../types";

export type Action =
  | {
      type: "SET_PATIENT_LIST";
      payload: Patient[];
    }
  | {
      type: "ADD_PATIENT";
      payload: Patient;
    }
  | {
      type: "GET_PATIENT";
      payload: Patient;
    };

export const setPatientList = (payload: Patient[]): Action => {

  console.log('setPatientList', payload)

  return {
    type: 'SET_PATIENT_LIST',
    payload: payload
  }
}

export const setNewPatient = (payload: Patient): Action => {

  console.log('setNewPatient', payload)

  return {
    type: 'ADD_PATIENT',
    payload: payload
  }
}

export const setPatientPage = (payload: Patient): Action => {

  console.log('setPatientPage', payload)

  return {
    type: 'GET_PATIENT',
    payload: payload
  }
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_PATIENT_LIST":
      console.log("SET_PATIENT_LIST", action.payload, state.patients)
      return {
        ...state,
        patients: {
          ...action.payload.reduce(
            (memo, patient) => ({ ...memo, [patient.id]: patient }),
            {}
          ),
          ...state.patients
        }
      };
    case "ADD_PATIENT":
      console.log("ADD_PATIENT", action.payload, state.patients)
      return {
        ...state,
        patients: {
          ...state.patients,
          [action.payload.id]: action.payload
        }
      };
    case "GET_PATIENT":
      console.log("GET_PATIENT", action.payload, state.patients)
      return {
        ...state,
        patients: {
          ...state.patients,
          [action.payload.id]: action.payload
        }
      };
    default:
      return state;
  }
};
