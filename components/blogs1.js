import React, { useState } from 'react'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import Speaker from './speaker'

const Blogs1 = (props) => {
  const [tab, setTab] = useState(1)
  return (
    <>
      <section className="blogs1-blogs">
        <div className="blogs1-container">
          <div onClick={() => setTab(1)} className="blogs1-filter">
            <h1 className="blogs1-text">{props.heading}</h1>
            {tab === 1 && <div className="blogs1-container1"></div>}
          </div>
          <div onClick={() => setTab(2)} className="blogs1-filter1">
            <h1 className="blogs1-text1">{props.heading4}</h1>
            {tab === 2 && <div className="blogs1-container2"></div>}
          </div>
          <div onClick={() => setTab(3)} className="blogs1-filter2">
            <h1 className="blogs1-text2">{props.heading3}</h1>
            {tab === 3 && <div className="blogs1-container3"></div>}
          </div>
          <div onClick={() => setTab(4)} className="blogs1-filter3">
            <h1 className="blogs1-text3">{props.heading2}</h1>
            {tab === 4 && <div className="blogs1-container4"></div>}
          </div>
        </div>
        <div className="blogs1-container5">
          {tab === 1 && (
            <div className="blogs1-bikerv">
              <DataProvider
                fetchData={(params) =>
                  fetch(
                    `/api/blogs1resource-blogs1?${new URLSearchParams(params)}`,
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
                      renderItem={(context_oiflm) => (
                        <>
                          <Speaker
                            name={context_oiflm?.Title}
                            image={context_oiflm?.ImageUrl}
                            linktext={context_oiflm?.BlogUrl}
                            rootClassName="speaker-root-class-name45"
                          ></Speaker>
                        </>
                      )}
                    />
                  </>
                )}
              />
            </div>
          )}
          {tab === 2 && (
            <div className="blogs1-carrv">
              <DataProvider
                fetchData={(params) =>
                  fetch(
                    `/api/blogs11resource-blogs11?${new URLSearchParams(
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
                      renderItem={(context_oiflm) => (
                        <>
                          <Speaker
                            name={context_oiflm?.Title}
                            image={context_oiflm?.ImageUrl}
                            linktext={context_oiflm?.BlogUrl}
                            rootClassName="speaker-root-class-name47"
                          ></Speaker>
                        </>
                      )}
                    />
                  </>
                )}
              />
            </div>
          )}
          {tab === 3 && (
            <div className="blogs1-rt">
              <DataProvider
                fetchData={(params) =>
                  fetch(
                    `/api/blogs12resource-blogs12?${new URLSearchParams(
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
                      renderItem={(context_oiflm) => (
                        <>
                          <Speaker
                            name={context_oiflm?.Title}
                            image={context_oiflm?.ImageUrl}
                            linktext={context_oiflm?.BlogUrl}
                            rootClassName="speaker-root-class-name48"
                          ></Speaker>
                        </>
                      )}
                    />
                  </>
                )}
              />
            </div>
          )}
          {tab === 4 && (
            <div className="blogs1-tt">
              <DataProvider
                fetchData={(params) =>
                  fetch(
                    `/api/blogs13resource-blogs13?${new URLSearchParams(
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
                      renderItem={(context_oiflm) => (
                        <>
                          <Speaker
                            name={context_oiflm?.Title}
                            image={context_oiflm?.ImageUrl}
                            linktext={context_oiflm?.BlogUrl}
                            rootClassName="speaker-root-class-name49"
                          ></Speaker>
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
          .blogs1-blogs {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: 80px;
            flex-direction: column;
            padding-bottom: 80px;
            justify-content: center;
            background-color: var(--dl-color-gray-black);
          }
          .blogs1-container {
            flex: 0 0 auto;
            width: 90%;
            height: 60px;
            display: flex;
            align-items: flex-start;
            border-color: rgba(128, 123, 123, 0.72);
            border-width: 1px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .blogs1-filter {
            position: relative;
            align-self: stretch;
            transition: 0.3s;
          }

          .blogs1-text {
            color: var(--dl-color-gray-white);
            font-size: 20px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
          }
          .blogs1-container1 {
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            bottom: 0px;
            height: 8px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            background-color: #2200ff;
          }
          .blogs1-filter1 {
            position: relative;
            align-self: stretch;
            transition: 0.3s;
          }

          .blogs1-text1 {
            color: var(--dl-color-gray-white);
            font-size: 20px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
          }
          .blogs1-container2 {
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            bottom: 0px;
            height: 8px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            background-color: #2200ff;
          }
          .blogs1-filter2 {
            position: relative;
            align-self: stretch;
            transition: 0.3s;
          }

          .blogs1-text2 {
            color: var(--dl-color-gray-white);
            font-size: 20px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
          }
          .blogs1-container3 {
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            bottom: 0px;
            height: 8px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            background-color: #2200ff;
          }
          .blogs1-filter3 {
            position: relative;
            align-self: stretch;
            transition: 0.3s;
          }

          .blogs1-text3 {
            color: var(--dl-color-gray-white);
            font-size: 20px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
          }
          .blogs1-container4 {
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            bottom: 0px;
            height: 8px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            background-color: #2200ff;
          }
          .blogs1-container5 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
          }
          .blogs1-bikerv {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-left: 0px;
            justify-content: center;
          }
          .blogs1-carrv {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .blogs1-rt {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .blogs1-tt {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          @media (max-width: 767px) {
            .blogs1-blogs {
              gap: var(--dl-space-space-twounits);
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
          }
        `}
      </style>
    </>
  )
}

Blogs1.defaultProps = {
  text3: 'Text',
  text1: 'CARS',
  heading3: 'RIDER TIPS',
  heading11: 'TECHNICAL TIPS',
  heading4: 'CAR REVIEWS',
  heading2: 'TECHNICAL TIPS',
  heading: 'BIKE REVIEWS',
  text2: 'RIDER TIPS',
  heading1: 'CAR REVIEWS',
  text: 'BIKES',
  heading12: 'RIDER TIPS',
}

Blogs1.propTypes = {
  text3: PropTypes.string,
  text1: PropTypes.string,
  heading3: PropTypes.string,
  heading11: PropTypes.string,
  heading4: PropTypes.string,
  heading2: PropTypes.string,
  heading: PropTypes.string,
  text2: PropTypes.string,
  heading1: PropTypes.string,
  text: PropTypes.string,
  heading12: PropTypes.string,
}

export default Blogs1
