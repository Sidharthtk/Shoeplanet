import React, { useMemo, useState } from 'react'
import { data, Link, useNavigate } from 'react-router-dom'
import { menData, womenData } from '../../data'

function Header() {
    
    const navigate=useNavigate()

    const [querry, setQuery] = useState("")

    const searchResult = useMemo(() => {
        return menData.filter((data) => data.product_name.toLowerCase().includes(querry.toLowerCase())) || womenData.filter((data) => data.product_name.toLowerCase().includes(querry.toLowerCase()))

    }, [querry])

    console.log(searchResult)
    return (

        <div>
            <div className=' text-center bg-gray-500 p-2 text-white text-[14px]'>
                <p>Rs.150 Shipping Charges-No Return or Exchange on 70% off articles.</p>
            </div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <img src="../assets/110-x-33_150x@2x.jpeg" />

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <Link to="/sale"><li><a>11.11 Sale</a></li></Link>
                        <Link to=""><li><a>New Arrivals</a></li></Link>
                        <Link to="/men"><li><a>Men</a></li></Link>
                        <Link to="/women"><li><a>Women</a></li></Link>
                    </ul>
                </div>
                <div className=" navbar-end pr-6 relative w-fit  ">
                    <input value={querry} onChange={(e) => setQuery(e.target.value)} type="text" placeholder='Search' className=' border-black border-[1px] rounded-xl pl-3' />
                    <img src="../assets/search.svg" className=' size-5 mr-5  ' />
                    <div className='absolute bg-slate-200 top-8 -left-5 cursor-pointer z-10 ml-3 '>
                        {querry && searchResult.map((data) => {
                            return (
                                <div  onClick={()=>navigate(`/shoe/${data.id}`)}  key={data.id} className=' hover:bg-slate-300 p-2  '>
                                    {data.product_name}
                                </div>
                            )
                        })}
                    </div>
                </div>




                {/* cart */}
                <div className="drawer drawer-end navbar-end z-10">

                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer-4" className="drawer-button btn"> <img src="../assets/cart2.svg" className=' size-5 drawer ' /></label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                            {/* Sidebar content here */}
                            <h1 className=' font-semibold text-[17px] stat-title'>SHOPPING CART</h1>


                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header