import axios from "axios";
import {  BASE_URL, POST_ISSUE } from '../../action-type';

export const issuePost = ({email, descripcion}) => { //, pathname
  // const modulo = () => {
    // let mod = "";
    // if (pathname.includes("Softland")){ mod = {"id": "10014", "issuetype": "10014"}}
    // if (pathname.includes("taller")){ mod = {"id": "10014", "issuetype": "10014"}}
    // if (pathname.includes("circuitoCompras")){ mod = {"id": "10010", "issuetype": "10045"};}
    // if (pathname.includes("hardware")){ mod = {"id": "10010", "issuetype": "10045"};}
    // if (pathname.includes("choferes")){ mod = {"id": "10010", "issuetype": "10045"};}
    // if (pathname.includes("bussinesInteligent")){ mod = {"id": "10010", "issuetype": "10045"};}
    // if (pathname.includes("nuevosRequerimientos")){ mod = {"id": "10010", "issuetype": "10045"};}
    const bodyData = {
      "fields": {
        "project": {
          "id": "mod.id"
        },
        "summary": `${email})`,
        "description": {
          "type": "doc",
          "version": 1,
          "content": [
              {
              "type": "paragraph",
              "content": [
                  {
                  "text": descripcion,
                  "type": "text"
                  }
              ]
              }
          ]
      },
      "reporter": {
        "id": "712020:75da847b-f656-4020-a3fd-84d8811cd76f"
      },
        "issuetype": {
          "id": "10038"
        }
      }
    }
      return async (dispatch) => {
        try {
          const response = (await axios.post(`${BASE_URL}/api/notify-incident`, bodyData)).data;
          console.log('Respuesta del servidor:', response);
          return dispatch({type: POST_ISSUE, payload: response.issues})
  
        } catch (error) {
          console.error('Error al realizar la solicitud:', error);
    
        }
      };
  }