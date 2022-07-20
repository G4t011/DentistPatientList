import Patient from "./Patient"

const PatientList = ({patient, setPatientSel, erasePatient}) => {
  // console.log(patient);
  
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll">

      {patient && patient.length ? ( 
        <>
          <h2 className="font-black text-3xl text-center">Lista de Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra las {' '}
            <span className="text-indigo-600 font-bold">Citas de los pacientes</span>
          </p>

          { patient.map( (patient) => {
            return(
              // <h1>{patient.name}</h1> // print the qty of elements in patient
              // Function mapping all the times that patient has elements in array
              <Patient
                  key = {patient.id}
                  patient = {patient}
                  setPatientSel = {setPatientSel}
                  erasePatient = {erasePatient}
              />
              )
            }) 
          }
        </>

       ) : (
          <>
            <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">
              Ingresa los pacientes {' '}
              <span className="text-indigo-600 font-bold">y serán mostrados aquí</span>
            </p>
          </>
       )}



      

    </div>
  )
}

export default PatientList