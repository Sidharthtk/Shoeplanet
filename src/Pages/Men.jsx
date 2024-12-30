import React from 'react'
import Products from '../Components/Products'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { menData } from '../../data'


function Men() {


    const navigate = useNavigate()

    return (
        <div>

            <div>
                <Header />
                <div className=' bg-gray-500 text-center w-full h-32 text-white text-[20px] font-semibold p-10'>
                    <h1 className=''>Men-All Products</h1>
                </div>
                <div class=" relative">
                    <div className='ml-44  text-[18px] font-semibold mt-[100px]'>By Size</div>
                    <div>
                        <div className=' ml-44 pt-7 font-normal'>
                            <li><a href="">36/4<span className=' opacity-50'>(53)</span></a> </li>
                            <li><a href="">37/5<span className=' opacity-50'>(53)</span></a> </li>
                            <li><a href="">38/6<span className=' opacity-50'>(53)</span></a> </li>
                            <li><a href="">39/5<span className=' opacity-50'>(1)</span></a> </li>
                            <li><a href="">39/7<span className=' opacity-50'>(53)</span></a> </li>
                            <li><a href="">40/6<span className=' opacity-50'>(30)</span></a> </li>
                            <li><a href="">40/8<span className=' opacity-50'>(53)</span></a> </li>
                            <li><a href="">41/7<span className=' opacity-50'>(30)</span></a> </li>

                        </div>
                        <div className='ml-44 mt-14 text-[18px] font-semibold'>By Vendor</div>
                        <div className=' ml-44 pt-7 font-normal'>
                            <li><a href="">MARC Kessler<span className=' opacity-50'>(23)</span></a> </li>
                            <li><a href="">Reeva<span className=' opacity-50'>(50)</span></a> </li>
                            <li><a href="">Regale<span className=' opacity-50'>(10)</span></a> </li>
                        </div>
                        <div className='ml-44 mt-14 text-[18px] font-semibold'>By Type</div>
                        <div className=' ml-44 pt-7 font-normal'>
                            <li><a href="">Mens Footwear<span className=' opacity-50'>(23)</span></a> </li>
                            <li><a href="">Womens Footwear<span className=' opacity-50'>(50)</span></a> </li>
                        </div>

                    </div>
                </div>


                <div className=' grid grid-cols-2 lg:grid-cols-4  ml-[500px] gap-5 mt-[-590px]'>
                    {
                        menData.map((data) => {
                            return (
                                <div key={data.id}  onClick={()=>navigate(`/shoe/${data.id}`)} className=' relative'>
                                    <img src={data.image} alt="" className='h-[200px] w-[200px]' />
                                    <div className=' mt-[-180px] ml-[130px] absolute rounded-full  bg-red-600 w-14 h-14 text-center pt-4 text-white'>{data.discount}</div>

                                    <div className=' font-medium'>{data.product_name}</div>
                                    <div className=' opacity-60 '> {data.original_price} <a className=' text-red-600 '>{data.discounted_price}</a> </div>
                                </div>
                            )
                        })
                    }
                </div>
                <Footer />


            </div>


        </div>
    )
}

export default Men