import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import Api from "../../api/Api";

class ServicesPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            services: undefined,
            sectionHeader : {
                title: 'Customized Service to fit the needs of any business',
                paragraph: 'Starting a business requires a lot of resources to be readily available at all times. With Arie Financial Advisory, you get more ' +
                    'than just a loan provider. You get a team of experts who will help you with every aspect of your business every step of the way, and ' +
                    'work quickly to help you grow your business. Aries Financial Services offers multiple services to support your business in every aspect '

            }
        };
    }

    fillServices() {
        Api.getServices()
            .then((response) => {
                    if (response) {
                        const dbServices = response.data;
                        this.setState({
                            services: dbServices.map(
                                elem => {
                                    return {serviceName: elem.serviceName, serviceDescription: elem.serviceDescription};
                                }
                            ), isLoading: false
                        });

                    }
                }
            )
    }

    componentDidMount() {
        this.fillServices();
    }


    render() {
        return (
            <div>
                {this.state.isLoading ? (<div>Page is still loading ..</div>) :
                    (
                        <div className="container">
                            <div className="features-split-inner section-inner has-top-divider has-bottom-divider">
                                <br/>
                                <SectionHeader data={this.state.sectionHeader} className="center-content" />
                                <div className="split-wrap invert-mobile invert-desktop align-top">
                                    {/*loop here */}
                                    {this.state.services.map((elem) => (
                                        <div className="split-item">
                                            <div className="split-item-content center-content-mobile " data-reveal-container=".split-item">
                                                <h3 className="mt-0 mb-12">
                                                    {elem.serviceName}
                                                </h3>
                                                <p className="m-0">
                                                    {elem.serviceDescription}
                                                </p>
                                            </div>
                                            <div className={
                                                classNames(
                                                    'split-item-image center-content-mobile',
                                                    'split-item-image-fill'
                                                )}
                                                 data-reveal-container=".split-item">
                                                <Image
                                                    src={require('./../../assets/images/features-split-image-01.png')}
                                                    alt="Features split 01"
                                                    width={528}
                                                    height={396} />
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}


export default ServicesPage;