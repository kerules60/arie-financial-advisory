import React from 'react';
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ServicesPage from "../components/sections/ServicesPage";
import ContactUsForm from "../components/sections/ContactUsForm"

const About = () => {

    return (
        <>
            <Header className="illustration-section-01" />
            {/*<ServicesPage invertMobile topDivider imageFill className="illustration-section-02" />*/}
            <ContactUsForm />
            <Footer footer />
        </>
    );
}

export default About;