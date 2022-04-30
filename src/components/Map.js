import React from 'react'

function Map({}) {
  let lista = []
  let jsxList = lista.map(dyqan => {
    return (
      <div className='grid grid-cols-1'>
      <div className="w-full h-18 bg-gray-700 text-white flex">
        <iframe height='120' width='250' id="gmap_canvas" src={dyqan.linku} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        <div className='flex-grow flex text-center justify-center items-center flex-col'>
          <h1 className='text-md'>{dyqan.emri}</h1>
          <h1 className='text-sm'>{dyqan.adresa}</h1>
        </div>
      </div>
    </div>
  )
  })
  return (
      <>
        {jsxList}
      </>
  )
}

export default Map;
