import React from 'react'
import { useSelector } from 'react-redux'

const ListaFormularios = () => {

  const forms = useSelector((state) => state.currentForm)

  return (
    <div>

      <h2>Lista de Formularios</h2>

      {
        forms.length === 0 ? (
          <p>No has enviado formularios aún</p>
        ) : (
          <ul>
            {forms.map((form, index) => (
    
              <li key={index}>
                <strong>Nombre: </strong>{form.name}<br />
                <strong>Correo: </strong>{form.email}<br />
                <strong>Mensaje: </strong>{form.message}<br />
              </li>
              
            ))}

          </ul>
        )
      }


    </div>
  )
}

export default ListaFormularios