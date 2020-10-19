import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: "Some products I've built",
    paragraph: 'Here are some'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Deezisoft Company website
                  </div>
                <h3 className="mt-0 mb-12">
                  Python, Django, React
                  </h3>
                <p className="m-0">
                  A company website, with react front-end and python backend, using django and the rest framework to implent api for core front-end functionality of contact form and company blog.
                      </p>
                <p>
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/deezisoft.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
                <a className="text-xxs text-color-primary text-center fw-600 tt-u mb-8" style={{ color: "#03a9f4", textAlign: "center" }} href="https://deezisoft.com/" target="_blank" rel="noopener noreferrer"> View </a>

              </div>

            </div>



            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  customer management app
                  </div>
                <h3 className="mt-0 mb-12">
                  Python,Django, Bootstrap, heroku, AWS
                  </h3>
                <p className="m-0">
                  A customer management app that, can be integrated into any webapp built with django, for user management. mainly E-commerce for taking care of orders and stuff.
                  </p>
                <p>
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/decux.JPG')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
                <a className="text-xxs text-color-primary text-center fw-600 tt-u mb-8" style={{ color: "#03a9f4", textAlign: "center" }} href="https://decux.herokuapp.com/" target="_blank" rel="noopener noreferrer"> View </a>

              </div>

            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  REIT web application
                  </div>
                <h3 className="mt-0 mb-12">
                  Python-Django-React
                  </h3>
                <p className="m-0">
                  A REIT webapp that allows users buy REITs. with Dashboard and user management.
                  using python as backend and django framework with Rest framework to implent api for core various React front-end functionality.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/flix.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
                <a className="text-xxs text-color-primary text-center fw-600 tt-u mb-8" style={{ color: "#03a9f4", textAlign: "center" }} href="https://fix2flipproperties.com/" target="_blank" rel="noopener noreferrer"> View </a>

              </div>
            </div>



            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Crypto web application
                  </div>
                <h3 className="mt-0 mb-12">
                  Python-Django-React
                  </h3>
                <p className="m-0">
                  A web app for managing, buying and investing in crypto assets. with Dashboard and user management.
                  using python as backend and django framework with Rest framework to implent api for core various React front-end functionality.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/dip.PNG')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
                <a className="text-xxs text-color-primary text-center fw-600 tt-u mb-8" style={{ color: "#03a9f4", textAlign: "center" }} href="https://dippace.com/" target="_blank" rel="noopener noreferrer"> View </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;