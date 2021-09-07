// PatientPage.tsx
import React from 'react';

import { useParams } from 'react-router-dom';

import axios from "axios";

import { apiBaseUrl } from "../constants";

import { Patient } from "../types";

import { useStateValue, setPatientPage } from "../state";

import { Icon } from 'semantic-ui-react'

// 9.17
const PatientPage = () => {

	const [{ patients }, dispatch] = useStateValue();

	const { id } = useParams<{ id: string }>();
	
	React.useEffect(() => {

		console.log(id)

		const getPatient = async (id: string) => {

			try {

			const { data: patient } = await axios.get<Patient>(`${apiBaseUrl}/api/patients/${id}`);

			// 9.18
			//dispatch({ type: "GET_PATIENT", payload: patient });
			dispatch(setPatientPage(patient));

			} catch (e) {

				console.error(e);

			}

		}

		void getPatient(id);

	}, [id, dispatch]);

	return (
		<div className="PatientPage">
			{Object.values(patients).map((patient: Patient) => patient.id === id ? 
				<div key={patient.id}>
					<h3>{patient.name} 
					<span>{(patient.gender === 'male') ? (<Icon enabled name='mars' size='big'/>) : (patient.gender === 'female') ? (<Icon enabled name='venus' size='big'/>) : (<Icon enabled name='genderless' size='big'/>)}				</span>
					</h3>
					<div>
					ssn: {patient.ssn}
					</div>
					<div>
					occupation: {patient.occupation}
					</div>
				</div> : <div></div> ) 
			}
		</div>
	);
};

export default PatientPage;