import React, { useState } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const Raceaccordianmobile = (props) => {
  const [menu, setMenu] = useState(1)
  return (
    <>
      <div className={`raceaccordianmobile-container ${props.rootClassName} `}>
        <div className="raceaccordianmobile-container1">
          <div className="raceaccordianmobile-one">
            <img
              alt={props.imagealt2}
              src={props.imagesrc2}
              className="raceaccordianmobile-image"
            />
            {menu === 1 && (
              <div className="raceaccordianmobile-container2">
                <span className="raceaccordianmobile-text">{props.text12}</span>
                <Link href="/tvs">
                  <a className="raceaccordianmobile-link button">
                    {props.button12}
                  </a>
                </Link>
              </div>
            )}
          </div>
          <div
            onMouseOver={() => setMenu(2)}
            onMouseLeave={() => setMenu(1)}
            className="raceaccordianmobile-two"
          >
            <img
              alt={props.imagealt1}
              src={props.imagesrc1}
              className="raceaccordianmobile-image1"
            />
            {menu === 2 && (
              <div className="raceaccordianmobile-container3">
                <span className="raceaccordianmobile-text1">{props.text1}</span>
                <Link href="/suzuki">
                  <a className="raceaccordianmobile-link1 button">
                    {props.button1}
                  </a>
                </Link>
              </div>
            )}
          </div>
          <div
            onMouseOver={() => setMenu(3)}
            onMouseLeave={() => setMenu(1)}
            className="raceaccordianmobile-three"
          >
            <img
              alt={props.imagealt11}
              src={props.imagesrc11}
              className="raceaccordianmobile-image2"
            />
            {menu === 3 && (
              <div className="raceaccordianmobile-container4">
                <span className="raceaccordianmobile-text2">
                  {props.text11}
                </span>
                <Link href="/ktm">
                  <a className="raceaccordianmobile-link2 button">
                    {props.button11}
                  </a>
                </Link>
              </div>
            )}
          </div>
          <div
            onMouseOver={() => setMenu(4)}
            onMouseLeave={() => setMenu(1)}
            className="raceaccordianmobile-four"
          >
            <img
              alt={props.imagealt111}
              src={props.imagesrc111}
              className="raceaccordianmobile-image3"
            />
            {menu === 4 && (
              <div className="raceaccordianmobile-container5">
                <span className="raceaccordianmobile-text3">
                  {props.text111}
                </span>
                <Link href="/gtcup">
                  <a className="raceaccordianmobile-link3 button">
                    {props.button111}
                  </a>
                </Link>
              </div>
            )}
          </div>
          <div
            onMouseOver={() => setMenu(5)}
            onMouseLeave={() => setMenu(1)}
            className="raceaccordianmobile-five"
          >
            <img
              alt={props.imagealt1111}
              src={props.imagesrc1111}
              className="raceaccordianmobile-image4"
            />
            {menu === 5 && (
              <div className="raceaccordianmobile-container6">
                <span className="raceaccordianmobile-text4">
                  {props.text1111}
                </span>
                <Link href="/hr">
                  <a className="raceaccordianmobile-link4 button">
                    {props.button1111}
                  </a>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .raceaccordianmobile-container {
            width: auto;
            height: 400px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .raceaccordianmobile-container1 {
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
          .raceaccordianmobile-one {
            flex: 0 0 auto;
            width: 20%;
            height: 100%;
            display: flex;
            position: relative;
            transition: 0.3s;
            align-items: flex-start;
            flex-direction: column;
          }
          .raceaccordianmobile-one:hover {
            width: 100%;
            height: var(--dl-size-size-xxlarge);
          }
          .raceaccordianmobile-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .raceaccordianmobile-container2 {
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
          .raceaccordianmobile-text {
            color: var(--dl-color-gray-white);
            font-size: 20px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .raceaccordianmobile-link {
            color: var(--dl-color-gray-white);
            border-color: #2200ff;
            border-width: 2px;
            border-radius: var(--dl-radius-radius-radius8);
            text-decoration: none;
            background-color: transparent;
          }
          .raceaccordianmobile-two {
            flex: 0 0 auto;
            width: 20%;
            height: 100%;
            display: flex;
            position: relative;
            transition: 0.3s;
            align-items: flex-start;
            flex-direction: column;
          }
          .raceaccordianmobile-two:hover {
            width: 100%;
            height: var(--dl-size-size-xxlarge);
          }
          .raceaccordianmobile-image1 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .raceaccordianmobile-container3 {
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
          .raceaccordianmobile-text1 {
            color: var(--dl-color-gray-white);
            font-size: 20px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .raceaccordianmobile-link1 {
            color: var(--dl-color-gray-white);
            border-color: #2200ff;
            border-width: 2px;
            border-radius: var(--dl-radius-radius-radius8);
            text-decoration: none;
            background-color: transparent;
          }
          .raceaccordianmobile-three {
            flex: 0 0 auto;
            width: 20%;
            height: 100%;
            display: flex;
            position: relative;
            transition: 0.3s;
            align-items: flex-start;
            flex-direction: column;
          }
          .raceaccordianmobile-three:hover {
            width: 100%;
            height: var(--dl-size-size-xxlarge);
          }
          .raceaccordianmobile-image2 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .raceaccordianmobile-container4 {
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
          .raceaccordianmobile-text2 {
            color: var(--dl-color-gray-white);
            font-size: 20px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .raceaccordianmobile-link2 {
            color: var(--dl-color-gray-white);
            border-color: #2200ff;
            border-width: 2px;
            border-radius: var(--dl-radius-radius-radius8);
            text-decoration: none;
            background-color: transparent;
          }
          .raceaccordianmobile-four {
            flex: 0 0 auto;
            width: 20%;
            height: 100%;
            display: flex;
            position: relative;
            transition: 0.3s;
            align-items: flex-start;
            flex-direction: column;
          }
          .raceaccordianmobile-four:hover {
            width: 100%;
            height: var(--dl-size-size-xxlarge);
          }
          .raceaccordianmobile-image3 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .raceaccordianmobile-container5 {
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
          .raceaccordianmobile-text3 {
            color: var(--dl-color-gray-white);
            font-size: 20px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .raceaccordianmobile-link3 {
            color: var(--dl-color-gray-white);
            border-color: #2200ff;
            border-width: 2px;
            border-radius: var(--dl-radius-radius-radius8);
            text-decoration: none;
            background-color: transparent;
          }
          .raceaccordianmobile-five {
            flex: 0 0 auto;
            width: 20%;
            height: 100%;
            display: flex;
            position: relative;
            transition: 0.3s;
            align-items: flex-end;
            flex-direction: column;
          }
          .raceaccordianmobile-five:hover {
            width: 100%;
            height: var(--dl-size-size-xxlarge);
          }
          .raceaccordianmobile-image4 {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: 0.3s;
          }
          .raceaccordianmobile-image4:hover {
            width: 130%;
          }
          .raceaccordianmobile-container6 {
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
          .raceaccordianmobile-text4 {
            color: var(--dl-color-gray-white);
            font-size: 20px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .raceaccordianmobile-link4 {
            color: var(--dl-color-gray-white);
            border-color: #2200ff;
            border-width: 2px;
            border-radius: var(--dl-radius-radius-radius8);
            text-decoration: none;
            background-color: transparent;
          }

          @media (max-width: 991px) {
            .raceaccordianmobile-link {
              text-align: center;
            }
            .raceaccordianmobile-link1 {
              text-align: center;
            }
            .raceaccordianmobile-link2 {
              text-align: center;
            }
            .raceaccordianmobile-link3 {
              text-align: center;
            }
            .raceaccordianmobile-link4 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .raceaccordianmobile-text {
              font-size: 16px;
            }
            .raceaccordianmobile-link {
              text-align: center;
            }
            .raceaccordianmobile-text1 {
              font-size: 16px;
            }
            .raceaccordianmobile-link1 {
              text-align: center;
            }
            .raceaccordianmobile-text2 {
              font-size: 16px;
            }
            .raceaccordianmobile-link2 {
              text-align: center;
            }
            .raceaccordianmobile-text3 {
              font-size: 16px;
            }
            .raceaccordianmobile-link3 {
              text-align: center;
            }
            .raceaccordianmobile-link4 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .raceaccordianmobile-container {
              height: 100%;
            }
            .raceaccordianmobile-container1 {
              flex: 1;
              width: 100%;
              max-width: auto;
              min-width: auto;
              flex-direction: column;
            }
            .raceaccordianmobile-one {
              width: 100%;
              height: var(--dl-size-size-xlarge);
            }
            .raceaccordianmobile-two {
              width: 100%;
              height: var(--dl-size-size-xlarge);
            }
            .raceaccordianmobile-three {
              width: 100%;
              height: var(--dl-size-size-xlarge);
            }
            .raceaccordianmobile-four {
              width: 100%;
              height: var(--dl-size-size-xlarge);
            }
            .raceaccordianmobile-five {
              width: 100%;
              height: var(--dl-size-size-xlarge);
            }
          }
        `}
      </style>
    </>
  )
}

Raceaccordianmobile.defaultProps = {
  imagealt2: 'image',
  button12: 'Discover More',
  rootClassName: '',
  imagealt111: 'image',
  button1: 'Discover More',
  imagealt11: 'image',
  imagesrc11: '/external/motorcycle-left-desk-1500w-1500w-1500h.webp',
  imagesrc1111: '/external/be-a-racer-1500w-1500h.jpg',
  text1: 'SUZUKI ENDURANCE',
  text11: 'KTM RC CUP',
  imagesrc1: '/external/0419_2-1500w-1500h.jpg',
  button11: 'Discover More',
  button111: 'Discover More',
  imagealt1111: 'image',
  text111: 'GT CUP',
  imagealt1: 'image',
  imagesrc2: '/external/1-1500w-1500h.jpg',
  text12: 'TVS ONE CHAMPIONSHIP',
  button1111: 'Discover More',
  text1111: 'HONDA RACING',
  imagesrc111: '/external/gallery-3-1500w-1500h.jpg',
}

Raceaccordianmobile.propTypes = {
  imagealt2: PropTypes.string,
  button12: PropTypes.string,
  rootClassName: PropTypes.string,
  imagealt111: PropTypes.string,
  button1: PropTypes.string,
  imagealt11: PropTypes.string,
  imagesrc11: PropTypes.string,
  imagesrc1111: PropTypes.string,
  text1: PropTypes.string,
  text11: PropTypes.string,
  imagesrc1: PropTypes.string,
  button11: PropTypes.string,
  button111: PropTypes.string,
  imagealt1111: PropTypes.string,
  text111: PropTypes.string,
  imagealt1: PropTypes.string,
  imagesrc2: PropTypes.string,
  text12: PropTypes.string,
  button1111: PropTypes.string,
  text1111: PropTypes.string,
  imagesrc111: PropTypes.string,
}

export default Raceaccordianmobile
