import React from 'react';
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