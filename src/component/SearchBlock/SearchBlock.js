import React from 'react';

import "./searchBlock.css";
import ItemStatusFilter from '../ItemStatusFilter'

const SearchBlock = () => {
    const SearchBlockText = 'What are you want to search';
    return ( 
        <div className="SearchBlock d-flex">
        <input 
            className="form-control mr-3" 
            placeholder = { SearchBlockText } 
        />
        <ItemStatusFilter />
        </div>
    );
};

export default SearchBlock;