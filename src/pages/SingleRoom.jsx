import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import amgs from '../images/room-1.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import StyledHero from '../components/StyledHero';
import { RoomContext } from '../Context';

export default class SingleRoom extends Component {
    constructor(props) {
        super(props);
        // console.log(this.props);
        this.state = {
            roomId: this.props.match.params.roomId,
            amgs,
        }
    }

    static contextType = RoomContext;

    render(){
        const { getRoom } = this.context;
        const room = getRoom(this.state.roomId);
        if(!room) {
            return (
                <Hero hero="roomsHero">
                    <Banner title="No Such Room Could be Found">
                        <Link to="/rooms" className="btn-primary">
                            Back to Rooms
                        </Link>
                    </Banner>
                </Hero>
            )
        }

        const { name, description, capacity, size, price, extras, breakfast, pets, images } = room;
        const [mainImg, ...defaultImg] = images;

        return (
            <>
                <StyledHero img={mainImg || this.state.amgs}>
                    <Banner title={`${name} Room`}>
                        <Link to="/rooms" className="btn-primary">
                            Back to Rooms
                        </Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {defaultImg.map((image, i) => (
                            <img key={i} src={image} alt={name} />
                        ))}
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>Details</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>Info</h3>
                            <h6>Price: ${price}</h6>
                            <h6>Size: {size}SQFT</h6>
                            <h6>
                                Max Capacity: {
                                    capacity > 1 ? `${capacity} People` : `${capacity} Person`
                                }
                            </h6>
                            <h6>
                                {pets ? "Pets are Allowed" : "No Pets are Allowed"}
                            </h6>
                            <h6>{breakfast && "Free Breakfast"}</h6>
                        </article>
                    </div>
                </section>
                <section className="room-extras">
                    <h6>Extras</h6>
                    <ul className="extras">
                        {extras.map((extra, i) => (
                            <li key={i}>- {extra}</li>
                        ))}
                    </ul>
                </section>
            </>
        )
    }
}