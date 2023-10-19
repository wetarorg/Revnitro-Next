import React, { useState } from 'react'

import PropTypes from 'prop-types'

const Raceaccordian1 = (props) => {
  const [menu, setMenu] = useState(1)
  return (
    <>
      <div className="raceaccordian1-container">
        <div className="raceaccordian1-container1">
          <div className="raceaccordian1-one">
            <img
              alt={props.imagealt2}
              src={props.imagesrc2}
              className="raceaccordian1-image"
            />
            {menu === 1 && (
              <div className="raceaccordian1-container2">
                <span className="raceaccordian1-text">{props.text12}</span>
                <a
                  href="https://tvsmotor.com/tvsracing/tvs-asia-one-make-championship-omc"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="raceaccordian1-link button"
                >
                  {props.button12}
                </a>
              </div>
            )}
          </div>
          <div
            onMouseOver={() => setMenu(2)}
            onMouseLeave={() => setMenu(1)}
            className="raceaccordian1-two"
          >
            <img
              alt={props.imagealt1}
              src={props.imagesrc1}
              className="raceaccordian1-image1"
            />
            {menu === 2 && (
              <div className="raceaccordian1-container3">
                <span className="raceaccordian1-text1">{props.text1}</span>
                <a
                  href="https://suzukicycles.com/racing"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="raceaccordian1-link1 button"
                >
                  {props.button1}
                </a>
              </div>
            )}
          </div>
          <div
            onMouseOver={() => setMenu(3)}
            onMouseLeave={() => setMenu(1)}
            className="raceaccordian1-three"
          >
            <img
              alt={props.imagealt11}
              src={props.imagesrc11}
              className="raceaccordian1-image2"
            />
            {menu === 3 && (
              <div className="raceaccordian1-container4">
                <span className="raceaccordian1-text2">{props.text11}</span>
                <a
                  href="https://www.ktmindia.com/ktmrccup"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="raceaccordian1-link2 button"
                >
                  {props.button11}
                </a>
              </div>
            )}
          </div>
          <div
            onMouseOver={() => setMenu(4)}
            onMouseLeave={() => setMenu(1)}
            className="raceaccordian1-four"
          >
            <img
              alt={props.imagealt111}
              src={props.imagesrc111}
              className="raceaccordian1-image3"
            />
            {menu === 4 && (
              <div className="raceaccordian1-container5">
                <span className="raceaccordian1-text3">{props.text111}</span>
                <a
                  href="https://www.royalenfield.com/in/en/gtcup/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="raceaccordian1-link3 button"
                >
                  {props.button111}
                </a>
              </div>
            )}
          </div>
          <div
            onMouseOver={() => setMenu(5)}
            onMouseLeave={() => setMenu(1)}
            className="raceaccordian1-five"
          >
            <img
              alt={props.imagealt1111}
              src={props.imagesrc1111}
              className="raceaccordian1-image4"
            />
            {menu === 5 && (
              <div className="raceaccordian1-container6">
                <span className="raceaccordian1-text4">{props.text1111}</span>
                <a
                  href="https://honda.racing/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="raceaccordian1-link4 button"
                >
                  {props.button1111}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .raceaccordian1-container {
            width: auto;
            height: 400px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .raceaccordian1-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 100%;
            min-width: 100%;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .raceaccordian1-one {
            flex: 0 0 auto;
            width: 20%;
            height: 100%;
            display: flex;
            position: relative;
            transition: 0.3s;
            align-items: flex-start;
            flex-direction: column;
          }
          .raceaccordian1-one:hover {
            width: 30%;
            height: 100%;
          }
          .raceaccordian1-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .raceaccordian1-container2 {
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
          .raceaccordian1-text {
            color: var(--dl-color-gray-white);
            font-size: 20px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .raceaccordian1-link {
            color: var(--dl-color-gray-white);
            border-color: #2200ff;
            border-width: 2px;
            border-radius: var(--dl-radius-radius-radius8);
            text-decoration: none;
            background-color: transparent;
          }
          .raceaccordian1-two {
            flex: 0 0 auto;
            width: 20%;
            height: 100%;
            display: flex;
            position: relative;
            transition: 0.3s;
            align-items: flex-start;
            flex-direction: column;
          }
          .raceaccordian1-two:hover {
            width: 30%;
            height: 100%;
          }
          .raceaccordian1-image1 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .raceaccordian1-container3 {
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
          .raceaccordian1-text1 {
            color: var(--dl-color-gray-white);
            font-size: 20px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .raceaccordian1-link1 {
            color: var(--dl-color-gray-white);
            border-color: #2200ff;
            border-width: 2px;
            border-radius: var(--dl-radius-radius-radius8);
            text-decoration: none;
            background-color: transparent;
          }
          .raceaccordian1-three {
            flex: 0 0 auto;
            width: 20%;
            height: 100%;
            display: flex;
            position: relative;
            transition: 0.3s;
            align-items: flex-start;
            flex-direction: column;
          }
          .raceaccordian1-three:hover {
            width: 30%;
            height: 100%;
          }
          .raceaccordian1-image2 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .raceaccordian1-container4 {
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
          .raceaccordian1-text2 {
            color: var(--dl-color-gray-white);
            font-size: 20px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .raceaccordian1-link2 {
            color: var(--dl-color-gray-white);
            border-color: #2200ff;
            border-width: 2px;
            border-radius: var(--dl-radius-radius-radius8);
            text-decoration: none;
            background-color: transparent;
          }
          .raceaccordian1-four {
            flex: 0 0 auto;
            width: 20%;
            height: 100%;
            display: flex;
            position: relative;
            transition: 0.3s;
            align-items: flex-start;
            flex-direction: column;
          }
          .raceaccordian1-four:hover {
            width: 30%;
            height: 100%;
          }
          .raceaccordian1-image3 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .raceaccordian1-container5 {
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
          .raceaccordian1-text3 {
            color: var(--dl-color-gray-white);
            font-size: 20px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .raceaccordian1-link3 {
            color: var(--dl-color-gray-white);
            border-color: #2200ff;
            border-width: 2px;
            border-radius: var(--dl-radius-radius-radius8);
            text-decoration: none;
            background-color: transparent;
          }
          .raceaccordian1-five {
            flex: 0 0 auto;
            width: 20%;
            height: 100%;
            display: flex;
            position: relative;
            transition: 0.3s;
            align-items: flex-end;
            flex-direction: column;
          }
          .raceaccordian1-five:hover {
            width: 30%;
            height: 100%;
          }
          .raceaccordian1-image4 {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: 0.3s;
          }
          .raceaccordian1-image4:hover {
            width: 130%;
          }
          .raceaccordian1-container6 {
            flex: 0 0 auto;
            left: 0px;
            right: 0px;
            width: auto;
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
          .raceaccordian1-text4 {
            color: var(--dl-color-gray-white);
            font-size: 20px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .raceaccordian1-link4 {
            color: var(--dl-color-gray-white);
            border-color: #2200ff;
            border-width: 2px;
            border-radius: var(--dl-radius-radius-radius8);
            text-decoration: none;
            background-color: transparent;
          }
          @media (max-width: 767px) {
            .raceaccordian1-text {
              font-size: 16px;
            }
            .raceaccordian1-link {
              text-align: center;
            }
            .raceaccordian1-text1 {
              font-size: 16px;
            }
            .raceaccordian1-link1 {
              text-align: center;
            }
            .raceaccordian1-text2 {
              font-size: 16px;
            }
            .raceaccordian1-link2 {
              text-align: center;
            }
            .raceaccordian1-text3 {
              font-size: 16px;
            }
            .raceaccordian1-link3 {
              text-align: center;
            }
            .raceaccordian1-link4 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

Raceaccordian1.defaultProps = {
  imagealt1112: 'image',
  imagealt11: 'image',
  imagealt1: 'image',
  imagesrc111: '/external/gallery-3-1500w-400h.jpg',
  text12: 'TVS ONE CHAMPIONSHIP',
  text1111: 'HONDA RACING',
  imagesrc11111: 'a25d28c5-0370-4428-905a-d497b384b48a',
  text: 'TVS ONE MAKE CHAMPIONSHIP',
  button1112: 'Discover More',
  imagesrc1112: '636424af-68bd-4acb-8150-967550fac640',
  imagealt11111: 'image',
  imagesrc2: '/external/1-1500w-400h.jpg',
  text111: 'GT CUP',
  imagesrc: 'e2ba21ce-8715-46f6-8480-a12a9bbaf05c',
  button1111: 'Discover More',
  button13: 'Discover More',
  imagesrc1111: '/external/be-a-racer-1500w-400h.jpg',
  button1: 'Discover More',
  text1: 'SUZUKI ENDURANCE',
  button11: 'Discover More',
  imagealt: 'image',
  button: 'Discover More',
  imagealt2: 'image',
  text121: 'TVS ONE CHAMPIONSHIP',
  button12: 'Discover More',
  text13: 'SUZUKI ENDURANCE',
  button111: 'Discover More',
  button121: 'Discover More',
  text112: 'KTM RC CUP',
  imagealt12: 'image',
  imagealt112: 'image',
  imagesrc12: 'bc45930e-49c9-49bf-b038-685d56affa50',
  imagesrc1: '/external/0419_2-1500w-400h.jpg',
  button112: 'Discover More',
  imagesrc11: '/external/motorcycle-left-desk-1500w-1500w-400h.webp',
  imagealt111: 'image',
  imagealt21: 'image',
  imagesrc112: '4ad7c58b-56eb-4d2a-905e-e2bf05c224cc',
  text11111: 'HONDA RACING',
  text1112: 'GT CUP',
  imagesrc21: 'e2ba21ce-8715-46f6-8480-a12a9bbaf05c',
  text11: 'KTM RC CUP',
  button11111: 'Discover More',
  imagealt1111: 'image',
}

Raceaccordian1.propTypes = {
  imagealt1112: PropTypes.string,
  imagealt11: PropTypes.string,
  imagealt1: PropTypes.string,
  imagesrc111: PropTypes.string,
  text12: PropTypes.string,
  text1111: PropTypes.string,
  imagesrc11111: PropTypes.string,
  text: PropTypes.string,
  button1112: PropTypes.string,
  imagesrc1112: PropTypes.string,
  imagealt11111: PropTypes.string,
  imagesrc2: PropTypes.string,
  text111: PropTypes.string,
  imagesrc: PropTypes.string,
  button1111: PropTypes.string,
  button13: PropTypes.string,
  imagesrc1111: PropTypes.string,
  button1: PropTypes.string,
  text1: PropTypes.string,
  button11: PropTypes.string,
  imagealt: PropTypes.string,
  button: PropTypes.string,
  imagealt2: PropTypes.string,
  text121: PropTypes.string,
  button12: PropTypes.string,
  text13: PropTypes.string,
  button111: PropTypes.string,
  button121: PropTypes.string,
  text112: PropTypes.string,
  imagealt12: PropTypes.string,
  imagealt112: PropTypes.string,
  imagesrc12: PropTypes.string,
  imagesrc1: PropTypes.string,
  button112: PropTypes.string,
  imagesrc11: PropTypes.string,
  imagealt111: PropTypes.string,
  imagealt21: PropTypes.string,
  imagesrc112: PropTypes.string,
  text11111: PropTypes.string,
  text1112: PropTypes.string,
  imagesrc21: PropTypes.string,
  text11: PropTypes.string,
  button11111: PropTypes.string,
  imagealt1111: PropTypes.string,
}

export default Raceaccordian1
