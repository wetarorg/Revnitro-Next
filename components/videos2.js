import React, { useState } from 'react'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

const Videos2 = (props) => {
  const [filter, setFilter] = useState('bike')
  return (
    <>
      <section className={`videos2-videos ${props.rootClassName} `}>
        <div className="videos2-header">
          <div data-aos="fade-right" className="videos2-heading">
            <h2 className="videos2-title">{props.title}</h2>
            <svg viewBox="0 0 1024 1024" className="videos2-icon">
              <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
            </svg>
            <div className="videos2-container"></div>
          </div>
          <p className="videos2-caption">{props.caption}</p>
          <div className="videos2-container1">
            {filter === 'car' && (
              <div onClick={() => setFilter('bike')} className="videos2-bike">
                <span className="videos2-text">{props.text2}</span>
              </div>
            )}
            {filter === 'bike' && (
              <div className="videos2-bike-sel">
                <span className="videos2-text1">{props.text22}</span>
              </div>
            )}
            {filter === 'bike' && (
              <div onClick={() => setFilter('car')} className="videos2-car">
                <span className="videos2-text2">{props.text21}</span>
              </div>
            )}
            {filter === 'car' && (
              <div className="videos2-car-sel">
                <span className="videos2-text3">{props.text211}</span>
              </div>
            )}
          </div>
        </div>
        <div className="videos2-main">
          {filter === 'bike' && (
            <div className="videos2-bike1">
              <DataProvider
                fetchData={(params) =>
                  fetch(
                    `/api/videos2resource-videos2?${new URLSearchParams(
                      params
                    )}`,
                    {
                      headers: {
                        'Content-Type': 'application/json',
                      },
                    }
                  )
                    .then((res) => res.json())
                    .then((data) => data)
                }
                renderSuccess={(params) => (
                  <>
                    <Repeater
                      items={params}
                      renderItem={(context_3gxso9) => (
                        <>
                          <div className="videos2-container2">
                            <iframe
                              src={context_3gxso9?.url}
                              allowFullScreen="true"
                              className="videos2-iframe"
                            ></iframe>
                            <h1 className="videos2-text4">
                              {context_3gxso9?.Title}
                            </h1>
                          </div>
                        </>
                      )}
                    />
                  </>
                )}
              />
            </div>
          )}
          {filter === 'car' && (
            <div className="videos2-car1">
              <DataProvider
                fetchData={(params) =>
                  fetch(
                    `/api/videos21resource-videos21?${new URLSearchParams(
                      params
                    )}`,
                    {
                      headers: {
                        'Content-Type': 'application/json',
                      },
                    }
                  )
                    .then((res) => res.json())
                    .then((data) => data)
                }
                renderSuccess={(params) => (
                  <>
                    <Repeater
                      items={params}
                      renderItem={(context_3gxso9) => (
                        <>
                          <div className="videos2-container3">
                            <iframe
                              src={context_3gxso9?.url}
                              allowFullScreen="true"
                              className="videos2-iframe1"
                            ></iframe>
                            <h1 className="videos2-text5">
                              {context_3gxso9?.Title}
                            </h1>
                          </div>
                        </>
                      )}
                    />
                  </>
                )}
              />
            </div>
          )}
        </div>
      </section>
      <style jsx>
        {`
          .videos2-videos {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            position: relative;
            max-width: auto;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            background-color: var(--dl-color-gray-black);
          }
          .videos2-header {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: auto;
            align-self: center;
            align-items: center;
            flex-direction: column;
          }
          .videos2-heading {
            gap: var(--dl-space-space-oneandhalfunits);
            width: auto;
            display: flex;
            align-self: center;
            align-items: flex-end;
            flex-direction: row;
          }
          .videos2-title {
            color: var(--dl-color-gray-white);
            font-size: 90px;
            align-self: flex-end;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 70px;
          }
          .videos2-icon {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
          }
          .videos2-container {
            flex: 0 0 auto;
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: auto;
            display: flex;
            flex-direction: row;
          }
          .videos2-caption {
            color: #ff0000;
            font-size: 22px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 27px;
          }
          .videos2-container1 {
            flex: 0 0 auto;
            width: auto;
            height: 40px;
            display: flex;
            align-items: flex-start;
            border-color: rgba(120, 120, 120, 0.4);
            border-style: dashed;
            border-width: 0px;
            border-radius: 50px;
            background-color: #2200ff;
          }
          .videos2-bike {
            flex: 0 0 auto;
            width: 110px;
            height: 100%;
            display: flex;
            align-items: center;
            border-radius: 50px;
            justify-content: center;
          }
          .videos2-text {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            line-height: 21px;
            border-color: var(--dl-color-gray-black);
            border-width: 0px;
          }
          .videos2-bike-sel {
            flex: 0 0 auto;
            width: 110px;
            height: 100%;
            display: flex;
            align-items: center;
            border-radius: 50px;
            justify-content: center;
            background-color: #ff0000;
          }
          .videos2-text1 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            line-height: 21px;
            border-color: var(--dl-color-gray-black);
            border-width: 0px;
          }
          .videos2-car {
            flex: 0 0 auto;
            width: 110px;
            height: 100%;
            display: flex;
            align-items: center;
            border-radius: 50px;
            justify-content: center;
          }
          .videos2-text2 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            line-height: 21px;
            border-color: var(--dl-color-gray-black);
            border-width: 0px;
          }
          .videos2-car-sel {
            flex: 0 0 auto;
            width: 110px;
            height: 100%;
            display: flex;
            align-items: center;
            border-radius: 50px;
            justify-content: center;
            background-color: #ff0000;
          }
          .videos2-text3 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            line-height: 21px;
            border-color: var(--dl-color-gray-black);
            border-width: 0px;
          }
          .videos2-main {
            width: 100%;
            height: auto;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            grid-auto-flow: row;
          }
          .videos2-bike1 {
            width: 100%;
            height: auto;
            display: grid;
            padding: var(--dl-space-space-sixunits);
            align-self: center;
            grid-row-gap: 40px;
            grid-column-gap: 20px;
            grid-template-rows: repeat(2, 1fr);
            grid-template-columns: repeat(2, 1fr);
          }
          .videos2-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-right: 0px;
            flex-direction: column;
          }
          .videos2-iframe {
            width: 600px;
            height: 350px;
          }
          .videos2-text4 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 24px;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            font-weight: 400;
          }
          .videos2-car1 {
            width: 100%;
            height: auto;
            display: grid;
            padding: var(--dl-space-space-sixunits);
            align-self: center;
            grid-row-gap: 40px;
            grid-column-gap: 20px;
            grid-template-rows: repeat(2, 1fr);
            grid-template-columns: repeat(2, 1fr);
          }
          .videos2-container3 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-right: 0px;
            flex-direction: column;
          }
          .videos2-iframe1 {
            width: 600px;
            height: 350px;
          }
          .videos2-text5 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 24px;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            font-weight: 400;
          }

          @media (max-width: 1600px) {
            .videos2-videos {
              height: 100%;
            }
            .videos2-main {
              flex-wrap: wrap;
            }
            .videos2-bike1 {
              padding: var(--dl-space-space-fourunits);
            }
            .videos2-text4 {
              font-size: 24px;
            }
            .videos2-car1 {
              padding: var(--dl-space-space-fourunits);
            }
            .videos2-text5 {
              font-size: 24px;
            }
            .videos2-root-class-name {
              height: auto;
            }
          }
          @media (max-width: 1200px) {
            .videos2-videos {
              padding: var(--dl-space-space-unit);
              align-items: center;
            }
            .videos2-bike1 {
              padding: var(--dl-space-space-threeunits);
            }
            .videos2-iframe {
              width: 400px;
              height: 250px;
            }
            .videos2-text4 {
              font-size: 24px;
            }
            .videos2-car1 {
              padding: var(--dl-space-space-threeunits);
            }
            .videos2-iframe1 {
              width: 400px;
              height: 250px;
            }
            .videos2-text5 {
              font-size: 24px;
            }
          }
          @media (max-width: 991px) {
            .videos2-videos {
              padding: var(--dl-space-space-unit);
            }
            .videos2-bike1 {
              padding: var(--dl-space-space-threeunits);
              grid-template-columns: repeat(2, 1fr);
            }
            .videos2-text4 {
              font-size: 20px;
              margin-top: var(--dl-space-space-twounits);
            }
            .videos2-car1 {
              padding: var(--dl-space-space-threeunits);
              grid-template-columns: repeat(2, 1fr);
            }
            .videos2-text5 {
              font-size: 20px;
              margin-top: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 767px) {
            .videos2-videos {
              gap: var(--dl-space-space-threeunits);
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .videos2-heading {
              gap: var(--dl-space-space-unit);
            }
            .videos2-title {
              font-size: 30px;
              line-height: 33px;
            }
            .videos2-caption {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .videos2-text {
              font-size: 16px;
            }
            .videos2-text1 {
              font-size: 16px;
            }
            .videos2-text2 {
              font-size: 16px;
            }
            .videos2-text3 {
              font-size: 16px;
            }
            .videos2-bike1 {
              grid-template-columns: 1fr;
            }
            .videos2-container2 {
              align-items: center;
              justify-content: center;
            }
            .videos2-text4 {
              font-size: 22px;
              margin-top: var(--dl-space-space-unit);
            }
            .videos2-car1 {
              grid-template-columns: 1fr;
            }
            .videos2-container3 {
              align-items: center;
              justify-content: center;
            }
            .videos2-text5 {
              font-size: 22px;
              margin-top: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .videos2-videos {
              height: auto;
            }
            .videos2-main {
              height: auto;
            }
            .videos2-bike1 {
              padding: var(--dl-space-space-halfunit);
            }
            .videos2-iframe {
              width: 300px;
              height: 200px;
            }
            .videos2-text4 {
              font-size: 20px;
            }
            .videos2-car1 {
              padding: var(--dl-space-space-halfunit);
            }
            .videos2-iframe1 {
              width: 300px;
              height: 200px;
            }
            .videos2-text5 {
              font-size: 20px;
            }
          }
        `}
      </style>
    </>
  )
}

Videos2.defaultProps = {
  caption: 'UNCOVER THE STORIES BEHIND THE WHEELS',
  text211: 'CAR',
  text22: 'BIKE',
  title: 'REVNITRO',
  text: 'BIKE',
  rootClassName: '',
  text21: 'CAR',
  text1: 'CARS',
  text2: 'BIKE',
}

Videos2.propTypes = {
  caption: PropTypes.string,
  text211: PropTypes.string,
  text22: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  text21: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
}

export default Videos2
