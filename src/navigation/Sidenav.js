import React from 'react';
import "./Sidenav.css";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MenuIcon from '@mui/icons-material/Menu';
import { Slide } from '@mui/material';



function Sidenav() {
  return ( 
    <div className='sidenav'>
        <img className='sidenav__logo' src="https://www.edigitalagency.com.au/wp-content/uploads/instagram-logo-white-text-black-background.png" alt="" />
    
        <div className="sidenav__buttons">
            <button className="sidenav__button">
                <HomeIcon/>
                <span>Home</span>
            </button>

            <button className="sidenav__button">
                <SearchIcon/>
                <span>Search</span>
            </button>

            <button className="sidenav__button">
                <ExploreIcon/>
                <span>Explore</span>
            </button>

            <button className="sidenav__button">
                <SlideshowIcon/>
                <span>Slideshow</span>
            </button>

            <button className="sidenav__button">
                <ChatIcon/>
                <span>Chat</span>
            </button>

            <button className="sidenav__button">
                <FavoriteBorderIcon/>
                <span>Notification</span>
            </button>

            <button className="sidenav__button">
                <AddCircleOutlineIcon/>
                <span>Create</span>
            </button>
        </div>
        <div className="sidenav__more">
            <button className='sidenav__button'>
                <MenuIcon />
                <span>More</span>
            </button>
        </div>
    </div>
  );
}

export default Sidenav;
