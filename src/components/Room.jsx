import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import mgs from '../images/room-6.jpeg';

export default function Room({ room }) {
    const { name, roomId, images, price } = room;

    return (
        <article className="room">
            <div className="img-container">
                <img src={images[0] || mgs} alt="Hotels" />
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>Per Night</p>
                </div>
                <Link to={`/rooms/${roomId}`} className="btn-primary room-link">Features</Link>
            </div>
            <p className="room-info">{name}</p>
        </article>
    )
}

Room.propTypes = {
    room: PropTypes.shape({
        name: PropTypes.string.isRequired,
        roomId: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired,
    })
}
