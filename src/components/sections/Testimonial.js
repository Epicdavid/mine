import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
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
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: "Like my work?",
  };


  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <div className="container-xs">


            <p className="center-content m-0">I've done and still woring on some stuffs on <a className="text-xxs text-color-primary fw-600 tt-u mb-8" style={{ color: "#03a9f4" }} href="https://github.com/Epicdavid" target="_blank" rel="noopener noreferrer"> Github </a></p>

          </div>
          <br />
          <br />
          <SectionHeader data={sectionHeader} className="center-content" />
          <p className="center-content m-0">Please Consider Hiring <a href="mailto:amuhdavid@gmail.com">me</a></p>
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;