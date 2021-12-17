import React from 'react'
import '../styles/tailwind_css/directives.css';
import instagramLogo from '../assets/owner/instagram.png';
import twitterLogo from '../assets/owner/twitter.png';
import otherLogo from '../assets/owner/more.png';

const Main = ({activePunk}) => {
    return (
        <div className="text-white flex flex-wrap justify-between overflow-hidden">
            
            <img className="rounded-lg h-[50vh]" src="https://ipfs.io/ipfs/bafybeigqkficum3anns36jid3dxvc4yfauyuvqjulbg43n23qxn3ce3tyu" alt=""/>

            <div className="flex flex-col flex-1 justify-between ml-4">

                <div className="flex">
                    <div>Punk</div>
                    <div>#ID</div>
                </div>

                <div className="flex items-center">
                    <div className="mr-4 bg-white rounded-full h-10 w-10">a</div>
                    <div>
                        <div>Owner token</div>
                        <div>Owner username</div>
                    </div>
                </div>

            </div>

            <div className="flex items-end">
                <img src={instagramLogo} alt=""/>
                <img src={twitterLogo} alt=""/>
                <img src={otherLogo} alt=""/>
            </div>

        </div>
    )
}

export default Main
