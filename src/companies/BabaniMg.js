import React from 'react'
import { GiCow } from 'react-icons/gi';
import { RiKnifeLine } from 'react-icons/ri';
import {GrAchievement} from 'react-icons/gr'

function BabaniMg() {
    let scrollAmount = 0
  return (
      <>
      <h1 className='text-blue-500 text-lg font-bold text-left p-3'>Historiku i kompanise <span className="text-red-500">BabaniMg</span></h1>
      <section className='info-section grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <div className="info-wrapper flex items-center justify-center flex-col">
            <div className="flex items-center">
                <p className='text-center p-2 text-stone-500 font-semibold text-sm'>	1994 filluam me rritjen dhe tregtimin e gicave, duke vazhduar zhvillimin dhe rritjen e aktivitetit vit pas viti.</p>
                <div className="flex justify-center items-center">
                    <GiCow className='h-10 w-10 m-3 fill-red-600 sm:h-16 sm:w-16' />
                </div>
            </div>
            <div className="flex items-center">
                <div className="flex justify-center items-center">
                    <RiKnifeLine className='h-10 w-10 m-3 fill-red-600 sm:h-16 sm:w-16' />
                </div>
                <p className='text-center p-2 text-stone-500 font-semibold text-sm'>2000 ndërtuam thertoren, duke sjelle në treg mish të freskët , të kontrolluar dhe të sigurt për konsumatorin.</p>
            </div>
            <div className="flex items-center">
                <p className='text-center p-2 text-stone-500 font-semibold text-sm'>	1994 filluam me rritjen dhe tregtimin e gicave, duke vazhduar zhvillimin dhe rritjen e aktivitetit vit pas viti.</p>
                <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-10 w-10 m-3 fill-red-500 sm:h-16 sm:w-16" viewBox="0 0 16 16">
                        <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z"/>
                        <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
                    </svg>
                </div>
            </div>
          </div>
        <div className='h-full m-3 relative'>
            <img src="https://images.pexels.com/photos/618775/pexels-photo-618775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='h-full w-full brightness-75 object-cover rounded-2xl' alt="" />
            <h1 className='absolute text-xl sm:text-3xl center text-white' style={{textShadow: '0px 0px 5px rgba(0,0,0,0.8)'}}>Produktet Tona</h1>
        </div>
      </section>

      {/* Produktet */}
      <h1 className='text-center sm:text-xl text-md mt-5 text-stone-400'>Rreshqit gishtin siper produkteve qe te shikosh catalogun</h1>
      <div className="products-wrapper w-full relative">
        {/* <div className='w-12 h-full absolute top-0 left-0 z-10'></div> */}
        <div className='products'>
                <div className="product">
                    <img className='product-img' src="https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""  />
                    <h1 className='product-title' style={{textShadow: '0px 0px 5px rgba(0,0,0,0.8)'}}>
                        Produkti 1
                    </h1>
                </div>
                <div className="product">
                    <img className='product-img' src="https://images.pexels.com/photos/3298633/pexels-photo-3298633.jpeg?cs=srgb&dl=pexels-cottonbro-3298633.jpg&fm=jpg" alt=""  />
                    <h1 className='product-title' style={{textShadow: '0px 0px 5px rgba(0,0,0,0.8)'}}>
                        Produkti 2
                    </h1>
                </div>
                <div className="product">
                    <img className='product-img' src="https://www.doctorkiltz.com/wp-content/uploads/2022/01/AdobeStock_273699598-1030x687.jpeg" alt=""  />
                    <h1 className='product-title' style={{textShadow: '0px 0px 5px rgba(0,0,0,0.8)'}}>
                        Produkti 3
                    </h1>
                </div>
        </div>
        {/* <div className='w-12 h-full absolute top-0 right-0 z-10'></div> */}
      </div>
      </>
  )
}

export default BabaniMg