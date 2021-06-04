import './List.scss';
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import ListItem from '../ListItem/ListItem';

export default function List(props) {
  useEffect(() => {

  }, []);
  return (
    <div className="list">
      <ListItem />
      <ListItem />
      <ListItem />
    </div>
  )
}

List.propTypes = {

}