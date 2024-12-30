import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { data, useParams } from 'react-router-dom'
import { menData, womenData } from '../../data'

function Shoe() {

    const{id}=useParams()

    console.log(id)


    const product = menData.find((data)=>data.id==id) || womenData.find((data)=>data.id==id)

    console.log(product)

    return (
        <div>
            <Header />

            <div className="breadcrumbs text-sm bg-gray-100 h-14">
                <ul className='ml-[180px] pt-2 '>
                    <li><a>Home</a></li>
                    <li><a>Men - All Products</a></li>
                    <li>Rustic Leather Loafers For Men</li>
                </ul>
            </div>
            <div className=' flex mt-11'>
                <div className='w-[70px] ml-40 '>
                    <img src=" ../assets/shoe/1_b1b0b584-6c77-4696-9345-ba6393d035e2_1400x.jpg" />
                    <img src=" ../assets/shoe/a_07dfe33b-0956-4a48-abbe-b56f0c1360d1_540x.jpg" className='mt-4' />
                    <img src=" ../assets/shoe/IMG_0114copy_4ee01ca4-1f3d-40e9-bb9d-5452e21875e0_540x.jpg" className='mt-4' />
                    <img src=" ../assets/shoe/IMG_0115copy_cbac5dff-dcf5-476d-aa7c-51cabef8a1ce_540x.jpg" className='mt-4' />
                    <img src=" ../assets/shoe/IMG_0117copy_9e264e21-d0a5-4e80-97e0-a4fa3fbd4e67_540x.jpg" className='mt-4' />
                </div>
                <div className=' flex  ml-4'>
                    <img src={`.${product.image}`} className=' w-[480px] ml ' alt="" />
                    <div className=' absolute bg-red-600 ml-[400px] rounded-full w-16 h-16 text-center pt-5 text-white mt-4  '>{product.discount}</div>
                    <div className=' ml-8 '>
                        <h2 className=' font-bold text-[16px]'>{product.product_name}</h2>
                        <div className=' opacity-60 text-2xl pt-1 '>{product.original_price} <a className=' text-red-600 '>{product.discounted_price}</a> </div>
                        <p className='pt-4'>Shipping calculated at checkout.</p>
                        <p className='pt-5'>Size Chart</p>
                        <p className='pt-2 font-bold'>Size: 41/7</p>
                        <div className=' flex gap-4 mt-2 '>
                            <p className='border-[1px] rounded-full bg-black text-white' >40/6</p>
                            <p className='border-[1px] rounded-full'  >41/7</p>
                            <p className='border-[1px] rounded-full' >42/8</p>
                            <p className='border-[1px] rounded-full' >43/9</p>
                            <p className='border-[1px] rounded-full' >44/10</p>
                            <p className='border-[1px] rounded-full' >45/11</p>
                        </div>
                        <button className=' font-medium border-black border-[2px] w-32 h-9 mt-7'>Out of stock</button>
                        <p className=' mt-7 '>Vendor: Marc Kessler</p>
                        <p>SKU: MK-SM-0050:BROWN:40</p>
                    </div>
                </div>
            </div>
            <button className=' ml-[700px] border-black border-[1px] rounded-3xl mt-28 font-semibold h-10 w-32'>Description</button>
            <div className=' ml-40 mt-9 opacity-65'>
                <p>Let's explore the exotic side of things with these rustic leather loafers by marc kessler</p>
                <p> These shoes have been made with good quality leather which ensures durability</p>
                <p>A soft grainy leather with threaded detailing upper gives these leather loafers a rustic feel</p>
                <p>A Rubber outsole ensures grip</p>
            </div>
            <Footer />
        </div>
    )
}

export default Shoe