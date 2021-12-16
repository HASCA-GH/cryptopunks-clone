import React from 'react'
import '../styles/tailwind_css/directives.css';
import weth from '../assets/weth.png'

function CollectionCard({ id, name, traits, image}) {
    return (
        <div>
            <img src={image} alt="Some Punk NFT"/>
            <div className="text-white">details</div>
            <div className="text-white">{name} <div>-#{id}</div></div>
            <div>
                <img src={weth} alt="Ether icon"/>
                <div className="text-white">{traits[0]?.value}</div>
            </div>
        </div>
    )
}

export default CollectionCard
