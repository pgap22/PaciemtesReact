import React, { useState } from 'react';
const Context = React.createContext();
const Provider = (props) => {
    const [citaobj, setDetails] = useState(
        {
            name: '',
            owner: '',
            date: '',
            time: '',
            description: '',
        }
    )
   
    const changeDetails = (property, value)=>{
        const tempArrayData = Object.entries(citaobj)
        tempArrayData.forEach(entrie =>{
            if(entrie[0] === property){
                entrie[1] = value;
            }
        })
        const newState = Object.fromEntries(tempArrayData);
        setDetails(newState);
    }


    return ( 
        <Context.Provider value={
            {
                citaobj: citaobj,
                setDetails: setDetails,
                changeDetails: changeDetails,
            }
        }>
            {props.children}
        </Context.Provider>
     );
}
 
export {Context, Provider};