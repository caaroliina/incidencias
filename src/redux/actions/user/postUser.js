import axios from "axios";
import {  BASE_URL, POST_ISSUE } from '../../action-type';

export const postUser = ({name, email}) => {
  const userData = {
    "email": email,
    "displayName": name
  }
    return async (dispatch) => {
      try {
        const response = (await axios.post(`${BASE_URL}/`, userData)).data;
        console.log('Respuesta del servidor:', response);
        return dispatch({type: POST_ISSUE, payload: response.issues})

      } catch (error) {
        console.error('Error al realizar la solicitud:', error);
  
      }
    };
};