import React from 'react'
import Products from './Products'
import Footer from './Footer'

function SaleBar() {
    return (
        <div>
            <div>
                <div className=' bg-gray-500 text-center w-full h-32 text-white text-[20px] font-semibold p-10'>
                    <h1 className=''>11.11 Sale</h1>
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

            </div>

        </div>
        
    )
}

export default SaleBar