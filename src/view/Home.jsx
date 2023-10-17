// import { useState } from "react";
// import IssueCard from "../components/IssueCard/IssueCard";
// import axios from "axios";
import { useEffect } from "react";
import Tablero from "../components/Tablero/Tablero";
import { getIssue } from "../redux/actions/issue/getIssue";
import { useDispatch } from "react-redux";
// import SelectedIncident from "../components/selectedIncident/selectedIncident";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    issueList()
  }, [])

  const issueList = async () => {
    await getIssue()(dispatch).then((response) =>{
      console.log('hola')
      if (response) console.log('response', response)

    }).catch((error) => console.log('error', error))
  }

  // const [userIssue, setUserIssue] = useState({ usuario: '', email: '', descripcion: '' });
  // const userIssue = useSelector((state) => state.issues );


  // const userData = {
  //   "jql": "reporter = 'qm:c0387339-02b1-4e0d-8f36-3232066900ca:056bf32f-6d71-40be-89bc-3672d74725c3'",
  //   "fields": ["key", "summary", "customfield_10019", "description"]
  // }

  // const getUserIncident = async () => { 
  //   try {
  //     const response = (await axios.post('http://localhost:3001/rest/api/3/search', userData)).data;
  //     console.log('Respuesta del servidor:', response);
  //     response ? setUserIssue(response.issues) : {}

  //     console.log('userIssue', userIssue)
  //   } catch (error) {
  //     console.error('Error al realizar la solicitud:', error);

  //   }
  // }

  
  return (<div className="flex flex-col">
      {/* <SelectedIncident /> */}
      <Tablero />
  </div>

    // <div className='grid grid-cols-2 gap-5 mx-10 p-8'>
      
    //   <div className='w-full bg-blue flex items-center  flex-col'>
    //       <h1 className="text-3xl font-bold  font-titilliumWeb text-slate-200">Incidencia creadas</h1>
    //         <button
    //           type="submit"
    //           className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    //           onClick={getUserIncident}
    //         >
    //           Search incidencia
    //         </button>
    //           {
    //             userIssue.length > 0 ?
    //             userIssue.map((issue)=>(
    //               <div key={issue.key} className='my-4 w-full'>
    //                 <IssueCard 
                    
    //                 summary={issue.fields.summary}
    //                 description={issue.fields.description.content[0].content[0].text}/>

    //               </div>
                  
    //             ))
    //             : ""
    //           }
              
    //     </div>
    // </div>
  )
}

export default Home;