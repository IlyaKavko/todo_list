import React from 'react';

import "./searchBlock.css";
import ItemStatusFilter from '../ItemStatusFilter'

const SearchBlock = () => {
    const SearchBlockText = 'What are you want to search';
    return ( 
        <div className="search-block">
        <input placeholder = { SearchBlockText } />
        <ItemStatusFilter/>
        </div>
    );
};

export default SearchBlock;