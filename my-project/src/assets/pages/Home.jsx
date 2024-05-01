import React from 'react'
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export const Home =()=> {
  return (
    <div >
     <div className='flex flex-col gap-11 justify-center'>
      <button className='bg-orange-950 text-white size-32 h-6 w-60 mt-7'><NavLink to="/Home/Basicreacthook">Basic HOOK</NavLink></button>
      <button className='bg-orange-950 text-white size-32 h-6 w-60 mt-7'><NavLink to="/Home/compon">Styling</NavLink></button>
      <button className='bg-orange-950 text-white size-32 h-6 w-60 mt-7'><NavLink to="/Home/Datadisplay">Data Display</NavLink></button>
      <button className='bg-orange-950 text-white size-32 h-6 w-60 mt-7'><NavLink to="/Home/Datamanipulation">Data Manipulation</NavLink></button>
      <button className='bg-orange-950 text-white size-32 h-6 w-60 mt-7'><NavLink to="/Home/Dataselection">Data Select</NavLink></button>
      <button className='bg-orange-950 text-white size-32 h-6 w-60 mt-7'><NavLink to="/Home/Forms">Forms</NavLink></button>
      <button className='bg-orange-950 text-white size-32 h-6 w-60 mt-7'><NavLink to="/Home/Imagehandling">Image Handle</NavLink></button>
      <button className='bg-orange-950 text-white size-32 h-6 w-60 mt-7'><NavLink to="/Home/Masterdom">Master Dom</NavLink></button>
      <button className='bg-orange-950 text-white size-32 h-6 w-60 mt-7'><NavLink to="/Home/Operation">CRUD</NavLink></button>
      <button className='bg-orange-950 text-white size-32 h-6 w-60 mt-7'><NavLink to="/Home/Statepropagation">State Propagation</NavLink></button>

     </div>
     <div > <Outlet/></div>

    </div>
  )
}

export default Home