import React from 'react'
import Bannermain from '../../component/banner/banner_main'
import Deals from '../../component/deals_offers/deals'
import Offers from '../../component/offers'
import Supplier from '../../component/supplier'
import Recomended from '../../component/recomended'
import Services from '../../component/services'
import Region from '../../component/region'
import Subscribe from '../../component/sumbsribe'

const Mainpage = () => {
  return (
    <div>
      <Bannermain/>
      <Deals/>
      <Offers/>
      <Offers/>
      <Supplier/>
      <Recomended/>
      <Services/>
      <Region/>
      <Subscribe/>   
    </div>
  )
}

export default Mainpage
