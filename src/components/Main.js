import React from 'react'
import '../styles/tailwind_css/directives.css';
import './Main.css'
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
        <div className="main-container text-white flex  justify-between overflow-hidden border-b-[1px] border-solid border-white pb-[20px] mt-[10px]">
            
            <img className="selected-punk rounded-lg h-[50vh]" src={activePunk.image_original_url} alt="Active Punk"/>

            <div className="details-container flex flex-col flex-1 justify-between ml-8">

                <div className="name-hyper flex items-center">
                    <div className="name-container font-[900] text-white text-8xl">{activePunk.name}</div>
                    <div className="name-container font-[900] text-[#a1a5b0] text-6xl">•#{activePunk.token_id}</div>
                </div>

                <div className="owner-container flex items-center">
                    <a href={"https://testnets.opensea.io/"+activePunk.owner.address}><img src={activePunk.owner.profile_img_url} alt="owner-avatar" className="owner-avatar mr-4 bg-white rounded-full h-14 w-14" /></a>
                    <div className="owner-details">
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
