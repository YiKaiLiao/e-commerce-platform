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
            <input
                type="text"
                placeholder="Search"
                value={query}
                onChange={handleInputChange}
            />
            <button type="submit"><RxMagnifyingGlass /></button>

        </form>
    );
}

export default SearchBar;
