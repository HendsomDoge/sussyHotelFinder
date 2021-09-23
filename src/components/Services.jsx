import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

import Title from './Title.jsx';

export default class Services extends Component {

    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "Free and Amazing Cocktails",
                description: "I don't know what to write here please help me, I can't think of anything to write here"
            },
            {
                icon: <FaHiking />,
                title: "Endless Hiking",
                description: "I don't know what to write here please help me, I can't think of anything to write here"
            },
            {
                icon: <FaShuttleVan />,
                title: "Free and Suspicious Shuttle",
                description: "I don't know what to write here please help me, I can't think of anything to write here"
            },
            {
                icon: <FaBeer />,
                title: "Suspicious Beers 😳",
                description: "I don't know what to write here please help me, I can't think of anything to write here"
            },
        ]
    }

    render() {
        return (
            <section className="services">
                <Title title="Services" />
                <div className="services-center">
                    {this.state.services.map((item, i) => (
                        <article key={i} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.description}</p>
                        </article>
                    ))}
                </div>
            </section>
        )
    }
}
