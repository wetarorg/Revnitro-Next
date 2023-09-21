import React from 'react'

import PropTypes from 'prop-types'

const Speaker = (props) => {
  return (
    <>
      <div className={`speaker-speaker ${props.rootClassName} `}>
        <img alt="image" src={props.image} className="speaker-image" />
        <div className="speaker-deails">
          <h3 className="speaker-name">{props.name}</h3>
          <a
            href={props.linktext}
            target="_blank"
            rel="noreferrer noopener"
            className="speaker-link"
          >
            {props.text}
          </a>
        </div>
      </div>
      <style jsx>
        {`
          .speaker-speaker {
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
          .speaker-image {
            width: 100%;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .speaker-deails {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .speaker-name {
            color: var(--dl-color-gray-white);
            font-size: 12px;
            font-style: normal;
            font-weight: 600;
          }
          .speaker-link {
            color: var(--dl-color-gray-700);
            font-size: 20px;
          }

          .speaker-root-class-name8 {
            max-width: 320px;
          }

          .speaker-root-class-name45 {
            margin-right: 0px;
          }

          .speaker-root-class-name47 {
            margin-right: 0px;
          }
          .speaker-root-class-name48 {
            margin-right: 0px;
          }
          .speaker-root-class-name49 {
            margin-right: 0px;
          }

          .speaker-root-class-name51 {
            margin-right: 0px;
          }
          .speaker-root-class-name52 {
            margin-right: 0px;
          }
          .speaker-root-class-name53 {
            margin-right: 0px;
          }
          .speaker-root-class-name54 {
            margin-right: 0px;
          }
          .speaker-root-class-name55 {
            margin-right: 0px;
          }
          @media (max-width: 991px) {
            .speaker-name {
              font-size: 20px;
            }
          }
          @media (max-width: 767px) {
            .speaker-speaker {
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .speaker-name {
              font-size: 14px;
            }
          }
        `}
      </style>
    </>
  )
}

Speaker.defaultProps = {
  linktext: 'https://example.com',
  name: 'Samantha Johnson',
  rootClassName: '',
  image: '5caff76b-e5de-4574-b8e4-040b6183fe63',
  text: 'Read',
  detail: 'CEO, Opary',
}

Speaker.propTypes = {
  linktext: PropTypes.string,
  name: PropTypes.string,
  rootClassName: PropTypes.string,
  image: PropTypes.string,
  text: PropTypes.string,
  detail: PropTypes.string,
}

export default Speaker
