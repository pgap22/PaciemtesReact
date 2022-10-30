import React from 'react';
const Error = ({text, empty}) => {
    const none = (empty) ? "error-on" : "error-off" 
    return ( 
        <div className={none}>
            <div className='border-[1.5px] w-full text-center py-1 rounded-md border-redcustom text-redcustom '>
                <p className='font-bold'>{text}</p>
            </div>
        </div>
     );
}
 
export default Error;