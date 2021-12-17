import React from 'react'
import '../styles/tailwind_css/directives.css';
import weth from '../assets/weth.png'

function CollectionCard({ id, name, traits, image}) {
    return (
        <div className="text-white bg-[#1a1c1e] w-[300px] h-[500px] rounded-[20px] mr-[30px] overflow-hidden cursor-pointer">
            <img src={image} alt="Some Punk NFT"/>
            <div className="p-[20px]"> {/* details - padding*/}

                <div className="text-[20px] font-[900]">
                    {name}
                    <div className="text-[#a1a5b0] text-[18px] font-[600]">•#{id}</div>
                </div>

                <div className="flex items-center mt-[10px] object-contain">
                    <img className="w-[15px] h-[30px]" src={weth} alt="Ether icon"/>
                    <div className="ml-[5px] font-[600]">
                        {traits[0]?.value}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CollectionCard
