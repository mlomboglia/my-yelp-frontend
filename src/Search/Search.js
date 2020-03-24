import React from 'react';
import { NavBar } from '../NavBar/NavBar';
import { SubNav } from '../NavBar/SubNav/SubNav';
import { SearchResultsSummary } from './SearchResultsSummary/SearchResultsSummary';
import { SearchResults } from './SearchResults/SearchResults';
import { useLocation, useHistory } from 'react-router-dom';
import { useBusinessSearch } from '../hooks/yelp-api/useBusinessSearch';

export function Search() {

    const location = useLocation();
    const history = useHistory()

    const params = new URLSearchParams(location.search);
    const desc = params.get('find_desc');
    const loc = params.get('find_loc');

    if (!desc || !loc) {
        history.push('/');
    }

    const [businesses, amountResults, searchParams, performSearch] = useBusinessSearch(desc, loc);

    function search(term, location) {
        const urlEncodedTerm = encodeURI(term);
        const urlEncodedLocation = encodeURI(location);
        history.push(`/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`);
        performSearch({term, location});
    }

    return (
        <div>
            <NavBar term={desc} location={loc} search={search} />
            <SubNav />
            <SearchResultsSummary   term={searchParams.term} 
                                    location={searchParams.location}
                                    amountResults={amountResults}
                                    showResults={businesses ? businesses.length : 0}
            />
            <SearchResults businesses={businesses} />
        </div>
    );
}