import React from 'react';
const Button = ({func,param,text,icon,color}) => {
    const bgColor = `w-full rounded-md shadow-md flex justify-center p-3 ${color}-btn select-none transition-all cursor-pointer hover:-translate-y-[2px]`;

    return ( 
        <div onClick={()=>{func(param)}} className={bgColor}>
            {
            (icon)
            ?
            <div className='flex justify-center items-center gap-2 '>
                <p className='font-bold text-white'>{text}</p>
                <img src={icon} alt="icono" />
            </div>
            :
            <p className='font-bold text-white'>{text}</p>
            }
        </div>
     );
}
 
export default Button;