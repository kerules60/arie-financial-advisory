import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import Api from '../../api/Api'

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoModalActive: false,
      loans: undefined
    };
    this.onChangeModal = this.onChangeModal.bind(this);
  }

  onChangeModal (e) {
    e.preventDefault();
    this.setState(prevState => ({
      videoModalActive: !prevState.videoModalActive
    }));
  }
  getLoanTypes = () => {
    console.log("I'm here!!");
    Api.getLoanTypes()
      .then((response) => {
        if (response){
          // console.log('THIS IS THE RESPONSE WE GET ', response);
          const loans= response.data;
          this.setState({loans: loans});

        }
      })
  }
  componentWillMount() {
    this.getLoanTypes();
  }

    render() {
      return (
        <div className="container-sm">
          <div className='hero-inner section-inner has-top-divider has-bottom-divider'>
            <div className="hero-content">
              <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                Jump start your Business in the right direction
              </h1>
              <div className="container-xs">
                <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                  Our landing page template works on all devices, so you only have to set it up once, and get
                  beautiful results forever.
                </p>
                <div className="reveal-from-bottom" data-reveal-delay="600">
                  <ButtonGroup>
                    <Button tag="a" color="primary" wideMobile onClick='#'>
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
                  href="#0"
                  aria-controls="video-modal"
                  onClick={this.onChangeModal}
              >
                <Image
                    className="has-shadow"
                    src={require('./../../assets/images/video-placeholder.jpg')}
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
    );
  }
}
export default HomePage;