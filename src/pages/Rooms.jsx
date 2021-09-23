import React from 'react';
import { Link } from 'react-router-dom';

import Hero from '../components/Hero';
import Banner from '../components/Banner';
import RoomsContainer from '../components/RoomsContainer';

const Rooms = () => {
    return (
        <>
            <Hero hero="roomsHero">
                <Banner title="Our Rooms">
                    <Link to="/" className="btn-primary">
                        Return to Home
                    </Link>
                </Banner>
            </Hero>
            <RoomsContainer />
        </>
    )
}

export default Rooms;
