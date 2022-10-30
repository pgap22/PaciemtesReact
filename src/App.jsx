import React, { useContext, useState } from 'react'

import {Title, Error, Line, Header, Container, Input, Button} from "./components"
import { PlusIcon, NoneIcon, TaskIcon } from './icons';

import { Context } from './context';
import Task from './components/Task';


const App = () => {
  let citasStorage = (localStorage.getItem("citas")) ? JSON.parse(localStorage.getItem("citas")) : []; 
  const [citas, setCitas] = useState(citasStorage);
  const [empty, setEmpty] = useState(false);

  const {citaobj,setDetails} = useContext(Context);

  const saveCita = ()=>{
    let isEmpty = false;
    
    let tempArrayData = Object.entries(citaobj);

    tempArrayData.forEach(entrie =>{
      entrie.forEach(value => {
        if(!value){
          isEmpty = true;
        }
      });
    })
    if(!isEmpty){
      setCitas([...citas,citaobj]);
      window.localStorage.setItem("citas", JSON.stringify([...citas,citaobj]));
      setDetails( {
        name: '',
        owner: '',
        date: '',
        time: '',
        description: '',
    })
    }
    else{
      setEmpty(true);
    }
  }



  const Empty = {
    empty: empty,
    setEmpty: setEmpty,
  }

  const deleteCita = (id)=>{
    //AVOID STRANGE MEMORY JAVASCRIPT PROBLEMS :)
    let citasCopyMemory = [...citas];

    citasCopyMemory.splice(id, 1);

    window.localStorage.setItem("citas", JSON.stringify(citasCopyMemory))

    setCitas(citasCopyMemory);
  }

  return ( 
    <>
        <Header />

        <main className='lg:grid lg:grid-cols-2'>
          <Container>
                <Title 
                icon={PlusIcon}
                text="Crear Cita"
                />

                <Line />


                <Error empty={empty} text={"Todos los campos son obligatorios"}/>

               <Input Empty={Empty} value={citaobj.name} property={"name"} label={"Nombre de la mascota"} placeholder={"Ingrese el nombre de la mascota"} /> 
               <Input Empty={Empty} value={citaobj.owner} property={"owner"} label={"Nombre del dueño"} placeholder={"Ingrese el nombre del dueño"} /> 
               <Input Empty={Empty} value={citaobj.date} property={"date"} label={"Fecha"} type="date"/> 
               <Input Empty={Empty} value={citaobj.time} property={"time"} label={"Hora"} type="time" /> 
               <Input Empty={Empty} value={citaobj.description} property={"description"} label={"Sintomas"} type="textarea" /> 
               <Button func={saveCita} text={"Agregar cita"} color="blue" />
          </Container>
          <Container>
                {
                  citas.length > 0
                  ?
                  <Title 
                  icon={TaskIcon}
                  text="Administra tus citas"
                  />  
                  :
                  <Title 
                  icon={NoneIcon}
                  text="No hay citas"
                  />
  
                }


                <Line />

                <div className='w-full overflow-y-scroll h-[400px] flex flex-col gap-8 p-3 scroll-py-5 scrollbar-thumb-rounded scrollbar-thumb-gray-900 scrollbar-track-gray-100  scrollbar-thin'>
                  {
                    citas.map((cita, i)=>(<Task key={i} id={i} cita={cita} deleteCita={deleteCita} />))
                  }
                </div>
          </Container>
          
        </main>
      </>
    );
}
 
export default App;