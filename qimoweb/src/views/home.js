import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Includes from '../components/includes'
import Excludes from '../components/excludes'
import Article from '../components/article'
import FAQ from '../components/faq'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Planical modern template</title>
        <meta property="og:title" content="Planical modern template" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name"></Navbar>
      <section className="home-section">
        <div className="home-hero">
          <div className="home-content">
            <main className="home-main">
              <header className="home-header">
                <div className="home-container01">
                  <h1 className="home-heading">
                    Portofolio Database &amp; Projects
                  </h1>
                  <img
                    alt="image"
                    src="/Branding/a-500h.png"
                    className="home-image"
                  />
                </div>
                <span className="home-caption">
                  Cras es noster. Carpe vinum. Sequere pecuniam.
                </span>
              </header>
            </main>
          </div>
          <div className="home-image01"></div>
        </div>
        <div className="home-container02">
          <div className="home-container03">
            <img
              alt="image"
              src="/Branding/vanhel-500h.png"
              className="home-image02"
            />
            <img
              alt="image"
              src="/Branding/asmolab-300h.png"
              className="home-image03"
            />
          </div>
          <img
            alt="image"
            src="/Branding/lesser%20key-300w.png"
            className="home-image04"
          />
        </div>
      </section>
      <section className="home-section01">
        <h2 className="home-text">Our Ongoing &amp; Upcoming Projects</h2>
        <div id="Features" className="home-features">
          <a href="#Hera" className="home-link">
            <header className="home-feature feature feature-active">
              <h3 className="home-text01">
                <span>
                  Personal AI
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>Assistant</span>
              </h3>
              <p className="home-text04">ASMO LABORATORY</p>
            </header>
          </a>
          <a href="#vanhel" className="home-link01">
            <header className="home-feature1 feature feature-active">
              <h3 className="home-text05">Venture Capital</h3>
              <p className="home-text06">Vanhel Capital</p>
            </header>
          </a>
          <a href="#lesserkey" className="home-link02">
            <header className="home-feature2 feature feature-active">
              <h3 className="home-text07">Creative Works</h3>
              <p className="home-text08">Lesser Key</p>
            </header>
          </a>
        </div>
        <div id="Hera" className="home-note">
          <div className="home-content1">
            <main className="home-main1">
              <span className="section-head">AsMO LABORATORY</span>
              <h2 className="home-heading01">Hera de Van</h2>
              <p className="home-paragraph">
                Hera is the first prototype of personal AI assistant
                project. Utilizing NLP technology from Character.AI through a
                Python function, the website enables users to input speech which
                is then converted to text and visualized using Live2D
                technology.
              </p>
            </main>
            <div className="home-explore-more">
              <p className="home-text09">Explore more -&gt;</p>
            </div>
          </div>
          <div className="home-container04">
            <img alt="image" src="/2443-600h.jpg" className="home-image05" />
            <div className="home-image06"></div>
          </div>
        </div>
      </section>
      <div className="home-container05">
        <div className="home-container06">
          <Script
            html={`<script src="https://public.bnbstatic.com/unpkg/growth-widget/cryptoCurrencyWidget@0.0.13.min.js" ></script><div class="binance-widget-marquee" data-cmc-ids="1,1027,5426,8037,29587,30171,30843,13631,7080,22974" data-theme="dark" data-transparent="true" data-powered-by="Powered by" data-disclaimer="Disclaimer" ></div>`}
          ></Script>
        </div>
      </div>
      <section className="home-section03">
        <section className="home-note1">
          <div className="home-image07">
            <img
              src="/Branding/picsart_06-15-08.22.46-400h.png"
              alt="image"
              className="home-image08"
            />
          </div>
          <div className="home-content2">
            <div className="home-main2">
              <div className="home-caption1">
                <span className="section-head">
                  <span>Vanhel capital</span>
                  <br></br>
                </span>
              </div>
              <div className="home-heading02">
                <h2 className="section-heading">LIQUID DIGITAL ASSETS</h2>
                <p className="section-description">
                  The information and assets displayed on this website are for
                  educational and informational purposes only. We do not provide
                  investment advice or endorse any particular investment.
                  Investing in any asset carries inherent risks, and it is
                  crucial to perform your own research and consult with a
                  financial advisor before making any investment decisions. We
                  are not responsible for any losses incured from investing in
                  any of these assets.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="home-note2">
          <div className="home-image09"></div>
          <div id="vanhel" className="home-image10">
            <iframe
              src="https://www.youtube.com/embed/eSm760tiKwg"
              className="home-iframe"
            ></iframe>
          </div>
          <div className="home-content3">
            <main className="home-main3">
              <header className="home-caption2">
                <span className="home-section05 section-head">
                  Vanhel capital
                </span>
              </header>
              <main className="home-heading04">
                <header className="home-header01">
                  <h2 className="home-heading05 section-heading">
                    Exploring the Intersection of AI, Blockchain, and
                    Cryptocurrency: Impacts on Humanity (Personal Thesis)
                  </h2>
                  <p className="home-paragraph2 section-description">
                    Deep dive into the realm of possibilities, where AI,
                    Blockchain and Cryptocurrency will be the building
                    foundation of the future of humanity.
                  </p>
                </header>
              </main>
            </main>
            <div className="home-get-started button">
              <span className="home-text12">READ NOW</span>
            </div>
          </div>
        </section>
        <section className="home-note3">
          <div id="lesserkey" className="home-image11">
            <img
              alt="pastedImage"
              src="/pastedimage-wkuq-400w.png"
              className="home-pasted-image"
            />
          </div>
          <div className="home-content4">
            <div className="home-main4">
              <div className="home-caption3">
                <span className="section-head">Lesser key</span>
              </div>
              <div className="home-heading06">
                <h2 className="section-heading">WEBNOVEL/LIGHT NOVEL</h2>
                <p className="section-description">
                  Lesser Key, our subsidiary focused on art and literature,
                  specializes in creating captivating narratives and visual
                  experiences. From novels to artwork, we immerse audiences in
                  rich storytelling and imaginative worlds. Our diverse team of
                  creatives collaborates to produce compelling works that
                  resonate with readers and art enthusiasts alike. With a
                  commitment to innovation and quality, Lesser Key aims to push
                  the boundaries of storytelling in both traditional and
                  emerging mediums.
                </p>
              </div>
            </div>
            <a
              href="https://www.webnovel.com/book/is-it-wrong-to-use-forbidden-magic-in-the-academy_29583059600663005"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link03"
            >
              <div className="home-get-started1 button">
                <span className="home-text13">READ NOW</span>
              </div>
            </a>
          </div>
        </section>
      </section>
      <section className="home-section07">
        <header className="home-header02">
          <header className="home-left">
            <span className="section-head">APollyon group</span>
            <h2 className="section-heading">MEET OUR SUBSIDIARY</h2>
          </header>
          <div className="home-right">
            <p className="home-paragraph4 section-description">
              Driving Innovation, Unlocking Potential, and Establishing Pathways
              to Future Success Across All Industries We Engage With
            </p>
          </div>
        </header>
        <div className="home-container07">
          <img
            alt="image"
            src="/Branding/vanhel-500h.png"
            className="home-image12"
          />
          <p className="home-paragraph5 section-description">
            Vanhel Capital is a private venture capital firm specializing in
            crypto assets. We are dedicated to identifying and investing in
            promising blockchain technologies and digital currencies, driving
            innovation in the crypto space. Our team leverages deep industry
            expertise to provide strategic support and foster growth in our
            portfolio companies, aiming to deliver exceptional returns for our
            investors.
          </p>
        </div>
        <div className="home-container08">
          <img
            alt="image"
            src="/Branding/asmolab-300h.png"
            className="home-image13"
          />
          <p className="home-paragraph6 section-description">
            Asmo Laboratory is a leading tech research company specializing in
            AI, blockchain, and cybersecurity. We are dedicated to advancing
            technology through innovative research and development, creating
            cutting-edge solutions that enhance security and efficiency. Our
            team of experts is committed to excellence, pushing the boundaries
            of technology to shape a safer and smarter future.
          </p>
        </div>
        <div className="home-container09">
          <img
            alt="image"
            src="/Branding/lesser%20key-300w.png"
            className="home-image14"
          />
          <p className="home-paragraph7 section-description">
            Lesser Key is a pioneering subsidiary dedicated to art and
            literature, specializing in creating compelling in-house narratives
            and visually stunning works. We push the boundaries of storytelling
            through innovative novels, art, and multimedia projects, committed
            to excellence, creativity, and integrity.
          </p>
        </div>
      </section>
      <section className="home-section09">
        <div className="home-note4">
          <div className="home-container10">
            <div className="home-container11">
              <Script
                html={`

      <!DOCTYPE html>
      <html>
      <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width,initial-scale=1.0">
      </head>
      <body>
      <!-- COPY QC WIDGET TAG AND SCRIPT BELOW -->
      <qc-heatmap height="600px" num-of-coins="20" currency-code="USD"></qc-heatmap>
      <script src="https://quantifycrypto.com/widgets/heatmaps/js/qc-heatmap-widget.js"></script>
      </body>
      </html>`}
              ></Script>
            </div>
          </div>
          <div className="home-container12">
            <div className="home-container13">
              <Script
                html={`
<script src="https://price-static.crypto.com/latest/public/static/widget/index.js"></script>
<div
  id="crypto-widget-CoinList"
  data-transparent="true"
  data-theme="dark"
  data-design="modern"
  data-coin-ids="1,166,20227,2123,1986,15313,5178,20,21368"></div>`}
              ></Script>
            </div>
          </div>
          <div className="home-container14">
            <div className="home-container15">
              <Script
                html={`<a href="https://cryptopanic.com/" target="_blank" data-news_feed="trending" data-bg_color="#181616" data-text_color="#FFFFFF" data-header_bg_color="#30343B" data-header_text_color="#CF720E" data-posts_limit="10" data-font_family="sans" data-link_color="#3CAE00" class="CryptoPanicWidget">Trending News</a>
<script src="https://static.cryptopanic.com/static/js/widgets.min.js"></script>`}
              ></Script>
            </div>
          </div>
        </div>
      </section>
      <section className="home-section10">
        <div className="home-cube">
          <div className="home-top side"></div>
          <div className="home-front side"></div>
          <div className="home-left1 side"></div>
        </div>
        <main className="home-banner">
          <img
            alt="image"
            src="/Branding/vanhel-500h.png"
            className="home-image15"
          />
          <div className="home-header03">
            <h2 className="section-heading">
              Vanhel Capital Crypto Trading Course
            </h2>
            <p className="home-description section-description">Learn Now!</p>
          </div>
          <div className="home-buttons">
            <a
              href="mailto:jovanmarvell@gmail.com?subject=Apollyon Group Trading Course Premium"
              className="home-link04"
            >
              <div className="home-get-started2 button">
                <span className="home-text14">Get started</span>
              </div>
            </a>
            <a
              href="mailto:jovanmarvell@gmail.com?subject=Apollyon Group Trading Course Demo"
              className="home-link05"
            >
              <div className="home-book-demo button">
                <span className="home-text15">Book a demo</span>
              </div>
            </a>
          </div>
        </main>
      </section>
      <section className="home-section11">
        <div className="home-cube1">
          <div className="home-top1 side"></div>
          <div className="home-front1 side"></div>
          <div className="home-left2 side"></div>
        </div>
        <main className="home-pricing">
          <header className="home-header04">
            <header className="home-left3">
              <span className="section-head">ASMO LABORATORY</span>
              <h2 className="section-heading home-heading10">
                Start small, think big
              </h2>
            </header>
            <div className="home-right1">
              <p className="home-paragraph8 section-description">
                Interested in our website design services? Contact us to get
                started on creating your own professional website today!
              </p>
            </div>
          </header>
          <div className="home-plans-container">
            <main className="home-plans">
              <div className="home-plan">
                <div className="home-details">
                  <div className="home-header05">
                    <label className="home-name">Basic</label>
                    <div className="home-pricing1">
                      <h1 className="home-price">$150</h1>
                      <span className="home-duration">/mo</span>
                    </div>
                  </div>
                  <p className="home-description1">
                    Ideal for individuals seeking a streamlined portfolio
                    website or small non-profit/business organizations.
                  </p>
                </div>
                <div className="home-buy-details">
                  <div className="home-buy button">
                    <span className="home-text16">
                      <span>Start Basic</span>
                      <br></br>
                    </span>
                  </div>
                  <div className="home-features1">
                    <span className="home-heading11">You will get</span>
                    <div className="home-list">
                      <Includes
                        label="Customized website design with up to 3 pages"
                        rootClassName="includes-root-class-name"
                      ></Includes>
                      <Includes
                        label="Responsive design for mobile compatibility"
                        rootClassName="includes-root-class-name"
                      ></Includes>
                      <Includes
                        label="Contact form integration"
                        rootClassName="includes-root-class-name"
                      ></Includes>
                      <Includes
                        label="Basic SEO optimization"
                        rootClassName="includes-root-class-name"
                      ></Includes>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-plan1">
                <div className="home-details1">
                  <div className="home-header06">
                    <label className="home-name1">Professional</label>
                    <div className="home-pricing2">
                      <h1 className="home-price1">$299</h1>
                      <span className="home-duration1">/mo</span>
                    </div>
                  </div>
                  <p className="home-description2">
                    Ideal for emerging entrepreneurs and businesses
                  </p>
                </div>
                <div className="home-buy-details1">
                  <div className="home-buy1 button">
                    <span className="home-text19">
                      <span>Start Professional</span>
                      <br></br>
                    </span>
                  </div>
                  <div className="home-features2">
                    <span className="home-heading12">You will get</span>
                    <div className="home-list1">
                      <Includes
                        rootClassName="includes-root-class-name"
                        label="Customized website design with up to 5 pages"
                      ></Includes>
                      <Includes
                        rootClassName="includes-root-class-name"
                        label="Contact form integration with basic lead capture functionality"
                      ></Includes>
                      <Includes
                        rootClassName="includes-root-class-name"
                        label="Responsive design for mobile and tablet compatibility"
                      ></Includes>
                      <Includes
                        rootClassName="includes-root-class-name"
                        label="Basic SEO optimization"
                      ></Includes>
                      <Includes
                        rootClassName="includes-root-class-name"
                        label="2 rounds of revisions"
                      ></Includes>
                      <Includes
                        rootClassName="includes-root-class-name"
                        label="Demo Trading Course"
                      ></Includes>
                      <Excludes
                        rootClassName="excludes-root-class-name"
                        label="Trading Calls"
                      ></Excludes>
                      <Excludes
                        rootClassName="excludes-root-class-name18"
                        label="Altcoins Analysis"
                      ></Excludes>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-plan2">
                <div className="home-details2">
                  <div className="home-header07">
                    <label className="home-name2">Enterprise</label>
                    <div className="home-pricing3">
                      <span className="home-price2">$499</span>
                      <span className="home-duration2">/mo</span>
                    </div>
                  </div>
                  <p className="home-description3">
                    Comprehensive solutions tailored to meet your diverse
                    requirements
                  </p>
                </div>
                <div className="home-buy-details2">
                  <div className="home-buy2 button">
                    <span className="home-text22">
                      <span>Start Enterprise</span>
                      <br></br>
                    </span>
                  </div>
                  <div className="home-features3">
                    <span className="home-heading13">You will get</span>
                    <div className="home-list2">
                      <Includes
                        rootClassName="includes-root-class-name"
                        label="Customized website design with up to 10 pages"
                      ></Includes>
                      <Includes
                        rootClassName="includes-root-class-name"
                        label="Responsive design with advanced mobile optimization"
                      ></Includes>
                      <Includes
                        rootClassName="includes-root-class-name"
                        label="Contact form integration with CRM integration"
                      ></Includes>
                      <Includes
                        rootClassName="includes-root-class-name"
                        label="Basic SEO optimization"
                      ></Includes>
                      <Includes
                        rootClassName="includes-root-class-name"
                        label="3 rounds of revisions"
                      ></Includes>
                      <Includes
                        rootClassName="includes-root-class-name"
                        label="Demo Trading Course"
                      ></Includes>
                      <Includes
                        rootClassName="includes-root-class-name"
                        label="Trading Calls One Week Trial"
                      ></Includes>
                      <Includes
                        rootClassName="includes-root-class-name"
                        label="Crypto Altcoins Analysis"
                      ></Includes>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </main>
        <div className="home-help">
          <span className="home-text25">
            <span>Need any help?</span>
            <br></br>
          </span>
          <div className="home-contact-support">
            <p className="home-text28">Contact support -&gt;</p>
          </div>
        </div>
      </section>
      <section className="home-section13">
        <header className="home-header08">
          <span className="section-head">about us</span>
          <h2 className="home-heading14 section-heading">Our Subsidiaries</h2>
        </header>
        <main className="home-cards">
          <Article
            button="Redirect -&gt;"
            header="Vanhel Capital"
            description="Our private venture capital, investing in cryptocurrencies and web3 technologies"
            rootClassName="article-root-class-name"
          ></Article>
          <Article
            button="Redirect -&gt;"
            header="ASMO LAB"
            description="Our private research organization, focusing on AI, blockchain, and cyber security"
            specialHeader="eu"
            rootClassName="article-root-class-name"
          ></Article>
          <Article
            button="Redirect -&gt;"
            header="LESSER KEY"
            description="Our creative works publisher, creating AI artworks, webnovels, and visual graphics"
            rootClassName="article-root-class-name"
          ></Article>
        </main>
      </section>
      <section className="home-section15">
        <header className="home-header09">
          <span className="section-head">FAQ</span>
          <h2 className="home-heading15 section-heading">
            Frequently asked questions
          </h2>
        </header>
        <main className="home-accordion">
          <FAQ rootClassName="faq-root-class-name"></FAQ>
        </main>
      </section>
      <section className="home-section17">
        <main className="home-content5">
          <header className="home-header10">
            <h2 className="home-heading16 section-heading">
              <span>Keep In Touch To The Latest Information With Our APP!</span>
              <br></br>
            </h2>
            <div className="home-buttons1">
              <div className="home-ios button">
                <img
                  alt="image"
                  src="/Icons/apple-600h.png"
                  className="home-icon"
                />
                <span className="home-text31">Download for iOS</span>
              </div>
              <div className="home-android button">
                <img
                  alt="image"
                  src="/Icons/android-600h.png"
                  className="home-icon1"
                />
                <span className="home-text32">Download for Android</span>
              </div>
            </div>
          </header>
          <img
            alt="pastedImage"
            src="/external/pastedimage-88dk-500w.png"
            className="home-pasted-image1"
          />
        </main>
      </section>
      <footer className="home-footer">
        <div className="home-content6">
          <main className="home-main-content">
            <div className="home-content7">
              <header className="home-main5">
                <div className="home-header11">
                  <img
                    alt="image"
                    src="/Branding/a-500h.png"
                    className="home-image16"
                  />
                  <span className="home-text33">
                    Cras es noster. Carpe vinum. Sequere pecuniam.
                  </span>
                </div>
                <div className="home-socials">
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link06"
                  >
                    <img
                      alt="image"
                      src="/Icons/linkedin-200h.png"
                      className="social"
                    />
                  </a>
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link07"
                  >
                    <img
                      alt="image"
                      src="/Icons/instagram-200h.png"
                      className="social"
                    />
                  </a>
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link08"
                  >
                    <img
                      alt="image"
                      src="/Icons/twitter-200h.png"
                      className="social"
                    />
                  </a>
                </div>
              </header>
              <header className="home-categories">
                <div className="home-category">
                  <div className="home-header12">
                    <span className="footer-header">Solutions</span>
                  </div>
                  <div className="home-links">
                    <span className="footer-link">Responsive Web Design</span>
                    <span className="footer-link">Responsive Prototypes</span>
                    <span className="footer-link">Design to Code</span>
                    <span className="footer-link">Static Website Builder</span>
                    <span className="footer-link">
                      Static Website Generator
                    </span>
                  </div>
                </div>
                <div className="home-category1">
                  <div className="home-header13">
                    <span className="footer-header">Company</span>
                  </div>
                  <div className="home-links1">
                    <span className="footer-link">About</span>
                    <span className="footer-link">Team</span>
                    <span className="footer-link">News</span>
                    <span className="footer-link">Partners</span>
                    <span className="footer-link">Careers</span>
                    <span className="footer-link">Press &amp; Media</span>
                  </div>
                </div>
              </header>
            </div>
            <section className="home-copyright">
              <span className="home-text47">
                © 2024 Apollyon Group. All Rights Reserved.
              </span>
            </section>
          </main>
          <main className="home-subscribe">
            <main className="home-main6">
              <h1 className="home-heading17">Subscribe to our newsletter</h1>
              <div className="home-input-field">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="home-textinput input"
                />
                <a
                  href="mailto:jovanmarvell@gmail.com?subject=Apollyon Group"
                  className="home-link09"
                >
                  <div className="home-buy3 button">
                    <span className="home-text48">-&gt;</span>
                    <span className="home-text49">
                      <span>Subscribe now</span>
                      <br></br>
                    </span>
                  </div>
                </a>
              </div>
            </main>
            <h1 className="home-notice">
              By subscribing to our newsletter you agree with our Terms and
              Conditions.
            </h1>
          </main>
          <section className="home-copyright1">
            <span className="home-text52">
              © 2024 Apollyon Group. All Rights Reserved.
            </span>
          </section>
        </div>
      </footer>
      <div>
        <div className="home-container17">
          <Script
            html={`<script>
    /*
Accordion - Code Embed
*/

/* listenForUrlChangesAccordion() makes sure that if you changes pages inside your app,
the Accordions will still work*/

const listenForUrlChangesAccordion = () => {
      let url = location.href;
      document.body.addEventListener(
        "click",
        () => {
          requestAnimationFrame(() => {
            if (url !== location.href) {
              runAccordionCodeEmbed();
              url = location.href;
            }
          });
        },
        true
      );
    };


const runAccordionCodeEmbed = () => {
    const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
    const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
    const accordionIcons = document.querySelectorAll('[data-role="accordion-icon"]'); // All accordion icons

    accordionContents.forEach((accordionContent) => {
        accordionContent.style.display = "none"; //Hides all accordion contents
    });

    accordionContainers.forEach((accordionContainer, index) => {
        accordionContainer.addEventListener("click", () => {
            accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
            });

            accordionIcons.forEach((accordionIcon) => {
                accordionIcon.style.transform = "rotate(0deg)"; // Resets all icon transforms to 0deg (default)
            });

            accordionContents[index].style.display = "flex"; // Shows accordion content
            accordionIcons[index].style.transform = "rotate(180deg)"; // Rotates accordion icon 180deg
        });
    });
}

runAccordionCodeEmbed()
listenForUrlChangesAccordion()

/*
Here's what the above is doing:
    1. Selects all accordion containers, contents, and icons
    2. Hides all accordion contents
    3. Adds an event listener to each accordion container
    4. When an accordion container is clicked, it:
        - Hides all accordion contents
        - Resets all icon transforms to 0deg (default)
        - Checks if this container has class "accordion-open"
            - If it does, it removes class "accordion-open"
            - If it doesn't, it:
                - Removes class "accordion-open" from all containers
                - Adds class "accordion-open" to this container
                - Shows accordion content
                - Rotates accordion icon 180deg
*/
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Home
