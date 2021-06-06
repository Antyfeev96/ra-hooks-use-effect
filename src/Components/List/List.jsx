import './List.scss';
import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid';
import ListItem from '../ListItem/ListItem';

export default function List(props) {
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(null);
  const [list, setList] = useState([]);
  const timestampRef = useRef();

  useEffect(() => {
    const fetchList = async () => {
      const timestamp = Date.now();
      timestampRef.current = timestamp;
      setLoading(true);
      try {
        const response = await fetch(`${process.env.REACT_APP_NEWS_URL}/users.json`);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        if (timestampRef.current === timestamp) {
          const result = await response.json();
          console.log('List получен');
          setList(result);
        }
        setError(null);
      } catch (e) {
        setError(e)
      } finally {
        setLoading(false);
      }
      // setTimeout(async () => await fetchList(), 3000)
    }
    fetchList();
    // const timeoutId = setTimeout(async () => await fetchList(), 3000);
    // return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="list">
      {list.map(item => <ListItem key={nanoid()} changeUser={props.changeUser} {...item} />)}
    </div>
  )
}

List.propTypes = {

}