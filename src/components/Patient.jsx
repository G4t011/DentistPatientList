const Patient = ({patient, setPatientSel,erasePatient}) => {

  const { name, phone, email, symptom, id} = patient; //this way assign to multiple vars from object.

  const handleErase = () => {
    const answer = confirm('¿Quieres eliminar este registro?');
    if(answer) {
        erasePatient(id);
    }
  }

  return (
    <div className="mx-5 my-5 bg-white shadow-md px-5 py-10 rounded-xl">

        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {' '}
        <span className="font-normal normal-case">{name}</span>
        </p>
        
        <p className="font-bold mb-3 text-gray-700 uppercase">Telefono: {' '}
        <span className="font-normal normal-case">{phone}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {' '}
        <span className="font-normal normal-case">{email}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {' '}
        <span className="font-normal normal-case">{symptom}</span>
        </p>

        <div className="flex justify-between mt-10">
          <button
            type="button"
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-800 text-white font-bold uppercase rounded-lg"
            onClick={() => setPatientSel(patient)}
            // this action moves info of selected object to App, and to execute order just onClick is necessary the ""=>func"
            >
              Editar
          </button>

          <button
            type="button"
            className="py-2 px-10 bg-red-600 hover:bg-red-800 text-white font-bold uppercase rounded-lg"
            // When you call a func with onclick use it same as below, never with () if you add () will execute just in that moment
            onClick={handleErase}
            >
              Eliminar
          </button>
        </div>

    </div>
  )
}

export default Patient