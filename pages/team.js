import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import IconContainer from '../components/icon-container'

const Team = (props) => {
  return (
    <>
      <div className="team-container">
        <Head>
          <title>Team - Revnitro</title>
          <meta property="og:title" content="Team - Revnitro" />
        </Head>
        <header data-thq="thq-navbar" className="team-navbar">
          <Link href="/">
            <a className="team-link">
              <img
                alt="image"
                src="/logo/ba365a50c6760909f3950a57a9b9ff1c-200h.webp"
                className="team-image"
              />
            </a>
          </Link>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="team-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="team-nav"
            >
              <a
                href="https://revnitroblog2.vercel.app/blog"
                target="_blank"
                rel="noreferrer noopener"
                className="team-link1 navLink"
              >
                Blogs
              </a>
              <span className="navLink">Course</span>
              <span className="navLink">Forum</span>
              <span className="navLink">Team</span>
            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="team-burger-menu">
            <svg viewBox="0 0 1024 1024" className="team-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="team-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="team-nav1"
            >
              <div className="team-container01">
                <div data-thq="thq-close-menu" className="team-menu-close">
                  <svg viewBox="0 0 1024 1024" className="team-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="team-nav2"
              >
                <span className="navLink team-text">Team</span>
                <span className="navLink team-text01">Blog</span>
              </nav>
              <div className="team-icon-group">
                <div className="team-icons">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="team-icon04"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="team-icon06"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="team-icon08"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className="team-hero">
          <video
            src="https://pub-30f0311bc9f042069ab58e9ea548fe98.r2.dev/revnitro3.mp4"
            loop="true"
            muted
            poster="https://images.unsplash.com/photo-1591378603223-e15b45a81640?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGt0bSUyMGJpa2V8ZW58MHx8fHwxNjk0ODAwODgxfDA&amp;ixlib=rb-4.0.3&amp;h=1500"
            preload="auto"
            autoPlay
            playsInline
            className="team-video"
          ></video>
          <div className="team-hero-content">
            <h1 className="team-text02">RevNitro Team</h1>
            <div className="team-caption">
              <p className="team-caption01">
                RevNitro is a devoted community of engineers and auto
                enthusiasts committed to offering thorough reviews and thoughts
                on automobiles and bikes.
              </p>
            </div>
            <a href="#team" className="team-link5 button">
              <span className="team-text03">OUR TEAM</span>
            </a>
          </div>
        </section>
        <section className="team-note">
          <h2 className="team-caption02">
            <span>
              We take pleasure in being a dependable source of information at
              RevNitro, promoting a deeper love of automobiles and motorcycles
              through interesting material.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <br></br>
            <span>
              Join us as RevNitro, your ideal automotive friend, and I set off
              on an exciting voyage through the fascinating world of autos. In
              addition to our commitment to providing comprehensive automotive
              reviews and insights, we are proud to cater specifically to the
              Tamil-speaking community with our video content.
            </span>
          </h2>
        </section>
        <div className="team-header">
          <div className="team-hero-content1">
            <h1 className="team-text08">For Tamil Speaking Audience</h1>
            <div className="team-caption03">
              <p className="team-caption04">
                <span>
                  Our engaging videos are created with the aim of delivering
                  valuable information in a language that resonates with our
                  Tamil-speaking audience. Furthermore, for those who prefer
                  reading, we offer a diverse range of informative blogs in the
                  English language, ensuring that our content reaches a wider
                  audience and fosters a deeper appreciation for automobiles and
                  motorcycles.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  At RevNitro, we strive to connect with enthusiasts from all
                  backgrounds and provide them with a rewarding automotive
                  experience.
                </span>
              </p>
            </div>
          </div>
        </div>
        <section id="team" className="team-our-team">
          <div className="team-header1">
            <div data-aos="fade-right" className="team-heading">
              <h2 className="team-title">Meet Our Team</h2>
            </div>
          </div>
          <div className="team-list">
            <div className="team-row">
              <div className="team-row1 speaker">
                <div className="team-speaker">
                  <img
                    alt="image"
                    src="/Team/dinesh-1400w.jpg"
                    loading="lazy"
                    className="team-image1"
                  />
                  <div
                    data-role="accordion-container"
                    className="team-element accordion"
                  >
                    <div className="team-container02">
                      <div className="team-container03">
                        <h3 className="team-name">Dinesh</h3>
                        <span className="team-caption05">PUBLIC RELATIONS</span>
                      </div>
                    </div>
                    <IconContainer rootClassName="icon-container-root-class-name"></IconContainer>
                  </div>
                  <div className="team-content">
                    <p
                      data-role="accordion-content"
                      className="team-content01 accordion-content"
                    >
                      <span>
                        Handles communication and interactions with the public,
                        including media outlets, manufacturers, and readers, in
                        order to promote the journal&apos;s brand, events, and
                        editorial content while keeping positive relationships
                        with stakeholders and resolving any crisis or
                        difficulties that may emerge.
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </p>
                  </div>
                  <div className="team-div">
                    <React.Fragment>
                      <React.Fragment>
                        <Script>{`
 /*
  Accordion - Code Embed
  */
  const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
  const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
  const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]'); // All accordion closed icons
  const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]'); // All accordion open icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
  });

  accordionIconsClosed.forEach((icon) => {
    icon.style.display = "flex"
  })

  accordionIconsOpen.forEach((icon) => {
    icon.style.display = "none"
  })

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          if (accordionContents[index].style.display === "flex") {
              // If the accordion is already open, close it
              accordionContents[index].style.display = "none";
              accordionIconsClosed[index].style.display = "flex";
              accordionIconsOpen[index].style.display = "none"
          } else {
              // If the accordion is closed, open it
              accordionContents.forEach((accordionContent) => {
                  accordionContent.style.display = "none"; //Hides all accordion contents
              });

              accordionIconsClosed.forEach((accordionIcon) => {
                  accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
              });

              accordionIconsOpen.forEach((accordionIcon) => {
                accordionIcon.style.display = "none";
              })
              
              accordionContents[index].style.display = "flex"; // Shows accordion content
              accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
              accordionIconsOpen[index].style.display = "flex";
          }
      });
  });
`}</Script>
                      </React.Fragment>
                    </React.Fragment>
                  </div>
                </div>
                <div className="team-speaker1">
                  <img
                    alt="image"
                    src="/Team/sriram-1400w.jpg"
                    loading="lazy"
                    className="team-image2"
                  />
                  <div
                    data-role="accordion-container"
                    className="team-element1 accordion"
                  >
                    <div className="team-container04">
                      <div className="team-container05">
                        <h3 className="team-name1">
                          <span>Sriram</span>
                          <br></br>
                        </h3>
                        <span className="team-caption06">PRODUCTION LEAD</span>
                      </div>
                    </div>
                    <IconContainer rootClassName="icon-container-root-class-name5"></IconContainer>
                  </div>
                  <div className="team-content02">
                    <p
                      data-role="accordion-content"
                      className="team-content03 accordion-content"
                    >
                      <span>
                        supervises the whole production process, assuring the
                        timely and efficient development of print or digital
                        material, collaborating with authors, editors,
                        designers, and other team members, and ensuring the
                        final product&apos;s quality and consistency.
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </p>
                  </div>
                  <div className="team-div1">
                    <React.Fragment>
                      <React.Fragment>
                        <Script>{`
 /*
  Accordion - Code Embed
  */
  const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
  const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
  const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]'); // All accordion closed icons
  const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]'); // All accordion open icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
  });

  accordionIconsClosed.forEach((icon) => {
    icon.style.display = "flex"
  })

  accordionIconsOpen.forEach((icon) => {
    icon.style.display = "none"
  })

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          if (accordionContents[index].style.display === "flex") {
              // If the accordion is already open, close it
              accordionContents[index].style.display = "none";
              accordionIconsClosed[index].style.display = "flex";
              accordionIconsOpen[index].style.display = "none"
          } else {
              // If the accordion is closed, open it
              accordionContents.forEach((accordionContent) => {
                  accordionContent.style.display = "none"; //Hides all accordion contents
              });

              accordionIconsClosed.forEach((accordionIcon) => {
                  accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
              });

              accordionIconsOpen.forEach((accordionIcon) => {
                accordionIcon.style.display = "none";
              })
              
              accordionContents[index].style.display = "flex"; // Shows accordion content
              accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
              accordionIconsOpen[index].style.display = "flex";
          }
      });
  });
`}</Script>
                      </React.Fragment>
                    </React.Fragment>
                  </div>
                </div>
                <div className="team-speaker2">
                  <img
                    alt="image"
                    src="/Team/dani-bro-1400w.png"
                    loading="lazy"
                    className="team-image3"
                  />
                  <div
                    data-role="accordion-container"
                    className="team-element2 accordion"
                  >
                    <div className="team-container06">
                      <div className="team-container07">
                        <h3 className="team-name2">
                          <span>Daniel Raj</span>
                          <br></br>
                        </h3>
                        <span className="team-caption07">
                          LEAD TEST RIDER &amp; CONTENT EDITOR
                        </span>
                      </div>
                    </div>
                    <IconContainer rootClassName="icon-container-root-class-name4"></IconContainer>
                  </div>
                  <div className="team-content04">
                    <p
                      data-role="accordion-content"
                      className="team-content05 accordion-content"
                    >
                      <span>
                        Tests and makes assessments of automobiles, offering
                        professional views and feedback on their performance,
                        while also supervising and editing articles to guarantee
                        accuracy and entertaining presentation for readers. To
                        test and assess automobiles, offering professional views
                        and feedback on their performance, while also
                        supervising and editing articles to guarantee accuracy
                        and entertaining presentation for readers.
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </p>
                  </div>
                  <div className="team-div2">
                    <React.Fragment>
                      <React.Fragment>
                        <Script>{`
 /*
  Accordion - Code Embed
  */
  const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
  const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
  const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]'); // All accordion closed icons
  const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]'); // All accordion open icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
  });

  accordionIconsClosed.forEach((icon) => {
    icon.style.display = "flex"
  })

  accordionIconsOpen.forEach((icon) => {
    icon.style.display = "none"
  })

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          if (accordionContents[index].style.display === "flex") {
              // If the accordion is already open, close it
              accordionContents[index].style.display = "none";
              accordionIconsClosed[index].style.display = "flex";
              accordionIconsOpen[index].style.display = "none"
          } else {
              // If the accordion is closed, open it
              accordionContents.forEach((accordionContent) => {
                  accordionContent.style.display = "none"; //Hides all accordion contents
              });

              accordionIconsClosed.forEach((accordionIcon) => {
                  accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
              });

              accordionIconsOpen.forEach((accordionIcon) => {
                accordionIcon.style.display = "none";
              })
              
              accordionContents[index].style.display = "flex"; // Shows accordion content
              accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
              accordionIconsOpen[index].style.display = "flex";
          }
      });
  });
`}</Script>
                      </React.Fragment>
                    </React.Fragment>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="team-list1">
            <div className="team-row2">
              <div className="team-row3 speaker">
                <div className="team-speaker3">
                  <img
                    alt="image"
                    src="/Team/gowtham-1400w.jpg"
                    loading="lazy"
                    className="team-image4"
                  />
                  <div
                    data-role="accordion-container"
                    className="team-element3 accordion"
                  >
                    <div className="team-container08">
                      <div className="team-container09">
                        <h3 className="team-name3">Gowtham</h3>
                        <span className="team-caption08">POST PRODUCTION</span>
                      </div>
                    </div>
                    <IconContainer rootClassName="icon-container-root-class-name6"></IconContainer>
                  </div>
                  <div className="team-content06">
                    <p
                      data-role="accordion-content"
                      className="team-content07 accordion-content"
                    >
                      Develops interesting video content, including car test
                      drives and reviews, managing the post-production process,
                      editing films, and ensuring the final output satisfies the
                      journal&apos;s quality requirements and engages the
                      audience successfully.
                    </p>
                  </div>
                  <div className="team-div3">
                    <React.Fragment>
                      <React.Fragment>
                        <Script>{`
 /*
  Accordion - Code Embed
  */
  const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
  const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
  const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]'); // All accordion closed icons
  const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]'); // All accordion open icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
  });

  accordionIconsClosed.forEach((icon) => {
    icon.style.display = "flex"
  })

  accordionIconsOpen.forEach((icon) => {
    icon.style.display = "none"
  })

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          if (accordionContents[index].style.display === "flex") {
              // If the accordion is already open, close it
              accordionContents[index].style.display = "none";
              accordionIconsClosed[index].style.display = "flex";
              accordionIconsOpen[index].style.display = "none"
          } else {
              // If the accordion is closed, open it
              accordionContents.forEach((accordionContent) => {
                  accordionContent.style.display = "none"; //Hides all accordion contents
              });

              accordionIconsClosed.forEach((accordionIcon) => {
                  accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
              });

              accordionIconsOpen.forEach((accordionIcon) => {
                accordionIcon.style.display = "none";
              })
              
              accordionContents[index].style.display = "flex"; // Shows accordion content
              accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
              accordionIconsOpen[index].style.display = "flex";
          }
      });
  });
`}</Script>
                      </React.Fragment>
                    </React.Fragment>
                  </div>
                </div>
                <div className="team-speaker4">
                  <img
                    alt="image"
                    src="/Team/sanjay-1400w.jpg"
                    loading="lazy"
                    className="team-image5"
                  />
                  <div
                    data-role="accordion-container"
                    className="team-element4 accordion"
                  >
                    <div className="team-container10">
                      <div className="team-container11">
                        <h3 className="team-name4">
                          <span>Sanjay</span>
                          <br></br>
                        </h3>
                        <span className="team-caption09">
                          TEST RIDER &amp; CONTENT WRITER
                        </span>
                      </div>
                    </div>
                    <IconContainer rootClassName="icon-container-root-class-name7"></IconContainer>
                  </div>
                  <div className="team-content08">
                    <p
                      data-role="accordion-content"
                      className="team-content09 accordion-content"
                    >
                      <span>
                        Makes assessments of automobiles through test rides,
                        offering extensive and impartial appraisals of their
                        performance and features, while also generating
                        compelling and instructive written material that
                        highlights the driving experience and technical elements
                        for the audience.
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </p>
                  </div>
                  <div className="team-div4">
                    <React.Fragment>
                      <React.Fragment>
                        <Script>{`
 /*
  Accordion - Code Embed
  */
  const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
  const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
  const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]'); // All accordion closed icons
  const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]'); // All accordion open icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
  });

  accordionIconsClosed.forEach((icon) => {
    icon.style.display = "flex"
  })

  accordionIconsOpen.forEach((icon) => {
    icon.style.display = "none"
  })

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          if (accordionContents[index].style.display === "flex") {
              // If the accordion is already open, close it
              accordionContents[index].style.display = "none";
              accordionIconsClosed[index].style.display = "flex";
              accordionIconsOpen[index].style.display = "none"
          } else {
              // If the accordion is closed, open it
              accordionContents.forEach((accordionContent) => {
                  accordionContent.style.display = "none"; //Hides all accordion contents
              });

              accordionIconsClosed.forEach((accordionIcon) => {
                  accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
              });

              accordionIconsOpen.forEach((accordionIcon) => {
                accordionIcon.style.display = "none";
              })
              
              accordionContents[index].style.display = "flex"; // Shows accordion content
              accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
              accordionIconsOpen[index].style.display = "flex";
          }
      });
  });
`}</Script>
                      </React.Fragment>
                    </React.Fragment>
                  </div>
                </div>
                <div className="team-speaker5">
                  <img
                    alt="image"
                    src="/Team/sridhar-1400w.jpg"
                    loading="lazy"
                    className="team-image6"
                  />
                  <div
                    data-role="accordion-container"
                    className="team-element5 accordion"
                  >
                    <div className="team-container12">
                      <div className="team-container13">
                        <h3 className="team-name5">
                          <span>Sridhar</span>
                          <br></br>
                        </h3>
                        <span className="team-caption10">
                          PUBLIC RELATIONS &amp; CR
                        </span>
                      </div>
                    </div>
                    <IconContainer rootClassName="icon-container-root-class-name8"></IconContainer>
                  </div>
                  <div className="team-content10">
                    <p
                      data-role="accordion-content"
                      className="team-content11 accordion-content"
                    >
                      <span>
                        Handles communication with the public, media,
                        manufacturers, and readers in order to promote the
                        journal&apos;s brand and events, while also handling
                        consumer requests, comments, and concerns, establishing
                        positive connections with stakeholders, and creating a
                        strong rapport with the journal&apos;s readership.
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </p>
                  </div>
                  <div className="team-div5">
                    <React.Fragment>
                      <React.Fragment>
                        <Script>{`
 /*
  Accordion - Code Embed
  */
  const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
  const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
  const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]'); // All accordion closed icons
  const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]'); // All accordion open icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
  });

  accordionIconsClosed.forEach((icon) => {
    icon.style.display = "flex"
  })

  accordionIconsOpen.forEach((icon) => {
    icon.style.display = "none"
  })

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          if (accordionContents[index].style.display === "flex") {
              // If the accordion is already open, close it
              accordionContents[index].style.display = "none";
              accordionIconsClosed[index].style.display = "flex";
              accordionIconsOpen[index].style.display = "none"
          } else {
              // If the accordion is closed, open it
              accordionContents.forEach((accordionContent) => {
                  accordionContent.style.display = "none"; //Hides all accordion contents
              });

              accordionIconsClosed.forEach((accordionIcon) => {
                  accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
              });

              accordionIconsOpen.forEach((accordionIcon) => {
                accordionIcon.style.display = "none";
              })
              
              accordionContents[index].style.display = "flex"; // Shows accordion content
              accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
              accordionIconsOpen[index].style.display = "flex";
          }
      });
  });
`}</Script>
                      </React.Fragment>
                    </React.Fragment>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="team-hero1">
          <h2 className="team-heading1">
            <span className="team-text31">Need help?</span>
            <br className="team-text32"></br>
            <span className="team-text33">Contact our </span>
            <span className="team-text34">team</span>
            <span className="team-text35"> </span>
            <span className="team-text36">now!</span>
            <br className="team-text37"></br>
            <span className="team-text38">
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
            className="team-link6 button"
          >
            <span className="team-text39">CONNECT</span>
          </a>
        </div>
        <div className="team-footer">
          <div className="team-content12">
            <div className="team-main">
              <div className="team-branding">
                <img
                  src="/logo/ba365a50c6760909f3950a57a9b9ff1c-200h.webp"
                  className="team-image7"
                />
                <span className="team-text40">
                  <span>Redefining Automobile Journalism</span>
                  <br className="team-text42"></br>
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
              <div className="team-links">
                <div className="team-column">
                  <span className="team-header2">Company</span>
                  <div className="team-list2">
                    <span className="team-text46">About</span>
                    <span className="team-text47">Services</span>
                    <span className="team-text48">
                      <span className="team-text49">Team</span>
                      <br></br>
                    </span>
                  </div>
                </div>
                <div className="team-column1">
                  <span className="team-header3">
                    <span>Resources</span>
                    <br></br>
                  </span>
                  <div className="team-list3">
                    <span className="team-text53">Articles</span>
                    <span className="team-text54">Blog</span>
                  </div>
                </div>
                <div className="team-column2">
                  <span className="team-header4">Social</span>
                  <div className="team-list4">
                    <span className="team-text55">Twitter</span>
                    <span className="team-text56">Instagram</span>
                    <span className="team-text57">Facebook</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="team-bottom">
              <span className="team-text58">
                © 2023 Revnitro - All rights reserved
              </span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .team-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-gray-black);
          }
          .team-navbar {
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
          .team-link {
            display: contents;
          }
          .team-image {
            width: 200px;
            object-fit: cover;
            text-decoration: none;
          }
          .team-desktop-menu {
            gap: var(--dl-space-space-threeunits);
            display: flex;
          }
          .team-nav {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .team-link1 {
            text-decoration: none;
          }
          .team-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .team-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .team-mobile-menu {
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
          .team-nav1 {
            display: flex;
            z-index: 20;
            align-items: flex-start;
            flex-direction: column;
          }
          .team-container01 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .team-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .team-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .team-nav2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .team-icon-group {
            display: flex;
            z-index: 20;
          }
          .team-icons {
            display: flex;
          }
          .team-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .team-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .team-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .team-hero {
            width: 100%;
            height: 100vh;
            display: flex;
            position: relative;
            align-items: center;
            padding-left: var(--dl-space-space-fiveunits);
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-gray-black);
          }
          .team-video {
            top: 0px;
            left: 0px;
            width: 100%;
            filter: opacity(0.6);
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .team-hero-content {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            width: 100%;
            display: flex;
            z-index: 100;
            max-width: 1000px;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .team-text02 {
            color: rgb(255, 0, 0);
            font-size: 90px;
            font-style: normal;
            font-weight: 900;
            line-height: 1.1;
            text-transform: capitalize;
          }
          .team-caption {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .team-caption01 {
            color: var(--dl-color-gray-white);
            font-size: 32px;
            font-style: normal;
            font-weight: 600;
          }
          .team-link5 {
            color: var(--dl-color-gray-white);
            width: auto;
            height: auto;
            margin-top: var(--dl-space-space-twounits);
            border-color: #2200ff;
            border-width: 3px;
            border-radius: 50px;
            text-decoration: none;
            background-color: transparent;
          }
          .team-text03 {
            margin: var(--dl-space-space-unit);
            font-size: 24px;
          }
          .team-note {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-end;
            padding-top: 120px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: flex-start;
          }
          .team-caption02 {
            color: var(--dl-color-gray-white);
            width: auto;
            font-size: 24px;
            max-width: auto;
            font-style: normal;
            font-weight: 400;
            line-height: 36px;
            margin-right: 0px;
          }
          .team-header {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            flex-direction: column;
          }
          .team-hero-content1 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-fiveunits);
            z-index: 100;
            max-width: auto;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .team-text08 {
            color: rgb(255, 255, 255);
            font-size: 45px;
            font-style: normal;
            font-weight: 600;
            line-height: 1.1;
          }
          .team-caption03 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .team-caption04 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            line-height: 32px;
          }
          .team-our-team {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-top: 120px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
          }
          .team-header1 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .team-heading {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .team-title {
            color: #2200ff;
            width: 752px;
            font-size: 60px;
            font-style: normal;
            font-weight: 600;
            line-height: 100px;
          }
          .team-list {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: column;
          }
          .team-row {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .team-row1 {
            width: auto;
          }
          .team-speaker {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .team-image1 {
            width: 100%;
            object-fit: cover;
            aspect-ratio: 1;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .team-element {
            padding: var(--dl-space-space-unit);
          }
          .team-container02 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .team-container03 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .team-name {
            color: var(--dl-color-gray-white);
            font-size: 28px;
            font-style: normal;
            font-weight: 600;
          }
          .team-caption05 {
            color: #ff0000;
            font-size: 18px;
            margin-top: var(--dl-space-space-halfunit);
            text-transform: capitalize;
          }
          .team-content {
            width: auto;
          }
          .team-content01 {
            color: var(--dl-color-gray-white);
            display: flex;
            font-size: 18px;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            text-align: left;
            font-weight: 400;
          }
          .team-div {
            display: contents;
          }
          .team-speaker1 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .team-image2 {
            width: 100%;
            object-fit: cover;
            aspect-ratio: 1;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .team-element1 {
            padding: var(--dl-space-space-unit);
          }
          .team-container04 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .team-container05 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .team-name1 {
            color: var(--dl-color-gray-white);
            font-size: 28px;
            font-style: normal;
            font-weight: 600;
          }
          .team-caption06 {
            color: rgb(255, 0, 0);
            font-size: 18px;
            margin-top: var(--dl-space-space-halfunit);
            text-transform: capitalize;
          }
          .team-content02 {
            width: auto;
          }
          .team-content03 {
            color: var(--dl-color-gray-white);
            display: flex;
            font-size: 18px;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            text-align: left;
            font-weight: 400;
          }
          .team-div1 {
            display: contents;
          }
          .team-speaker2 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .team-image3 {
            width: 100%;
            object-fit: cover;
            aspect-ratio: 1;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .team-element2 {
            padding: var(--dl-space-space-unit);
          }
          .team-container06 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .team-container07 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .team-name2 {
            color: var(--dl-color-gray-white);
            font-size: 28px;
            font-style: normal;
            font-weight: 600;
          }
          .team-caption07 {
            color: rgb(255, 0, 0);
            font-size: 18px;
            margin-top: var(--dl-space-space-halfunit);
            text-transform: capitalize;
          }
          .team-content04 {
            width: auto;
          }
          .team-content05 {
            color: var(--dl-color-gray-white);
            display: flex;
            font-size: 18px;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            text-align: left;
            font-weight: 400;
          }
          .team-div2 {
            display: contents;
          }
          .team-list1 {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: column;
          }
          .team-row2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .team-row3 {
            width: auto;
          }
          .team-speaker3 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .team-image4 {
            width: 100%;
            object-fit: cover;
            aspect-ratio: 1;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .team-element3 {
            padding: var(--dl-space-space-unit);
          }
          .team-container08 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .team-container09 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .team-name3 {
            color: var(--dl-color-gray-white);
            font-size: 28px;
            font-style: normal;
            font-weight: 600;
          }
          .team-caption08 {
            color: rgb(255, 0, 0);
            font-size: 18px;
            margin-top: var(--dl-space-space-halfunit);
            text-transform: capitalize;
          }
          .team-content06 {
            width: auto;
          }
          .team-content07 {
            color: var(--dl-color-gray-white);
            display: flex;
            font-size: 18px;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            text-align: left;
            font-weight: 400;
          }
          .team-div3 {
            display: contents;
          }
          .team-speaker4 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .team-image5 {
            width: 100%;
            object-fit: cover;
            aspect-ratio: 1;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .team-element4 {
            padding: var(--dl-space-space-unit);
          }
          .team-container10 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .team-container11 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .team-name4 {
            color: var(--dl-color-gray-white);
            font-size: 28px;
            font-style: normal;
            font-weight: 600;
          }
          .team-caption09 {
            color: rgb(255, 0, 0);
            font-size: 18px;
            margin-top: var(--dl-space-space-halfunit);
            text-transform: capitalize;
          }
          .team-content08 {
            width: auto;
          }
          .team-content09 {
            color: var(--dl-color-gray-white);
            display: flex;
            font-size: 18px;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            text-align: left;
            font-weight: 400;
          }
          .team-div4 {
            display: contents;
          }
          .team-speaker5 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .team-image6 {
            width: 100%;
            object-fit: cover;
            aspect-ratio: 1;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .team-element5 {
            padding: var(--dl-space-space-unit);
          }
          .team-container12 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .team-container13 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .team-name5 {
            color: var(--dl-color-gray-white);
            font-size: 28px;
            font-style: normal;
            font-weight: 600;
          }
          .team-caption10 {
            color: rgb(255, 0, 0);
            font-size: 18px;
            margin-top: var(--dl-space-space-halfunit);
            text-transform: capitalize;
          }
          .team-content10 {
            width: auto;
          }
          .team-content11 {
            color: var(--dl-color-gray-white);
            display: flex;
            font-size: 18px;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            text-align: left;
            font-weight: 400;
          }
          .team-div5 {
            display: contents;
          }
          .team-hero1 {
            width: 100%;
            height: 100vh;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            min-height: auto;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-black);
          }
          .team-heading1 {
            color: rgb(255, 255, 255);
            height: auto;
            font-size: 100px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
          }
          .team-text31 {
            font-size: 54px;
            font-weight: 500;
          }
          .team-text32 {
            font-size: 54px;
            font-weight: 500;
          }
          .team-text33 {
            font-size: 100px;
            font-weight: 500;
          }
          .team-text34 {
            color: #2200ff;
            font-style: italic;
            font-family: Open Sans;
            font-weight: 600;
          }
          .team-text35 {
            color: #2200ff;
            font-style: italic;
            font-family: Open Sans;
            font-weight: 600;
          }
          .team-text36 {
            font-style: normal;
          }
          .team-text37 {
            color: #ffffff;
            font-size: 100px;
            font-style: normal;
            font-weight: 500;
          }
          .team-text38 {
            font-style: normal;
          }
          .team-link6 {
            color: var(--dl-color-gray-white);
            width: auto;
            height: auto;
            margin-top: var(--dl-space-space-twounits);
            border-radius: 50px;
            text-decoration: none;
            background-color: #2200ff;
          }
          .team-text39 {
            margin: var(--dl-space-space-unit);
            font-size: 24px;
          }
          .team-footer {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .team-content12 {
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
          .team-main {
            gap: 240px;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .team-branding {
            gap: var(--dl-space-space-twounits);
            width: 400px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .team-image7 {
            width: 120px;
            object-fit: cover;
          }
          .team-text40 {
            color: rgb(124, 124, 128);
            line-height: 24px;
          }
          .team-text42 {
            color: #7c7c80;
            line-height: 24px;
          }
          .team-links {
            gap: 120px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .team-column {
            gap: var(--dl-space-space-threeunits);
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .team-header2 {
            font-size: 24px;
            font-style: italic;
            font-family: Open Sans;
            font-weight: 500;
          }
          .team-list2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .team-text46 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .team-text46:hover {
            opacity: 0.5;
          }
          .team-text47 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .team-text47:hover {
            opacity: 0.5;
          }
          .team-text48 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .team-text48:hover {
            opacity: 0.5;
          }
          .team-text49:hover {
            opacity: 0.5;
          }
          .team-column1 {
            gap: var(--dl-space-space-threeunits);
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .team-header3 {
            font-size: 24px;
            font-style: italic;
            font-family: Open Sans;
            font-weight: 500;
          }
          .team-list3 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .team-text53 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .team-text53:hover {
            opacity: 0.5;
          }
          .team-text54 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .team-text54:hover {
            opacity: 0.5;
          }
          .team-column2 {
            gap: var(--dl-space-space-threeunits);
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .team-header4 {
            font-size: 24px;
            font-style: italic;
            font-family: Open Sans;
            font-weight: 500;
          }
          .team-list4 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .team-text55 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .team-text55:hover {
            opacity: 0.5;
          }
          .team-text56 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .team-text56:hover {
            opacity: 0.5;
          }
          .team-text57 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .team-text57:hover {
            opacity: 0.5;
          }
          .team-bottom {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .team-text58 {
            color: rgb(124, 124, 128);
            font-size: 14px;
            line-height: 21px;
          }
          @media (max-width: 991px) {
            .team-hero {
              padding-left: var(--dl-space-space-oneandhalfunits);
            }
            .team-header {
              max-width: 100%;
            }
            .team-name {
              font-size: 20px;
            }
            .team-caption05 {
              font-size: 10px;
            }
            .team-name1 {
              font-size: 20px;
            }
            .team-caption06 {
              font-size: 10px;
            }
            .team-name2 {
              font-size: 20px;
            }
            .team-caption07 {
              font-size: 10px;
            }
            .team-name3 {
              font-size: 20px;
            }
            .team-caption08 {
              font-size: 10px;
            }
            .team-name4 {
              font-size: 20px;
            }
            .team-caption09 {
              font-size: 10px;
            }
            .team-name5 {
              font-size: 20px;
            }
            .team-caption10 {
              font-size: 10px;
            }
            .team-heading1 {
              font-size: 50px;
            }
            .team-content12 {
              border-top-width: 0px;
            }
            .team-main {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .team-branding {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .team-desktop-menu {
              display: none;
            }
            .team-burger-menu {
              display: flex;
            }
            .team-icon {
              fill: white;
            }
            .team-nav1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .team-container01 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .team-nav2 {
              gap: var(--dl-space-space-unit);
            }
            .team-text {
              color: rgb(0, 0, 0);
            }
            .team-text01 {
              color: rgb(0, 0, 0);
            }
            .team-icon-group {
              width: 100%;
              justify-content: flex-start;
            }
            .team-hero-content {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .team-caption {
              gap: var(--dl-space-space-unit);
            }
            .team-caption01 {
              font-size: 16px;
              line-height: 24px;
            }
            .team-note {
              align-items: flex-start;
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .team-caption02 {
              font-size: 18px;
              max-width: 90%;
              line-height: 23px;
              margin-right: 0px;
            }
            .team-hero-content1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .team-caption03 {
              gap: var(--dl-space-space-unit);
            }
            .team-caption04 {
              font-size: 16px;
              line-height: 24px;
            }
            .team-our-team {
              gap: var(--dl-space-space-twounits);
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .team-heading {
              gap: var(--dl-space-space-unit);
            }
            .team-title {
              font-size: 30px;
              line-height: 33px;
            }
            .team-row {
              flex-direction: column;
            }
            .team-speaker {
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .team-name {
              font-size: 14px;
            }
            .team-caption05 {
              font-size: 10px;
            }
            .team-speaker1 {
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .team-name1 {
              font-size: 14px;
            }
            .team-caption06 {
              font-size: 10px;
            }
            .team-speaker2 {
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .team-name2 {
              font-size: 14px;
            }
            .team-caption07 {
              font-size: 10px;
            }
            .team-row2 {
              flex-direction: column;
            }
            .team-speaker3 {
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .team-name3 {
              font-size: 14px;
            }
            .team-caption08 {
              font-size: 10px;
            }
            .team-speaker4 {
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .team-name4 {
              font-size: 14px;
            }
            .team-caption09 {
              font-size: 10px;
            }
            .team-speaker5 {
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .team-name5 {
              font-size: 14px;
            }
            .team-caption10 {
              font-size: 10px;
            }
            .team-hero1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .team-heading1 {
              font-size: 36px;
            }
            .team-footer {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .team-links {
              gap: var(--dl-space-space-fiveunits);
              flex-direction: row;
            }
          }
          @media (max-width: 479px) {
            .team-mobile-menu {
              padding: 16px;
            }
            .team-icon-group {
              justify-content: center;
            }
            .team-text02 {
              font-size: 50px;
            }
            .team-link5 {
              text-align: center;
            }
            .team-text08 {
              font-size: 50px;
            }
            .team-hero1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .team-heading1 {
              color: rgb(255, 255, 255);
              font-style: normal;
              text-align: center;
              font-weight: 500;
            }
            .team-link6 {
              text-align: center;
            }
            .team-links {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .team-bottom {
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

export default Team
