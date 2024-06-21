import React from 'react'

import PropTypes from 'prop-types'

import './faq.css'

const FAQ = (props) => {
  return (
    <div className={`faq-accordion ${props.rootClassName} `}>
      <div
        data-role="accordion-container"
        className="faq-element accordion-element"
      >
        <div className="faq-details">
          <span className="faq-text">{props.text}</span>
          <span data-role="accordion-content" className="faq-text01">
            Apollyon Group is a diversified conglomerate serving as the parent
            company to a range of subsidiaries operating in various industries,
            including technology, finance, and creative arts.
          </span>
        </div>
        <div data-role="accordion-icon" className="">
          <svg viewBox="0 0 1024 1024" className="faq-icon">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
      <div
        data-role="accordion-container"
        className="faq-element1 accordion-element"
      >
        <div className="faq-details1">
          <span className="faq-text02">
            What industries does Apollyon Group operate in?
          </span>
          <span data-role="accordion-content" className="faq-text03">
            Apollyon Group has investments and subsidiaries in sectors such as
            technology, finance, venture capital, creative arts, and more.
          </span>
        </div>
        <div data-role="accordion-icon" className="">
          <svg viewBox="0 0 1024 1024" className="faq-icon02">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
      <div
        data-role="accordion-container"
        className="faq-element2 accordion-element"
      >
        <div className="faq-details2">
          <span className="faq-text04">{props.text1}</span>
          <span data-role="accordion-content" className="faq-text05">
            {props.text2}
          </span>
        </div>
        <div data-role="accordion-icon" className="">
          <svg viewBox="0 0 1024 1024" className="faq-icon04">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
      <div
        data-role="accordion-container"
        className="faq-element3 accordion-element"
      >
        <div className="faq-details3">
          <span className="faq-text06">{props.text3}</span>
          <span data-role="accordion-content" className="faq-text07">
            {props.text4}
          </span>
        </div>
        <div data-role="accordion-icon" className="">
          <svg viewBox="0 0 1024 1024" className="faq-icon06">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
      <div
        data-role="accordion-container"
        className="faq-element4 accordion-element"
      >
        <div className="faq-details4">
          <span className="faq-text08">{props.text5}</span>
          <span data-role="accordion-content" className="faq-text09">
            {props.text6}
          </span>
        </div>
        <div data-role="accordion-icon" className="">
          <svg viewBox="0 0 1024 1024" className="faq-icon08">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
      <div
        data-role="accordion-container"
        className="faq-element5 accordion-element"
      >
        <div className="faq-details5">
          <span className="faq-text10">{props.text7}</span>
          <span data-role="accordion-content" className="faq-text11">
            {props.text8}
          </span>
        </div>
        <div data-role="accordion-icon" className="">
          <svg viewBox="0 0 1024 1024" className="faq-icon10">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

FAQ.defaultProps = {
  text8:
    'Apollyon Group continually assesses opportunities for diversification and expansion into new industries that align with its strategic objectives and long-term vision for growth and success.',
  text7:
    'Does Apollyon Group have plans for diversification or expansion into new industries?',
  text4:
    'Apollyon Group is currently not seeking outside capital or investment. It operates using internal funding and may selectively consider external partnerships that align with its vision and objectives.',
  text5: 'How does Apollyon Group operate as a private company?',
  text2:
    "Apollyon Group's subsidiaries include Lesser Key (focused on art and literature), Asmo Laboratory (specializing in AI, blockchain, and cybersecurity research), and Vanhel Capital (a private venture capital firm focusing on crypto assets).",
  text: 'What is Apollyon Group?',
  text6:
    'As a privately held company, Apollyon Group is not publicly traded on stock exchanges. It is owned and operated by its founders and/or a group of private investors.',
  text1: 'What subsidiaries does Apollyon Group own?',
  text3: 'Is Apollyon Group open to external investment or partnerships?',
  rootClassName: '',
}

FAQ.propTypes = {
  text8: PropTypes.string,
  text7: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
  text2: PropTypes.string,
  text: PropTypes.string,
  text6: PropTypes.string,
  text1: PropTypes.string,
  text3: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default FAQ
