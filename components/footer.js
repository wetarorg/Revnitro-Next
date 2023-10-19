import React from 'react'

import PropTypes from 'prop-types'

const Footer = (props) => {
  return (
    <>
      <div className={`footer-footer ${props.rootClassName} `}>
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-branding">
              <img
                src={props.imagesrc}
                loading="eager"
                className="footer-image"
              />
              <span className="footer-text">
                <span>Redefining Automobile Journalism</span>
                <br className="footer-text02"></br>
                <br></br>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <span className="footer-header">{props.header}</span>
                <div className="footer-list">
                  <span className="footer-text06">{props.text1}</span>
                  <span className="footer-text07">{props.text2}</span>
                  <span className="footer-text08">
                    <span className="footer-text09">Team</span>
                    <br></br>
                  </span>
                </div>
              </div>
              <div className="footer-column1">
                <span className="footer-header1">
                  <span>Resources</span>
                  <br></br>
                </span>
                <div className="footer-list1">
                  <span className="footer-text13">{props.text3}</span>
                  <span className="footer-text14">{props.text4}</span>
                </div>
              </div>
              <div className="footer-column2">
                <span className="footer-header2">{props.header1}</span>
                <div className="footer-list2">
                  <a
                    href="https://www.instagram.com/revnitro_official"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="footer-link"
                  >
                    {props.text6}
                  </a>
                  <a
                    href="https://www.facebook.com/p/RevNitro-100064120381674"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="footer-link1"
                  >
                    {props.text7}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span className="footer-text15">{props.text}</span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .footer-footer {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 100%;
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            background-color: var(--dl-color-gray-black);
          }
          .footer-content {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            border-color: #313133;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            border-top-width: 1px;
          }
          .footer-main {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-branding {
            gap: var(--dl-space-space-twounits);
            width: 400px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-image {
            width: 120px;
            object-fit: cover;
          }
          .footer-text {
            color: rgb(124, 124, 128);
            line-height: 24px;
          }
          .footer-text02 {
            color: #7c7c80;
            line-height: 24px;
          }
          .footer-links {
            gap: 120px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .footer-column {
            gap: var(--dl-space-space-threeunits);
            color: white;
            display: none;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-header {
            font-size: 24px;
            font-style: italic;
            font-family: Open Sans;
            font-weight: 500;
          }
          .footer-list {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-text06 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .footer-text06:hover {
            opacity: 0.5;
          }
          .footer-text07 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .footer-text07:hover {
            opacity: 0.5;
          }
          .footer-text08 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .footer-text08:hover {
            opacity: 0.5;
          }
          .footer-text09:hover {
            opacity: 0.5;
          }
          .footer-column1 {
            gap: var(--dl-space-space-threeunits);
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-header1 {
            font-size: 24px;
            font-style: italic;
            font-family: Open Sans;
            font-weight: 500;
          }
          .footer-list1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-text13 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .footer-text13:hover {
            opacity: 0.5;
          }
          .footer-text14 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .footer-text14:hover {
            opacity: 0.5;
          }
          .footer-column2 {
            gap: var(--dl-space-space-threeunits);
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-header2 {
            font-size: 24px;
            font-style: italic;
            font-family: Open Sans;
            font-weight: 500;
          }
          .footer-list2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-link {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .footer-link:hover {
            opacity: 0.5;
          }
          .footer-link1 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .footer-link1:hover {
            opacity: 0.5;
          }
          .footer-bottom {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-text15 {
            color: rgb(124, 124, 128);
            font-size: 14px;
            line-height: 21px;
          }

          @media (max-width: 991px) {
            .footer-content {
              border-top-width: 0px;
            }
            .footer-main {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .footer-branding {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .footer-footer {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .footer-links {
              gap: var(--dl-space-space-fiveunits);
              flex-direction: row;
            }
          }
          @media (max-width: 479px) {
            .footer-links {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .footer-bottom {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  text1: 'About',
  text: '© 2023 Revnitro - All rights reserved',
  rootClassName: '',
  text6: 'Instagram',
  header: 'Company',
  imagesrc: '/logo/ba365a50c6760909f3950a57a9b9ff1c-200h.webp',
  text7: 'Facebook',
  text2: 'Services',
  text5: 'Twitter',
  header1: 'Social',
  text4: 'Blog',
  text3: 'Courses',
}

Footer.propTypes = {
  text1: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  text6: PropTypes.string,
  header: PropTypes.string,
  imagesrc: PropTypes.string,
  text7: PropTypes.string,
  text2: PropTypes.string,
  text5: PropTypes.string,
  header1: PropTypes.string,
  text4: PropTypes.string,
  text3: PropTypes.string,
}

export default Footer
