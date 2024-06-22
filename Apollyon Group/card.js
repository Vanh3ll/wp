import React from 'react'

import PropTypes from 'prop-types'

import './card.css'

const Card = (props) => {
  return (
    <section className={`card-card ${props.rootClassName} `}>
      <div className="card-icon"></div>
      <main className="card-content">
        <h1 className="card-header">{props.header}</h1>
        <p className="card-description">{props.description}</p>
      </main>
    </section>
  )
}

Card.defaultProps = {
  description:
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium',
  rootClassName: '',
  icon: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  iconAlt: 'image',
  header: 'Vanhel Capital',
}

Card.propTypes = {
  description: PropTypes.string,
  rootClassName: PropTypes.string,
  icon: PropTypes.string,
  iconAlt: PropTypes.string,
  header: PropTypes.string,
}

export default Card
