import React from 'react';
import { Link } from 'react-router-dom';

import Room from './Room';

export default function RoomsList({ rooms }) {

    if(rooms.length === 0) {
        return (
            <div className="empty-search">
                <h3>Oops! Seems Like Theres no Room with that Filter!</h3>
                <Link to="/" className="btn-primary">
                    Go Back to Home
                </Link>
            </div>
        )
    }

    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {rooms.map((room) => (
                    <Room key={room.id} room={room} />
                ))}
            </div>
        </section>
    )
}
