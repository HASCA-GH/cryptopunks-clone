import React from 'react'
import '../styles/tailwind_css/directives.css'; // directives for Tailwind styles
import CollectionCard from './CollectionCard'

function PunkList({punkListData}) {
    return (
        <div className="flex cursor-pointer overflow-x-scroll mt-[20px] pb-[20px] border-b-[1px] border-solid border-white scrollbar-hide">
            {punkListData.map(punk => (
                <div>
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
