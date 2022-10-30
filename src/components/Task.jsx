import React from 'react'
import Button from './Button';
import TaskLabel from './TaskLabel';
import { DeleteIcon } from '../icons';
const Task = ({cita, deleteCita, id}) => {
    let citaArray = Object.entries(cita);
    let labelsXD = ["Nombre", "Dueño/a", "Fecha", "Hora", "Sintomas"]


    return ( 
        <div className=" w-full p-5 task-shadow break-words snap-start rounded-md flex flex-col gap-3">
            {citaArray.map((entries, i)=>{
                return(
                    <TaskLabel key={i*Math.random()} text={entries[1]} label={labelsXD[i]}/>
                )
            })}
            <Button func={deleteCita} param={id} color={"red"} text={"Eliminar cita"} icon={DeleteIcon}/>
        </div>
     );
}
 
export default Task;