import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import { Row, Col } from "reactstrap";

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Top Skills',
    paragraph: 'I know a few things and use a bunch of technologies. Here are the ones i use often:'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <Row>
              <Col>
                <div className="tiles-item reveal-from-bottom">
                  <div className="tiles-item-inner">
                    <div className="features-tiles-item-header">

                      <div className="features-tiles-item-image mb-16">
                        <Image
                          src={require('./../../assets/images/icons8-python.svg')}
                          alt="Features tile icon 01"
                          width={64}
                          height={64} />
                      </div>
                    </div>
                    <div className="features-tiles-item-content">
                      <h4 className="mt-0 mb-8">
                        Python
                    </h4>
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
                  <div className="tiles-item-inner">
                    <div className="features-tiles-item-header">
                      <div className="features-tiles-item-image mb-16">
                        <Image
                          src={require('./../../assets/images/icons8-javascript.svg')}
                          alt="Features tile icon 02"
                          width={64}
                          height={64} />
                      </div>
                    </div>
                    <div className="features-tiles-item-content">
                      <h4 className="mt-0 mb-8">
                        Javascript
                    </h4>

                    </div>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
                  <div className="tiles-item-inner">
                    <div className="features-tiles-item-header">
                      <div className="features-tiles-item-image mb-16">
                        <Image
                          src={require('./../../assets/images/icons8-django.svg')}
                          alt="Features tile icon 03"
                          width={64}
                          height={64} />
                      </div>
                    </div>
                    <div className="features-tiles-item-content">
                      <h4 className="mt-0 mb-8">
                        Django
                    </h4>
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="tiles-item reveal-from-bottom">
                  <div className="tiles-item-inner">
                    <div className="features-tiles-item-header">
                      <div className="features-tiles-item-image mb-16">
                        <Image
                          src={require('./../../assets/images/icons8-react-native.svg')}
                          alt="Features tile icon 04"
                          width={64}
                          height={64} />
                      </div>
                    </div>
                    <div className="features-tiles-item-content">
                      <h4 className="mt-0 mb-8">
                        React
                    </h4>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>

        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;