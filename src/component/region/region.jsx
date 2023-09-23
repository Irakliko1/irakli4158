import React from 'react'
import './region.css'
import arabic from '../../assets/flags/arabic.png'
import australia from '../../assets/flags/australia.png'
import usa from '../../assets/flags/usa.png'
import ocupant from '../../assets/flags/ocupant.png'
import italy from '../../assets/flags/italy.png'
import denmark from '../../assets/flags/denmark.png'
import france from '../../assets/flags/france.png'
import chine from '../../assets/flags/chine.png'
import british from '../../assets/flags/britan.png'

const Region = () => {
  return (
    <>
      <span className='region_span'>Suppliers by region</span>
        <div className='region_container'>
            <div className='region_container2'>
                <img src={arabic} alt="" />
                <div>
                    <p>Arabic Emirates</p>
                    <span>shopname.ae</span>
                </div>
            </div>
            <div className='region_container2'>
                <img src={australia} alt="" />
                <div>
                    <p>Arabic Emirates</p>
                    <span>shopname.ae</span>
                </div>
            </div>
            <div className='region_container2'>
                <img src={usa} alt="" />
                <div>
                    <p>Arabic Emirates</p>
                    <span>shopname.ae</span>
                </div>
            </div>
            <div className='region_container2'>
                <img src={ocupant} alt="" />
                <div>
                    <p>Arabic Emirates</p>
                    <span>shopname.ae</span>
                </div>
            </div>
            <div className='region_container2'>
                <img src={italy} alt="" />
                <div>
                    <p>Arabic Emirates</p>
                    <span>shopname.ae</span>
                </div>
            </div>
            <div className='region_container2'>
                <img src={denmark} alt="" />
                <div>
                    <p>Arabic Emirates</p>
                    <span>shopname.ae</span>
                </div>
            </div>
            <div className='region_container2'>
                <img src={france} alt="" />
                <div>
                    <p>Arabic Emirates</p>
                    <span>shopname.ae</span>
                </div>
            </div>
            <div className='region_container2'>
                <img src={chine} alt="" />
                <div>
                    <p>Arabic Emirates</p>
                    <span>shopname.ae</span>
                </div>
            </div>
            <div className='region_container2'>
                <img src={british} alt="" />
                <div>
                    <p>Arabic Emirates</p>
                    <span>shopname.ae</span>
                </div>
            </div>
            <div className='region_container2'>
                <img src={usa} alt="" />
                <div>
                    <p>Arabic Emirates</p>
                    <span>shopname.ae</span>
                </div>
            </div>

        </div>
    </>
  )
}

export default Region
