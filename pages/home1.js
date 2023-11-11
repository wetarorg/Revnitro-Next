import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import Script from 'dangerous-html/react'

import Navbar from '../components/navbar'
import Blogs1 from '../components/blogs1'
import Raceaccordian1 from '../components/raceaccordian1'
import Raceaccordianmobile from '../components/raceaccordianmobile'
import Videos2 from '../components/videos2'
import Footer from '../components/footer'

const Home1 = (props) => {
  return (
    <>
      <div className="home1-container">
        <Head>
          <title>Home1 - Revnitro</title>
          <meta property="og:title" content="Home1 - Revnitro" />
        </Head>
        <Navbar rootClassName="navbar-root-class-name13"></Navbar>
        <section className="home1-slides">
          <div className="home1-slider slider blaze-slider">
            <div className="home1-slider-container blaze-container">
              <div className="home1-slider-track-container blaze-track-container">
                <div className="home1-slider-track blaze-track">
                  <div
                    data-role="current-banner"
                    className="home1-slide banner"
                  >
                    <DataProvider
                      fetchData={(params) =>
                        fetch(
                          `/api/home1-resource-home1?${new URLSearchParams(
                            params
                          )}`,
                          {
                            headers: {
                              'Content-Type': 'application/json',
                            },
                          }
                        )
                          .then((res) => res.json())
                          .then((data) => data?.data?.[0])
                      }
                      renderSuccess={(context_tz9kl) => (
                        <>
                          <div className="home1-container01">
                            <img
                              alt="image"
                              src={context_tz9kl?.Image?.url}
                              className="home1-image"
                            />
                            <div className="home1-container02">
                              <div className="home1-container03">
                                <h1 className="home1-text">
                                  {context_tz9kl?.Title}
                                </h1>
                                <span className="home1-text01">
                                  {context_tz9kl?.description}
                                </span>
                                <button
                                  type="button"
                                  className="home1-button button"
                                >
                                  KNOW MORE
                                </button>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    />
                  </div>
                  <div
                    data-role="current-banner"
                    className="home1-slide1 banner"
                  >
                    <DataProvider
                      fetchData={(params) =>
                        fetch(
                          `/api/home11-resource-home11?${new URLSearchParams(
                            params
                          )}`,
                          {
                            headers: {
                              'Content-Type': 'application/json',
                            },
                          }
                        )
                          .then((res) => res.json())
                          .then((data) => data?.data?.[0])
                      }
                      renderSuccess={(context_tz9kl) => (
                        <>
                          <div className="home1-container04">
                            <img
                              alt="image"
                              src={context_tz9kl?.Image?.url}
                              className="home1-image01"
                            />
                            <div className="home1-container05">
                              <div className="home1-container06">
                                <h1 className="home1-text02">
                                  {context_tz9kl?.Title}
                                </h1>
                                <span className="home1-text03">
                                  {context_tz9kl?.description}
                                </span>
                                <button
                                  type="button"
                                  className="home1-button1 button"
                                >
                                  KNOW MORE
                                </button>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    />
                  </div>
                  <div
                    data-role="current-banner"
                    className="home1-slide2 banner"
                  >
                    <DataProvider
                      fetchData={(params) =>
                        fetch(
                          `/api/home12-resource-home12?${new URLSearchParams(
                            params
                          )}`,
                          {
                            headers: {
                              'Content-Type': 'application/json',
                            },
                          }
                        )
                          .then((res) => res.json())
                          .then((data) => data?.data?.[0])
                      }
                      renderSuccess={(context_tz9kl) => (
                        <>
                          <div className="home1-container07">
                            <img
                              alt="image"
                              src={context_tz9kl?.Image?.url}
                              className="home1-image02"
                            />
                            <div className="home1-container08">
                              <div className="home1-container09">
                                <h1 className="home1-text04">
                                  {context_tz9kl?.Title}
                                </h1>
                                <span className="home1-text05">
                                  {context_tz9kl?.description}
                                </span>
                                <button
                                  type="button"
                                  className="home1-button2 button"
                                >
                                  KNOW MORE
                                </button>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    />
                  </div>
                  <div
                    data-role="current-banner"
                    className="home1-slide3 banner"
                  >
                    <DataProvider
                      fetchData={(params) =>
                        fetch(
                          `/api/home13-resource-home13?${new URLSearchParams(
                            params
                          )}`,
                          {
                            headers: {
                              'Content-Type': 'application/json',
                            },
                          }
                        )
                          .then((res) => res.json())
                          .then((data) => data?.data?.[0])
                      }
                      renderSuccess={(context_tz9kl) => (
                        <>
                          <div className="home1-container10">
                            <img
                              alt="image"
                              src={context_tz9kl?.Image?.url}
                              className="home1-image03"
                            />
                            <div className="home1-container11">
                              <div className="home1-container12">
                                <h1 className="home1-text06">
                                  {context_tz9kl?.Title}
                                </h1>
                                <span className="home1-text07">
                                  {context_tz9kl?.description}
                                </span>
                                <button
                                  type="button"
                                  className="home1-button3 button"
                                >
                                  KNOW MORE
                                </button>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    />
                  </div>
                  <div
                    data-role="current-banner"
                    className="home1-slide4 banner"
                  >
                    <DataProvider
                      fetchData={(params) =>
                        fetch(
                          `/api/home14-resource-home14?${new URLSearchParams(
                            params
                          )}`,
                          {
                            headers: {
                              'Content-Type': 'application/json',
                            },
                          }
                        )
                          .then((res) => res.json())
                          .then((data) => data?.data?.[0])
                      }
                      renderSuccess={(context_tz9kl) => (
                        <>
                          <div className="home1-container13">
                            <img
                              alt="image"
                              src={context_tz9kl?.Image?.url}
                              className="home1-image04"
                            />
                            <div className="home1-container14">
                              <div className="home1-container15">
                                <h1 className="home1-text08">
                                  {context_tz9kl?.Title}
                                </h1>
                                <span className="home1-text09">
                                  {context_tz9kl?.description}
                                </span>
                                <button
                                  type="button"
                                  className="home1-button4 button"
                                >
                                  KNOW MORE
                                </button>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    />
                  </div>
                </div>
              </div>
              <div className="home1-controls">
                <button
                  data-role="previous-banner-button"
                  className="home1-previous blaze-prev button"
                >
                  <svg viewBox="0 0 1024 1024" className="home1-icon">
                    <path d="M542.165 780.501l-225.835-225.835h494.336c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-494.336l225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-298.667 298.667c-4.096 4.096-7.168 8.789-9.259 13.824-2.176 5.205-3.243 10.795-3.243 16.341 0 10.923 4.181 21.845 12.501 30.165l298.667 298.667c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
                  </svg>
                </button>
                <button
                  data-role="next-banner-button"
                  className="home1-next blaze-next button"
                >
                  <svg viewBox="0 0 1024 1024" className="home1-icon2">
                    <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="home1-hero">
          <div className="home1-hero-content">
            <h1 className="home1-text10">REVNITRO</h1>
            <div className="home1-caption">
              <p className="home1-caption1">REDEFINING AUTOMOBILE JOURNALISM</p>
            </div>
          </div>
        </section>
        <Blogs1></Blogs1>
        <section id="service" className="home1-services">
          <div className="home1-container16">
            <h2 className="home1-heading section-heading">
              Book Services &amp; Consultation
            </h2>
          </div>
        </section>
        <div className="home1-note">
          <div className="home1-image05">
            <img
              alt="image"
              src="/bookings/home_page-300w.png"
              className="home1-image06"
            />
          </div>
          <div className="home1-content">
            <div className="home1-caption2">
              <h2 className="home1-heading1 section-heading">
                Choose our service
              </h2>
            </div>
            <div className="home1-heading2">
              <div className="home1-accordion">
                <a
                  href="https://book.revnitro.com/car"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home1-link"
                >
                  <div
                    data-role="accordion-container"
                    className="home1-element accordion-element"
                  >
                    <div className="home1-details">
                      <img
                        alt="image"
                        src="/bookings/3.svg"
                        className="home1-image07"
                      />
                      <span className="home1-text11">
                        CAR PURCHASE CONSULTATION
                      </span>
                    </div>
                  </div>
                </a>
                <a
                  href="https://book.revnitro.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home1-link1"
                >
                  <div
                    data-role="accordion-container"
                    className="home1-element1 accordion-element"
                  >
                    <div className="home1-details01">
                      <img
                        alt="image"
                        src="/bookings/2.svg"
                        className="home1-image08"
                      />
                      <span className="home1-text12">
                        BIKE PURCHASE CONSULTATION
                      </span>
                    </div>
                  </div>
                </a>
                <a
                  href="https://book.revnitro.com/bikeservice"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home1-link2"
                >
                  <div
                    data-role="accordion-container"
                    className="home1-element2 accordion-element"
                  >
                    <div className="home1-details02">
                      <img
                        alt="image"
                        src="/bookings/1.svg"
                        className="home1-image09"
                      />
                      <span className="home1-text13">BIKE SERVICE BOOKING</span>
                    </div>
                  </div>
                </a>
                <a
                  href="https://book.revnitro.com/carservice"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home1-link3"
                >
                  <div
                    data-role="accordion-container"
                    className="home1-element3 accordion-element"
                  >
                    <div className="home1-details03">
                      <img
                        alt="image"
                        src="/bookings/4.svg"
                        className="home1-image10"
                      />
                      <span className="home1-text14">CAR SERVICE BOOKING</span>
                    </div>
                  </div>
                </a>
                <a
                  href="https://book.revnitro.com/ecuservice"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home1-link4"
                >
                  <div
                    data-role="accordion-container"
                    className="home1-element4 accordion-element"
                  >
                    <div className="home1-details04">
                      <img
                        alt="image"
                        src="/bookings/ecu%20tuning%20(2).svg"
                        className="home1-image11"
                      />
                      <span className="home1-text15">ECU TUNING</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <section className="home1-testimonials">
          <div className="home1-header">
            <div data-aos="fade-right" className="home1-heading3">
              <h2 className="home1-title">
                <span>
                  Don’t just take our word for it.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>Here’s what our readers have to say:</span>
              </h2>
            </div>
          </div>
          <section className="home1-reviews">
            <div className="home1-slider1 slider blaze-slider">
              <div className="home1-slider-container1 blaze-container">
                <div className="home1-slider-track-container1 blaze-track-container">
                  <div className="home1-slider-track1 blaze-track">
                    <div
                      data-role="current-banner"
                      className="home1-slide5 banner"
                    >
                      <DataProvider
                        fetchData={(params) =>
                          fetch(
                            `/api/home15-resource-home15?${new URLSearchParams(
                              params
                            )}`,
                            {
                              headers: {
                                'Content-Type': 'application/json',
                              },
                            }
                          )
                            .then((res) => res.json())
                            .then((data) => data?.data?.[0])
                        }
                        renderSuccess={(context_tz9kl) => (
                          <>
                            <div className="home1-quote">
                              <div className="home1-author">
                                <img
                                  alt="image"
                                  src={context_tz9kl?.profile?.url}
                                  className="home1-image12"
                                />
                                <div className="home1-details05">
                                  <span className="home1-name">
                                    {context_tz9kl?.name}
                                  </span>
                                  <span className="home1-handle">
                                    {context_tz9kl?.contact}
                                  </span>
                                </div>
                              </div>
                              <p className="home1-quote01">
                                {context_tz9kl?.review}
                              </p>
                            </div>
                          </>
                        )}
                      />
                      <DataProvider
                        fetchData={(params) =>
                          fetch(
                            `/api/home16-resource-home16?${new URLSearchParams(
                              params
                            )}`,
                            {
                              headers: {
                                'Content-Type': 'application/json',
                              },
                            }
                          )
                            .then((res) => res.json())
                            .then((data) => data?.data?.[0])
                        }
                        renderSuccess={(context_tz9kl) => (
                          <>
                            <div className="home1-quote02">
                              <div className="home1-author1">
                                <img
                                  alt="image"
                                  src={context_tz9kl?.profile?.url}
                                  className="home1-image13"
                                />
                                <div className="home1-details06">
                                  <span className="home1-name1">
                                    {context_tz9kl?.name}
                                  </span>
                                  <span className="home1-handle1">
                                    {context_tz9kl?.contact}
                                  </span>
                                </div>
                              </div>
                              <p className="home1-quote03">
                                {context_tz9kl?.review}
                              </p>
                            </div>
                          </>
                        )}
                      />
                      <DataProvider
                        fetchData={(params) =>
                          fetch(
                            `/api/home17-resource-home17?${new URLSearchParams(
                              params
                            )}`,
                            {
                              headers: {
                                'Content-Type': 'application/json',
                              },
                            }
                          )
                            .then((res) => res.json())
                            .then((data) => data?.data?.[0])
                        }
                        renderSuccess={(context_tz9kl) => (
                          <>
                            <div className="home1-quote04">
                              <div className="home1-author2">
                                <img
                                  alt="image"
                                  src={context_tz9kl?.profile?.url}
                                  className="home1-image14"
                                />
                                <div className="home1-details07">
                                  <span className="home1-name2">
                                    {context_tz9kl?.name}
                                  </span>
                                  <span className="home1-handle2">
                                    {context_tz9kl?.contact}
                                  </span>
                                </div>
                              </div>
                              <p className="home1-quote05">
                                {context_tz9kl?.review}
                              </p>
                            </div>
                          </>
                        )}
                      />
                    </div>
                    <div
                      data-role="current-banner"
                      className="home1-slide6 banner"
                    >
                      <DataProvider
                        fetchData={(params) =>
                          fetch(
                            `/api/home18-resource-home18?${new URLSearchParams(
                              params
                            )}`,
                            {
                              headers: {
                                'Content-Type': 'application/json',
                              },
                            }
                          )
                            .then((res) => res.json())
                            .then((data) => data?.data?.[0])
                        }
                        renderSuccess={(context_tz9kl) => (
                          <>
                            <div className="home1-quote06">
                              <div className="home1-author3">
                                <img
                                  alt="image"
                                  src={context_tz9kl?.profile?.url}
                                  className="home1-image15"
                                />
                                <div className="home1-details08">
                                  <span className="home1-name3">
                                    {context_tz9kl?.name}
                                  </span>
                                  <span className="home1-handle3">
                                    {context_tz9kl?.contact}
                                  </span>
                                </div>
                              </div>
                              <p className="home1-quote07">
                                {context_tz9kl?.review}
                              </p>
                            </div>
                          </>
                        )}
                      />
                      <DataProvider
                        fetchData={(params) =>
                          fetch(
                            `/api/home19-resource-home19?${new URLSearchParams(
                              params
                            )}`,
                            {
                              headers: {
                                'Content-Type': 'application/json',
                              },
                            }
                          )
                            .then((res) => res.json())
                            .then((data) => data?.data?.[0])
                        }
                        renderSuccess={(context_tz9kl) => (
                          <>
                            <div className="home1-quote08">
                              <div className="home1-author4">
                                <img
                                  alt="image"
                                  src={context_tz9kl?.profile?.url}
                                  className="home1-image16"
                                />
                                <div className="home1-details09">
                                  <span className="home1-name4">
                                    {context_tz9kl?.name}
                                  </span>
                                  <span className="home1-handle4">
                                    {context_tz9kl?.contact}
                                  </span>
                                </div>
                              </div>
                              <p className="home1-quote09">
                                {context_tz9kl?.review}
                              </p>
                            </div>
                          </>
                        )}
                      />
                      <DataProvider
                        fetchData={(params) =>
                          fetch(
                            `/api/home110-resource-home110?${new URLSearchParams(
                              params
                            )}`,
                            {
                              headers: {
                                'Content-Type': 'application/json',
                              },
                            }
                          )
                            .then((res) => res.json())
                            .then((data) => data?.data?.[0])
                        }
                        renderSuccess={(context_tz9kl) => (
                          <>
                            <div className="home1-quote10">
                              <div className="home1-author5">
                                <img
                                  alt="image"
                                  src={context_tz9kl?.profile?.url}
                                  className="home1-image17"
                                />
                                <div className="home1-details10">
                                  <span className="home1-name5">
                                    {context_tz9kl?.name}
                                  </span>
                                  <span className="home1-handle5">
                                    {context_tz9kl?.contact}
                                  </span>
                                </div>
                              </div>
                              <p className="home1-quote11">
                                {context_tz9kl?.review}
                              </p>
                            </div>
                          </>
                        )}
                      />
                    </div>
                    <div
                      data-role="current-banner"
                      className="home1-slide7 banner"
                    >
                      <DataProvider
                        fetchData={(params) =>
                          fetch(
                            `/api/home111-resource-home111?${new URLSearchParams(
                              params
                            )}`,
                            {
                              headers: {
                                'Content-Type': 'application/json',
                              },
                            }
                          )
                            .then((res) => res.json())
                            .then((data) => data?.data?.[0])
                        }
                        renderSuccess={(context_tz9kl) => (
                          <>
                            <div className="home1-quote12">
                              <div className="home1-author6">
                                <img
                                  alt="image"
                                  src={context_tz9kl?.profile?.url}
                                  className="home1-image18"
                                />
                                <div className="home1-details11">
                                  <span className="home1-name6">
                                    {context_tz9kl?.name}
                                  </span>
                                  <span className="home1-handle6">
                                    {context_tz9kl?.contact}
                                  </span>
                                </div>
                              </div>
                              <p className="home1-quote13">
                                {context_tz9kl?.review}
                              </p>
                            </div>
                          </>
                        )}
                      />
                      <DataProvider
                        fetchData={(params) =>
                          fetch(
                            `/api/home112-resource-home112?${new URLSearchParams(
                              params
                            )}`,
                            {
                              headers: {
                                'Content-Type': 'application/json',
                              },
                            }
                          )
                            .then((res) => res.json())
                            .then((data) => data?.data?.[0])
                        }
                        renderSuccess={(context_tz9kl) => (
                          <>
                            <div className="home1-quote14">
                              <div className="home1-author7">
                                <img
                                  alt="image"
                                  src={context_tz9kl?.profile?.url}
                                  className="home1-image19"
                                />
                                <div className="home1-details12">
                                  <span className="home1-name7">
                                    {context_tz9kl?.name}
                                  </span>
                                  <span className="home1-handle7">
                                    {context_tz9kl?.contact}
                                  </span>
                                </div>
                              </div>
                              <p className="home1-quote15">
                                {context_tz9kl?.review}
                              </p>
                            </div>
                          </>
                        )}
                      />
                      <DataProvider
                        fetchData={(params) =>
                          fetch(
                            `/api/home113-resource-home113?${new URLSearchParams(
                              params
                            )}`,
                            {
                              headers: {
                                'Content-Type': 'application/json',
                              },
                            }
                          )
                            .then((res) => res.json())
                            .then((data) => data?.data?.[0])
                        }
                        renderSuccess={(context_tz9kl) => (
                          <>
                            <div className="home1-quote16">
                              <div className="home1-author8">
                                <img
                                  alt="image"
                                  src={context_tz9kl?.profile?.url}
                                  className="home1-image20"
                                />
                                <div className="home1-details13">
                                  <span className="home1-name8">
                                    {context_tz9kl?.name}
                                  </span>
                                  <span className="home1-handle8">
                                    {context_tz9kl?.contact}
                                  </span>
                                </div>
                              </div>
                              <p className="home1-quote17">
                                {context_tz9kl?.review}
                              </p>
                            </div>
                          </>
                        )}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="home1-controls1">
                <button
                  data-role="previous-banner-button"
                  className="home1-previous1 blaze-prev button"
                >
                  <svg viewBox="0 0 1024 1024" className="home1-icon4">
                    <path d="M542.165 780.501l-225.835-225.835h494.336c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-494.336l225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-298.667 298.667c-4.096 4.096-7.168 8.789-9.259 13.824-2.176 5.205-3.243 10.795-3.243 16.341 0 10.923 4.181 21.845 12.501 30.165l298.667 298.667c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
                  </svg>
                </button>
                <button
                  data-role="next-banner-button"
                  className="home1-next1 blaze-next button"
                >
                  <svg viewBox="0 0 1024 1024" className="home1-icon6">
                    <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div>
              <div className="home1-container18">
                <React.Fragment>
                  <React.Fragment>
                    <Script>{`
  document.querySelectorAll('.blaze-slider').forEach(el => {
    new BlazeSlider(el, {
      all: {
        slidesToShow: 1,
        loop: true,
        enableAutoplay: true,
      },
    });
  });
`}</Script>
                  </React.Fragment>
                </React.Fragment>
              </div>
            </div>
          </section>
        </section>
        <section className="home1-racing">
          <div className="home1-gradient gradient-background">
            <div className="home1-container19">
              <div className="home1-container20">
                <h1 className="home1-text19">
                  <span>FROM THE WORLD OF</span>
                  <br></br>
                  <span> MOTOSPORTS</span>
                </h1>
                <h1 className="home1-text23">
                  <span className="home1-text24">Driven By Passion...</span>
                  <br></br>
                </h1>
              </div>
            </div>
            <div className="home1-container21">
              <div className="home1-container22">
                <React.Fragment>
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        '\n.gradient-background {\n  background: linear-gradient(300deg,darkviolet,#f30000);\n  background-size: 120% 120%;\n  animation: gradient-animation 12s ease infinite;\n}\n\n@keyframes gradient-animation {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n',
                    }}
                  />
                </React.Fragment>
              </div>
            </div>
          </div>
          <div className="home1-header1">
            <div className="home1-section-numeral">
              <div className="home1-divide"></div>
              <p className="home1-text26">03</p>
            </div>
            <div data-aos="fade-right" className="home1-heading4">
              <h2 className="home1-title1">INDIAN RACING</h2>
              <h2 className="home1-title2">LET YOUR PASSION THROTTLE</h2>
              <p className="home1-caption3">
                Are you ready to rev up your engines and take the racing world
                by storm? The Ultimate Young Bike Racing Championships is
                calling out to all young riders who have a burning passion for
                speed, adrenaline, and the thrill of competition.
              </p>
            </div>
            <Raceaccordian1></Raceaccordian1>
          </div>
        </section>
        <section className="home1-racing1">
          <div className="home1-header2">
            <div className="home1-section-numeral1">
              <div className="home1-divide1"></div>
              <p className="home1-text27">03</p>
            </div>
            <div data-aos="fade-right" className="home1-heading5">
              <h2 className="home1-title3">INDIAN RACING</h2>
              <h2 className="home1-title4">LET YOUR PASSION THROTTLE</h2>
              <p className="home1-caption4">
                Are you ready to rev up your engines and take the racing world
                by storm? The Ultimate Young Bike Racing Championships is
                calling out to all young riders who have a burning passion for
                speed, adrenaline, and the thrill of competition.
              </p>
            </div>
          </div>
          <Raceaccordianmobile rootClassName="raceaccordianmobile-root-class-name1"></Raceaccordianmobile>
        </section>
        <div className="home1-container23">
          <Videos2 rootClassName="videos2-root-class-name1"></Videos2>
        </div>
        <div className="home1-hero1">
          <h2 className="home1-heading6">
            <span className="home1-text28">Questions on Automobiles?</span>
            <br className="home1-text29"></br>
            <span className="home1-text30">Reach our </span>
            <span className="home1-text31">forum</span>
            <span className="home1-text32"> </span>
            <span className="home1-text33">now!</span>
            <br className="home1-text34"></br>
            <span className="home1-text35">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </h2>
          <a
            href="https://forum.revnitro.com"
            target="_blank"
            rel="noreferrer noopener"
            className="home1-link5 button"
          >
            <span className="home1-text36">Enter Forum</span>
          </a>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home1-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            user-select: none;
            flex-direction: column;
            background-color: var(--dl-color-gray-black);
          }
          .home1-slides {
            gap: 0;
            width: 100%;
            height: 60vh;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
            padding-bottom: 0px;
          }
          .home1-slider {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            height: 60vh;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home1-slider-container {
            gap: var(--dl-space-space-fourunits);
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .home1-slider-track-container {
            width: 100%;
            height: 60vh;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home1-slider-track {
            width: 100%;
            height: 60vh;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home1-slide {
            width: 100%;
            height: 60vh;
            background-color: transparent;
          }
          .home1-container01 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
          }
          .home1-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .home1-container02 {
            top: 0px;
            flex: 0 0 auto;
            right: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: flex-start;
            background-image: linear-gradient(
              90deg,
              rgb(0, 0, 0) 0%,
              rgba(44, 62, 80, 0) 68%,
              rgba(44, 62, 80, 0) 98%
            );
          }
          .home1-container03 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-left: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home1-text {
            color: var(--dl-color-gray-white);
            font-size: 40px;
            font-style: normal;
            font-weight: 800;
          }
          .home1-text01 {
            color: var(--dl-color-gray-white);
            width: 50%;
            font-size: 24px;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home1-button {
            color: var(--dl-color-gray-white);
            padding: var(--dl-space-space-unit);
            font-size: 24px;
            background-color: #ff0000;
          }
          .home1-slide1 {
            width: 100%;
            height: 60vh;
            background-color: transparent;
          }
          .home1-container04 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
          }
          .home1-image01 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .home1-container05 {
            top: 0px;
            flex: 0 0 auto;
            right: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: flex-start;
            background-image: linear-gradient(
              90deg,
              rgb(0, 0, 0) 0%,
              rgba(44, 62, 80, 0) 68%,
              rgba(44, 62, 80, 0) 98%
            );
          }
          .home1-container06 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-left: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home1-text02 {
            color: var(--dl-color-gray-white);
            font-size: 40px;
            font-style: normal;
            font-weight: 800;
          }
          .home1-text03 {
            color: var(--dl-color-gray-white);
            width: 50%;
            font-size: 24px;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home1-button1 {
            color: var(--dl-color-gray-white);
            padding: var(--dl-space-space-unit);
            font-size: 24px;
            background-color: #ff0000;
          }
          .home1-slide2 {
            width: 100%;
            height: 60vh;
            background-color: transparent;
          }
          .home1-container07 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
          }
          .home1-image02 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .home1-container08 {
            top: 0px;
            flex: 0 0 auto;
            right: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: flex-start;
            background-image: linear-gradient(
              90deg,
              rgb(0, 0, 0) 0%,
              rgba(44, 62, 80, 0) 68%,
              rgba(44, 62, 80, 0) 98%
            );
          }
          .home1-container09 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-left: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home1-text04 {
            color: var(--dl-color-gray-white);
            font-size: 40px;
            font-style: normal;
            font-weight: 800;
          }
          .home1-text05 {
            color: var(--dl-color-gray-white);
            width: 50%;
            font-size: 24px;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home1-button2 {
            color: var(--dl-color-gray-white);
            padding: var(--dl-space-space-unit);
            font-size: 24px;
            background-color: #ff0000;
          }
          .home1-slide3 {
            width: 100%;
            height: 60vh;
            background-color: transparent;
          }
          .home1-container10 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
          }
          .home1-image03 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .home1-container11 {
            top: 0px;
            flex: 0 0 auto;
            right: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: flex-start;
            background-image: linear-gradient(
              90deg,
              rgb(0, 0, 0) 0%,
              rgba(44, 62, 80, 0) 68%,
              rgba(44, 62, 80, 0) 98%
            );
          }
          .home1-container12 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-left: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home1-text06 {
            color: var(--dl-color-gray-white);
            font-size: 40px;
            font-style: normal;
            font-weight: 800;
          }
          .home1-text07 {
            color: var(--dl-color-gray-white);
            width: 50%;
            font-size: 24px;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home1-button3 {
            color: var(--dl-color-gray-white);
            padding: var(--dl-space-space-unit);
            font-size: 24px;
            background-color: #ff0000;
          }
          .home1-slide4 {
            width: 100%;
            height: 60vh;
            background-color: transparent;
          }
          .home1-container13 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
          }
          .home1-image04 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .home1-container14 {
            top: 0px;
            flex: 0 0 auto;
            right: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: flex-start;
            background-image: linear-gradient(
              90deg,
              rgb(0, 0, 0) 0%,
              rgba(44, 62, 80, 0) 68%,
              rgba(44, 62, 80, 0) 98%
            );
          }
          .home1-container15 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-left: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home1-text08 {
            color: var(--dl-color-gray-white);
            font-size: 40px;
            font-style: normal;
            font-weight: 800;
          }
          .home1-text09 {
            color: var(--dl-color-gray-white);
            width: 50%;
            font-size: 24px;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home1-button4 {
            color: var(--dl-color-gray-white);
            padding: var(--dl-space-space-unit);
            font-size: 24px;
            background-color: #ff0000;
          }
          .home1-controls {
            gap: var(--dl-space-space-unit);
            right: 0px;
            width: auto;
            bottom: 0px;
            height: auto;
            display: flex;
            position: absolute;
            align-items: center;
            margin-right: var(--dl-space-space-threeunits);
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home1-previous {
            width: 46px;
            height: 30px;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            position: relative;
            padding-top: var(--dl-space-space-oneandhalfunits);
            border-color: var(--dl-color-gray-white);
            border-width: 2px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: var(--dl-radius-radius-round);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            background-color: transparent;
          }
          .home1-icon {
            top: 0px;
            fill: var(--dl-color-gray-white);
            left: 0px;
            right: 0px;
            width: 32px;
            bottom: 0px;
            height: 32px;
            margin: auto;
            padding: 0px;
            position: absolute;
          }
          .home1-next {
            width: 46px;
            height: 30px;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            position: relative;
            padding-top: var(--dl-space-space-oneandhalfunits);
            border-color: var(--dl-color-gray-white);
            border-width: 2px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: var(--dl-radius-radius-round);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            background-color: transparent;
          }
          .home1-icon2 {
            top: 0px;
            fill: var(--dl-color-gray-white);
            left: 0px;
            right: 0px;
            width: 32px;
            bottom: 0px;
            height: 32px;
            margin: auto;
            position: absolute;
          }
          .home1-hero {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            justify-content: center;
          }
          .home1-hero-content {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            width: 100%;
            height: auto;
            display: flex;
            z-index: 100;
            max-width: auto;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home1-text10 {
            color: var(--dl-color-gray-white);
            font-size: 90px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 700;
            line-height: 90px;
          }
          .home1-caption {
            gap: var(--dl-space-space-threeunits);
            height: var(--dl-size-size-xsmall);
            display: flex;
            align-items: flex-end;
            flex-direction: row;
            justify-content: center;
          }
          .home1-caption1 {
            color: var(--dl-color-gray-white);
            font-size: 30px;
            font-family: Poppins;
          }
          .home1-services {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            padding: 0px;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home1-container16 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .home1-heading {
            font-size: 54px;
          }
          .home1-note {
            gap: 130px;
            width: 90%;
            display: flex;
            padding: 0px;
            max-width: 100%;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row-reverse;
            justify-content: center;
          }
          .home1-image05 {
            flex: 0;
            width: auto;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home1-image06 {
            width: 196px;
            height: 402px;
            object-fit: cover;
            border-color: var(--dl-color-gray-white);
            border-width: 1px;
            border-radius: 24px;
          }
          .home1-content {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 0;
            width: auto;
            height: 100%;
            display: flex;
            max-width: auto;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home1-caption2 {
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home1-heading1 {
            color: var(--dl-color-gray-700);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            margin-left: 0px;
          }
          .home1-heading2 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home1-accordion {
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home1-link {
            display: contents;
          }
          .home1-element {
            width: 640px;
            user-select: none;
            text-decoration: none;
          }
          .home1-details {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home1-image07 {
            width: 132px;
            height: 76px;
            object-fit: cover;
          }
          .home1-text11 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 24px;
            max-width: auto;
            font-style: normal;
            text-align: left;
            font-family: Poppins;
            font-weight: 500;
            line-height: 44px;
          }
          .home1-link1 {
            display: contents;
          }
          .home1-element1 {
            width: 640px;
            user-select: none;
            text-decoration: none;
          }
          .home1-details01 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home1-image08 {
            width: 132px;
            height: 76px;
            object-fit: cover;
          }
          .home1-text12 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 24px;
            max-width: auto;
            font-style: normal;
            text-align: left;
            font-family: Poppins;
            font-weight: 500;
            line-height: 44px;
          }
          .home1-link2 {
            display: contents;
          }
          .home1-element2 {
            width: 640px;
            user-select: none;
            text-decoration: none;
          }
          .home1-details02 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home1-image09 {
            width: 132px;
            height: 76px;
            object-fit: cover;
          }
          .home1-text13 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 24px;
            max-width: auto;
            font-style: normal;
            text-align: left;
            font-family: Poppins;
            font-weight: 500;
            line-height: 44px;
          }
          .home1-link3 {
            display: contents;
          }
          .home1-element3 {
            width: 640px;
            user-select: none;
            text-decoration: none;
          }
          .home1-details03 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home1-image10 {
            width: 132px;
            height: 76px;
            object-fit: cover;
          }
          .home1-text14 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 24px;
            max-width: auto;
            font-style: normal;
            text-align: left;
            font-family: Poppins;
            font-weight: 500;
            line-height: 44px;
          }
          .home1-link4 {
            display: contents;
          }
          .home1-element4 {
            width: 640px;
            user-select: none;
            text-decoration: none;
          }
          .home1-details04 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home1-image11 {
            width: 132px;
            height: 76px;
            object-fit: cover;
          }
          .home1-text15 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 24px;
            max-width: auto;
            font-style: normal;
            text-align: left;
            font-family: Poppins;
            font-weight: 500;
            line-height: 44px;
          }
          .home1-testimonials {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-self: center;
            margin-top: var(--dl-space-space-fourunits);
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
          }
          .home1-header {
            gap: var(--dl-space-space-oneandhalfunits);
            color: white;
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home1-heading3 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home1-title {
            font-size: 80px;
            max-width: auto;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 80px;
          }
          .home1-reviews {
            gap: 0;
            width: 100%;
            height: 60vh;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
            padding-bottom: 0px;
          }
          .home1-slider1 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home1-slider-container1 {
            gap: var(--dl-space-space-fourunits);
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .home1-slider-track-container1 {
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home1-slider-track1 {
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: row;
            justify-content: center;
          }
          .home1-slide5 {
            width: 100%;
            height: auto;
            justify-content: space-between;
            background-color: transparent;
          }
          .home1-quote {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            min-width: auto;
            align-self: stretch;
            align-items: flex-start;
            border-color: rgba(255, 255, 255, 0.2);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            border-right-width: 1px;
          }
          .home1-author {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home1-image12 {
            width: 60px;
            object-fit: cover;
            aspect-ratio: 1;
            border-radius: var(--dl-radius-radius-round);
          }
          .home1-details05 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home1-name {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-weight: 600;
            letter-spacing: 1%;
          }
          .home1-handle {
            color: rgba(255, 255, 255, 0.3);
            font-size: 14px;
            letter-spacing: 1%;
          }
          .home1-quote01 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 22px;
            max-width: 320px;
            font-family: Poppins;
            line-height: 33px;
            letter-spacing: 1%;
          }
          .home1-quote02 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            min-width: auto;
            align-self: stretch;
            align-items: flex-start;
            border-color: rgba(255, 255, 255, 0.2);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            border-right-width: 1px;
          }
          .home1-author1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home1-image13 {
            width: 60px;
            object-fit: cover;
            aspect-ratio: 1;
            border-radius: var(--dl-radius-radius-round);
          }
          .home1-details06 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home1-name1 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-weight: 600;
            letter-spacing: 1%;
          }
          .home1-handle1 {
            color: rgba(255, 255, 255, 0.3);
            font-size: 14px;
            letter-spacing: 1%;
          }
          .home1-quote03 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 22px;
            max-width: 320px;
            font-family: Poppins;
            line-height: 33px;
            letter-spacing: 1%;
          }
          .home1-quote04 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            min-width: auto;
            align-self: stretch;
            align-items: flex-start;
            border-color: rgba(255, 255, 255, 0.2);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            border-right-width: 1px;
          }
          .home1-author2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home1-image14 {
            width: 60px;
            object-fit: cover;
            aspect-ratio: 1;
            border-radius: var(--dl-radius-radius-round);
          }
          .home1-details07 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home1-name2 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-weight: 600;
            letter-spacing: 1%;
          }
          .home1-handle2 {
            color: rgba(255, 255, 255, 0.3);
            font-size: 14px;
            letter-spacing: 1%;
          }
          .home1-quote05 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 22px;
            max-width: 320px;
            font-family: Poppins;
            line-height: 33px;
            letter-spacing: 1%;
          }
          .home1-slide6 {
            width: 100%;
            height: auto;
            justify-content: space-between;
            background-color: transparent;
          }
          .home1-quote06 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            min-width: auto;
            align-self: stretch;
            align-items: flex-start;
            border-color: rgba(255, 255, 255, 0.2);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            border-right-width: 1px;
          }
          .home1-author3 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home1-image15 {
            width: 60px;
            object-fit: cover;
            aspect-ratio: 1;
            border-radius: var(--dl-radius-radius-round);
          }
          .home1-details08 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home1-name3 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-weight: 600;
            letter-spacing: 1%;
          }
          .home1-handle3 {
            color: rgba(255, 255, 255, 0.3);
            font-size: 14px;
            letter-spacing: 1%;
          }
          .home1-quote07 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 22px;
            max-width: 320px;
            font-family: Poppins;
            line-height: 33px;
            letter-spacing: 1%;
          }
          .home1-quote08 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            min-width: auto;
            align-self: stretch;
            align-items: flex-start;
            border-color: rgba(255, 255, 255, 0.2);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            border-right-width: 1px;
          }
          .home1-author4 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home1-image16 {
            width: 60px;
            object-fit: cover;
            aspect-ratio: 1;
            border-radius: var(--dl-radius-radius-round);
          }
          .home1-details09 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home1-name4 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-weight: 600;
            letter-spacing: 1%;
          }
          .home1-handle4 {
            color: rgba(255, 255, 255, 0.3);
            font-size: 14px;
            letter-spacing: 1%;
          }
          .home1-quote09 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 22px;
            max-width: 320px;
            font-family: Poppins;
            line-height: 33px;
            letter-spacing: 1%;
          }
          .home1-quote10 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            min-width: auto;
            align-self: stretch;
            align-items: flex-start;
            border-color: rgba(255, 255, 255, 0.2);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            border-right-width: 1px;
          }
          .home1-author5 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home1-image17 {
            width: 60px;
            object-fit: cover;
            aspect-ratio: 1;
            border-radius: var(--dl-radius-radius-round);
          }
          .home1-details10 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home1-name5 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-weight: 600;
            letter-spacing: 1%;
          }
          .home1-handle5 {
            color: rgba(255, 255, 255, 0.3);
            font-size: 14px;
            letter-spacing: 1%;
          }
          .home1-quote11 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 22px;
            max-width: 320px;
            font-family: Poppins;
            line-height: 33px;
            letter-spacing: 1%;
          }
          .home1-slide7 {
            width: 100%;
            height: 60vh;
            justify-content: space-between;
            background-color: transparent;
          }
          .home1-quote12 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            min-width: auto;
            align-self: stretch;
            align-items: flex-start;
            border-color: rgba(255, 255, 255, 0.2);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            border-right-width: 1px;
          }
          .home1-author6 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home1-image18 {
            width: 60px;
            object-fit: cover;
            aspect-ratio: 1;
            border-radius: var(--dl-radius-radius-round);
          }
          .home1-details11 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home1-name6 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-weight: 600;
            letter-spacing: 1%;
          }
          .home1-handle6 {
            color: rgba(255, 255, 255, 0.3);
            font-size: 14px;
            letter-spacing: 1%;
          }
          .home1-quote13 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 22px;
            max-width: 320px;
            font-family: Poppins;
            line-height: 33px;
            letter-spacing: 1%;
          }
          .home1-quote14 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            min-width: auto;
            align-self: stretch;
            align-items: flex-start;
            border-color: rgba(255, 255, 255, 0.2);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            border-right-width: 1px;
          }
          .home1-author7 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home1-image19 {
            width: 60px;
            object-fit: cover;
            aspect-ratio: 1;
            border-radius: var(--dl-radius-radius-round);
          }
          .home1-details12 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home1-name7 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-weight: 600;
            letter-spacing: 1%;
          }
          .home1-handle7 {
            color: rgba(255, 255, 255, 0.3);
            font-size: 14px;
            letter-spacing: 1%;
          }
          .home1-quote15 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 22px;
            max-width: 320px;
            font-family: Poppins;
            line-height: 33px;
            letter-spacing: 1%;
          }
          .home1-quote16 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            min-width: auto;
            align-self: stretch;
            align-items: flex-start;
            border-color: rgba(255, 255, 255, 0.2);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            border-right-width: 1px;
          }
          .home1-author8 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home1-image20 {
            width: 60px;
            object-fit: cover;
            aspect-ratio: 1;
            border-radius: var(--dl-radius-radius-round);
          }
          .home1-details13 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home1-name8 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-weight: 600;
            letter-spacing: 1%;
          }
          .home1-handle8 {
            color: rgba(255, 255, 255, 0.3);
            font-size: 14px;
            letter-spacing: 1%;
          }
          .home1-quote17 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 22px;
            max-width: 320px;
            font-family: Poppins;
            line-height: 33px;
            letter-spacing: 1%;
          }
          .home1-controls1 {
            gap: var(--dl-space-space-unit);
            right: 0px;
            bottom: 0px;
            height: auto;
            display: flex;
            position: absolute;
            align-items: center;
            margin-right: var(--dl-space-space-threeunits);
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home1-previous1 {
            width: 46px;
            height: 30px;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            position: relative;
            padding-top: var(--dl-space-space-oneandhalfunits);
            border-color: var(--dl-color-gray-white);
            border-width: 2px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: var(--dl-radius-radius-round);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            background-color: transparent;
          }
          .home1-icon4 {
            top: 0px;
            fill: var(--dl-color-gray-white);
            left: 0px;
            right: 0px;
            width: 32px;
            bottom: 0px;
            height: 32px;
            margin: auto;
            padding: 0px;
            position: absolute;
          }
          .home1-next1 {
            width: 46px;
            height: 30px;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            position: relative;
            padding-top: var(--dl-space-space-oneandhalfunits);
            border-color: var(--dl-color-gray-white);
            border-width: 2px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: var(--dl-radius-radius-round);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            background-color: transparent;
          }
          .home1-icon6 {
            top: 0px;
            fill: var(--dl-color-gray-white);
            left: 0px;
            right: 0px;
            width: 32px;
            bottom: 0px;
            height: 32px;
            margin: auto;
            position: absolute;
          }
          .home1-container18 {
            display: contents;
          }
          .home1-racing {
            gap: var(--dl-space-space-fiveunits);
            width: auto;
            display: flex;
            padding: 0px;
            max-width: auto;
            align-items: center;
            flex-direction: column;
          }
          .home1-gradient {
            width: 100%;
            height: auto;
            padding: 0px;
            align-self: flex-start;
            justify-content: space-between;
          }
          .home1-container19 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home1-container20 {
            flex: 0 0 auto;
            height: 100px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            justify-content: space-between;
          }
          .home1-text19 {
            color: var(--dl-color-gray-white);
            width: 560px;
            font-size: 34px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            margin-left: var(--dl-space-space-twounits);
          }
          .home1-text23 {
            color: var(--dl-color-gray-white);
            width: auto;
            font-style: italic;
            text-align: right;
            font-family: Poppins;
            font-weight: 500;
            margin-right: var(--dl-space-space-twounits);
          }
          .home1-text24 {
            font-family: Arial;
          }
          .home1-container21 {
            width: auto;
            height: 100%;
          }
          .home1-container22 {
            display: contents;
          }
          .home1-header1 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 100%;
            min-width: 100%;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .home1-section-numeral {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .home1-divide {
            width: 100px;
            height: 1px;
            display: flex;
            margin-top: 4px;
            align-items: center;
            flex-direction: row;
            background-color: #000000;
          }
          .home1-heading4 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: center;
            align-items: center;
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .home1-title1 {
            color: var(--dl-color-gray-white);
            font-size: 90px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 100px;
          }
          .home1-title2 {
            color: rgba(255, 255, 255, 0.54);
            font-size: 32px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 32px;
          }
          .home1-caption3 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            font-family: Poppins;
            line-height: 27px;
          }
          .home1-racing1 {
            gap: var(--dl-space-space-fiveunits);
            width: auto;
            display: none;
            padding: 0px;
            max-width: auto;
            align-items: center;
            flex-direction: column;
          }
          .home1-header2 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 100%;
            min-width: 100%;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .home1-section-numeral1 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .home1-divide1 {
            width: 100px;
            height: 1px;
            display: flex;
            margin-top: 4px;
            align-items: center;
            flex-direction: row;
            background-color: #000000;
          }
          .home1-heading5 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: center;
            align-items: center;
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .home1-title3 {
            color: var(--dl-color-gray-white);
            font-size: 90px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 100px;
          }
          .home1-title4 {
            color: rgba(255, 255, 255, 0.54);
            font-size: 32px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 32px;
          }
          .home1-caption4 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            font-family: Poppins;
            line-height: 27px;
          }
          .home1-container23 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home1-hero1 {
            width: 100%;
            height: 100vh;
            display: none;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            min-height: 80vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-black);
          }
          .home1-heading6 {
            color: rgb(255, 255, 255);
            height: auto;
            font-size: 100px;
            font-style: normal;
            text-align: center;
            font-family: Poppins;
            font-weight: 500;
          }
          .home1-text28 {
            font-size: 54px;
            font-weight: 500;
          }
          .home1-text29 {
            font-weight: 500;
          }
          .home1-text30 {
            font-weight: 500;
          }
          .home1-text31 {
            color: #2200ff;
            font-style: italic;
            font-family: Open Sans;
            font-weight: 600;
          }
          .home1-text32 {
            color: #2200ff;
            font-style: italic;
            font-family: Open Sans;
            font-weight: 600;
          }
          .home1-text33 {
            font-style: normal;
          }
          .home1-text34 {
            color: #ffffff;
            font-size: 100px;
            font-style: normal;
            font-weight: 500;
          }
          .home1-text35 {
            font-style: normal;
          }
          .home1-link5 {
            color: var(--dl-color-gray-white);
            width: auto;
            height: auto;
            margin-top: var(--dl-space-space-twounits);
            border-radius: 50px;
            text-decoration: none;
            background-color: #2200ff;
          }
          .home1-text36 {
            margin: var(--dl-space-space-unit);
            font-size: 24px;
            font-family: Poppins;
          }
          @media (max-width: 1600px) {
            .home1-container01 {
              height: 100%;
              position: relative;
            }
            .home1-image {
              width: 100%;
              height: 100%;
            }
            .home1-container02 {
              top: 0px;
              left: 0px;
              height: 100%;
              position: absolute;
              background-image: linear-gradient(
                90deg,
                rgb(0, 0, 0) 21%,
                rgba(44, 62, 80, 0) 99%
              );
            }
            .home1-container03 {
              width: auto;
              align-self: center;
              margin-left: var(--dl-space-space-fourunits);
            }
            .home1-text {
              color: var(--dl-color-gray-white);
              font-size: 32px;
              font-style: normal;
              font-weight: 700;
            }
            .home1-text01 {
              color: var(--dl-color-gray-white);
              width: 40%;
              font-size: 20px;
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
            .home1-button {
              color: var(--dl-color-gray-white);
              background-color: #ff0000;
            }
            .home1-container04 {
              height: 100%;
              position: relative;
            }
            .home1-image01 {
              width: 100%;
              height: 100%;
            }
            .home1-container05 {
              top: 0px;
              left: 0px;
              height: 100%;
              position: absolute;
              background-image: linear-gradient(
                90deg,
                rgb(0, 0, 0) 21%,
                rgba(44, 62, 80, 0) 99%
              );
            }
            .home1-container06 {
              width: auto;
              align-self: center;
              margin-left: var(--dl-space-space-fourunits);
            }
            .home1-text02 {
              color: var(--dl-color-gray-white);
              font-size: 32px;
              font-style: normal;
              font-weight: 700;
            }
            .home1-text03 {
              color: var(--dl-color-gray-white);
              width: 40%;
              font-size: 20px;
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
            .home1-button1 {
              color: var(--dl-color-gray-white);
              background-color: #ff0000;
            }
            .home1-container07 {
              height: 100%;
              position: relative;
            }
            .home1-image02 {
              width: 100%;
              height: 100%;
            }
            .home1-container08 {
              top: 0px;
              left: 0px;
              height: 100%;
              position: absolute;
              background-image: linear-gradient(
                90deg,
                rgb(0, 0, 0) 21%,
                rgba(44, 62, 80, 0) 99%
              );
            }
            .home1-container09 {
              width: auto;
              align-self: center;
              margin-left: var(--dl-space-space-fourunits);
            }
            .home1-text04 {
              color: var(--dl-color-gray-white);
              font-size: 32px;
              font-style: normal;
              font-weight: 700;
            }
            .home1-text05 {
              color: var(--dl-color-gray-white);
              width: 40%;
              font-size: 20px;
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
            .home1-button2 {
              color: var(--dl-color-gray-white);
              background-color: #ff0000;
            }
            .home1-container10 {
              height: 100%;
              position: relative;
            }
            .home1-image03 {
              width: 100%;
              height: 100%;
            }
            .home1-container11 {
              top: 0px;
              left: 0px;
              height: 100%;
              position: absolute;
              background-image: linear-gradient(
                90deg,
                rgb(0, 0, 0) 21%,
                rgba(44, 62, 80, 0) 99%
              );
            }
            .home1-container12 {
              width: auto;
              align-self: center;
              margin-left: var(--dl-space-space-fourunits);
            }
            .home1-text06 {
              color: var(--dl-color-gray-white);
              font-size: 32px;
              font-style: normal;
              font-weight: 700;
            }
            .home1-text07 {
              color: var(--dl-color-gray-white);
              width: 40%;
              font-size: 20px;
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
            .home1-button3 {
              color: var(--dl-color-gray-white);
              background-color: #ff0000;
            }
            .home1-container13 {
              height: 100%;
              position: relative;
            }
            .home1-image04 {
              width: 100%;
              height: 100%;
            }
            .home1-container14 {
              top: 0px;
              left: 0px;
              height: 100%;
              position: absolute;
              background-image: linear-gradient(
                90deg,
                rgb(0, 0, 0) 21%,
                rgba(44, 62, 80, 0) 99%
              );
            }
            .home1-container15 {
              width: auto;
              align-self: center;
              margin-left: var(--dl-space-space-fourunits);
            }
            .home1-text08 {
              color: var(--dl-color-gray-white);
              font-size: 32px;
              font-style: normal;
              font-weight: 700;
            }
            .home1-text09 {
              color: var(--dl-color-gray-white);
              width: 40%;
              font-size: 20px;
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
            .home1-button4 {
              color: var(--dl-color-gray-white);
              background-color: #ff0000;
            }
            .home1-container16 {
              justify-content: center;
            }
            .home1-image05 {
              flex: 1;
              width: auto;
              margin: 0px;
            }
            .home1-content {
              flex: 1;
              width: 70%;
              margin-left: var(--dl-space-space-sixunits);
            }
            .home1-heading1 {
              margin-left: var(--dl-space-space-twounits);
            }
            .home1-text15 {
              color: var(--dl-color-gray-white);
            }
            .home1-title {
              width: 100%;
              font-size: 70px;
              max-width: 100%;
              font-style: normal;
              font-family: Poppins;
              font-weight: 600;
              line-height: 80px;
            }
            .home1-reviews {
              height: auto;
            }
            .home1-slider1 {
              height: auto;
            }
            .home1-slider-track-container1 {
              height: auto;
            }
            .home1-slider-track1 {
              height: auto;
            }
            .home1-slide5 {
              width: 100%;
              height: auto;
              align-items: center;
              justify-content: space-between;
            }
            .home1-quote {
              width: 30%;
              height: 400px;
              align-items: center;
              justify-content: center;
            }
            .home1-quote02 {
              width: 30%;
              height: 400px;
              justify-content: center;
            }
            .home1-quote04 {
              width: 30%;
              height: 400px;
              justify-content: center;
            }
            .home1-slide6 {
              width: 100%;
              height: auto;
              align-items: center;
              justify-content: space-between;
            }
            .home1-quote06 {
              width: 30%;
              height: 400px;
              align-items: center;
              justify-content: center;
            }
            .home1-quote08 {
              width: 30%;
              height: 400px;
              justify-content: center;
            }
            .home1-quote10 {
              width: 30%;
              height: 400px;
              justify-content: center;
            }
            .home1-slide7 {
              width: 100%;
              height: auto;
              align-items: center;
              justify-content: space-between;
            }
            .home1-quote12 {
              width: 30%;
              height: 400px;
              align-items: center;
              justify-content: center;
            }
            .home1-quote14 {
              width: 30%;
              height: 400px;
              justify-content: center;
            }
            .home1-quote16 {
              width: 30%;
              height: 400px;
              justify-content: center;
            }
            .home1-previous1 {
              border-color: rgba(0, 0, 0, 0);
            }
            .home1-next1 {
              border-color: rgba(0, 0, 0, 0);
            }
            .home1-racing {
              margin-top: var(--dl-space-space-fiveunits);
            }
          }
          @media (max-width: 1200px) {
            .home1-slide {
              background-color: transparent;
            }
            .home1-container01 {
              height: 60vh;
              position: relative;
              flex-direction: column;
            }
            .home1-image {
              width: 100%;
              height: 100%;
            }
            .home1-container02 {
              top: 0px;
              left: 0px;
              height: 60vh;
              position: absolute;
              background-image: linear-gradient(
                90deg,
                rgb(0, 0, 0) 12%,
                rgba(255, 255, 255, 0) 100%
              );
            }
            .home1-container03 {
              width: auto;
              height: auto;
              align-self: center;
              margin-left: var(--dl-space-space-fourunits);
            }
            .home1-text {
              color: var(--dl-color-gray-white);
              font-size: 40px;
              font-style: normal;
              margin-top: var(--dl-space-space-unit);
              font-weight: 800;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home1-text01 {
              color: var(--dl-color-gray-white);
              width: 30%;
              font-size: 18px;
              font-style: normal;
              font-weight: 500;
              line-height: 1.5;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home1-button {
              color: var(--dl-color-gray-white);
              font-size: 20px;
              font-style: normal;
              font-weight: 500;
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
              background-color: rgb(255, 0, 0);
            }
            .home1-slide1 {
              background-color: transparent;
            }
            .home1-container04 {
              height: 60vh;
              position: relative;
              flex-direction: column;
            }
            .home1-image01 {
              width: 100%;
              height: 100%;
            }
            .home1-container05 {
              top: 0px;
              left: 0px;
              height: 60vh;
              position: absolute;
              background-image: linear-gradient(
                90deg,
                rgb(0, 0, 0) 12%,
                rgba(255, 255, 255, 0) 100%
              );
            }
            .home1-container06 {
              width: auto;
              height: auto;
              align-self: center;
              margin-left: var(--dl-space-space-fourunits);
            }
            .home1-text02 {
              color: var(--dl-color-gray-white);
              font-size: 40px;
              font-style: normal;
              margin-top: var(--dl-space-space-unit);
              font-weight: 800;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home1-text03 {
              color: var(--dl-color-gray-white);
              width: 30%;
              font-size: 18px;
              font-style: normal;
              font-weight: 500;
              line-height: 1.5;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home1-button1 {
              color: var(--dl-color-gray-white);
              font-size: 20px;
              font-style: normal;
              font-weight: 500;
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
              background-color: rgb(255, 0, 0);
            }
            .home1-slide2 {
              background-color: transparent;
            }
            .home1-container07 {
              height: 60vh;
              position: relative;
              flex-direction: column;
            }
            .home1-image02 {
              width: 100%;
              height: 100%;
            }
            .home1-container08 {
              top: 0px;
              left: 0px;
              height: 60vh;
              position: absolute;
              background-image: linear-gradient(
                90deg,
                rgb(0, 0, 0) 12%,
                rgba(255, 255, 255, 0) 100%
              );
            }
            .home1-container09 {
              width: auto;
              height: auto;
              align-self: center;
              margin-left: var(--dl-space-space-fourunits);
            }
            .home1-text04 {
              color: var(--dl-color-gray-white);
              font-size: 40px;
              font-style: normal;
              margin-top: var(--dl-space-space-unit);
              font-weight: 800;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home1-text05 {
              color: var(--dl-color-gray-white);
              width: 30%;
              font-size: 18px;
              font-style: normal;
              font-weight: 500;
              line-height: 1.5;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home1-button2 {
              color: var(--dl-color-gray-white);
              font-size: 20px;
              font-style: normal;
              font-weight: 500;
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
              background-color: rgb(255, 0, 0);
            }
            .home1-slide3 {
              background-color: transparent;
            }
            .home1-container10 {
              height: 60vh;
              position: relative;
              flex-direction: column;
            }
            .home1-image03 {
              width: 100%;
              height: 100%;
            }
            .home1-container11 {
              top: 0px;
              left: 0px;
              height: 60vh;
              position: absolute;
              background-image: linear-gradient(
                90deg,
                rgb(0, 0, 0) 12%,
                rgba(255, 255, 255, 0) 100%
              );
            }
            .home1-container12 {
              width: auto;
              height: auto;
              align-self: center;
              margin-left: var(--dl-space-space-fourunits);
            }
            .home1-text06 {
              color: var(--dl-color-gray-white);
              font-size: 40px;
              font-style: normal;
              margin-top: var(--dl-space-space-unit);
              font-weight: 800;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home1-text07 {
              color: var(--dl-color-gray-white);
              width: 30%;
              font-size: 18px;
              font-style: normal;
              font-weight: 500;
              line-height: 1.5;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home1-button3 {
              color: var(--dl-color-gray-white);
              font-size: 20px;
              font-style: normal;
              font-weight: 500;
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
              background-color: rgb(255, 0, 0);
            }
            .home1-slide4 {
              background-color: transparent;
            }
            .home1-container13 {
              height: 60vh;
              position: relative;
              flex-direction: column;
            }
            .home1-image04 {
              width: 100%;
              height: 100%;
            }
            .home1-container14 {
              top: 0px;
              left: 0px;
              height: 60vh;
              position: absolute;
              background-image: linear-gradient(
                90deg,
                rgb(0, 0, 0) 12%,
                rgba(255, 255, 255, 0) 100%
              );
            }
            .home1-container15 {
              width: auto;
              height: auto;
              align-self: center;
              margin-left: var(--dl-space-space-fourunits);
            }
            .home1-text08 {
              color: var(--dl-color-gray-white);
              font-size: 40px;
              font-style: normal;
              margin-top: var(--dl-space-space-unit);
              font-weight: 800;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home1-text09 {
              color: var(--dl-color-gray-white);
              width: 30%;
              font-size: 18px;
              font-style: normal;
              font-weight: 500;
              line-height: 1.5;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home1-button4 {
              color: var(--dl-color-gray-white);
              font-size: 20px;
              font-style: normal;
              font-weight: 500;
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
              background-color: rgb(255, 0, 0);
            }
            .home1-heading {
              font-size: 54px;
            }
            .home1-note {
              width: 100%;
              padding: var(--dl-space-space-threeunits);
              position: relative;
            }
            .home1-image05 {
              flex: 1;
              width: 30%;
              justify-content: center;
            }
            .home1-content {
              width: 70%;
            }
            .home1-slider-track-container1 {
              height: auto;
            }
            .home1-hero1 {
              width: auto;
            }
          }
          @media (max-width: 991px) {
            .home1-slider {
              gap: var(--dl-space-space-twounits);
            }
            .home1-container16 {
              height: auto;
            }
            .home1-note {
              flex-direction: column-reverse;
            }
            .home1-image05 {
              flex: 1;
              width: 100%;
              margin-top: var(--dl-space-space-oneandhalfunits);
            }
            .home1-image06 {
              width: var(--dl-size-size-xxlarge);
              height: auto;
            }
            .home1-content {
              width: auto;
              align-items: center;
            }
            .home1-heading1 {
              margin-left: 0px;
              margin-bottom: 0px;
            }
            .home1-heading2 {
              width: auto;
              max-width: auto;
            }
            .home1-reviews {
              height: auto;
              padding: var(--dl-space-space-fourunits);
            }
            .home1-slider1 {
              gap: var(--dl-space-space-twounits);
              height: auto;
            }
            .home1-slider-track-container1 {
              height: auto;
            }
            .home1-slider-track1 {
              height: auto;
              justify-content: center;
            }
            .home1-racing1 {
              display: none;
            }
            .home1-heading6 {
              font-size: 50px;
            }
          }
          @media (max-width: 767px) {
            .home1-slides {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home1-slider {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home1-slider-track {
              align-items: stretch;
            }
            .home1-previous {
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .home1-icon {
              width: 14px;
              height: 14px;
            }
            .home1-next {
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .home1-icon2 {
              width: 14px;
              height: 14px;
            }
            .home1-hero {
              height: 60vh;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home1-hero-content {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home1-caption {
              gap: var(--dl-space-space-unit);
            }
            .home1-caption1 {
              font-size: 16px;
              line-height: 24px;
            }
            .home1-services {
              gap: var(--dl-space-space-threeunits);
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home1-container16 {
              align-self: center;
            }
            .home1-heading {
              text-align: center;
            }
            .home1-note {
              justify-content: center;
            }
            .home1-image05 {
              margin-top: var(--dl-space-space-oneandhalfunits);
            }
            .home1-content {
              width: 100%;
              margin: var(--dl-space-space-sixunits);
              align-items: center;
            }
            .home1-heading1 {
              margin-bottom: 0px;
            }
            .home1-heading2 {
              align-items: center;
            }
            .home1-element {
              width: 100%;
              max-width: 560px;
            }
            .home1-text11 {
              font-size: 18px;
              line-height: 24px;
            }
            .home1-element1 {
              width: 100%;
              max-width: 560px;
            }
            .home1-text12 {
              font-size: 18px;
              line-height: 24px;
            }
            .home1-element2 {
              width: 100%;
              max-width: 560px;
            }
            .home1-text13 {
              font-size: 18px;
              line-height: 24px;
            }
            .home1-element3 {
              width: 100%;
              max-width: 560px;
            }
            .home1-text14 {
              font-size: 18px;
              line-height: 24px;
            }
            .home1-element4 {
              width: 100%;
              max-width: 560px;
            }
            .home1-text15 {
              font-size: 18px;
              line-height: 24px;
            }
            .home1-testimonials {
              gap: var(--dl-space-space-threeunits);
              padding-top: 0px;
            }
            .home1-header {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home1-heading3 {
              gap: var(--dl-space-space-unit);
            }
            .home1-title {
              font-size: 30px;
              line-height: 33px;
            }
            .home1-reviews {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home1-slider1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home1-slider-track1 {
              align-items: stretch;
            }
            .home1-quote {
              gap: var(--dl-space-space-unit);
              width: 100%;
              height: auto;
              min-width: 100%;
              padding-top: var(--dl-space-space-unit);
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-unit);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home1-author {
              width: 100%;
            }
            .home1-image12 {
              width: 40px;
            }
            .home1-details05 {
              flex: 1;
            }
            .home1-name {
              width: 90%;
              font-size: 16px;
              line-height: 20px;
            }
            .home1-handle {
              width: 90%;
              font-size: 14px;
              line-height: 16px;
            }
            .home1-quote01 {
              width: 90%;
              font-size: 16px;
              line-height: 20px;
            }
            .home1-quote02 {
              gap: var(--dl-space-space-unit);
              width: 100%;
              height: auto;
              min-width: 100%;
              padding-top: var(--dl-space-space-unit);
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-unit);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home1-author1 {
              width: 100%;
            }
            .home1-image13 {
              width: 40px;
            }
            .home1-details06 {
              flex: 1;
            }
            .home1-name1 {
              width: 90%;
              font-size: 16px;
              line-height: 20px;
            }
            .home1-handle1 {
              width: 90%;
              font-size: 14px;
              line-height: 16px;
            }
            .home1-quote03 {
              width: 90%;
              font-size: 16px;
              line-height: 20px;
            }
            .home1-quote04 {
              gap: var(--dl-space-space-unit);
              width: 100%;
              height: auto;
              min-width: 100%;
              padding-top: var(--dl-space-space-unit);
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-unit);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home1-author2 {
              width: 100%;
            }
            .home1-image14 {
              width: 40px;
            }
            .home1-details07 {
              flex: 1;
            }
            .home1-name2 {
              width: 90%;
              font-size: 16px;
              line-height: 20px;
            }
            .home1-handle2 {
              width: 90%;
              font-size: 14px;
              line-height: 16px;
            }
            .home1-quote05 {
              width: 90%;
              font-size: 16px;
              line-height: 20px;
            }
            .home1-quote06 {
              gap: var(--dl-space-space-unit);
              width: 100%;
              height: auto;
              min-width: 100%;
              padding-top: var(--dl-space-space-unit);
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-unit);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home1-author3 {
              width: 100%;
            }
            .home1-image15 {
              width: 40px;
            }
            .home1-details08 {
              flex: 1;
            }
            .home1-name3 {
              width: 90%;
              font-size: 16px;
              line-height: 20px;
            }
            .home1-handle3 {
              width: 90%;
              font-size: 14px;
              line-height: 16px;
            }
            .home1-quote07 {
              width: 90%;
              font-size: 16px;
              line-height: 20px;
            }
            .home1-quote08 {
              gap: var(--dl-space-space-unit);
              width: 100%;
              height: auto;
              min-width: 100%;
              padding-top: var(--dl-space-space-unit);
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-unit);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home1-author4 {
              width: 100%;
            }
            .home1-image16 {
              width: 40px;
            }
            .home1-details09 {
              flex: 1;
            }
            .home1-name4 {
              width: 90%;
              font-size: 16px;
              line-height: 20px;
            }
            .home1-handle4 {
              width: 90%;
              font-size: 14px;
              line-height: 16px;
            }
            .home1-quote09 {
              width: 90%;
              font-size: 16px;
              line-height: 20px;
            }
            .home1-quote10 {
              gap: var(--dl-space-space-unit);
              width: 100%;
              height: auto;
              min-width: 100%;
              padding-top: var(--dl-space-space-unit);
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-unit);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home1-author5 {
              width: 100%;
            }
            .home1-image17 {
              width: 40px;
            }
            .home1-details10 {
              flex: 1;
            }
            .home1-name5 {
              width: 90%;
              font-size: 16px;
              line-height: 20px;
            }
            .home1-handle5 {
              width: 90%;
              font-size: 14px;
              line-height: 16px;
            }
            .home1-quote11 {
              width: 90%;
              font-size: 16px;
              line-height: 20px;
            }
            .home1-quote12 {
              gap: var(--dl-space-space-unit);
              width: 100%;
              height: auto;
              min-width: 100%;
              padding-top: var(--dl-space-space-unit);
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-unit);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home1-author6 {
              width: 100%;
            }
            .home1-image18 {
              width: 40px;
            }
            .home1-details11 {
              flex: 1;
            }
            .home1-name6 {
              width: 90%;
              font-size: 16px;
              line-height: 20px;
            }
            .home1-handle6 {
              width: 90%;
              font-size: 14px;
              line-height: 16px;
            }
            .home1-quote13 {
              width: 90%;
              font-size: 16px;
              line-height: 20px;
            }
            .home1-quote14 {
              gap: var(--dl-space-space-unit);
              width: 100%;
              height: auto;
              min-width: 100%;
              padding-top: var(--dl-space-space-unit);
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-unit);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home1-author7 {
              width: 100%;
            }
            .home1-image19 {
              width: 40px;
            }
            .home1-details12 {
              flex: 1;
            }
            .home1-name7 {
              width: 90%;
              font-size: 16px;
              line-height: 20px;
            }
            .home1-handle7 {
              width: 90%;
              font-size: 14px;
              line-height: 16px;
            }
            .home1-quote15 {
              width: 90%;
              font-size: 16px;
              line-height: 20px;
            }
            .home1-quote16 {
              gap: var(--dl-space-space-unit);
              width: 100%;
              height: auto;
              min-width: 100%;
              padding-top: var(--dl-space-space-unit);
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-unit);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home1-author8 {
              width: 100%;
            }
            .home1-image20 {
              width: 40px;
            }
            .home1-details13 {
              flex: 1;
            }
            .home1-name8 {
              width: 90%;
              font-size: 16px;
              line-height: 20px;
            }
            .home1-handle8 {
              width: 90%;
              font-size: 14px;
              line-height: 16px;
            }
            .home1-quote17 {
              width: 90%;
              font-size: 16px;
              line-height: 20px;
            }
            .home1-previous1 {
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .home1-icon4 {
              width: 14px;
              height: 14px;
            }
            .home1-next1 {
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .home1-icon6 {
              width: 14px;
              height: 14px;
            }
            .home1-racing {
              gap: var(--dl-space-space-threeunits);
              padding: 0px;
            }
            .home1-divide {
              width: 50px;
            }
            .home1-heading4 {
              gap: var(--dl-space-space-unit);
            }
            .home1-title1 {
              font-size: 30px;
              line-height: 33px;
            }
            .home1-title2 {
              font-size: 30px;
              line-height: 33px;
            }
            .home1-caption3 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .home1-racing1 {
              gap: var(--dl-space-space-threeunits);
              display: none;
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home1-divide1 {
              width: 50px;
            }
            .home1-heading5 {
              gap: var(--dl-space-space-unit);
            }
            .home1-title3 {
              font-size: 30px;
              line-height: 33px;
            }
            .home1-title4 {
              font-size: 30px;
              line-height: 33px;
            }
            .home1-caption4 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .home1-container23 {
              height: auto;
            }
            .home1-hero1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home1-heading6 {
              font-size: 36px;
            }
          }
          @media (max-width: 479px) {
            .home1-previous {
              width: auto;
            }
            .home1-next {
              width: auto;
            }
            .home1-hero {
              height: auto;
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home1-hero-content {
              height: auto;
            }
            .home1-text10 {
              font-size: 50px;
            }
            .home1-services {
              margin-top: var(--dl-space-space-unit);
              padding-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .home1-heading {
              font-size: 32px;
              text-align: center;
            }
            .home1-image05 {
              margin-top: var(--dl-space-space-twounits);
            }
            .home1-image06 {
              width: auto;
              height: auto;
            }
            .home1-content {
              margin: var(--dl-space-space-unit);
              align-items: center;
            }
            .home1-heading1 {
              font-size: 16px;
              margin-left: 0px;
              margin-bottom: 0px;
            }
            .home1-heading2 {
              align-items: center;
            }
            .home1-element {
              width: 350px;
              max-width: auto;
            }
            .home1-details {
              align-items: center;
            }
            .home1-element1 {
              width: 350px;
              max-width: auto;
            }
            .home1-element2 {
              width: 350px;
              max-width: auto;
            }
            .home1-element3 {
              width: 350px;
              max-width: auto;
            }
            .home1-element4 {
              width: 350px;
              max-width: auto;
            }
            .home1-reviews {
              height: auto;
            }
            .home1-controls1 {
              right: var(--dl-space-space-halfunit);
              bottom: 16px;
              position: absolute;
              margin-top: var(--dl-space-space-twounits);
              margin-right: var(--dl-space-space-twounits);
            }
            .home1-previous1 {
              width: auto;
            }
            .home1-next1 {
              width: auto;
            }
            .home1-racing {
              display: none;
              padding: 0px;
            }
            .home1-text19 {
              font-size: 18px;
              margin-left: 0px;
            }
            .home1-text23 {
              font-size: 12px;
            }
            .home1-divide {
              width: 20px;
            }
            .home1-text26 {
              font-size: 16px;
              line-height: 24px;
            }
            .home1-title2 {
              font-size: 22px;
              text-align: center;
            }
            .home1-caption3 {
              text-align: center;
            }
            .home1-racing1 {
              width: 100%;
              height: auto;
              display: flex;
              padding: 0px;
              margin-top: var(--dl-space-space-sixunits);
            }
            .home1-divide1 {
              width: 20px;
            }
            .home1-text27 {
              font-size: 16px;
              line-height: 24px;
            }
            .home1-title4 {
              font-size: 22px;
              text-align: center;
            }
            .home1-caption4 {
              text-align: center;
            }
            .home1-hero1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home1-heading6 {
              color: rgb(255, 255, 255);
              font-style: normal;
              text-align: center;
              font-weight: 500;
            }
            .home1-link5 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home1
