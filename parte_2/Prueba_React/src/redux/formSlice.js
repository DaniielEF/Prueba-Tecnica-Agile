import { createSlice } from "@reduxjs/toolkit"

const initialState =[]

const formSlice = createSlice({
    name: 'currentForm',
    initialState,
    reducers:{
        setForm: (state, action) => {
            return [...state, action.payload]; // Agregar un nuevo formulario al array (manera inmutable)
          },
        clearForm:(state) =>{
            state = initialState
        }
    }
})

export const {setForm, clearForm} = formSlice.actions;
export default formSlice.reducer;
