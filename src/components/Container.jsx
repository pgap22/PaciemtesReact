import React from 'react'
const Container = (props) => {
    return ( 
        <section className='bg-white shadow-lg p-3 flex flex-col px-5 m-5 rounded-lg'>
            <div className='flex w-full items-center flex-col gap-3   my-3'>
             {props.children}
            </div>
        </section>
     );
}
 
export default Container;