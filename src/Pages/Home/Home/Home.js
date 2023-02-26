import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import Banner from '../Banner/Banner';
import Section from '../services/Section/Section';
import Services from '../services/Services';
import WorkSection from '../WorkSection/WorkSection';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Section></Section>
            <WorkSection></WorkSection>
        </div>

    );
};

export default Home;