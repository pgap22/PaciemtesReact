import React, { useContext } from 'react'
import { Context } from '../context';
const Input = ({Empty,property, value ,label, placeholder,type="text"}) => {
    const {changeDetails} = useContext(Context);

    const onChangeHandler = (e)=>{
        changeDetails(property, e.target.value);
        if(Empty.empty){
            Empty.setEmpty(false);
        }
    }


    return ( 
        <div className='flex flex-col w-full'>
            <p>{label} <span className=' text-red-600 '>*</span></p>
            {type === "text"
            ?
            <input value={value} onChange={onChangeHandler}  className=' focus:border-indigo-400 focus:shadow-sm transition-all border p-1 rounded-md outline-none' type={type} placeholder={placeholder}/>
            :
            (type === "textarea")
            ?
            <textarea value={value} onChange={onChangeHandler} className=' focus:border-indigo-400 focus:shadow-sm transition-all border p-1 rounded-md resize-none outline-none'></textarea>
            :
            <input value={value} onChange={onChangeHandler} className=' focus:border-indigo-400 focus:shadow-sm transition-all border p-1 rounded-md outline-none' type={type} />
            }
        </div>
     );
}
 
export default Input;