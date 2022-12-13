import { Outlet, NavLink} from 'react-router-dom';
import { CustomLink } from './CustomLink'
import { useMediaQuery } from "react-responsive"

import { useAuth } from '../hook/useAuth'

const Layout = () => {
    const isMobile = useMediaQuery({
        query: "(min-width: 960px)"
    });
    const {user, signout} = useAuth();
    return(
        <>
        <header class="header">
            <div class="header-bg">           
                <div class="uk-container uk-container-large">
                    <div class="header-flex">
                        <img src="/imgs/logo.svg" alt="logo"/>
                        {isMobile ? (
                            <>
                            <nav class="nav-header">
                            <li>
                                <CustomLink class="header-nav-link" to="/">Главная</CustomLink>
                            </li>
                            <li>
                                <CustomLink class="header-nav-link" to="/events">Мероприятия</CustomLink>
                            </li>
                            <li>
                                <CustomLink class="header-nav-link" to="/create_event">Создать</CustomLink>
                            </li>
                            <li>
                                <CustomLink class="header-nav-link" to="/accept">Подтвердить</CustomLink>
                            </li>
                            </nav>   
                            <div class="user-and-poisk">
                                <form class="uk-search uk-search-default">
                                    <span uk-search-icon></span>
                                    <input class="uk-search-input search-style" type="search" placeholder="Найти ..."/>
                                </form>


                                <img src="/imgs/user.svg" alt="user"/>
                                <div uk-dropdown="pos: bottom-center; mode: click; animation: slide-top; animate-out: true; duration: 300" class="user-dropdown-nav">
                                    <ul class="uk-nav uk-dropdown-nav">
                                        <li><h5>{user != null? user : (<NavLink to="/login">Войти</NavLink>)}</h5></li>
                                        <li><button class="uk-button uk-button-default uk-button-small" onClick={signout}>Выход</button></li>
                                    </ul>
                                </div>             
                                
                            </div>
                            </>
                        ) : (
                            // div uk-dropdown="animation: slide-left; animate-out: true; duration: 700" class="uk-dropdown"
                            <>
                            <img src="/imgs/user.svg" alt="user"/>
                                <div uk-dropdown="pos: bottom-center; mode: click; animation: slide-top; duration: 300" class="uk-dropdown user-dropdown-nav">
                                    <ul class="uk-nav uk-dropdown-nav">
                                        <li><h5>{user != null? user : (<NavLink to="/login">Войти</NavLink>)}</h5></li>
                                        <li><button class="uk-button uk-button-default uk-button-small" onClick={signout}>Выход</button></li>
                                    </ul>
                                </div>  
                            </>
                        )}
                        
                    </div>
                </div>
            </div>
        </header>
        <Outlet/>
        {!isMobile ? (
            <div class="sticky-fix">
                <div class="header-bg">
                    <div class="uk-container uk-container-large">
                        <div class="header-flex">
                            <nav class="nav-header-mobile">
                                <li>
                                    <CustomLink class="header-nav-link" to="/">
                                        <img class="default-color-nav" src={"/mobileNavimgs/nav1.svg"}/>
                                    </CustomLink>
                                </li>
                                <li>
                                    <CustomLink class="header-nav-link" to="/create_event">
                                        <img class="default-color-nav" src={"/mobileNavimgs/nav2.svg"}/>
                                    </CustomLink>
                                </li>
                                <li>
                                    <CustomLink class="header-nav-link" to="/accept">
                                        <img class="default-color-nav" src={"/mobileNavimgs/nav3.svg"}/>
                                    </CustomLink>
                                </li>
                                <li>
                                    <CustomLink class="header-nav-link" to="/events">
                                        <img class="default-color-nav" src={"/mobileNavimgs/nav4.svg"}/>
                                    </CustomLink>
                                </li>
                            </nav>   
                        </div>
                    </div>
                </div>
            </div>
            ) : null}
        </>
    );
}

export {Layout};