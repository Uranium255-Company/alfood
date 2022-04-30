import React from "react";
import { NavLink } from "react-router-dom";
const Sector = ({imageUrl, title, pathUrl}) => {
    return (
        <div className="bg-gray-900 text-white rounded-xl">
            <img className='object-cover h-96 sm:h-52 w-full rounded-t-xl' src={imageUrl} alt="" />
            <h1 className='text-3xl p-3 sm:text-xl'>{title}</h1>
            <p className='text-xl p-4 text-center sm:text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis doloribus suscipit placeat sint facilis, quibusdam ratione expedita, adipisci magni, ut earum fugiat ducimus tenetur ad vitae officiis.</p>
            <NavLink to={pathUrl} className='flex justify-center sm:justify-end'>
                <button className='p-3 text-yellow-500 bg-gray-900 sm:rounded-tl-xl'>Read More</button>
            </NavLink>
      </div>
    )
}
export default Sector;