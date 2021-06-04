import './List.scss';
import API from '../API/API';
import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid';
import ListItem from '../ListItem/ListItem';

export default function List(props) {
  const [list, setList] = useState([]);
  const timestampRef = useRef();
  useEffect(() => {
    const fetchList = async () => {
      const timestamp = Date.now();
      timestampRef.current = timestamp;
      const url = `${process.env.REACT_APP_NEWS_URL}/data/users.json`;
      const list = await API.dataRequest(url);
      console.log('Данные получены');
      if (timestampRef.current === timestamp) {
        setList(list);
      }
    }
    fetchList();
    const timeoutId = setTimeout(fetchList, 5000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="list">
      {list.map(item => <List key={nanoid()} />)}
    </div>
  )
}

List.propTypes = {

}