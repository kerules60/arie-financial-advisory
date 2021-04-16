import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import Api from "../../api/Api";

class LoansTiles extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      loans: this.props.data || [],
      sectionHeader : {
        title: 'All the tools you need for your business',
        paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.'
      }
    }
  }

  componentWillMount() {
    console.log('THIS IS the Props ', this.props);
  }

  render(){
    if (this.state.loans !== null){
      return (
        <div className="container">
          <div className='features-tiles-inner section-inner pt-0  has-bottom-divider' >
            <SectionHeader data={this.state.sectionHeader} className="center-content" />
            <div className='tiles-wrap center-content push-left'>
              {/*loop the loans here */}
              {this.state.loans.map((elem) => (
                  <div className="tiles-item reveal-from-bottom">
                    <div className="tiles-item-inner">
                      <div className="features-tiles-item-header">
                        <div className="features-tiles-item-image mb-16">
                          <Image
                              src={require('./../../assets/images/feature-tile-icon-01.svg')}
                              alt="Features tile icon 01"
                              width={64}
                              height={64} />
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
              ))}

            </div>
          </div>
        </div>
      );
    }
  }
}

export default LoansTiles;