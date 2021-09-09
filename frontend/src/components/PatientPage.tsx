// PatientPage.tsx
import React from 'react';

import { useParams } from 'react-router-dom';

import axios from "axios";

import { apiBaseUrl } from "../constants";

import { Patient, Entry, Diagnosis } from "../types";
//import { Patient, Entry } from "../types";

import { usePatientStateValue, useDiagnoseStateValue, setPatientPage } from "../state";
//import { usePatientStateValue, setPatientPage } from "../state";

import { Icon } from 'semantic-ui-react'




// 9.17
const PatientPage = () => {

	const [{ patients }, dispatch] = usePatientStateValue();

	const [{ diagnoses }, ] = useDiagnoseStateValue();

	const { id } = useParams<{ id: string }>();
	
	React.useEffect(() => {

		console.log(id)

		const getPatient = async (id: string) => {

			try {

			const { data: patient } = await axios.get<Patient>(`${apiBaseUrl}/api/patients/${id}`);

			console.log('PatientPage', patient)

			// 9.18
			//dispatch({ type: "GET_PATIENT", payload: patient });
			dispatch(setPatientPage(patient));

			//Object.values(diagnoses).map((diagnose: Diagnosis) => console.log(diagnose.code, diagnose.name))

			} catch (e) {

				console.error(e);

			}

		}

		void getPatient(id);

	}, [id, dispatch]);

	// 9.21
	const DiagnoseCode = ({code}: any) => {

		console.log('DiagnoseCode', code);

		return (
			<>
			{ Object.values(diagnoses).map((diagnose: Diagnosis) => diagnose.code === code ? <span key={code}> {code} {diagnose.name} </span> : null) }
			</>
		);

	}

	// 9.20
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
					<div>
					{
						(patient.entries && patient.entries.length > 0) ?
						<h4 style={{paddingTop:25}}>entries</h4> : null 
					}
					<div>
					{ 
						(patient.entries && patient.entries.length > 0) ? 
							(patient.entries.map((entries: Entry) =>
								<div key={entries.id}>
									<div>
									{entries.date} {" "} {entries.description}
									</div>
									<div>
										{
											(entries && entries.diagnosisCodes !== undefined) ? (entries.diagnosisCodes.map((code: string)  => <li key={code}><DiagnoseCode code={code} /></li>) ) : null 
										}
									</div>
								</div>
							)
						) : null 
					}
					</div>
					</div>
				</div> : <div></div> ) 
			}
		</div>
	);
};

export default PatientPage;