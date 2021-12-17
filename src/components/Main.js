import React from 'react'
import '../styles/tailwind_css/directives.css';
import instagramLogo from '../assets/owner/instagram.png';
import twitterLogo from '../assets/owner/twitter.png';
import otherLogo from '../assets/owner/more.png';
import { useEffect, useState } from 'react';

const Main = ({selectedPunk, punkListData}) => {

    const [activePunk, setActivePunk] = useState(punkListData[0])

    useEffect(() => {
        setActivePunk(punkListData[selectedPunk])
    }, [punkListData, selectedPunk]) // dependency array - the page will update if array elements change without refreshing

    return (
        <div className="text-white flex flex-wrap justify-between overflow-hidden border-b-[1px] border-solid border-white pb-[20px] mt-[10px]">
            
            <img className="rounded-lg h-[50vh]" src={activePunk.image_original_url} alt="Active Punk"/>

            <div className="flex flex-col flex-1 justify-between ml-4">

                <div className="flex items-center">
                    <div className="font-[900] text-white text-9xl">{activePunk.name}</div>
                    <div className="font-[900] text-[#a1a5b0] text-6xl">•#{activePunk.token_id}</div>
                </div>

                <div className="flex items-center">
                    <a href={"https://testnets.opensea.io/"+activePunk.owner.address}><img src={activePunk.owner.profile_img_url} alt="owner avatar" className="mr-4 bg-white rounded-full h-14 w-14" /></a>
                    <div>
                        <div>{activePunk.owner.address}</div>
                        <div className="text-[#00bcd4]"><a href="https://github.com/ins4w/cryptopunks-clone">@angelmejia</a></div>
                    </div>
                </div>

            </div>

            <div className="flex items-end">
                <a href="https://instagram.com/ins4w"><img className="cursor-pointer border-[1px] border-solid border-white rounded-full p-4 w-20 h-20" src={instagramLogo} alt="Instagram Logo"/></a>
                <a href="https://twitter.com/amejialz"><img className="cursor-pointer border-[1px] border-solid border-white rounded-full p-4 w-20 h-20 mx-4" src={twitterLogo} alt="Twitter Logo"/></a>
                <a href="https://linkedin.com/in/angel-a-mejia"><img className="cursor-pointer border-[1px] border-solid border-white rounded-full p-4 w-20 h-20" src={otherLogo} alt="GitHub Link"/></a>
            </div>

        </div>
    )
}

export default Main
