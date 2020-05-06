import React from 'react';

import "./searchBlock.css";

const SearchBlock = () => {
    const SearchBlockText = 'What are you want to search';
    return ( 
        <div className="search-block">
        <input placeholder = { SearchBlockText } />
        </div>
    );
};

export default SearchBlock;