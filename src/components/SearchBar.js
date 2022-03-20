import React from "react";;

const SearchBar = ({searchfield,searchchange}) => {
    return (
        <div className="pa2">
        <input 
        className="tc pa3 ba b--green bg-lightest-blue"
        type='search' 
        placeholder = 'search robots' 
        onChange={searchchange}/>
        </div>
    );
}

export default SearchBar;