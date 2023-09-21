import React from 'react'

import PropTypes from 'prop-types'

const Speaker1 = (props) => {
  return (
    <>
      <div className={`speaker1-speaker ${props.rootClassName} `}>
        <img alt="image" src={props.image} className="speaker1-image" />
        <div className="speaker1-deails">
          <h3 className="speaker1-name">{props.name}</h3>
          <div className="speaker1-position">
            <span className="speaker1-caption">{props.detail}</span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .speaker1-speaker {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .speaker1-image {
            width: 100%;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .speaker1-deails {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .speaker1-name {
            color: var(--dl-color-gray-white);
            font-size: 28px;
            font-style: normal;
            font-weight: 600;
          }
          .speaker1-position {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .speaker1-caption {
            color: var(--dl-color-gray-700);
            font-size: 18px;
          }

          .speaker1-root-class-name8 {
            max-width: 320px;
          }

          @media (max-width: 991px) {
            .speaker1-name {
              font-size: 20px;
            }
            .speaker1-caption {
              font-size: 10px;
            }
          }
          @media (max-width: 767px) {
            .speaker1-speaker {
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .speaker1-name {
              font-size: 14px;
            }
            .speaker1-caption {
              font-size: 10px;
            }
          }
        `}
      </style>
    </>
  )
}

Speaker1.defaultProps = {
  rootClassName: '',
  detail: 'CEO, Opary',
  image: 'c4b1128c-6dff-495b-82af-876236e74bf5',
  name: 'Samantha Johnson',
}

Speaker1.propTypes = {
  rootClassName: PropTypes.string,
  detail: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
}

export default Speaker1
