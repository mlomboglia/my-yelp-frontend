import React from 'react';
import { NavBar } from '../NavBar/NavBar';
import { SubNav } from '../NavBar/SubNav/SubNav';
import { SearchResultsSummary } from './SearchResultsSummary/SearchResultsSummary';
import { SearchResults } from './SearchResults/SearchResults';
import { useLocation } from 'react-router-dom'

export function Search() {

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const desc = params.get('find_desc');
    const loc = params.get('find_loc');
    
    return (
        <div>
            <NavBar term={desc} location={loc} />
            <SubNav />
            <SearchResultsSummary term={desc} location={loc} />
            <SearchResults />
        </div>
    );
}