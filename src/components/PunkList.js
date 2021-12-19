import React from 'react';
import './PunkList.css';
import '../styles/tailwind_css/directives.css'; // directives for Tailwind styles
import CollectionCard from './CollectionCard';

const PunkList = ({punkListData, setSelectedPunk}) => {
    return (
        <div className="punks-container flex overflow-x-scroll mt-[20px] pb-[20px] border-b-[1px] border-solid border-white scrollbar-hide">
            {punkListData.map(punk => (
                <div onClick={() => setSelectedPunk(punk.token_id)}>
                    {(punkListData.length - 1) > punk.token_id && (
                        <div className="mr-[20px]">
                            <CollectionCard
                                key={punk.token_id}
                                id={punk.token_id}
                                name={punk.name}
                                traits={punk.traits}
                                image={punk.image_original_url}
                            />
                        </div>
                    )}
                    {(punkListData.length - 1) == punk.token_id && (
                        <div className='last-punk'>
                            <CollectionCard
                                key={punk.token_id}
                                id={punk.token_id}
                                name={punk.name}
                                traits={punk.traits}
                                image={punk.image_original_url}
                            />
                         </div>
                    )}
                </div>
                
            ))}
        </div>
    )
}

export default PunkList
