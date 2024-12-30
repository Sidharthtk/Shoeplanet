import React from 'react'

function Footer() {
    return (
        <div className=' pt-11'>
            <div className=' w-full bg-slate-100  '>
                <div className=' bg-slate-100 h-[360px] flex gap-20  ]'>
                    <div className=' mt-[80px] ml-[170px]'>
                        <div className=' font-semibold'>Get in touch</div>
                        <div className=' pt-8 font-thin opacity-70'>
                        <p> info@shoeplanet.pk</p>
                        <p> 042-35884223</p>
                        </div>
                    </div>
                    <div className=' mt-[80px] ml-[130px]'>
                        <div className=' font-semibold'>Get Help</div>
                        <div className=' pt-8 font-thin opacity-70'>
                            <p>Shipping & Delivery </p>
                            <p>  Return & Exchange Policy </p>
                            <p> Privacy Policy </p>
                            <p>Terms & Conditions</p>
                        </div>

                    </div>
                    <div className=' mt-[80px] ml-[-10px]'>
                        <div className=' font-semibold'>Infomation</div>
                        <div className=' pt-8 font-thin opacity-70 '>
                            <p>Reviews</p>
                            <p>Size Guide</p>
                            <p>FAQs</p>
                            <p>Search</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer