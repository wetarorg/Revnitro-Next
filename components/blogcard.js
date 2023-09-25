import React from 'react'

import PropTypes from 'prop-types'

const Blogcard = (props) => {
  return (
    <>
      <div className={`blogcard-speaker ${props.rootClassName} `}>
        <img alt="image" src={props.image} className="blogcard-image" />
        <div className="blogcard-deails">
          <h3 className="blogcard-name">{props.name}</h3>
          <button type="button" className="blogcard-button button">
            <span>
              <span>Read</span>
              <br></br>
            </span>
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .blogcard-speaker {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            margin-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            background-color: var(--dl-color-gray-black);
          }
          .blogcard-image {
            width: 100%;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .blogcard-deails {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .blogcard-name {
            color: var(--dl-color-gray-white);
            font-size: 12px;
            font-style: normal;
            font-weight: 600;
          }
          .blogcard-button {
            color: #ff0000;
            padding: 0px;
            font-size: 20px;
            background-color: transparent;
          }

          .blogcard-root-class-name8 {
            max-width: 320px;
          }

          .blogcard-root-class-name47 {
            margin-right: 0px;
          }
          .blogcard-root-class-name48 {
            margin-right: 0px;
          }
          .blogcard-root-class-name49 {
            margin-right: 0px;
          }

          .blogcard-root-class-name51 {
            margin-right: 0px;
          }
          .blogcard-root-class-name52 {
            margin-right: 0px;
          }
          .blogcard-root-class-name53 {
            margin-right: 0px;
          }
          .blogcard-root-class-name54 {
            margin-right: 0px;
          }
          .blogcard-root-class-name55 {
            margin-right: 0px;
          }
          @media (max-width: 991px) {
            .blogcard-name {
              font-size: 20px;
            }
          }
          @media (max-width: 767px) {
            .blogcard-speaker {
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .blogcard-name {
              font-size: 14px;
            }
          }
        `}
      </style>
    </>
  )
}

Blogcard.defaultProps = {
  linktext: 'https://example.com',
  name: 'Samantha Johnson',
  rootClassName: '',
  button: 'Button',
  image: '5caff76b-e5de-4574-b8e4-040b6183fe63',
  text: 'Read',
  detail: 'CEO, Opary',
}

Blogcard.propTypes = {
  linktext: PropTypes.string,
  name: PropTypes.string,
  rootClassName: PropTypes.string,
  button: PropTypes.string,
  image: PropTypes.string,
  text: PropTypes.string,
  detail: PropTypes.string,
}

export default Blogcard
