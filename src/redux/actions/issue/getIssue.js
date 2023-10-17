import axios from "axios";
import {  BASE_URL, GET_ISSUES } from '../../action-type';

export const getIssue = () => {
  const bodyData = {
    "expand": [
      "names",
      "schema",
      "operations"
    ],
    "fields": [
      "summary",
      "status",
      "assignee"
    ],
    "fieldsByKeys": false,
    "jql": "project = FUN",
  //   "maxResults": 15,
    "startAt": 0
  }
    // "jql": "reporter = 'qm:c0387339-02b1-4e0d-8f36-3232066900ca:056bf32f-6d71-40be-89bc-3672d74725c3'",
    // "fields": ["key", "summary", "customfield_10019", "description", "timespent"]
 //    responsable, hs consumidas, comentarios, estado, hs estimadas, progreso, adjuntos, prioridad
  // }
  return async (dispatch) => {
    try {
      const response = (await axios.post(`${BASE_URL}/rest/api/3/search`, bodyData)).data;

      console.log('Respuesta del servidor:', response);
      
      return dispatch({type: GET_ISSUES, payload: response})
    } catch (error) {
      console.log('Error al realizar la solicitud getIssue:', error);
      throw error; // Lanzar el error nuevamente
    }
  };
};