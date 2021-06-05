import './ListItem.scss';
import React from 'react'
import PropTypes from 'prop-types'

export default function ListItem(props) {
  const info = {
    id: props.id,
    name: props.name
  }
  return (
    <div className="list__item" onClick={() => props.changeUser(info)}>{props.name}</div>
  )
}

ListItem.propTypes = {

}

