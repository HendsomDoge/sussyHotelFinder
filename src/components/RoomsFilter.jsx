import React, { useContext } from 'react';

import { RoomContext } from '../Context';
import Title from './Title';

const getUnique = (items, value) => {
    return [...new Set(items.map((item) => item[value]))];
}

export default function RoomsFilter({ rooms }) {
    const context = useContext(RoomContext);
    const { handleChange, type, capacity, price, minPrice, maxPrice, size, minSize, maxSize, breakfast, pets } = context;

    let types = getUnique(rooms, 'type');

    types = ['all', ...types];
    types = types.map((type, i) => (
        <option value={type} key={i}>{type}</option>
    ));

    let roomCapacity = getUnique(rooms, 'capacity');
    roomCapacity = roomCapacity.map((cap, i) => (
        <option key={i} value={cap}>
            {cap}
        </option>
    ));

    return (
        <section className="filter-container">
            <Title title="Search Rooms" />
            <form className="filter-form">
                <div className="form-group">
                    <label htmlFor="type">Room Type</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                        {types}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="capacity">Room Capacity</label>
                    <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
                        {roomCapacity}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Room Price: ${price}</label>
                    <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="size">Room Size</label>
                    <div className="size-inputs">
                    <input
                        type="number"
                        name="minSize"
                        value={minSize}
                        onChange={handleChange}
                        className="size-input"
                    />
                    <input
                        type="number"
                        name="maxSize"
                        value={maxSize}
                        onChange={handleChange}
                        className="size-input"
                    />
                    </div>
                </div>
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
                        <label htmlFor="breakfast">Breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input
                            type="checkbox"
                            name="pets"
                            checked={pets}
                            onChange={handleChange}
                        />
                        <label htmlFor="pets">Pets</label>
                    </div>
                </div>
            </form>
        </section>
    )
}
