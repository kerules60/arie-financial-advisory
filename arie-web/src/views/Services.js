import React from 'react';
// import sections
// import ServicesPage from '../components/sections/ServicesPage';
// import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
// import HomePage from "../components/sections/HomePage";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ServicesPage from "../components/sections/ServicesPage";

const Services = () => {

    return (
        <>
            <Header className="illustration-section-01" />
            <ServicesPage invertMobile topDivider imageFill className="illustration-section-02" />
            <Footer footer />
        </>
    );
}

export default Services;