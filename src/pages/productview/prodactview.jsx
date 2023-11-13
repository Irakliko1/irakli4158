import React, { useState } from 'react'
import Detale from '../../component/detale'
import Recomended from '../../component/recomended/recomended'
import Supplier from '../../component/supplier/supplier'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const Prodactview = () => {
  const [product, setProduct] = useState({})
  const [images, setImages] = useState([])

  const {id} = useParams()

  useEffect(()=> {
    axios
    .get(`https://digitalinstitute-amazon.azurewebsites.net/api/product/products/${id}`)
    .then((response) => {
      setProduct(response.data)
      setImages(response.data.images)
    })
    .catch((error) => {
      console.error('API request error:', error);
    });
  },[id])

  return (
    <div>
      <Detale product={product} images={images} />
      <Supplier/>
      <Recomended/>
    </div>
  )
}

export default Prodactview
