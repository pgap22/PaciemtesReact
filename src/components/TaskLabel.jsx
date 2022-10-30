import React from 'react'
const TaskLabel = ({text, label}) => {
    return ( 
        <div className='flex gap-3'>
            <h4 className='font-bold'>{label}: </h4>
            <p className='break-all'>{text}</p>
        </div>
     );
}
 
export default TaskLabel;