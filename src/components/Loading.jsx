import React from 'react';

import load from '../images/gif/loading-gear.gif';

export default function Loading() {
    return (
        <div className="loading">
            <h4>Loading...</h4>
            <img src={load} alt="Loading..." />
        </div>
    )
}
