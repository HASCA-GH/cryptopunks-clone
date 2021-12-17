import React from 'react'
import '../styles/tailwind_css/directives.css';
import instagramLogo from '../assets/owner/instagram.png';
import twitterLogo from '../assets/owner/twitter.png';
import otherLogo from '../assets/owner/more.png';

const Main = ({activePunk}) => {
    return (
        <div className="text-white">

            <img src="https://ipfs.io/ipfs/bafybeigqkficum3anns36jid3dxvc4yfauyuvqjulbg43n23qxn3ce3tyu" alt=""/>

            <div>

                <div>
                    <div>Punk name</div>
                    <div>Punk ID</div>
                </div>

                <div>
                    <img />
                    <div>
                        <div>Owner token</div>
                        <div>Owner username</div>
                    </div>
                </div>

            </div>

            <div>
                <img src={instagramLogo} alt=""/>
                <img src={twitterLogo} alt=""/>
                <img src={otherLogo} alt=""/>
            </div>

        </div>
    )
}

export default Main
