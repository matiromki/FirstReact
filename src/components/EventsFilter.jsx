import { useState } from 'react'

const EventsFilter = ({setSearchParams, cardsQuery}) => {
    const [search, setSearch] = useState(cardsQuery);
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        const query = form.search.value;

        setSearchParams({card: query});
    }
    return(
        <form autoComplete='off' onSubmit={handleSubmit} class="uk-search uk-search-default uk-width-1-1 uk-padding-small uk-flex uk-flex-between">
            <div class="uk-inline uk-width-1-1 uk-margin-right">
                <span class="uk-form-icon" uk-icon="icon: search"></span>
                <input class="uk-input uk-search-input search-style" type='search' name="search" value={search} onChange={e => setSearch(e.target.value)} placeholder="Найти ..."/>
                
            </div>
            <button type="submit" class="uk-button uk-button-default confirm-button">Найти</button>
        </form>
    );
}

export {EventsFilter};