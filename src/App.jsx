import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


export default function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>🔥 Fireplace Palace</title>
      <link rel="stylesheet" href="styles.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Aleo:ital,wght@0,100..900;1,100..900&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300&display=swap"
        rel="stylesheet" />
    </head>
    <body>
    {/* Header Section */}
      <div className="wrapper">
        <header className="header-container">
          <h1>🔥 Fireplace Palace</h1>
        </header>
        {/*Hero Section */}
        <main>
          <section className="hero-section">
            <img
              src="/images/hero-mobile.png"
              srcset="/images/hero-mobile.png 900w, /images/hero-desktop.png 901w"
              sizes="(max-width: 900px) 100vw,
              901px"
              alt="Cozy living room with a fireplace"
              className="hero-image"
            />
            <div className="hero-description">
              <p className="hero-headline">
                Discover the <br />
                perfect fireplace ...
              </p>
              <p className="consultation-paragraph">
                Book consultation: <span className="number-span">0121 345 6789</span>
              </p>
            </div>
          </section>
          <hr className="separator" />
          {/* How It Works Section */}
          <section id="how-it-works" className="how-it-works-section">
            <h2 className="how-it-works-text">How It Works</h2>
            <div className="tiles">
              <article className="tile">
                <img
                  src="/images/how-it-works-1.png"
                  alt="Phone call illustration"
                  className="tile-image"
                />
                <h3>Give us a call...</h3>
                <p>
                  Call us and book in a "Design Consultation" on a date and time
                  that suits you.
                </p>
              </article>
              <article className="tile">
                <img
                  src="/images/how-it-works-2.png"
                  alt="Home visit illustration"
                  className="tile-image"
                />
                <h3>We come to you...</h3>
                <p>
                  We come to your home to do an assessment of the space and to
                  your style preference.
                </p>
              </article>
              <article className="tile">
                <img
                  src="/images/how-it-works-3.png"
                  alt="Fireplace recommendation illustration"
                  className="tile-image"
                />
                <h3>We recommend...</h3>
                <p>We send you a bespoke set of fireplace recommendations.</p>
              </article>
            </div>
          </section>
        </main>
        {/*Footer Section */}
        <footer className="footer">
          <div className="colunms-container">
            <div className="footer-column">
              <p>Find us on:</p>
              <ul className="footer-nav">
                <li>
                  <a href="https://www.facebook.com" className="socials-link"
                    >Facebook</a
                  >
                </li>
                <li>
                  <a href="https://www.instagram.com" className="socials-link"
                    >Instagram</a
                  >
                </li>
                <li>
                  <a href="https://www.tiktok.com" className="socials-link">TikTok</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <p>Contact us:</p>
              <address>
                <a href="mailto:info@firepalace.co.uk" className="email-link"
                  >info@firepalace.co.uk</a>
              </address>
            </div>
          </div>
        </footer>
      </div>
    </body>
    </>
  )
  }