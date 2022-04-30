import React from 'react'
import { GrCertificate } from 'react-icons/gr'
import Slideshow from '../components/Slideshow'
function AdriatikMare() {
  return (
    <div>
        <Slideshow imgUrl='https://images.pexels.com/photos/5829126/pexels-photo-5829126.jpeg?cs=srgb&dl=pexels-pok-rie-5829126.jpg&fm=jpg'/>
        <h1 className='text-center sm:text-xl text-md mt-5 text-stone-400'>Rreshqit gishtin siper produkteve qe te shikosh catalogun</h1>
        <div className='products mt-5'>
                <div className="product">
                    <img className='product-img' src="https://images.pexels.com/photos/3650159/pexels-photo-3650159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""  />
                    <h1 className='product-title' style={{textShadow: '0px 0px 5px rgba(0,0,0,0.8)'}}>
                        Sardele
                    </h1>
                </div>
                <div className="product">
                    <img className='product-img' src="https://odessa-journal.com/wp-content/uploads/2021/02/170-1024x679.jpg" alt=""  />
                    <h1 className='product-title' style={{textShadow: '0px 0px 5px rgba(0,0,0,0.8)'}}>
                        Midhje
                    </h1>
                </div>
                <div className="product">
                    <img className='product-img' src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/727bda84826873.5d6906eb29c0a.jpg" alt=""  />
                    <h1 className='product-title' style={{textShadow: '0px 0px 5px rgba(0,0,0,0.8)'}}>
                        Peshk
                    </h1>
                </div>
        </div>
        <div className='mt-5'>
            <div className='bg-indigo-800 py-10'>
                <h1 className="sm:mx-32 text-center text-2xl font-light text-white py-2">Historiku i Adriatik  Mare</h1>
                <p className="sm:mx-32 p-2 text-center text-sm sm:text-sm  text-white font-light">
                    Mare Adriatik sh.p.k eshte nje kompani shqipetare me president z. MARK BABANI e themeluar qe ne vitin 1995 e specializuar ne prodhimin dhe eksportimin e produkteve te peshkut.
                </p>
                <p className="sm:mx-32 p-2 text-center text-sm sm:text-sm text-white p-2 font-light">
                    Mare Adriatik eshte nje nder kompanite me te medha shqipetare qe perpunon me profesionalizem açuget dhe sardelet e detit adriatik, garanton produkte me cilesi te larte, te perpunuara sipas metodave artizanale, duke ju mundesuar keshtu shijimin e vertete te peshkut te kalter te detit Mesdhe dhe vecanerisht detit Adriatik.
                </p>
            </div>
            <div className='bg-blue-800 py-10 mt-5'>
                <h1 className="text-2xl sm:text-left font-light text-white p-2 sm:mx-20">Cilesia</h1>
                <div className='grid sm:grid-cols-2 gap-5 justify-center items-center sm:mx-20'>
                    <div className="p-2 text-left sm:text-left text-sm sm:text-sm text-gray-50 p-2 font-light">
                        Kompania ofron produkte me cilesi te larte te perpunuara sipas metodave artizanale por edhe te pershtatura me metodat me te reja ne baze te kerkesave te klientave tane. Gjithashtu kompania disponon sistemet ISO 9001-2001 dhe HACCP
                        <ul className="py-2 list-disc ml-5">
                            <li className='px-3 py-1'>Ne vitin 2007 kompania merr certifikaten e cilesise ISO 9001-000</li>
                            <li className='px-3 py-1'>Ndersa ne vitin 2010 pajiset serish me certifikaten e cilesie ISO 9001-2008</li>
                            <li className='px-3 py-1'>Dhe serish ne vitin 2010 ajo merr certifikaten per sistemine drejtimit te higjenes HACCP-102/10</li>
                            <li className='px-3 py-1'>Ne vitin 2015 ajo merr certifikaten per sistemin e drejtimt te higjenes HACCP-174/15.</li>
                            <li className='px-3 py-1'>Ne kete vit perseri certifikata Quality Management SystemISO 9001:2008</li>
                            <li className='px-3 py-1'>Ne vitin 2018 Mare Adriatik merr certifikatat per sigurie ushqimore ne rang boteror BRC edicioni 7 dhe certifikaten IFS per standartin ushqimor boteror.</li>
                            <li className='px-3 py-1'>Ne vitin 2019 Mare Adriatik merr certifikaten MSC, Marie Stewardship Council.</li>
                            <li className='px-3 py-1'>Po ate vit Mare Adriatik ricertifikohet me certifikata BRC edicioni 8.1 dhe IFS 6.1.</li>
                            <li className='px-3 py-1'>Ne vitin 2020 Mare Adritatik merr certifikate per sisemin e drejtimit te higjenes GMP-HACCP.</li>
                        </ul>
                    </div>
                    <div className="certificates flex flex-col">
                        <img className='w-full h-72 my-1 object-cover' src="https://images.pexels.com/photos/11055055/pexels-photo-11055055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <img className='w-full h-72 my-1 object-cover' src="https://images.pexels.com/photos/2293027/pexels-photo-2293027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                </div>
            </div>
            <img src="https://images.pexels.com/photos/4585622/pexels-photo-4585622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='h-48 w-screen mt-5 object-cover ' />
            <div className='bg-pink-800 py-10 mt-5'>
                <h1 className="sm:mx-32 text-center text-2xl font-light text-gray-300 py-2">Aktivitet Tona</h1>
                <p className="sm:mx-32 p-2 text-center text-sm sm:text-sm  text-white font-light">
                     Ne prill te vitit 2008-2009 “Mare Adriatik “ merr pjese ne panairin nderkombetar te Brukselit “ESE 2008 “ ku dhe njihet me klientet me te rendesishem ne historine e “Mare Adriatik “
                    Ne vitin 2012 merr pjese ne panairin nderkombetar “Alimentaria 2012” ne Barcelone te Spanjes duke zgjeruar horizontin ne marredheniet me kompani te tjera te ngjashme me to qe jane te njohura sot ne bote.
                </p>
            </div>
        </div>
    </div>
  )
}


export default AdriatikMare