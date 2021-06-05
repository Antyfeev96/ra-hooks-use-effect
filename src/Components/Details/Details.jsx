import './Details.scss';
import React from 'react'
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types'

export default function Details(props) {
  console.log(props);
  const { avatar, name } = props;
  const { city, company, position } = props.details;
  return (
    <div className="details">
      <img key={nanoid()} src={avatar} alt="User" />
      <div className="details__name">{name}</div>
      <div className="details__city">city: {city}</div>
      <div className="details__company">company: {company}</div>
      <div className="details__position">position: {position}</div>
    </div>
  )
}

Details.propTypes = {

}