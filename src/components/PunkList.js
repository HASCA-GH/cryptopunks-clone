import React from 'react'
import './Main.css';
import './PunkList.css';
import '../styles/tailwind_css/directives.css'; // directives for Tailwind styles
import CollectionCard from './CollectionCard'

function PunkList({punkListData, setSelectedPunk}) {
    return (
        <div className="list-container punks-container flex overflow-x-scroll mt-[20px] pb-[20px] border-b-[1px] border-solid border-white scrollbar-hide mr-[-30px]">
            {punkListData.map(punk => (
                <div onClick={() => setSelectedPunk(punk.token_id)}>
                    <CollectionCard
                        key={punk.token_id}
                        id={punk.token_id}
                        name={punk.name}
                        traits={punk.traits}
                        image={punk.image_original_url}
                    />
                </div>
            ))}
        </div>
    )
}

export default PunkList
