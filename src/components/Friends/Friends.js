import React from 'react';
import css from './Friends.module.css'

const Friends = ({friends}) => {
  return (
    <ul className={css.friendList}>
      {friends.map(item => 
      <li className={css.item} key={item.id}>
        <span className={ item.isOnline ? css.statusOnline : css.statusOffline}></span>
        <img className={css.avatar} src={item.avatar} alt="" width="48" />
        <h1 className={css.name}>{item.name}</h1>
      </li>
      )}
    </ul>
  )
}

export default Friends;