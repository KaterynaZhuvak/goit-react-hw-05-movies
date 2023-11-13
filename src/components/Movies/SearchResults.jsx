import {SearchItem } from 'components/Movies/SearchItem' 

export const SearchResults = ({ info, location }) => {
    return (
        <ul>
            {info.map(item => <SearchItem key={item.id } id={item.id} name={item.original_title} location={location} />)}
        </ul>
    )
}