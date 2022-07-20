import { useState, useEffect } from "react";
import Error from "./Error";
// To declare all the structure of any component you can use RFCE or RAFCE both creates the structure
// import React from 'react' esta linea ya no se usa

//Function expression
const Form = ({ patient, setPatient, patientSel,setPatientSel }) => {
  // State is always declare at the begining of every fuction where will be use
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [symptom, setSymptom] = useState('');

  const [error, setError] = useState(false);

  useEffect(() => {
    if( Object.keys(patientSel).length > 0) {
      setName(patientSel.name)
      setPhone(patientSel.phone)
      setEmail(patientSel.email)
      setSymptom(patientSel.symptom)
    }
  },[patientSel])



  const idGen = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation form that check if all parameters are filled.
    if ([ name, phone, email, symptom].includes('') ) {
      console.log('Todos los campos son obligatorios');
      setError(true);
    }else {
      setError(false);
      // Object for Patient
      const objPatient = {
        name,
        phone,
        email,
        symptom
      }
      // This if identifies if there is ID or not & define if is a new register or will be edited
      if( patientSel.id ) {
        //Editing register
        objPatient.id = patientSel.id;
        // console.log(objPatient);
        // console.log(patientSel);

      // verify patient with the arrow func looking for info
      const patientUpdated = patient.map( patientState => patientState.id === patientSel.id ? objPatient : patientState );
      // once finish the search update setPatient
      setPatient(patientUpdated);
      // Clean this register
      setPatientSel( {} );


      } else {
        //New register
        objPatient.id = idGen() // This id, helps to define a number specific for every item
        setPatient([...patient, objPatient]); // With this fuction we update the array without modify previous information
      }

      

      // Re Init Form
      setName('');
      setPhone('');
      setEmail('');
      setSymptom('');
    }

  }

  return (
  
    <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-3xl text-center">Seguimiento a Pacientes</h2>

        <p className="text-lg mt-5 text-center mb-10">
            Añadir nuevo Paciente y {' '}
            <span className="text-indigo-600 font-bold">Administrarlo</span>
        </p>

        <form 
            onSubmit={handleSubmit} //React event
            className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
            {/* This part of code check if parameters are filled if not show an alert */}
            { error &&
              // <Error mensaje='Todos los campos son obligatorios'/>
              <Error> <p>Todos los campos son obligatorios</p></Error>
            }
            <div className="mb-5">
              <label htmlFor="nombre" className="block text-gray-700 uppercase font-bold">Nombre
              </label>
              <input
                id="nombre"
                type="text"
                placeholder="Nombre del paciente"
                className="border-2 w-full p-2 mt-2 placeholderbg-gray-400 rounded-md"
                value={name} // Init value
                onChange= {(e) => setName(e.target.value)}// This react event modify the value of hook
              />
            </div>

            <div className="mb-5">
              <label htmlFor="tel" className="block text-gray-700 uppercase font-bold">Telefono del Paciente
              </label>
              <input
                id="tel"
                type="tel"
                // pattern="\([0-9]{3}\) [0-9]{3}[ -][0-9]{4}"
                maxLength={10}
                placeholder="Telefono del paciente"
                className="border-2 w-full p-2 mt-2 placeholderbg-gray-400 rounded-md"
                value={phone} // Init value
                onChange= {(e) => setPhone(e.target.value)}// This react event modify the value of hook
              />
            </div>

            <div className="mb-5">
              <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email del Paciente
              </label>
              <input
                id="email"
                type="email"
                placeholder="email del paciente"
                className="border-2 w-full p-2 mt-2 placeholderbg-gray-400 rounded-md"
                value={email} // Init value
                onChange= {(e) => setEmail(e.target.value)}// This react event modify the value of hook
              />
            </div>

            <div className="mb-5">
              <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Tratamiento o Sintomas
              </label>
              <textarea
                id="sintomas"
                placeholder="Ingresa el tratamiento o sintomas"
                className="border-2 w-full p-2 mt-2 placeholderbg-gray-400 rounded-md"
                value={symptom} // Init value
                onChange= {(e) => setSymptom(e.target.value)}// This react event modify the value of hook
              />
            </div>

            <input 
              type="submit"
              className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all"
              value={ patientSel.id ? 'Editar información' : 'Enviar información' }
            />

        </form>

    </div>
    )
}

export default Form