import React from 'react';
import ButtonGroup from '../components/elements/ButtonGroup';
import Button from '../components/elements/Button';
import Image from '../components/elements/Image';
import Modal from '../components/elements/Modal';
import Api from "../api/Api";
import SectionHeader from "../components/sections/partials/SectionHeader";
import autoBind from 'react-autobind';
import Testimonial from '../components/sections/Testimonial'
import Cta from '../components/sections/Cta'
import FeaturesTiles from '../components/sections/FeaturesSplit'

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = {
      videoModalActive: false,
      loans: [],
      loading: true,
      sectionHeader : {
        title: 'All the tools you need for your business',
        paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.'
      }
    };

    this.onChangeModal = this.onChangeModal.bind(this);
    this.renderTopSection = this.renderTopSection.bind(this);
  }

  onChangeModal(e) {
    e.preventDefault();
    this.setState(prevState => ({
      videoModalActive: !prevState.videoModalActive
    }));
  }

  getLoanTypes() {
    Api.getLoanTypes()
      .then((response) => {
        if (response) {
          const loans = response.data;
          this.setState({
            loans: loans.map(
                elem => {
                  return {loanName: elem.loanName, loanDescription: elem.loanDescription};
                }
            ), loading: false
          });

        }
      })
  }

  componentDidMount() {
    this.getLoanTypes();
  }

  renderLoansTiles() {
    return (
        <div>
          {this.state.loading ? (<div>Page is still loading ..</div>) :
            (
              <div className="container">
                <div className='features-tiles-inner section-inner pt-0 '>
                  <SectionHeader data={this.state.sectionHeader} className="center-content" />
                  <div className='tiles-wrap center-content push-left'>
                    {this.state.loans.map((elem) =>
                      (
                        <div className="tiles-item ">
                          <div className="tiles-item-inner">
                            <div className="features-tiles-item-header">
                              <div className="features-tiles-item-image mb-16">
                                <Image
                                    src={require('../../src/assets/images/feature-tile-icon-01.svg')}
                                    alt="Features tile icon 01"
                                    width={64}
                                    height={64}/>
                              </div>
                            </div>
                            <div className="features-tiles-item-content">
                              <h4 className="mt-0 mb-8">
                                {elem.loanName}
                              </h4>
                              <p className="m-0 text-sm">
                                {elem.loanDescription}
                              </p>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                  <FeaturesTiles className="illustration-section-02" topDivider/>
                </div>
               </div>
            )
          }
        </div>
    )
  }

  renderTopSection() {
    return (
      <div className="container-sm ">
        <div className='hero-inner section-inner has-top-divider '>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom center-content" data-reveal-delay="200">
              Jump start your Business in the right direction
            </h1>
            <div className="container-xs center-content">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                Opportunity is knocking, and you will need a partner to grow your Business.
                We are here to support determined, entrepreneurs like you with loans, tools and resources
                to grow your business.
              </p>
              <div className="reveal-from-bottom center-content" data-reveal-delay="600">
                <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile href='#'>
                    Get started
                  </Button>
                  <Button tag="a" color="dark" wideMobile href="/">
                    Contact Us
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px"
               data-reveal-delay="800">
            <a
              data-video="https://player.vimeo.com/video/174002812"
              href="#"
              aria-controls="video-modal"
              onClick={this.onChangeModal}
            >
              <Image
                className="has-shadow"
                src={require('../assets/images/video-placeholder.jpg')}
                alt="HomePage"
                width={896}
                height={504}/>
            </a>
          </div>
          <Modal
              id="video-modal"
              show={this.state.videoModalActive}
              handleClose={this.onChangeModal}
              video="https://player.vimeo.com/video/174002812"
              videoTag="iframe"/>
        </div>
      </div>
    )
  }
  renderBottomSection(){
    return(
      <div>
        <Testimonial />
        <Cta />
      </div>
    )
  }

  render() {
    return (
        <div>
          {this.renderTopSection()}
          {this.renderLoansTiles()}
          {this.renderBottomSection()}
        </div>
    )
  }

}
export default HomePage;