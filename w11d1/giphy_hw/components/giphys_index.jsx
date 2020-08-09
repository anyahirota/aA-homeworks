import React from 'react';

import GiphysIndexItem from './giphys_index_item';

const GiphysIndex = ({giphys}) => {
    return (
        <div>
            <ul>
                {giphys.map(giphy => {
                    return (
                        <li><GiphysIndexItem giphy={giphy}/></li>
                    )
                })} 
            </ul>
        </div>
    )
}

export default GiphysIndex; 