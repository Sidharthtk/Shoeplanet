import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

function Home() {
    return (
        <div >

            <Header/>
            <div className='image'>
                <img src="./assets/Website-banner-1880-x-720_1950x.jpg" alt="" />
            </div>
            <div className=' text-center p-14'>
                <h1 className=' text-2xl font-bold'>OUR PRODUCTS</h1>
                <h2 className=' opacity-65 italic'>Top Sellers of the Week</h2>
            </div>
            <div className=''>
                <button className=' ml-[650px] border-[1px] w-[90px] h-[40px] rounded-full '>Men</button>
                <button className=' ml-[30px] w-[90px] h-[40px]'>Women</button>
            </div>

                <div className="carousel w-[1200px] h-[300px] ml-[150px] pt-9">
                    <div id="slide1" className="carousel-item relative w-full gap-5">
                        <img
                            src="./assets/1_713f0fe8-1f01-491a-8548-9770e3186f2e_360x.jpg"
                            className=" w-[290px]" />
                        <img
                            src="./assets/1_a4fb1218-b259-4107-91cb-82eb128aa107_360x.jpg"
                            className=" w-[290px]" />
                        <img
                            src="./assets/1_b9912021-bb27-425d-b5e5-8e717e39701b_360x.jpg"
                            className=" w-[290px]" />
                        <img
                            src="./assets/IMG_0420_360x.jpg"
                            className="w-[290px]" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">

                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>                       
                    </div>
                    
                </div>
                <div className="flex w-full justify-center gap-2 py-2">
                            <a href="#slide1" className="btn btn-xs">1</a>
                            <a href="#slide2" className="btn btn-xs">2</a>
                        </div>
        

            <h1 className='text-center p-14 text-2xl font-bold'>Exclusive Line</h1>

            <div className='flex ml-[160px] gap-8'>
                <img src="./assets/premium_zen-banner_01_720x.png" className='w-[580px] h-[380px]' />
                <img src="./assets/premium_zen-banner_02_720x.webp" className='w-[580px] h-[380px]' />
            </div>

            <h1 className='text-center p-16 text-2xl font-bold'>Collections</h1>
            <div className='flex h-[280px] justify-evenly'>
                <img src="./assets/Category-Banner-Men_95b70650-d9e8-4eb4-ad04-4958497fbca7_540x.png" alt="" />
                <img src="./assets/Category-Banner-Women_b8b92f37-ff4c-4626-a4c0-742f0c8f0f7e_540x.png" alt="" />
                <img src="./assets/category-banner-accessories_cdec79e8-c458-48be-bc57-10a75c07f249_540x.png" alt="" />
            </div>

            <h1 className='text-center p-16 text-2xl font-bold'>Best Sellers Of the Week</h1>
            <div className='flex justify-center h-[390px]'>
                <img src="./assets/best-seller-1_7a55d1ac-fbff-449c-ab7b-2f9e13ef42ea_1512x.png" alt="" />
            </div>

            <Footer/>

        </div>
    )
}

export default Home