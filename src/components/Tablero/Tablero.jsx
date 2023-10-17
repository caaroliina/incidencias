/* eslint-disable react/no-unknown-property */
import { useSelector } from "react-redux";
import Incident from "../Incident/Incident";
import { useState } from "react";

const Tablero = () => {
  const incidents = useSelector((state) => state.incients)
  // console.log('incidents', incidents)
  const [incident, setIncident] = useState(incidents)
  const getList = (list) => {
    return incidents.filter((incident) =>  incident.fields.status.name === list)
}

  const startDrag = (evt, item) => {
      evt.dataTransfer.setData('itemID', item.id)
      console.log(item);
  }

  const draggingOver = (evt) => {
      evt.preventDefault();
  }

  const onDrop = (evt, list) => {
      const itemID = evt.dataTransfer.getData('itemID');
      const item = incident.find(item => item.id == itemID);

      // POST /rest/api/3/issue/{issueIdOrKey}/transitions
      // {
      //   "transition": {
      //     "id": "<ID_del_Estado_o_Columna_Deseado>"
      //   }
      // }
      item.list = list; 

      const newState = incident.map(task => {
          if(task.id === itemID) return item;
          return task
      })

      setIncident(newState);
  }
  // const incidentToDo = incidents.filter((incident) =>  incident.fields.status.name === "Tareas por hacer")
  // const incidentinProgress = incidents.filter((incident) => incident.fields.status.name == "En curso")
  // const incidentFinish = incidents.filter((incident) => incident.fields.status.name == "Finalizada")

  // const [ incidentToDoCol, setIncidentToDoCol ] = useState(incidentToDo)
  // const [ inProgresshCol, setInProgress ] = useState(incidentinProgress)
  // const [ finishCol, setFinishCol ] = useState(incidentFinish)
  
  return (
    
      <div className="flex justify-center mx-20 mt-10">
        <div className="grid grid-cols-3 gap-3 mx-2">
          <div >
            <div droppable="true" onDragOver={(evt => draggingOver(evt))} onDrop={(evt => onDrop(evt, "Tareas por hacer"))} className="border rounded-2xl px-8 py-5">
              {getList("Tareas por hacer").map((item, i) => (
                <div key={item.id} draggable onDragStart={(evt) => startDrag(evt, item)}>
                  <Incident 
                    key={item.fields.key}
                    id={item.id}
                    img={item.image}
                    title={item.fields.summary}
                    description={item.fields.summary}
                    state={item.fields.status.name}
                    coments={item.fields.comment.comments}
                    responsable={item.fields?.assignee}
                    hsConsumidas={item.fields.timetracking.timeSpent}
                    hsEstimadas={item.fields.timetracking.remainingEstimate}
                    progress={item.process}
                    adjs={item.adjs}
                    priority={item[i]}
                  />
                  </div>
              ))}
            </div>
          </div>
          <div>
            <div droppable="true" onDragOver={(evt => draggingOver(evt))} onDrop={(evt => onDrop(evt, "En curso"))} className="border rounded-2xl  px-8 py-5">
              {getList("En curso").map((item, i)=> (
                <div  key={item.id} draggable onDragStart={(evt) => startDrag(evt, item)}>
                  <Incident 
                    key={item.fields.key}
                    id={item.id}
                    img={item.image}
                    title={item.fields.summary}
                    description={item.fields.summary}
                    state={item.fields.status.name}
                    coments={item.fields.comment.comments}
                    responsable={item.fields.assignee}
                    hsConsumidas={item.fields.timetracking.timeSpent}
                    hsEstimadas={item.fields.timetracking.remainingEstimate}
                    progress={item.process}
                    adjs={item.adjs}
                    priority={item[i]}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* <div id="Finalizada">
            <div className="border rounded-2xl  px-8 py-5">
              {getList("Finalizada").map((item, i)=> (
                <Draggable key={i}>
                  <Incident 
                    key={item.fields.key}
                    id={item.id}
                    img={item.image}
                    title={item.fields.summary}
                    description={item.fields.summary}
                    state={item.fields.status.name}
                    coments={item.fields.comment.comments}
                    responsable={item.fields.assignee}
                    hsConsumidas={item.fields.timetracking.timeSpent}
                    hsEstimadas={item.fields.timetracking.remainingEstimate}
                    progress={item.process}
                    adjs={item.adjs}
                    priority={item[i]}
                  />
                </Draggable>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    
  )
}

export default Tablero;