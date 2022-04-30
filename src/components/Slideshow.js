import React from "react";
const Slideshow = ({imgUrl}) => {
    function scrollDown() {
        window.scroll({
            top: 1000,
            behavior: 'smooth'
          });
    }
    return (
        <div className='relative'>
            <div className="screen-height bg-slate-900 w-screen">
                <img src={imgUrl} className='object-cover w-full h-full'/>
                <h1 style={{zIndex: '0'}} className='absolute center text-white text-5xl p-2 text-center uppercase'>
                    ALFood
                </h1>
            </div>
            <button className='p-1 absolute bottom-0 center-bottom rounded-tl-full rounded-tr-full bg-white' onClick={scrollDown}> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" strokeWidth='2px' class="w-12 h-6 fill-blue-500" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
            </svg>
            </button>
        </div>
    )
}
export default Slideshow;