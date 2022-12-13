import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import { CreatePage} from './Pages/CreatePage';
import { Layout } from './components/Layout';
import { eventsForUserLoader, CardPage } from './Pages/CardPage';
import { eventLoader, EventPage } from './Pages/EventPage';
import { LoginPage} from './Pages/LoginPage';
import { eventsForAllLoader, EventsPage } from './Pages/EventsPage';

import { RequireAuth } from './hoc/RequireAuth';
import { AuthProvider } from './hoc/AuthProvider';


import { useMediaQuery } from "react-responsive"




const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
        <Route index element={<CardPage />} loader={eventsForUserLoader}/>
        <Route path='create_event' element={
            <RequireAuth>
                <CreatePage />
            </RequireAuth>
        }/>
        <Route path='events' element={<EventsPage/>} loader={eventsForAllLoader}/>
        <Route path='events/:id' element={<EventPage />} loader={eventLoader}/>
        <Route path='login' element={<LoginPage/>}/>
    </Route> 
));



function App() {
    return (
        <AuthProvider>
            <RouterProvider router={router}/>
        </AuthProvider>
    );
}
export default App;