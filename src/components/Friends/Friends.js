import React from 'react';
import css from './Friends.module.css'

const Friends = ({friends}) => {
  return (
    <ul class={css.friendList}>
      {friends.map(item => 
      <li class={css.item}>
        <span class={ item.isOnline ? css.statusOnline : css.statusOffline}></span>
        <img class={css.avatar} src={item.avatar} alt="" width="48" />
        <h1 class={css.name}>{item.name}</h1>
      </li>
      )}
    </ul>
  )
}

export default Friends;