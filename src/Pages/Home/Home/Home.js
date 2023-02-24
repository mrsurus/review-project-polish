import React from 'react';
import Banner from '../Banner/Banner';
import Section from '../services/Section/Section';
import Services from '../services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Section></Section>
        </div>

    );
};

export default Home;