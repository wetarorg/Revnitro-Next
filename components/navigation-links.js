import React from 'react'

import PropTypes from 'prop-types'

const NavigationLinks = (props) => {
  return (
    <>
      <nav className={`navigation-links-nav ${props.rootClassName} `}>
        <span className="navigation-links-text">{props.text}</span>
        <span className="navigation-links-text1">{props.text1}</span>
        <span className="navigation-links-text2">{props.text2}</span>
        <span className="navigation-links-text3">{props.text3}</span>
        <span className="navigation-links-text4">{props.text4}</span>
      </nav>
      <style jsx>
        {`
          .navigation-links-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navigation-links-text {
            color: var(--dl-color-gray-white);
          }
          .navigation-links-text1 {
            color: var(--dl-color-gray-white);
            margin-left: var(--dl-space-space-twounits);
          }
          .navigation-links-text2 {
            color: var(--dl-color-gray-white);
            margin-left: var(--dl-space-space-twounits);
          }
          .navigation-links-text3 {
            color: var(--dl-color-gray-white);
            margin-left: var(--dl-space-space-twounits);
          }
          .navigation-links-text4 {
            color: var(--dl-color-gray-white);
            margin-left: var(--dl-space-space-twounits);
          }

          @media (max-width: 767px) {
            .navigation-links-nav {
              align-items: flex-start;
              flex-direction: column;
              background-color: var(--dl-color-gray-black);
            }
            .navigation-links-text {
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-text1 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-text2 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-text3 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-text4 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

NavigationLinks.defaultProps = {
  rootClassName: '',
  text1: 'Features',
  text3: 'Team',
  text4: 'Blog',
  text2: 'Pricing',
  text: 'About',
}

NavigationLinks.propTypes = {
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  text2: PropTypes.string,
  text: PropTypes.string,
}

export default NavigationLinks
