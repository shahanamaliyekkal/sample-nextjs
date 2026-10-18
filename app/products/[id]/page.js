'use client'
import { useParams } from 'next/navigation'
import React, { useState } from 'react'

export default function ProductDetail() {
    const[products,setProducts]=useState([]);
        const {id}=useParams();
    
  return (
    <div>
      <h1>{id}</h1>
    </div>
  )
}
