import { Link, useSearchParams, useLoaderData, defer, Await } from 'react-router-dom';
import axios from "axios"
import { EventsFilter } from '../components/EventsFilter';
import {useMediaQuery} from 'react-responsive'
import { Suspense } from 'react';

const EventsPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const cardsQuery = searchParams.get('card') || '';

    const {AllEvents} = useLoaderData();
    const eventsDict = useLoaderData();
    const isMobile1 = useMediaQuery({
        query: "(min-width: 960px)"
    });
  return (
    <main class="uk-container uk-container-large" uk-height-viewport="expand: true">
        <EventsFilter setSearchParams={setSearchParams} cardsQuery={cardsQuery}/>
        <Suspense fallback={<div uk-spinner="ratio: 3" class="uk-position-center"></div>}>
        <Await resolve={AllEvents}>
        {isMobile1 ? (
            <div id="my-event-block" uk-slider="sets: true" class="uk-slider uk-slider-container">
                <div class="uk-position-relative uk-margin-small-top uk-visible-toggle">
                    <ul id="my-event-block-list" class="uk-slider-items uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l uk-grid">
                        {eventsForAll(AllEvents, cardsQuery)}
                    </ul>
                    <a class="uk-position-center-left uk-position-small uk-hidden-hover uk-icon uk-slidenav-previous uk-slidenav" href="#" uk-slidenav-previous="" uk-slider-item="previous"><svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23 "></polyline></svg></a>
                    <a class="uk-position-center-right uk-position-small uk-hidden-hover uk-icon uk-slidenav-next uk-slidenav" href="#" uk-slidenav-next="" uk-slider-item="next"><svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1 "></polyline></svg></a>
                </div>
                <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"><li uk-slider-item="0" class=""><a href=""></a></li><li uk-slider-item="1" class=""><a href=""></a></li><li uk-slider-item="2" class="uk-active"><a href=""></a></li><li uk-slider-item="3" class=""><a href=""></a></li><li uk-slider-item="4" class=""><a href=""></a></li></ul>
            </div>
        ) : (
        <ul id="my-event-block-list" class="js-filter uk-grid uk-flex uk-flex-wrap uk-child-width-1-2@s uk-child-width-1-3@m"> 
            {eventsForAll(AllEvents, cardsQuery)}
        </ul>
        )}
        </Await>
        </Suspense>
    </main>
    );
}

async function getEventsForAll() {
    try {
        const nowDate = new Date();
        const {data:response} = await axios.post("http://localhost:8000/api/data/token")
        const events = response.map(x => x.data)
        events.sort( (a, b) => new Date(b.date) - new Date(a.date)).forEach(element => {
        if (new Date(element.date) > nowDate) {
            element["tag"] = "tag-next";
        }
        else {
            element["tag"] = "tag-prev";
        }
        const first = element.date.substring(0, 3);
        const second = element.date.substring(3, 6);
        element.date = second + first + element.date.substring(6, element.date.lenght);
        });
        return events;
    
    }
    catch {
        return [];
    }
}

const eventsForAllLoader = async () => {
    return defer({
        AllEvents:  getEventsForAll()
    }) 
}

function eventsForAll(AllEvents, cardsQuery)  { return(
    <Suspense>
        <Await resolve={AllEvents}>
            {
                (EventsMas) => (<>
                {   
                    EventsMas.filter(
                        x => x.tittle.includes(cardsQuery) || x.text.includes(cardsQuery)
                        ).map(x => ( 
                        <li class={"uk-active " + x.tag}>
                            <Link uk-grid
                            key={x.cardId}
                            to={'/events/'+ x.cardId}>
                                    <div class="uk-card uk-card-default uk-card-small card-options">
                                        <div class="uk-card-media-top">
                                            <img src={require("../img-for-events/"+x.img)} class="card-img"/>
                                        </div>
                                        <div class="uk-card-body">
                                            <h4 class="uk-card-tittle card-tittle">{x.tittle}</h4>
                                            <p class="card-text">{x.text}</p>
                                        </div>
                                        <div class="uk-card-footer">
                                            <span uk-icon="icon: info; ratio: 0.8"></span>
                                            <span> </span>
                                            <span class="uk-text-meta">
                                                <time>{x.date}</time>
                                            </span>
                                        </div>
                                    </div>
                            </Link>
                        </li>
                    ))
                }
                </>)
            }
        </Await>
    </Suspense>
)
}
export {EventsPage, eventsForAllLoader};