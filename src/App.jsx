// import { Container } from "postcss"
import { useState, useEffect } from 'react'
import Form from "./components/Form"
import Header from "./components/Header" // Declaration of importing of components
import PatientList from "./components/PatientList"

function App() {

  const [patient, setPatient] = useState([]);
  const [patientSel, setPatientSel] = useState({});// Config init empty object

  useEffect( () => {
    const getLS = () => {
      //JSON.parse get back to the previous structure
      // const patientsLS = JSON.parse(localStorage.getItem('patient')) ?? [];
      // setPatient( patientsLS );
      const patientsLS = JSON.parse(localStorage.getItem('patient')) ?? [];
      // it's necessary to add condition ?? [], in case that find null and substitute with void array
      patientsLS.length > 0 && setPatient(patientsLS);
    }
    getLS();
  }, [] );



  useEffect(() => {
    // console.log('Componente listo o cambió pacientes');
    // next line convert to string all the objects in patient to move to localstorage
    localStorage.setItem('patient', JSON.stringify( patient ))
  }, [patient])

  const erasePatient = (id) => {
    const patientsUpd = patient.filter(patientSel => patientSel.id !== id);
    setPatient(patientsUpd);
  }

  return (
    <div className="container mx-auto mt-20">
      <Header

      />
      
      <div className="mt-12 md:flex">
        <Form
          // props
          patient = {patient}
          setPatient = {setPatient} // this prop bring from form
          patientSel = {patientSel}
          setPatientSel = {setPatientSel}
        />
        <PatientList 
          // props
          patient = {patient}
          setPatientSel = {setPatientSel}// Passing props to...
          erasePatient = {erasePatient}
        />
      </div>
    </div>
  )
}

export default App
