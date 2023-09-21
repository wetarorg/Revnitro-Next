import React from 'react'

import PropTypes from 'prop-types'

const Raceaccordian = (props) => {
  return (
    <>
      <div className="raceaccordian-container">
        <div className="raceaccordian-one">
          <img
            alt={props.imagealt2}
            src={props.imagesrc2}
            className="raceaccordian-image"
          />
          <div className="raceaccordian-container1">
            <span className="raceaccordian-text">{props.text2}</span>
            <button type="button" className="raceaccordian-button button">
              {props.button2}
            </button>
          </div>
        </div>
        <div className="raceaccordian-two">
          <img
            alt={props.imagealt1}
            src={props.imagesrc1}
            className="raceaccordian-image1"
          />
          <div className="raceaccordian-container2">
            <span className="raceaccordian-text1">{props.text1}</span>
            <button type="button" className="raceaccordian-button1 button">
              {props.button1}
            </button>
          </div>
        </div>
        <div className="raceaccordian-three">
          <img
            alt={props.imagealt11}
            src={props.imagesrc11}
            className="raceaccordian-image2"
          />
          <div className="raceaccordian-container3">
            <span className="raceaccordian-text2">{props.text11}</span>
            <button type="button" className="raceaccordian-button2 button">
              {props.button11}
            </button>
          </div>
        </div>
        <div className="raceaccordian-four">
          <img
            alt={props.imagealt111}
            src={props.imagesrc111}
            className="raceaccordian-image3"
          />
          <div className="raceaccordian-container4">
            <span className="raceaccordian-text3">{props.text111}</span>
            <button type="button" className="raceaccordian-button3 button">
              {props.button111}
            </button>
          </div>
        </div>
        <div className="raceaccordian-five">
          <img
            alt={props.imagealt1111}
            src={props.imagesrc1111}
            className="raceaccordian-image4"
          />
          <div className="raceaccordian-container5">
            <span className="raceaccordian-text4">{props.text1111}</span>
            <button type="button" className="raceaccordian-button4 button">
              {props.button1111}
            </button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .raceaccordian-container {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .raceaccordian-one {
            flex: 0 0 auto;
            width: 20%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .raceaccordian-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .raceaccordian-container1 {
            flex: 0 0 auto;
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            background-image: linear-gradient(
              0deg,
              rgba(0, 3, 4, 0.99) 36%,
              rgba(0, 0, 0, 0) 92%
            );
          }
          .raceaccordian-text {
            color: var(--dl-color-gray-white);
            font-size: 20px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .raceaccordian-button {
            color: var(--dl-color-gray-white);
            border-color: #2200ff;
            border-width: 2px;
            border-radius: var(--dl-radius-radius-radius8);
            background-color: transparent;
          }
          .raceaccordian-two {
            flex: 0 0 auto;
            width: 20%;
            height: 100%;
            display: flex;
            position: relative;
            transition: 0.3s;
            align-items: flex-start;
            flex-direction: column;
          }
          .raceaccordian-two:hover {
            width: 30%;
          }
          .raceaccordian-image1 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .raceaccordian-container2 {
            flex: 0 0 auto;
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            background-image: linear-gradient(
              0deg,
              rgba(0, 3, 4, 0.99) 3%,
              rgba(0, 0, 0, 0) 92%
            );
          }
          .raceaccordian-text1 {
            color: var(--dl-color-gray-white);
            font-size: 20px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .raceaccordian-button1 {
            color: var(--dl-color-gray-white);
            border-color: #2200ff;
            border-width: 2px;
            border-radius: var(--dl-radius-radius-radius8);
            background-color: transparent;
          }
          .raceaccordian-three {
            flex: 0 0 auto;
            width: 20%;
            height: 100%;
            display: flex;
            position: relative;
            transition: 0.3s;
            align-items: flex-start;
            flex-direction: column;
          }
          .raceaccordian-three:hover {
            width: 30%;
          }
          .raceaccordian-image2 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .raceaccordian-container3 {
            flex: 0 0 auto;
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            background-image: linear-gradient(
              0deg,
              rgba(0, 3, 4, 0.99) 3%,
              rgba(0, 0, 0, 0) 92%
            );
          }
          .raceaccordian-text2 {
            color: var(--dl-color-gray-white);
            font-size: 20px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .raceaccordian-button2 {
            color: var(--dl-color-gray-white);
            border-color: #2200ff;
            border-width: 2px;
            border-radius: var(--dl-radius-radius-radius8);
            background-color: transparent;
          }
          .raceaccordian-four {
            flex: 0 0 auto;
            width: 20%;
            height: 100%;
            display: flex;
            position: relative;
            transition: 0.3s;
            align-items: flex-start;
            flex-direction: column;
          }
          .raceaccordian-four:hover {
            width: 30%;
          }
          .raceaccordian-image3 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .raceaccordian-container4 {
            flex: 0 0 auto;
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            background-image: linear-gradient(
              0deg,
              rgba(0, 3, 4, 0.99) 3%,
              rgba(0, 0, 0, 0) 92%
            );
          }
          .raceaccordian-text3 {
            color: var(--dl-color-gray-white);
            font-size: 20px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .raceaccordian-button3 {
            color: var(--dl-color-gray-white);
            border-color: #2200ff;
            border-width: 2px;
            border-radius: var(--dl-radius-radius-radius8);
            background-color: transparent;
          }
          .raceaccordian-five {
            flex: 0 0 auto;
            width: 20%;
            height: 100%;
            display: flex;
            position: relative;
            transition: 0.3s;
            align-items: flex-start;
            flex-direction: column;
          }
          .raceaccordian-five:hover {
            width: 30%;
          }
          .raceaccordian-image4 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .raceaccordian-container5 {
            flex: 0 0 auto;
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            background-image: linear-gradient(
              0deg,
              rgba(0, 3, 4, 0.99) 3%,
              rgba(0, 0, 0, 0) 92%
            );
          }
          .raceaccordian-text4 {
            color: var(--dl-color-gray-white);
            font-size: 20px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .raceaccordian-button4 {
            color: var(--dl-color-gray-white);
            border-color: #2200ff;
            border-width: 2px;
            border-radius: var(--dl-radius-radius-radius8);
            background-color: transparent;
          }
        `}
      </style>
    </>
  )
}

Raceaccordian.defaultProps = {
  text1: 'SUZUKI ENDURANCE',
  text2: 'TVS ONE MAKE CHAMPIONSHIP',
  imagealt11: 'image',
  imagealt1111: 'image',
  imagesrc11: '/external/motorcycle-left-desk-1500w-500w.webp',
  imagealt2: 'image',
  text1111: 'HONDA RACING',
  text: 'TVS ONE MAKE CHAMPIONSHIP',
  button: 'Discover More',
  button2: 'Discover More',
  button11: 'Discover More',
  button1: 'Discover More',
  imagesrc111: '/racingsection/gallery-3-500w.jpg',
  button1111: 'Discover More',
  imagealt1: 'image',
  text111: 'GT CUP',
  imagealt: 'image',
  imagesrc1111: '/racingsection/be-a-racer-400h.jpg',
  text11: 'KTM RC CUP',
  imagesrc1: '/racingsection/0419_2-400h.jpg',
  imagesrc: '6bbb220f-5d4c-47b4-be20-587a1aa7d048',
  imagealt111: 'image',
  button111: 'Discover More',
  imagesrc2: '/racingsection/1-400h.jpg',
}

Raceaccordian.propTypes = {
  text1: PropTypes.string,
  text2: PropTypes.string,
  imagealt11: PropTypes.string,
  imagealt1111: PropTypes.string,
  imagesrc11: PropTypes.string,
  imagealt2: PropTypes.string,
  text1111: PropTypes.string,
  text: PropTypes.string,
  button: PropTypes.string,
  button2: PropTypes.string,
  button11: PropTypes.string,
  button1: PropTypes.string,
  imagesrc111: PropTypes.string,
  button1111: PropTypes.string,
  imagealt1: PropTypes.string,
  text111: PropTypes.string,
  imagealt: PropTypes.string,
  imagesrc1111: PropTypes.string,
  text11: PropTypes.string,
  imagesrc1: PropTypes.string,
  imagesrc: PropTypes.string,
  imagealt111: PropTypes.string,
  button111: PropTypes.string,
  imagesrc2: PropTypes.string,
}

export default Raceaccordian
