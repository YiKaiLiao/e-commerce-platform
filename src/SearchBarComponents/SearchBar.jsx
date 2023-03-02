import React, { useState } from 'react';
import './SearchBar.scss';
import { RxMagnifyingGlass } from "react-icons/rx";

const SearchBar = (props) => {
    const [query, setQuery] = useState('');

    const handleInputChange = event => {
        setQuery(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        props.onSearch(query);
    };

    return (
        <form className='inputForm' onSubmit={handleSubmit}>
            <div className='nav-fill'>
                <input
                    type="text"
                    placeholder="Search"
                    value={query}
                    onChange={handleInputChange}
                />
            </div>
            <div className='nav-right'><button type="submit"><RxMagnifyingGlass /></button></div>
        </form>
    );
}

export default SearchBar;
