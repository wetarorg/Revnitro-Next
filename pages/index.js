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

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Revnitro</title>
          <meta property="og:title" content="Revnitro" />
        </Head>
        <Navbar rootClassName="navbar-root-class-name6"></Navbar>
        <section className="home-slides">
          <div className="home-slider slider blaze-slider">
            <div className="home-slider-container blaze-container">
              <div className="home-slider-track-container blaze-track-container">
                <div className="home-slider-track blaze-track">
                  <div data-role="current-banner" className="home-slide banner">
                    <DataProvider
                      fetchData={(params) =>
                        fetch(
                          `/api/home-resource-home?${new URLSearchParams(
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
                          <div className="home-container01">
                            <img
                              src={context_tz9kl?.Image?.url}
                              loading="lazy"
                              className="home-image"
                            />
                            <div className="home-content">
                              <div className="home-title">
                                <h3 className="home-heading">
                                  {context_tz9kl?.Title}
                                </h3>
                                <div className="home-line"></div>
                              </div>
                              <div className="home-description">
                                <h3 className="home-heading01">
                                  {context_tz9kl?.description}
                                </h3>
                              </div>
                              <div className="home-container02">
                                <span className="home-text">KNOW MORE</span>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    />
                  </div>
                  <div
                    data-role="current-banner"
                    className="home-slide1 banner"
                  >
                    <DataProvider
                      fetchData={(params) =>
                        fetch(
                          `/api/home1resource-home1?${new URLSearchParams(
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
                          <div className="home-container03">
                            <img
                              src={context_tz9kl?.Image?.url}
                              loading="lazy"
                              className="home-image01"
                            />
                            <div className="home-content1">
                              <div className="home-title01">
                                <h3 className="home-heading02">
                                  {context_tz9kl?.Title}
                                </h3>
                                <div className="home-line1"></div>
                              </div>
                              <div className="home-description1">
                                <h3 className="home-heading03">
                                  {context_tz9kl?.description}
                                </h3>
                              </div>
                              <div className="home-container04">
                                <span className="home-text01">KNOW MORE</span>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    />
                  </div>
                  <div
                    data-role="current-banner"
                    className="home-slide2 banner"
                  >
                    <DataProvider
                      fetchData={(params) =>
                        fetch(
                          `/api/home2resource-home2?${new URLSearchParams(
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
                          <div className="home-container05">
                            <img
                              src={context_tz9kl?.Image?.url}
                              loading="lazy"
                              className="home-image02"
                            />
                            <div className="home-content2">
                              <div className="home-title02">
                                <h3 className="home-heading04">
                                  {context_tz9kl?.Title}
                                </h3>
                                <div className="home-line2"></div>
                              </div>
                              <div className="home-description2">
                                <h3 className="home-heading05">
                                  {context_tz9kl?.description}
                                </h3>
                              </div>
                              <div className="home-container06">
                                <span className="home-text02">KNOW MORE</span>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    />
                  </div>
                  <div
                    data-role="current-banner"
                    className="home-slide3 banner"
                  >
                    <DataProvider
                      fetchData={(params) =>
                        fetch(
                          `/api/home3resource-home3?${new URLSearchParams(
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
                          <div className="home-container07">
                            <img
                              src={context_tz9kl?.Image?.url}
                              loading="lazy"
                              className="home-image03"
                            />
                            <div className="home-content3">
                              <div className="home-title03">
                                <h3 className="home-heading06">
                                  {context_tz9kl?.Title}
                                </h3>
                                <div className="home-line3"></div>
                              </div>
                              <div className="home-description3">
                                <h3 className="home-heading07">
                                  {context_tz9kl?.description}
                                </h3>
                              </div>
                              <div className="home-container08">
                                <span className="home-text03">KNOW MORE</span>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    />
                  </div>
                  <div
                    data-role="current-banner"
                    className="home-slide4 banner"
                  >
                    <DataProvider
                      fetchData={(params) =>
                        fetch(
                          `/api/home4resource-home4?${new URLSearchParams(
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
                          <div className="home-container09">
                            <img
                              src={context_tz9kl?.Image?.url}
                              loading="lazy"
                              className="home-image04"
                            />
                            <div className="home-content4">
                              <div className="home-title04">
                                <h3 className="home-heading08">
                                  {context_tz9kl?.Title}
                                </h3>
                                <div className="home-line4"></div>
                              </div>
                              <div className="home-description4">
                                <h3 className="home-heading09">
                                  {context_tz9kl?.description}
                                </h3>
                              </div>
                              <div className="home-container10">
                                <span className="home-text04">KNOW MORE</span>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    />
                  </div>
                </div>
              </div>
              <div className="home-controls">
                <button
                  data-role="previous-banner-button"
                  className="home-previous blaze-prev button"
                >
                  <svg viewBox="0 0 1024 1024" className="home-icon">
                    <path d="M542.165 780.501l-225.835-225.835h494.336c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-494.336l225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-298.667 298.667c-4.096 4.096-7.168 8.789-9.259 13.824-2.176 5.205-3.243 10.795-3.243 16.341 0 10.923 4.181 21.845 12.501 30.165l298.667 298.667c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
                  </svg>
                </button>
                <button
                  data-role="next-banner-button"
                  className="home-next blaze-next button"
                >
                  <svg viewBox="0 0 1024 1024" className="home-icon2">
                    <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="home-code-embed">
            <React.Fragment>
              <Script>{`
const el = document.querySelector('.blaze-slider')

new BlazeSlider(el, {
  all: {
    slidesToShow: 1,
    loop: true,
    enableAutoplay: true,
  },
})
`}</Script>
            </React.Fragment>
          </div>
        </section>
        <section className="home-hero">
          <div className="home-hero-content">
            <h1 className="home-text05">REVNITRO</h1>
            <div className="home-caption">
              <p className="home-caption1">REDEFINING AUTOMOBILE JOURNALISM</p>
            </div>
          </div>
        </section>
        <Blogs1></Blogs1>
        <section id="service" className="home-services">
          <div className="home-container11">
            <h2 className="home-heading10 section-heading">
              Book Services &amp; Consultation
            </h2>
          </div>
        </section>
        <div className="home-note">
          <div className="home-image05">
            <img
              alt="image"
              src="/bookings/home_page-200w.png"
              className="home-image06"
            />
          </div>
          <div className="home-content5">
            <div className="home-caption2">
              <h2 className="home-heading11 section-heading">
                Choose our service
              </h2>
            </div>
            <div className="home-heading12">
              <div className="home-accordion">
                <div
                  data-role="accordion-container"
                  className="home-element accordion-element"
                >
                  <div className="home-details">
                    <img
                      alt="image"
                      src="/bookings/3.svg"
                      className="home-image07"
                    />
                    <span className="home-text06">
                      CAR PURCHASE CONSULTATION
                    </span>
                  </div>
                </div>
                <div
                  data-role="accordion-container"
                  className="home-element1 accordion-element"
                >
                  <div className="home-details1">
                    <img
                      alt="image"
                      src="/bookings/2.svg"
                      className="home-image08"
                    />
                    <span className="home-text07">
                      BIKE PURCHASE CONSULTATION
                    </span>
                  </div>
                </div>
                <div
                  data-role="accordion-container"
                  className="home-element2 accordion-element"
                >
                  <div className="home-details2">
                    <img
                      alt="image"
                      src="/bookings/1.svg"
                      className="home-image09"
                    />
                    <span className="home-text08">BIKE SERVICE BOOKING</span>
                  </div>
                </div>
                <div
                  data-role="accordion-container"
                  className="home-element3 accordion-element"
                >
                  <div className="home-details3">
                    <img
                      alt="image"
                      src="/bookings/4.svg"
                      className="home-image10"
                    />
                    <span className="home-text09">CAR SERVICE BOOKING</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="home-testimonials">
          <div className="home-header">
            <div data-aos="fade-right" className="home-heading13">
              <h2 className="home-title05">
                Don’t just take our word for it. Here’s what our readers have to
                say:
              </h2>
            </div>
          </div>
          <div className="home-quotes">
            <div className="home-quote">
              <div className="home-author">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1622100685582-d8542910e078?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxpbmRpYW4lMjBtZW58ZW58MHx8fHwxNjk0NzY5MDMzfDA&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-image11"
                />
                <div className="home-details4">
                  <span className="home-name">Arjun</span>
                  <span className="home-handle">@arjun</span>
                </div>
              </div>
              <p className="home-quote1">
                “Revnitro is one complete journal for automobiles”
              </p>
            </div>
            <div className="home-quote2">
              <div className="home-author1">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE3fHxpbmRpYW4lMjBtZW58ZW58MHx8fHwxNjk0NzY5MDMzfDA&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-image12"
                />
                <div className="home-details5">
                  <span className="home-name1">Prakash</span>
                  <span className="home-handle1">@prakash234</span>
                </div>
              </div>
              <p className="home-quote3">
                <span>
                  “Great Team!
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  I also like how willing people are to share knowledge, there
                  is no sense of competitiveness.”
                </span>
              </p>
            </div>
            <div className="home-quote4">
              <div className="home-author2">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1623669458475-f0968102b12e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI1fHxpbmRpYW4lMjBtZW58ZW58MHx8fHwxNjk0NzY5MDYwfDA&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-image13"
                />
                <div className="home-details6">
                  <span className="home-name2">John</span>
                  <span className="home-handle2">@joihm</span>
                </div>
              </div>
              <p className="home-quote5">
                “Articles are top notch and deeply studied”
              </p>
            </div>
          </div>
          <div className="home-gradient gradient-background">
            <div className="home-container12">
              <div className="home-container13">
                <h1 className="home-text13">
                  <span>FROM THE WORLD OF</span>
                  <br></br>
                  <span> MOTOSPORTS</span>
                </h1>
                <h1 className="home-text17">
                  <span className="home-text18">Driven By Passion...</span>
                  <br></br>
                </h1>
              </div>
            </div>
            <div className="home-div">
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
        </section>
        <section className="home-racing">
          <div className="home-header1">
            <div className="home-section-numeral">
              <div className="home-divide"></div>
              <p className="home-text20">03</p>
            </div>
            <div data-aos="fade-right" className="home-heading14">
              <h2 className="home-title06">INDIAN RACING</h2>
              <h2 className="home-title07">LET YOUR PASSION THROTTLE</h2>
              <p className="home-caption3">
                Are you ready to rev up your engines and take the racing world
                by storm? The Ultimate Young Bike Racing Championships is
                calling out to all young riders who have a burning passion for
                speed, adrenaline, and the thrill of competition.
              </p>
            </div>
            <Raceaccordian1></Raceaccordian1>
          </div>
        </section>
        <section className="home-racing1">
          <div className="home-header2">
            <div className="home-section-numeral1">
              <div className="home-divide1"></div>
              <p className="home-text21">03</p>
            </div>
            <div data-aos="fade-right" className="home-heading15">
              <h2 className="home-title08">INDIAN RACING</h2>
              <h2 className="home-title09">LET YOUR PASSION THROTTLE</h2>
              <p className="home-caption4">
                Are you ready to rev up your engines and take the racing world
                by storm? The Ultimate Young Bike Racing Championships is
                calling out to all young riders who have a burning passion for
                speed, adrenaline, and the thrill of competition.
              </p>
            </div>
          </div>
          <Raceaccordianmobile rootClassName="raceaccordianmobile-root-class-name"></Raceaccordianmobile>
        </section>
        <div className="home-container14">
          <Videos2></Videos2>
        </div>
        <div className="home-hero1">
          <h2 className="home-heading16">
            <span className="home-text22">Questions on Automobiles?</span>
            <br className="home-text23"></br>
            <span className="home-text24">Reach our </span>
            <span className="home-text25">forum</span>
            <span className="home-text26"> </span>
            <span className="home-text27">now!</span>
            <br className="home-text28"></br>
            <span className="home-text29">
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
            className="home-link button"
          >
            <span className="home-text30">Enter Forum</span>
          </a>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            user-select: none;
            flex-direction: column;
            background-color: var(--dl-color-gray-black);
          }
          .home-slides {
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
          .home-slider {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            height: 60vh;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-slider-container {
            gap: var(--dl-space-space-fourunits);
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .home-slider-track-container {
            width: 100%;
            height: 60vh;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-slider-track {
            width: 100%;
            height: 60vh;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-slide {
            width: 100%;
            height: 60vh;
            background-color: transparent;
          }
          .home-container01 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-image {
            width: 100%;
            height: 60vh;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-content {
            top: 4px;
            flex: 1;
            left: 0px;
            right: 0px;
            height: auto;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-title {
            display: flex;
            position: relative;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-heading {
            color: rgb(255, 255, 255);
            font-size: 50px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 700;
          }
          .home-line {
            gap: var(--dl-space-space-threeunits);
            height: 8px;
            display: flex;
            position: relative;
            border-color: rgba(120, 120, 120, 0.4);
            border-style: dashed;
            border-width: 0px;
            flex-direction: column;
            background-color: #ff0000;
          }
          .home-description {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            position: relative;
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .home-heading01 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
          }
          .home-container02 {
            flex: 0 0 auto;
            width: var(--dl-size-size-large);
            height: 36px;
            display: flex;
            align-items: center;
            border-color: rgba(120, 120, 120, 0.4);
            border-style: dashed;
            border-width: 0px;
            border-radius: 10px;
            justify-content: center;
            background-color: #ff0000;
          }
          .home-text {
            color: var(--dl-color-gray-white);
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
          }
          .home-slide1 {
            width: 100%;
            height: 60vh;
            background-color: transparent;
          }
          .home-container03 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-image01 {
            width: 100%;
            height: 60vh;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-content1 {
            top: 4px;
            flex: 1;
            left: 0px;
            right: 0px;
            height: auto;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-title01 {
            display: flex;
            position: relative;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-heading02 {
            color: rgb(255, 255, 255);
            font-size: 50px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 700;
          }
          .home-line1 {
            gap: var(--dl-space-space-threeunits);
            height: 8px;
            display: flex;
            position: relative;
            border-color: rgba(120, 120, 120, 0.4);
            border-style: dashed;
            border-width: 0px;
            flex-direction: column;
            background-color: #ff0000;
          }
          .home-description1 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            position: relative;
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .home-heading03 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
          }
          .home-container04 {
            flex: 0 0 auto;
            width: var(--dl-size-size-large);
            height: 36px;
            display: flex;
            align-items: center;
            border-color: rgba(120, 120, 120, 0.4);
            border-style: dashed;
            border-width: 0px;
            border-radius: 10px;
            justify-content: center;
            background-color: #ff0000;
          }
          .home-text01 {
            color: var(--dl-color-gray-white);
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
          }
          .home-slide2 {
            width: 100%;
            height: 60vh;
            background-color: transparent;
          }
          .home-container05 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-image02 {
            width: 100%;
            height: 60vh;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-content2 {
            top: 4px;
            flex: 1;
            left: 0px;
            right: 0px;
            height: auto;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-title02 {
            display: flex;
            position: relative;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-heading04 {
            color: rgb(255, 255, 255);
            font-size: 50px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 700;
          }
          .home-line2 {
            gap: var(--dl-space-space-threeunits);
            height: 8px;
            display: flex;
            position: relative;
            border-color: rgba(120, 120, 120, 0.4);
            border-style: dashed;
            border-width: 0px;
            flex-direction: column;
            background-color: #ff0000;
          }
          .home-description2 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            position: relative;
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .home-heading05 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
          }
          .home-container06 {
            flex: 0 0 auto;
            width: var(--dl-size-size-large);
            height: 36px;
            display: flex;
            align-items: center;
            border-color: rgba(120, 120, 120, 0.4);
            border-style: dashed;
            border-width: 0px;
            border-radius: 10px;
            justify-content: center;
            background-color: #ff0000;
          }
          .home-text02 {
            color: var(--dl-color-gray-white);
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
          }
          .home-slide3 {
            width: 100%;
            height: 60vh;
            background-color: transparent;
          }
          .home-container07 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-image03 {
            width: 100%;
            height: 60vh;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-content3 {
            top: 4px;
            flex: 1;
            left: 0px;
            right: 0px;
            height: auto;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-title03 {
            display: flex;
            position: relative;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-heading06 {
            color: rgb(255, 255, 255);
            font-size: 50px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 700;
          }
          .home-line3 {
            gap: var(--dl-space-space-threeunits);
            height: 8px;
            display: flex;
            position: relative;
            border-color: rgba(120, 120, 120, 0.4);
            border-style: dashed;
            border-width: 0px;
            flex-direction: column;
            background-color: #ff0000;
          }
          .home-description3 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            position: relative;
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .home-heading07 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
          }
          .home-container08 {
            flex: 0 0 auto;
            width: var(--dl-size-size-large);
            height: 36px;
            display: flex;
            align-items: center;
            border-color: rgba(120, 120, 120, 0.4);
            border-style: dashed;
            border-width: 0px;
            border-radius: 10px;
            justify-content: center;
            background-color: #ff0000;
          }
          .home-text03 {
            color: var(--dl-color-gray-white);
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
          }
          .home-slide4 {
            width: 100%;
            height: 60vh;
            background-color: transparent;
          }
          .home-container09 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-image04 {
            width: 100%;
            height: 60vh;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-content4 {
            top: 4px;
            flex: 1;
            left: 0px;
            right: 0px;
            height: auto;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-title04 {
            display: flex;
            position: relative;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-heading08 {
            color: rgb(255, 255, 255);
            font-size: 50px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 700;
          }
          .home-line4 {
            gap: var(--dl-space-space-threeunits);
            height: 8px;
            display: flex;
            position: relative;
            border-color: rgba(120, 120, 120, 0.4);
            border-style: dashed;
            border-width: 0px;
            flex-direction: column;
            background-color: #ff0000;
          }
          .home-description4 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            position: relative;
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .home-heading09 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
          }
          .home-container10 {
            flex: 0 0 auto;
            width: var(--dl-size-size-large);
            height: 36px;
            display: flex;
            align-items: center;
            border-color: rgba(120, 120, 120, 0.4);
            border-style: dashed;
            border-width: 0px;
            border-radius: 10px;
            justify-content: center;
            background-color: #ff0000;
          }
          .home-text04 {
            color: var(--dl-color-gray-white);
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
          }
          .home-controls {
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
          .home-previous {
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
          .home-icon {
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
          .home-next {
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
          .home-icon2 {
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
          .home-code-embed {
            display: contents;
          }
          .home-hero {
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
          .home-hero-content {
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
          .home-text05 {
            color: var(--dl-color-gray-white);
            font-size: 90px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 700;
            line-height: 90px;
          }
          .home-caption {
            gap: var(--dl-space-space-threeunits);
            height: var(--dl-size-size-xsmall);
            display: flex;
            align-items: flex-end;
            flex-direction: row;
            justify-content: center;
          }
          .home-caption1 {
            color: var(--dl-color-gray-white);
            font-size: 30px;
            font-family: Poppins;
          }
          .home-services {
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
          .home-container11 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .home-heading10 {
            font-size: 54px;
          }
          .home-note {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            max-width: 100%;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row-reverse;
            justify-content: space-between;
          }
          .home-image05 {
            flex: 1;
            width: 20%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-image06 {
            width: auto;
            height: auto;
            object-fit: cover;
            border-color: var(--dl-color-gray-white);
            border-width: 1px;
            border-radius: 24px;
          }
          .home-content5 {
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
          .home-caption2 {
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-heading11 {
            color: var(--dl-color-gray-700);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            margin-left: 0px;
          }
          .home-heading12 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-accordion {
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-element {
            width: 640px;
            user-select: none;
          }
          .home-details {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-image07 {
            width: 132px;
            height: 76px;
            object-fit: cover;
          }
          .home-text06 {
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
          .home-element1 {
            width: 640px;
            user-select: none;
          }
          .home-details1 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-image08 {
            width: 132px;
            height: 76px;
            object-fit: cover;
          }
          .home-text07 {
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
          .home-element2 {
            width: 640px;
            user-select: none;
          }
          .home-details2 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-image09 {
            width: 132px;
            height: 76px;
            object-fit: cover;
          }
          .home-text08 {
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
          .home-element3 {
            width: 640px;
            user-select: none;
          }
          .home-details3 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-image10 {
            width: 132px;
            height: 76px;
            object-fit: cover;
          }
          .home-text09 {
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
          .home-testimonials {
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
          .home-header {
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
          .home-heading13 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title05 {
            font-size: 40px;
            max-width: 900px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 55px;
          }
          .home-quotes {
            width: 100%;
            height: auto;
            display: flex;
            overflow: auto;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            margin-left: 0px;
            border-color: rgba(255, 255, 255, 0.2);
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
            justify-content: center;
            border-bottom-width: 1px;
          }
          .home-quote {
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
          .home-author {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-image11 {
            width: 60px;
            object-fit: cover;
            aspect-ratio: 1;
            border-radius: var(--dl-radius-radius-round);
          }
          .home-details4 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-name {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-weight: 600;
            letter-spacing: 1%;
          }
          .home-handle {
            color: rgba(255, 255, 255, 0.3);
            font-size: 14px;
            letter-spacing: 1%;
          }
          .home-quote1 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 22px;
            max-width: 320px;
            font-family: Poppins;
            line-height: 33px;
            letter-spacing: 1%;
          }
          .home-quote2 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            min-width: auto;
            align-items: flex-start;
            border-color: rgba(255, 255, 255, 0.2);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            border-right-width: 1px;
          }
          .home-author1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-image12 {
            width: 60px;
            object-fit: cover;
            aspect-ratio: 1;
            border-radius: var(--dl-radius-radius-round);
          }
          .home-details5 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-name1 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-weight: 600;
            letter-spacing: 1%;
          }
          .home-handle1 {
            color: rgba(255, 255, 255, 0.3);
            font-size: 14px;
            letter-spacing: 1%;
          }
          .home-quote3 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 22px;
            max-width: 320px;
            font-family: Poppins;
            line-height: 33px;
            letter-spacing: 1%;
          }
          .home-quote4 {
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
          .home-author2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-image13 {
            width: 60px;
            object-fit: cover;
            aspect-ratio: 1;
            border-radius: var(--dl-radius-radius-round);
          }
          .home-details6 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-name2 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-weight: 600;
            letter-spacing: 1%;
          }
          .home-handle2 {
            color: rgba(255, 255, 255, 0.3);
            font-size: 14px;
            letter-spacing: 1%;
          }
          .home-quote5 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 22px;
            max-width: 320px;
            font-family: Poppins;
            line-height: 33px;
            letter-spacing: 1%;
          }
          .home-gradient {
            width: 100%;
            height: auto;
            padding: 0px;
            align-self: flex-start;
            justify-content: space-between;
          }
          .home-container12 {
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
          .home-container13 {
            flex: 0 0 auto;
            height: 100px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            justify-content: space-between;
          }
          .home-text13 {
            color: var(--dl-color-gray-white);
            width: 560px;
            font-size: 34px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            margin-left: var(--dl-space-space-twounits);
          }
          .home-text17 {
            color: var(--dl-color-gray-white);
            width: auto;
            font-style: italic;
            text-align: right;
            font-family: Poppins;
            font-weight: 500;
            margin-right: var(--dl-space-space-twounits);
          }
          .home-text18 {
            font-family: Arial;
          }
          .home-div {
            display: contents;
          }
          .home-racing {
            gap: var(--dl-space-space-fiveunits);
            width: auto;
            display: flex;
            padding: 0px;
            max-width: auto;
            align-items: center;
            flex-direction: column;
          }
          .home-header1 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 100%;
            min-width: 100%;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-section-numeral {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-divide {
            width: 100px;
            height: 1px;
            display: flex;
            margin-top: 4px;
            align-items: center;
            flex-direction: row;
            background-color: #000000;
          }
          .home-heading14 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: center;
            align-items: center;
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .home-title06 {
            color: var(--dl-color-gray-white);
            font-size: 90px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 100px;
          }
          .home-title07 {
            color: rgba(255, 255, 255, 0.54);
            font-size: 32px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 32px;
          }
          .home-caption3 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            font-family: Poppins;
            line-height: 27px;
          }
          .home-racing1 {
            gap: var(--dl-space-space-fiveunits);
            width: auto;
            display: none;
            padding: 0px;
            max-width: auto;
            align-items: center;
            flex-direction: column;
          }
          .home-header2 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 100%;
            min-width: 100%;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-section-numeral1 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-divide1 {
            width: 100px;
            height: 1px;
            display: flex;
            margin-top: 4px;
            align-items: center;
            flex-direction: row;
            background-color: #000000;
          }
          .home-heading15 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: center;
            align-items: center;
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .home-title08 {
            color: var(--dl-color-gray-white);
            font-size: 90px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 100px;
          }
          .home-title09 {
            color: rgba(255, 255, 255, 0.54);
            font-size: 32px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 32px;
          }
          .home-caption4 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            font-family: Poppins;
            line-height: 27px;
          }
          .home-container14 {
            flex: 0 0 auto;
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-hero1 {
            width: 100%;
            height: 100vh;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            min-height: 80vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-black);
          }
          .home-heading16 {
            color: rgb(255, 255, 255);
            height: auto;
            font-size: 100px;
            font-style: normal;
            text-align: center;
            font-family: Poppins;
            font-weight: 500;
          }
          .home-text22 {
            font-size: 54px;
            font-weight: 500;
          }
          .home-text23 {
            font-weight: 500;
          }
          .home-text24 {
            font-weight: 500;
          }
          .home-text25 {
            color: #2200ff;
            font-style: italic;
            font-family: Open Sans;
            font-weight: 600;
          }
          .home-text26 {
            color: #2200ff;
            font-style: italic;
            font-family: Open Sans;
            font-weight: 600;
          }
          .home-text27 {
            font-style: normal;
          }
          .home-text28 {
            color: #ffffff;
            font-size: 100px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text29 {
            font-style: normal;
          }
          .home-link {
            color: var(--dl-color-gray-white);
            width: auto;
            height: auto;
            margin-top: var(--dl-space-space-twounits);
            border-radius: 50px;
            text-decoration: none;
            background-color: #2200ff;
          }
          .home-text30 {
            margin: var(--dl-space-space-unit);
            font-size: 24px;
            font-family: Poppins;
          }
          @media (max-width: 991px) {
            .home-slider {
              gap: var(--dl-space-space-twounits);
            }
            .home-image {
              width: 100%;
              height: 100%;
            }
            .home-content {
              gap: var(--dl-space-space-unit);
              width: auto;
              height: auto;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
              justify-content: flex-start;
            }
            .home-title {
              gap: var(--dl-space-space-halfunit);
              width: auto;
            }
            .home-heading {
              font-size: 24px;
            }
            .home-line {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
            }
            .home-description {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
              margin-top: 0px;
              margin-bottom: 0px;
            }
            .home-heading01 {
              font-size: 24px;
            }
            .home-image01 {
              width: 100%;
              height: 100%;
            }
            .home-content1 {
              gap: var(--dl-space-space-unit);
              width: auto;
              height: auto;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
              justify-content: flex-start;
            }
            .home-title01 {
              gap: var(--dl-space-space-halfunit);
              width: auto;
            }
            .home-heading02 {
              font-size: 24px;
            }
            .home-line1 {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
            }
            .home-description1 {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
              margin-top: 0px;
              margin-bottom: 0px;
            }
            .home-heading03 {
              font-size: 24px;
            }
            .home-image02 {
              width: 100%;
              height: 100%;
            }
            .home-content2 {
              gap: var(--dl-space-space-unit);
              width: auto;
              height: auto;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
              justify-content: flex-start;
            }
            .home-title02 {
              gap: var(--dl-space-space-halfunit);
              width: auto;
            }
            .home-heading04 {
              font-size: 24px;
            }
            .home-line2 {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
            }
            .home-description2 {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
              margin-top: 0px;
              margin-bottom: 0px;
            }
            .home-heading05 {
              font-size: 24px;
            }
            .home-image03 {
              width: 100%;
              height: 100%;
            }
            .home-content3 {
              gap: var(--dl-space-space-unit);
              width: auto;
              height: auto;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
              justify-content: flex-start;
            }
            .home-title03 {
              gap: var(--dl-space-space-halfunit);
              width: auto;
            }
            .home-heading06 {
              font-size: 24px;
            }
            .home-line3 {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
            }
            .home-description3 {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
              margin-top: 0px;
              margin-bottom: 0px;
            }
            .home-heading07 {
              font-size: 24px;
            }
            .home-image04 {
              width: 100%;
              height: 100%;
            }
            .home-content4 {
              gap: var(--dl-space-space-unit);
              width: auto;
              height: auto;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
              justify-content: flex-start;
            }
            .home-title04 {
              gap: var(--dl-space-space-halfunit);
              width: auto;
            }
            .home-heading08 {
              font-size: 24px;
            }
            .home-line4 {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
            }
            .home-description4 {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
              margin-top: 0px;
              margin-bottom: 0px;
            }
            .home-heading09 {
              font-size: 24px;
            }
            .home-container11 {
              height: auto;
            }
            .home-note {
              flex-direction: column-reverse;
            }
            .home-image05 {
              margin-top: var(--dl-space-space-oneandhalfunits);
            }
            .home-content5 {
              width: auto;
              align-items: center;
            }
            .home-heading11 {
              margin-left: 0px;
              margin-bottom: 0px;
            }
            .home-heading12 {
              width: auto;
              max-width: auto;
            }
            .home-racing1 {
              display: none;
            }
            .home-heading16 {
              font-size: 50px;
            }
          }
          @media (max-width: 767px) {
            .home-slides {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-slider {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-slider-track {
              align-items: stretch;
            }
            .home-image {
              height: 100%;
            }
            .home-content {
              width: auto;
            }
            .home-title {
              width: auto;
            }
            .home-heading {
              font-size: 18px;
            }
            .home-heading01 {
              font-size: 18px;
            }
            .home-image01 {
              height: 100%;
            }
            .home-content1 {
              width: auto;
            }
            .home-title01 {
              width: auto;
            }
            .home-heading02 {
              font-size: 18px;
            }
            .home-heading03 {
              font-size: 18px;
            }
            .home-image02 {
              height: 100%;
            }
            .home-content2 {
              width: auto;
            }
            .home-title02 {
              width: auto;
            }
            .home-heading04 {
              font-size: 18px;
            }
            .home-heading05 {
              font-size: 18px;
            }
            .home-image03 {
              height: 100%;
            }
            .home-content3 {
              width: auto;
            }
            .home-title03 {
              width: auto;
            }
            .home-heading06 {
              font-size: 18px;
            }
            .home-heading07 {
              font-size: 18px;
            }
            .home-image04 {
              height: 100%;
            }
            .home-content4 {
              width: auto;
            }
            .home-title04 {
              width: auto;
            }
            .home-heading08 {
              font-size: 18px;
            }
            .home-heading09 {
              font-size: 18px;
            }
            .home-previous {
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .home-icon {
              width: 14px;
              height: 14px;
            }
            .home-next {
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .home-icon2 {
              width: 14px;
              height: 14px;
            }
            .home-hero {
              height: 60vh;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-hero-content {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-caption {
              gap: var(--dl-space-space-unit);
            }
            .home-caption1 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-services {
              gap: var(--dl-space-space-threeunits);
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-image05 {
              margin-top: var(--dl-space-space-oneandhalfunits);
            }
            .home-content5 {
              width: 100%;
              align-items: center;
            }
            .home-heading11 {
              margin-bottom: 0px;
            }
            .home-heading12 {
              align-items: center;
            }
            .home-element {
              width: 100%;
              max-width: 560px;
            }
            .home-text06 {
              font-size: 18px;
              line-height: 24px;
            }
            .home-element1 {
              width: 100%;
              max-width: 560px;
            }
            .home-text07 {
              font-size: 18px;
              line-height: 24px;
            }
            .home-element2 {
              width: 100%;
              max-width: 560px;
            }
            .home-text08 {
              font-size: 18px;
              line-height: 24px;
            }
            .home-element3 {
              width: 100%;
              max-width: 560px;
            }
            .home-text09 {
              font-size: 18px;
              line-height: 24px;
            }
            .home-testimonials {
              gap: var(--dl-space-space-threeunits);
              padding-top: 0px;
            }
            .home-header {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-heading13 {
              gap: var(--dl-space-space-unit);
            }
            .home-title05 {
              font-size: 30px;
              line-height: 33px;
            }
            .home-quotes {
              margin-left: 0px;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .home-quote {
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
            .home-author {
              width: 100%;
            }
            .home-image11 {
              width: 40px;
            }
            .home-details4 {
              flex: 1;
            }
            .home-name {
              width: 90%;
              font-size: 16px;
              line-height: 20px;
            }
            .home-handle {
              width: 90%;
              font-size: 14px;
              line-height: 16px;
            }
            .home-quote1 {
              width: 90%;
              font-size: 16px;
              line-height: 20px;
            }
            .home-quote2 {
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
            .home-author1 {
              width: 100%;
            }
            .home-image12 {
              width: 40px;
            }
            .home-details5 {
              flex: 1;
            }
            .home-name1 {
              width: 90%;
              font-size: 16px;
              line-height: 20px;
            }
            .home-handle1 {
              width: 90%;
              font-size: 14px;
              line-height: 16px;
            }
            .home-quote3 {
              width: 90%;
              font-size: 16px;
              line-height: 20px;
            }
            .home-quote4 {
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
            .home-name2 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-handle2 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-quote5 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-racing {
              gap: var(--dl-space-space-threeunits);
              padding: 0px;
            }
            .home-divide {
              width: 50px;
            }
            .home-heading14 {
              gap: var(--dl-space-space-unit);
            }
            .home-title06 {
              font-size: 30px;
              line-height: 33px;
            }
            .home-title07 {
              font-size: 30px;
              line-height: 33px;
            }
            .home-caption3 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-racing1 {
              gap: var(--dl-space-space-threeunits);
              display: none;
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-divide1 {
              width: 50px;
            }
            .home-heading15 {
              gap: var(--dl-space-space-unit);
            }
            .home-title08 {
              font-size: 30px;
              line-height: 33px;
            }
            .home-title09 {
              font-size: 30px;
              line-height: 33px;
            }
            .home-caption4 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-hero1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-heading16 {
              font-size: 36px;
            }
          }
          @media (max-width: 479px) {
            .home-container01 {
              height: 100%;
              align-items: center;
              justify-content: center;
            }
            .home-image {
              height: 100%;
            }
            .home-content {
              top: 0px;
              flex: 1;
              width: auto;
              height: auto;
              margin: var(--dl-space-space-unit);
              justify-content: center;
            }
            .home-title {
              width: auto;
              height: auto;
            }
            .home-line {
              width: 100%;
              height: 4px;
              border-width: 0px;
              background-color: #ff0000;
            }
            .home-description {
              width: auto;
              height: auto;
              margin-top: 0px;
              margin-bottom: 0px;
            }
            .home-heading01 {
              font-size: 16px;
              font-style: normal;
              font-weight: 400;
              line-height: 14px;
            }
            .home-container03 {
              height: 100%;
              align-items: center;
              justify-content: center;
            }
            .home-image01 {
              height: 100%;
            }
            .home-content1 {
              top: 0px;
              flex: 1;
              width: auto;
              height: auto;
              margin: var(--dl-space-space-unit);
              justify-content: center;
            }
            .home-title01 {
              width: auto;
              height: auto;
            }
            .home-line1 {
              width: 100%;
              height: 4px;
              border-width: 0px;
              background-color: #ff0000;
            }
            .home-description1 {
              width: auto;
              height: auto;
              margin-top: 0px;
              margin-bottom: 0px;
            }
            .home-heading03 {
              font-size: 16px;
              font-style: normal;
              font-weight: 400;
              line-height: 14px;
            }
            .home-container05 {
              height: 100%;
              align-items: center;
              justify-content: center;
            }
            .home-image02 {
              height: 100%;
            }
            .home-content2 {
              top: 0px;
              flex: 1;
              width: auto;
              height: auto;
              margin: var(--dl-space-space-unit);
              justify-content: center;
            }
            .home-title02 {
              width: auto;
              height: auto;
            }
            .home-line2 {
              width: 100%;
              height: 4px;
              border-width: 0px;
              background-color: #ff0000;
            }
            .home-description2 {
              width: auto;
              height: auto;
              margin-top: 0px;
              margin-bottom: 0px;
            }
            .home-heading05 {
              font-size: 16px;
              font-style: normal;
              font-weight: 400;
              line-height: 14px;
            }
            .home-container07 {
              height: 100%;
              align-items: center;
              justify-content: center;
            }
            .home-image03 {
              height: 100%;
            }
            .home-content3 {
              top: 0px;
              flex: 1;
              width: auto;
              height: auto;
              margin: var(--dl-space-space-unit);
              justify-content: center;
            }
            .home-title03 {
              width: auto;
              height: auto;
            }
            .home-line3 {
              width: 100%;
              height: 4px;
              border-width: 0px;
              background-color: #ff0000;
            }
            .home-description3 {
              width: auto;
              height: auto;
              margin-top: 0px;
              margin-bottom: 0px;
            }
            .home-heading07 {
              font-size: 16px;
              font-style: normal;
              font-weight: 400;
              line-height: 14px;
            }
            .home-container09 {
              height: 100%;
              align-items: center;
              justify-content: center;
            }
            .home-image04 {
              height: 100%;
            }
            .home-content4 {
              top: 0px;
              flex: 1;
              width: auto;
              height: auto;
              margin: var(--dl-space-space-unit);
              justify-content: center;
            }
            .home-title04 {
              width: auto;
              height: auto;
            }
            .home-line4 {
              width: 100%;
              height: 4px;
              border-width: 0px;
              background-color: #ff0000;
            }
            .home-description4 {
              width: auto;
              height: auto;
              margin-top: 0px;
              margin-bottom: 0px;
            }
            .home-heading09 {
              font-size: 16px;
              font-style: normal;
              font-weight: 400;
              line-height: 14px;
            }
            .home-previous {
              width: auto;
            }
            .home-next {
              width: auto;
            }
            .home-hero {
              height: auto;
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-hero-content {
              height: auto;
            }
            .home-text05 {
              font-size: 50px;
            }
            .home-services {
              margin-top: var(--dl-space-space-unit);
              padding-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .home-heading10 {
              font-size: 32px;
              text-align: center;
            }
            .home-image05 {
              margin-top: var(--dl-space-space-twounits);
            }
            .home-content5 {
              align-items: center;
            }
            .home-heading11 {
              font-size: 16px;
              margin-left: 0px;
              margin-bottom: 0px;
            }
            .home-heading12 {
              align-items: center;
            }
            .home-element {
              width: 350px;
              max-width: auto;
            }
            .home-details {
              align-items: center;
            }
            .home-element1 {
              width: 350px;
              max-width: auto;
            }
            .home-element2 {
              width: 350px;
              max-width: auto;
            }
            .home-element3 {
              width: 350px;
              max-width: auto;
            }
            .home-text13 {
              font-size: 18px;
              margin-left: 0px;
            }
            .home-text17 {
              font-size: 12px;
            }
            .home-racing {
              display: none;
              padding: 0px;
            }
            .home-divide {
              width: 20px;
            }
            .home-text20 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-title07 {
              font-size: 22px;
              text-align: center;
            }
            .home-caption3 {
              text-align: center;
            }
            .home-racing1 {
              width: 100%;
              height: auto;
              display: flex;
              padding: 0px;
            }
            .home-divide1 {
              width: 20px;
            }
            .home-text21 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-title09 {
              font-size: 22px;
              text-align: center;
            }
            .home-caption4 {
              text-align: center;
            }
            .home-hero1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-heading16 {
              color: rgb(255, 255, 255);
              font-style: normal;
              text-align: center;
              font-weight: 500;
            }
            .home-link {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
