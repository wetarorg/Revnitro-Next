import React from 'react'

import PropTypes from 'prop-types'

const Blogcard1 = (props) => {
  return (
    <>
      <div className={`blogcard1-speaker ${props.rootClassName} `}>
        <img alt="image" src={props.image} className="blogcard1-image" />
        <div className="blogcard1-deails">
          <h3 className="blogcard1-name">{props.name}</h3>
          <button type="button" className="blogcard1-button button">
            <span>
              <span>Read</span>
              <br></br>
            </span>
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .blogcard1-speaker {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            margin-right: 0px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            background-color: var(--dl-color-gray-black);
          }
          .blogcard1-image {
            width: 100%;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .blogcard1-deails {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .blogcard1-name {
            color: var(--dl-color-gray-white);
            font-size: 12px;
            font-style: normal;
            font-weight: 600;
          }
          .blogcard1-button {
            color: #ff0000;
            padding: 0px;
            font-size: 20px;
            background-color: transparent;
          }

          .blogcard1-root-class-name8 {
            max-width: 320px;
          }

          .blogcard1-root-class-name47 {
            margin-right: 0px;
          }
          .blogcard1-root-class-name48 {
            margin-right: 0px;
          }
          .blogcard1-root-class-name49 {
            margin-right: 0px;
          }

          .blogcard1-root-class-name51 {
            margin-right: 0px;
          }
          .blogcard1-root-class-name52 {
            margin-right: 0px;
          }
          .blogcard1-root-class-name53 {
            margin-right: 0px;
          }
          .blogcard1-root-class-name54 {
            margin-right: 0px;
          }
          .blogcard1-root-class-name55 {
            margin-right: 0px;
          }
          @media (max-width: 991px) {
            .blogcard1-name {
              font-size: 20px;
            }
          }
          @media (max-width: 767px) {
            .blogcard1-speaker {
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .blogcard1-name {
              font-size: 14px;
            }
          }
        `}
      </style>
    </>
  )
}

Blogcard1.defaultProps = {
  rootClassName: '',
  button: 'Button',
  name: 'Samantha Johnson',
  detail: 'CEO, Opary',
  linktext: 'https://example.com',
  text: 'Read',
  image: '5caff76b-e5de-4574-b8e4-040b6183fe63',
}

Blogcard1.propTypes = {
  rootClassName: PropTypes.string,
  button: PropTypes.string,
  name: PropTypes.string,
  detail: PropTypes.string,
  linktext: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string,
}

export default Blogcard1
