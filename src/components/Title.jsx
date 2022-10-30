import React from 'react'
const Title = ({icon, text}) => {
    return ( 
        <div className='flex items-center gap-2'>
            <img src={icon} alt="icon" />           
            <h2 className='font-bold text-2xl'>{text}</h2>
        </div>
     );
}
 
export default Title;