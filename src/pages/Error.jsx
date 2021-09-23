import React from 'react';
import { Link } from 'react-router-dom';

import Hero from '../components/Hero';
import Banner from '../components/Banner';

const Error = () => {
    return (
        <Hero>
            <Banner title="404" subtitle="Oops! Page Not Found">
                <Link to="/" className="btn-primary">
                    Go Back to Home
                </Link>
            </Banner>
        </Hero>
    )
}

export default Error;
