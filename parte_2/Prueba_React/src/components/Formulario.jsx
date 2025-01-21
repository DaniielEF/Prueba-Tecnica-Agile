import React from 'react'
import {Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { setForm } from '../redux/formSlice';
import axios from 'axios'


const Formulario = () => {

  const dispatch = useDispatch()

  const initialValues = {
    name: '',
    email: '',
    message: '',
  }

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required')
    .matches(
      /^[a-zA-Z ]+$/,
      'Solo debe usar texto para el Nombre'
    )
      .min(3,'Debes ingresar 3 caracteres como mínimo'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    message: Yup.string()
        .min(10,'Ingresar 10 caracteres como mínimo')
      .required('Message is required'),
  });


const errorMessage = (message) => (
  <p className="validation-error-message">{message}</p>
);

const handleForm = async (values) => {
  console.log(values)
  try {
    dispatch(setForm(values))
    await axios.post('/api/submit-form', values)
      .then(response =>{
        console.log('Respuesta de la Api', response.values)
      })
      .catch(error => {
        console.error('Error al enviar el formulario :', error);
      })
  } catch (error) {
    console.error("Envio de formulario errado: ", error)
    
  }
  
}

  return (
    <div>
      <h1>Formulario</h1>

      <div>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleForm}>
          <Form style={{display:'flex',flexDirection:'column'}}>
            <label>Nombre</label>
            <Field name="name" label="Name" fullWidth variant="outlined" /><ErrorMessage name='name' component='div' render={errorMessage} />
            <label>Correo electronico</label>
            <Field name="email" label="Email" type="email" fullWidth variant="outlined" /><ErrorMessage name='email' component='div'  render={errorMessage}/>
            <label>Mensaje</label>
            <Field name="message" label="Mensaje" type="string" fullWidth variant="outlined" /><ErrorMessage name='message' component='div'  render={errorMessage}/>
            <br/>
            <button type='submit'>Enviar</button>
          </Form>
        </Formik>
      </div>



    </div>
  )
}

export default Formulario