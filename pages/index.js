import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import Script from 'dangerous-html/react'

import Blogs1 from '../components/blogs1'
import Raceaccordian1 from '../components/raceaccordian1'
import Videos2 from '../components/videos2'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Revnitro</title>
          <meta property="og:title" content="Revnitro" />
        </Head>
        <header data-thq="thq-navbar" className="home-navbar">
          <img
            alt="image"
            src="/logo/ba365a50c6760909f3950a57a9b9ff1c-200h.webp"
            loading="eager"
            className="home-image"
          />
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="home-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="home-nav"
            >
              <a
                href="https://revnitroblog2.vercel.app/blog"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link navLink"
              >
                Blogs
              </a>
              <span className="navLink">Course</span>
              <a
                href="https://forum.revnitro.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link2 navLink"
              >
                Forum
              </a>
              <Link href="/team">
                <a className="home-link4 navLink">Team</a>
              </Link>
            </nav>
            <a href="#service" className="home-register button">
              <span className="home-text">BOOK SERVICES</span>
            </a>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-nav1"
            >
              <div className="home-container01">
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="home-nav2"
              >
                <span className="navLink home-text01">Team</span>
                <span className="navLink home-text02">Blog</span>
              </nav>
              <div className="home-icon-group">
                <div className="home-icons">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon04"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon06"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="home-icon08"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </header>
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
                          <div className="home-container02">
                            <img
                              alt="image"
                              src={context_tz9kl?.Imageurl}
                              className="home-image01"
                            />
                            <div className="home-content">
                              <div className="home-header">
                                <h3 className="home-heading">
                                  {context_tz9kl?.Title}
                                </h3>
                                <span className="home-text03">
                                  {context_tz9kl?.Descriptions}
                                </span>
                                <div className="home-container03"></div>
                              </div>
                              <div className="home-container04">
                                <span className="home-text04">KNOW MORE</span>
                              </div>
                              <div className="home-container05">
                                <div className="home-more"></div>
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
                          <div className="home-container06">
                            <img
                              alt="image"
                              src={context_tz9kl?.Imageurl}
                              className="home-image02"
                            />
                            <div className="home-content1">
                              <div className="home-header1">
                                <h3 className="home-heading1">
                                  {context_tz9kl?.Title}
                                </h3>
                                <span className="home-text05">
                                  {context_tz9kl?.Descriptions}
                                </span>
                                <div className="home-container07"></div>
                              </div>
                              <div className="home-container08"></div>
                              <div className="home-container09">
                                <span className="home-text06">KNOW MORE</span>
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
                          <div className="home-container10">
                            <img
                              alt="image"
                              src={context_tz9kl?.Imageurl}
                              className="home-image03"
                            />
                            <div className="home-content2">
                              <div className="home-header2">
                                <h3 className="home-heading2">
                                  {context_tz9kl?.Title}
                                </h3>
                                <span className="home-text07">
                                  {context_tz9kl?.Descriptions}
                                </span>
                                <div className="home-container11"></div>
                              </div>
                              <div className="home-container12"></div>
                              <div className="home-container13">
                                <span className="home-text08">KNOW MORE</span>
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
                  <svg viewBox="0 0 1024 1024" className="home-icon10">
                    <path d="M542.165 780.501l-225.835-225.835h494.336c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-494.336l225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-298.667 298.667c-4.096 4.096-7.168 8.789-9.259 13.824-2.176 5.205-3.243 10.795-3.243 16.341 0 10.923 4.181 21.845 12.501 30.165l298.667 298.667c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
                  </svg>
                </button>
                <button
                  data-role="next-banner-button"
                  className="home-next blaze-next button"
                >
                  <svg viewBox="0 0 1024 1024" className="home-icon12">
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
            <h1 className="home-text09">REVNITRO</h1>
            <div className="home-caption">
              <p className="home-caption1">REDEFINING AUTOMOBILE JOURNALISM</p>
            </div>
          </div>
        </section>
        <Blogs1></Blogs1>
        <section id="service" className="home-services">
          <div className="home-service">
            <div className="home-brand brand">
              <h2 className="home-title">Book a consultation</h2>
            </div>
            <div className="home-brand1 brand">
              <h2 className="home-title1">Schedule a service</h2>
            </div>
            <div className="home-brand2 brand">
              <img alt="image" src="/bookings/3.svg" className="home-image04" />
              <h2 className="home-title2">New Car Purchase</h2>
            </div>
            <div className="home-brand3 brand">
              <img alt="image" src="/bookings/4.svg" className="home-image05" />
              <h2 className="home-title3">Car Services</h2>
            </div>
            <div className="home-brand4 brand">
              <img alt="image" src="/bookings/2.svg" className="home-image06" />
              <h2 className="home-title4">New Bike Purchase</h2>
            </div>
            <div className="home-brand5 brand">
              <img alt="image" src="/bookings/1.svg" className="home-image07" />
              <h2 className="home-title5">Bike Services</h2>
            </div>
          </div>
          <div className="home-brand6"></div>
        </section>
        <section className="home-testimonials">
          <div className="home-header3">
            <div data-aos="fade-right" className="home-heading3">
              <h2 className="home-title6">
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
                  className="home-image08"
                />
                <div className="home-details">
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
                  className="home-image09"
                />
                <div className="home-details1">
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
                  className="home-image10"
                />
                <div className="home-details2">
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
            <div className="home-container14">
              <div className="home-container15">
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
          <div className="home-header4">
            <div className="home-section-numeral">
              <div className="home-divide"></div>
              <p className="home-text20">03</p>
            </div>
            <div data-aos="fade-right" className="home-heading4">
              <h2 className="home-title7">INDIAN RACING</h2>
              <h2 className="home-title8">LET YOUR PASSION THROTTLE</h2>
              <p className="home-caption2">
                Are you ready to rev up your engines and take the racing world
                by storm? The Ultimate Young Bike Racing Championships is
                calling out to all young riders who have a burning passion for
                speed, adrenaline, and the thrill of competition.
              </p>
            </div>
            <Raceaccordian1></Raceaccordian1>
          </div>
        </section>
        <div className="home-container16">
          <Videos2></Videos2>
        </div>
        <div className="home-hero1">
          <h2 className="home-heading5">
            <span className="home-text21">Questions on Automobiles?</span>
            <br className="home-text22"></br>
            <span className="home-text23">Reach our </span>
            <span className="home-text24">forum</span>
            <span className="home-text25"> </span>
            <span className="home-text26">now!</span>
            <br className="home-text27"></br>
            <span className="home-text28">
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
            className="home-link5 button"
          >
            <span className="home-text29">Enter Forum</span>
          </a>
        </div>
        <div className="home-footer">
          <div className="home-content3">
            <div className="home-main">
              <div className="home-branding">
                <img
                  src="/logo/ba365a50c6760909f3950a57a9b9ff1c-200h.webp"
                  loading="eager"
                  className="home-image11"
                />
                <span className="home-text30">
                  <span>Redefining Automobile Journalism</span>
                  <br className="home-text32"></br>
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
              <div className="home-links">
                <div className="home-column">
                  <span className="home-header5">Company</span>
                  <div className="home-list">
                    <span className="home-text36">About</span>
                    <span className="home-text37">Services</span>
                    <span className="home-text38">
                      <span className="home-text39">Team</span>
                      <br></br>
                    </span>
                  </div>
                </div>
                <div className="home-column1">
                  <span className="home-header6">
                    <span>Resources</span>
                    <br></br>
                  </span>
                  <div className="home-list1">
                    <span className="home-text43">Articles</span>
                    <span className="home-text44">Blog</span>
                  </div>
                </div>
                <div className="home-column2">
                  <span className="home-header7">Social</span>
                  <div className="home-list2">
                    <span className="home-text45">Twitter</span>
                    <span className="home-text46">Instagram</span>
                    <span className="home-text47">Facebook</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-bottom">
              <span className="home-text48">
                © 2023 Revnitro - All rights reserved
              </span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-gray-black);
          }
          .home-navbar {
            width: 100%;
            display: flex;
            z-index: 1000;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: space-between;
          }
          .home-image {
            width: 200px;
            object-fit: cover;
          }
          .home-desktop-menu {
            gap: var(--dl-space-space-threeunits);
            display: flex;
          }
          .home-nav {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-link {
            text-decoration: none;
          }
          .home-link2 {
            text-decoration: none;
          }
          .home-link4 {
            text-decoration: none;
          }
          .home-register {
            margin-right: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .home-text {
            font-size: 16px;
          }
          .home-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .home-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: flex;
            padding: 32px;
            z-index: 100;
            position: fixed;
            transform: translateX(100%);
            transition: 0.5s;
            flex-direction: column;
            justify-content: space-between;
            background-color: #ffffff;
          }
          .home-nav1 {
            display: flex;
            z-index: 20;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container01 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-nav2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-icon-group {
            display: flex;
            z-index: 20;
          }
          .home-icons {
            display: flex;
          }
          .home-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
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
          }
          .home-container02 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            background-color: var(--dl-color-gray-black);
          }
          .home-image01 {
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
            height: 400px;
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
          .home-header {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            position: relative;
            flex-direction: column;
          }
          .home-heading {
            color: rgb(255, 255, 255);
            font-size: 50px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 700;
          }
          .home-text03 {
            color: var(--dl-color-gray-white);
            font-size: 20px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 400;
          }
          .home-container03 {
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            bottom: 54px;
            height: 8px;
            display: flex;
            position: absolute;
            margin-top: var(--dl-space-space-halfunit);
            align-items: flex-start;
            border-color: rgba(120, 120, 120, 0.4);
            border-style: dashed;
            border-width: 0px;
            background-color: #ff0000;
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
          .home-text04 {
            color: var(--dl-color-gray-white);
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
          }
          .home-container05 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .home-more {
            gap: 4px;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-more:hover {
            opacity: 0.5;
          }
          .home-slide1 {
            width: 100%;
          }
          .home-container06 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
            background-color: var(--dl-color-gray-black);
          }
          .home-image02 {
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
            height: 400px;
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
          .home-header1 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            position: relative;
            flex-direction: column;
          }
          .home-heading1 {
            color: rgb(255, 255, 255);
            font-size: 50px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 700;
          }
          .home-text05 {
            color: var(--dl-color-gray-white);
            font-size: 20px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 400;
          }
          .home-container07 {
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            bottom: 54px;
            height: 8px;
            display: flex;
            position: absolute;
            margin-top: var(--dl-space-space-halfunit);
            align-items: flex-start;
            border-color: rgba(120, 120, 120, 0.4);
            border-style: dashed;
            border-width: 0px;
            background-color: #ff0000;
          }
          .home-container08 {
            flex: 0 0 auto;
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .home-container09 {
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
          .home-text06 {
            color: var(--dl-color-gray-white);
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
          }
          .home-slide2 {
            width: 100%;
          }
          .home-container10 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            background-color: var(--dl-color-gray-black);
          }
          .home-image03 {
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
            height: 400px;
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
          .home-header2 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            position: relative;
            flex-direction: column;
          }
          .home-heading2 {
            color: rgb(255, 255, 255);
            font-size: 50px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 700;
          }
          .home-text07 {
            color: var(--dl-color-gray-white);
            font-size: 20px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 400;
          }
          .home-container11 {
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            bottom: 54px;
            height: 8px;
            display: flex;
            position: absolute;
            margin-top: var(--dl-space-space-halfunit);
            align-items: flex-start;
            border-color: rgba(120, 120, 120, 0.4);
            border-style: dashed;
            border-width: 0px;
            background-color: #ff0000;
          }
          .home-container12 {
            flex: 0 0 auto;
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .home-container13 {
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
          .home-text08 {
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
          .home-icon10 {
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
          .home-icon12 {
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
          .home-text09 {
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
            padding: var(--dl-space-space-threeunits);
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-service {
            width: auto;
            height: 643px;
            display: grid;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: 157px;
            grid-template-rows: repeat(2, 1fr);
            grid-template-columns: repeat(2, 1fr);
          }
          .home-brand {
            width: 484px;
            height: var(--dl-size-size-small);
          }
          .home-title {
            color: var(--dl-color-gray-white);
            font-size: 32px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 700;
          }
          .home-brand1 {
            width: 484px;
            height: var(--dl-size-size-small);
          }
          .home-title1 {
            color: var(--dl-color-gray-white);
            font-size: 32px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 700;
          }
          .home-brand2 {
            width: 484px;
            height: var(--dl-size-size-xxlarge);
          }
          .home-image04 {
            width: var(--dl-size-size-large);
            height: auto;
            object-fit: cover;
          }
          .home-title2 {
            color: var(--dl-color-gray-white);
            font-size: 24px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 400;
            line-height: 28px;
          }
          .home-brand3 {
            width: 484px;
            height: var(--dl-size-size-xxlarge);
            align-items: center;
          }
          .home-image05 {
            width: var(--dl-size-size-large);
            height: auto;
            object-fit: cover;
          }
          .home-title3 {
            color: var(--dl-color-gray-white);
            font-size: 24px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 400;
            line-height: 24px;
          }
          .home-brand4 {
            width: 484px;
            height: var(--dl-size-size-xxlarge);
          }
          .home-image06 {
            width: var(--dl-size-size-large);
            height: auto;
            object-fit: cover;
          }
          .home-title4 {
            color: var(--dl-color-gray-white);
            font-size: 24px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 400;
            line-height: 28px;
          }
          .home-brand5 {
            width: 484px;
            height: var(--dl-size-size-xxlarge);
          }
          .home-image07 {
            width: var(--dl-size-size-large);
            height: auto;
            object-fit: cover;
          }
          .home-title5 {
            color: var(--dl-color-gray-white);
            font-size: 24px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 400;
            line-height: 28px;
          }
          .home-brand6 {
            top: 0px;
            right: 0px;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            position: absolute;
          }
          .home-testimonials {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
          }
          .home-header3 {
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
          .home-heading3 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title6 {
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
          .home-image08 {
            width: 60px;
            object-fit: cover;
            aspect-ratio: 1;
            border-radius: var(--dl-radius-radius-round);
          }
          .home-details {
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
          .home-image09 {
            width: 60px;
            object-fit: cover;
            aspect-ratio: 1;
            border-radius: var(--dl-radius-radius-round);
          }
          .home-details1 {
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
          .home-image10 {
            width: 60px;
            object-fit: cover;
            aspect-ratio: 1;
            border-radius: var(--dl-radius-radius-round);
          }
          .home-details2 {
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
          .home-container14 {
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
          .home-container15 {
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
          .home-header4 {
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
          .home-heading4 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: center;
            align-items: center;
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .home-title7 {
            color: var(--dl-color-gray-white);
            font-size: 90px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 100px;
          }
          .home-title8 {
            color: rgba(255, 255, 255, 0.54);
            font-size: 32px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 32px;
          }
          .home-caption2 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            font-family: Poppins;
            line-height: 27px;
          }
          .home-container16 {
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
          .home-heading5 {
            color: rgb(255, 255, 255);
            height: auto;
            font-size: 100px;
            font-style: normal;
            text-align: center;
            font-family: Poppins;
            font-weight: 500;
          }
          .home-text21 {
            font-size: 54px;
            font-weight: 500;
          }
          .home-text22 {
            font-weight: 500;
          }
          .home-text23 {
            font-weight: 500;
          }
          .home-text24 {
            color: #2200ff;
            font-style: italic;
            font-family: Open Sans;
            font-weight: 600;
          }
          .home-text25 {
            color: #2200ff;
            font-style: italic;
            font-family: Open Sans;
            font-weight: 600;
          }
          .home-text26 {
            font-style: normal;
          }
          .home-text27 {
            color: #ffffff;
            font-size: 100px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text28 {
            font-style: normal;
          }
          .home-link5 {
            color: var(--dl-color-gray-white);
            width: auto;
            height: auto;
            margin-top: var(--dl-space-space-twounits);
            border-radius: 50px;
            text-decoration: none;
            background-color: #2200ff;
          }
          .home-text29 {
            margin: var(--dl-space-space-unit);
            font-size: 24px;
            font-family: Poppins;
          }
          .home-footer {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-content3 {
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
          .home-main {
            gap: 240px;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-branding {
            gap: var(--dl-space-space-twounits);
            width: 400px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image11 {
            width: 120px;
            object-fit: cover;
          }
          .home-text30 {
            color: rgb(124, 124, 128);
            line-height: 24px;
          }
          .home-text32 {
            color: #7c7c80;
            line-height: 24px;
          }
          .home-links {
            gap: 120px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-column {
            gap: var(--dl-space-space-threeunits);
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header5 {
            font-size: 24px;
            font-style: italic;
            font-family: Open Sans;
            font-weight: 500;
          }
          .home-list {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text36 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .home-text36:hover {
            opacity: 0.5;
          }
          .home-text37 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .home-text37:hover {
            opacity: 0.5;
          }
          .home-text38 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .home-text38:hover {
            opacity: 0.5;
          }
          .home-text39:hover {
            opacity: 0.5;
          }
          .home-column1 {
            gap: var(--dl-space-space-threeunits);
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header6 {
            font-size: 24px;
            font-style: italic;
            font-family: Open Sans;
            font-weight: 500;
          }
          .home-list1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text43 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .home-text43:hover {
            opacity: 0.5;
          }
          .home-text44 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .home-text44:hover {
            opacity: 0.5;
          }
          .home-column2 {
            gap: var(--dl-space-space-threeunits);
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header7 {
            font-size: 24px;
            font-style: italic;
            font-family: Open Sans;
            font-weight: 500;
          }
          .home-list2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text45 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .home-text45:hover {
            opacity: 0.5;
          }
          .home-text46 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .home-text46:hover {
            opacity: 0.5;
          }
          .home-text47 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .home-text47:hover {
            opacity: 0.5;
          }
          .home-bottom {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-text48 {
            color: rgb(124, 124, 128);
            font-size: 14px;
            line-height: 21px;
          }
          @media (max-width: 991px) {
            .home-slider {
              gap: var(--dl-space-space-twounits);
            }
            .home-image01 {
              width: 100%;
              height: 120px;
            }
            .home-content {
              gap: var(--dl-space-space-unit);
              width: 100%;
              height: auto;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
              justify-content: flex-start;
            }
            .home-header {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
            }
            .home-heading {
              font-size: 24px;
            }
            .home-image02 {
              width: 100%;
              height: 120px;
            }
            .home-content1 {
              gap: var(--dl-space-space-unit);
              width: 100%;
              height: auto;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
              justify-content: flex-start;
            }
            .home-header1 {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
            }
            .home-heading1 {
              font-size: 24px;
            }
            .home-image03 {
              width: 100%;
              height: 120px;
            }
            .home-content2 {
              gap: var(--dl-space-space-unit);
              width: 100%;
              height: auto;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
              justify-content: flex-start;
            }
            .home-header2 {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
            }
            .home-heading2 {
              font-size: 24px;
            }
            .home-service {
              grid-template-rows: repeat(2, 1fr);
              grid-template-columns: repeat(2, 1fr);
            }
            .home-brand {
              border-top-width: 1px;
            }
            .home-brand1 {
              border-top-width: 1px;
            }
            .home-brand2 {
              border-top-width: 1px;
            }
            .home-brand3 {
              border-top-width: 1px;
            }
            .home-brand4 {
              border-top-width: 1px;
            }
            .home-brand5 {
              border-top-width: 1px;
            }
            .home-brand6 {
              border-right-width: 0px;
            }
            .home-heading5 {
              font-size: 50px;
            }
            .home-content3 {
              border-top-width: 0px;
            }
            .home-main {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .home-branding {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .home-desktop-menu {
              display: none;
            }
            .home-burger-menu {
              display: flex;
            }
            .home-icon {
              fill: white;
            }
            .home-nav1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-container01 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-nav2 {
              gap: var(--dl-space-space-unit);
            }
            .home-text01 {
              color: rgb(0, 0, 0);
            }
            .home-text02 {
              color: rgb(0, 0, 0);
            }
            .home-icon-group {
              width: 100%;
              justify-content: flex-start;
            }
            .home-slides {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-slider {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-slider-track {
              align-items: stretch;
            }
            .home-heading {
              font-size: 18px;
            }
            .home-heading1 {
              font-size: 18px;
            }
            .home-heading2 {
              font-size: 18px;
            }
            .home-previous {
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .home-icon10 {
              width: 14px;
              height: 14px;
            }
            .home-next {
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .home-icon12 {
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
            .home-title {
              font-size: 30px;
              line-height: 33px;
            }
            .home-title1 {
              font-size: 30px;
              line-height: 33px;
            }
            .home-title2 {
              font-size: 30px;
              line-height: 33px;
            }
            .home-title3 {
              font-size: 30px;
              line-height: 33px;
            }
            .home-title4 {
              font-size: 30px;
              line-height: 33px;
            }
            .home-title5 {
              font-size: 30px;
              line-height: 33px;
            }
            .home-testimonials {
              gap: var(--dl-space-space-threeunits);
              padding-top: 0px;
            }
            .home-header3 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-heading3 {
              gap: var(--dl-space-space-unit);
            }
            .home-title6 {
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
            .home-image08 {
              width: 40px;
            }
            .home-details {
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
            .home-image09 {
              width: 40px;
            }
            .home-details1 {
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
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-divide {
              width: 50px;
            }
            .home-heading4 {
              gap: var(--dl-space-space-unit);
            }
            .home-title7 {
              font-size: 30px;
              line-height: 33px;
            }
            .home-title8 {
              font-size: 30px;
              line-height: 33px;
            }
            .home-caption2 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-hero1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-heading5 {
              font-size: 36px;
            }
            .home-footer {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-links {
              gap: var(--dl-space-space-fiveunits);
              flex-direction: row;
            }
          }
          @media (max-width: 479px) {
            .home-mobile-menu {
              padding: 16px;
            }
            .home-icon-group {
              justify-content: center;
            }
            .home-text09 {
              font-size: 50px;
            }
            .home-image04 {
              width: 75%;
            }
            .home-image05 {
              width: 75%;
            }
            .home-image06 {
              width: 75%;
            }
            .home-image07 {
              width: 75%;
            }
            .home-divide {
              width: 20px;
            }
            .home-text20 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-hero1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-heading5 {
              color: rgb(255, 255, 255);
              font-style: normal;
              text-align: center;
              font-weight: 500;
            }
            .home-link5 {
              text-align: center;
            }
            .home-links {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .home-bottom {
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

export default Home
