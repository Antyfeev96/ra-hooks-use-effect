import React from 'react'
import PropTypes from 'prop-types'

export default function Details(props) {
  console.log(props);
  // const { city, company, position } = props.details;
  return (
    <div className="details">
      <img src={props.avatar} alt="User" />
      <div className="details__name">{props.name}</div>
      <div className="details__city">{props.details.city}</div>
      <div className="details__company">{props.details.company}</div>
      <div className="details__position">{props.details.position}</div>
    </div>
  )
}

Details.propTypes = {

}