import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import Navbar from '../components/navbar'
import IconContainer from '../components/icon-container'
import Footer from '../components/footer'

const Team = (props) => {
  return (
    <>
      <div className="team-container">
        <Head>
          <title>Team - Revnitro</title>
          <meta property="og:title" content="Team - Revnitro" />
        </Head>
        <Navbar rootClassName="navbar-root-class-name5"></Navbar>
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
            <h1 className="team-text">RevNitro Team</h1>
            <div className="team-caption">
              <p className="team-caption01">
                RevNitro is a devoted community of engineers and auto
                enthusiasts committed to offering thorough reviews and thoughts
                on automobiles and bikes.
              </p>
            </div>
            <a href="#team" className="team-link button">
              <span className="team-text01">OUR TEAM</span>
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
            <h1 className="team-text06">For Tamil Speaking Audience</h1>
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
                    className="team-image"
                  />
                  <div
                    data-role="accordion-container"
                    className="team-element accordion"
                  >
                    <div className="team-container01">
                      <div className="team-container02">
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
                    className="team-image1"
                  />
                  <div
                    data-role="accordion-container"
                    className="team-element1 accordion"
                  >
                    <div className="team-container03">
                      <div className="team-container04">
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
                    className="team-image2"
                  />
                  <div
                    data-role="accordion-container"
                    className="team-element2 accordion"
                  >
                    <div className="team-container05">
                      <div className="team-container06">
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
                    className="team-image3"
                  />
                  <div
                    data-role="accordion-container"
                    className="team-element3 accordion"
                  >
                    <div className="team-container07">
                      <div className="team-container08">
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
                    className="team-image4"
                  />
                  <div
                    data-role="accordion-container"
                    className="team-element4 accordion"
                  >
                    <div className="team-container09">
                      <div className="team-container10">
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
                    className="team-image5"
                  />
                  <div
                    data-role="accordion-container"
                    className="team-element5 accordion"
                  >
                    <div className="team-container11">
                      <div className="team-container12">
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
            <span className="team-text29">Need help?</span>
            <br className="team-text30"></br>
            <span className="team-text31">Contact our </span>
            <span className="team-text32">team</span>
            <span className="team-text33"> </span>
            <span className="team-text34">now!</span>
            <br className="team-text35"></br>
            <span className="team-text36">
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
            className="team-link1 button"
          >
            <span className="team-text37">CONNECT</span>
          </a>
          <form className="team-form">
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input team-textinput"
            />
            <input
              type="number"
              name="age"
              placeholder="age"
              className="input team-textinput1"
            />
            <input
              type="text"
              name="place"
              placeholder="place"
              className="input team-textinput2"
            />
            <input
              type="text"
              name="skills"
              placeholder="skill"
              className="input team-textinput3"
            />
            <input
              type="text"
              name="softwares"
              value="softwares known"
              placeholder="place"
              className="input team-textinput4"
            />
            <button type="submit" className="button team-button">
              SUBMIT
            </button>
          </form>
          <div className="team-div6">
            <React.Fragment>
              <React.Fragment>
                <Script>{`
  function handleFormSubmit(event) {
    // Prevent the form from being submitted the default way
    event.preventDefault();

    // Get the form element
    var form = document.getElementById("myForm");

    // Attach the handleFormSubmit function to the form's submit event
    form.addEventListener("submit", handleFormSubmit);

    // Create a FormData object, passing in the form element
    var formData = new FormData(form);

    // Create an object to hold the form data
    var data = {};
    formData.forEach(function (value, key) {
      data[key] = value;
    });

    // Convert the data object to a JSON string
    var jsonData = JSON.stringify(data);

    // Send the data to the Strapi backend
    fetch("https://cmsadmin.revnitro.com/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonData,
    });
  }
`}</Script>
              </React.Fragment>
            </React.Fragment>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name3"></Footer>
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
          .team-text {
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
          .team-link {
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
          .team-text01 {
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
          .team-text06 {
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
          .team-image {
            width: 100%;
            object-fit: cover;
            aspect-ratio: 1;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .team-element {
            padding: var(--dl-space-space-unit);
          }
          .team-container01 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .team-container02 {
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
          .team-image1 {
            width: 100%;
            object-fit: cover;
            aspect-ratio: 1;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .team-element1 {
            padding: var(--dl-space-space-unit);
          }
          .team-container03 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .team-container04 {
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
          .team-image2 {
            width: 100%;
            object-fit: cover;
            aspect-ratio: 1;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .team-element2 {
            padding: var(--dl-space-space-unit);
          }
          .team-container05 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .team-container06 {
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
          .team-image3 {
            width: 100%;
            object-fit: cover;
            aspect-ratio: 1;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .team-element3 {
            padding: var(--dl-space-space-unit);
          }
          .team-container07 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .team-container08 {
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
          .team-image4 {
            width: 100%;
            object-fit: cover;
            aspect-ratio: 1;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .team-element4 {
            padding: var(--dl-space-space-unit);
          }
          .team-container09 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .team-container10 {
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
          .team-image5 {
            width: 100%;
            object-fit: cover;
            aspect-ratio: 1;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .team-element5 {
            padding: var(--dl-space-space-unit);
          }
          .team-container11 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .team-container12 {
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
          .team-text29 {
            font-size: 54px;
            font-weight: 500;
          }
          .team-text30 {
            font-size: 54px;
            font-weight: 500;
          }
          .team-text31 {
            font-size: 100px;
            font-weight: 500;
          }
          .team-text32 {
            color: #2200ff;
            font-style: italic;
            font-family: Open Sans;
            font-weight: 600;
          }
          .team-text33 {
            color: #2200ff;
            font-style: italic;
            font-family: Open Sans;
            font-weight: 600;
          }
          .team-text34 {
            font-style: normal;
          }
          .team-text35 {
            color: #ffffff;
            font-size: 100px;
            font-style: normal;
            font-weight: 500;
          }
          .team-text36 {
            font-style: normal;
          }
          .team-link1 {
            color: var(--dl-color-gray-white);
            width: auto;
            height: auto;
            margin-top: var(--dl-space-space-twounits);
            border-radius: 50px;
            text-decoration: none;
            background-color: #2200ff;
          }
          .team-text37 {
            margin: var(--dl-space-space-unit);
            font-size: 24px;
          }
          .team-form {
            width: 200px;
            height: 100px;
            display: flex;
          }
          .team-div6 {
            display: contents;
          }
          @media (max-width: 1600px) {
            .team-form {
              width: auto;
              height: auto;
              display: none;
              flex-direction: column;
            }
            .team-textinput {
              height: var(--dl-size-size-small);
              margin-bottom: var(--dl-space-space-unit);
            }
            .team-textinput1 {
              height: var(--dl-size-size-small);
              margin-bottom: var(--dl-space-space-unit);
            }
            .team-textinput2 {
              height: var(--dl-size-size-small);
              margin-bottom: var(--dl-space-space-unit);
            }
            .team-textinput3 {
              height: var(--dl-size-size-small);
              margin-bottom: var(--dl-space-space-unit);
            }
            .team-textinput4 {
              height: var(--dl-size-size-small);
              margin-bottom: var(--dl-space-space-unit);
            }
            .team-button {
              color: var(--dl-color-gray-white);
              background-color: var(--dl-color-primary-100);
            }
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
          }
          @media (max-width: 767px) {
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
          }
          @media (max-width: 479px) {
            .team-text {
              font-size: 50px;
            }
            .team-link {
              text-align: center;
            }
            .team-text06 {
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
            .team-link1 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default Team
