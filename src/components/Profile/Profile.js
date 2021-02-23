import React from 'react';
import css from './Profile.module.css'

const Profile = ({name, tag, location, avatar, folowers, view, likes}) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img
          src={avatar}
          alt="Аватар пользователя"
          className={css.avatar}
          width="100"
        />
        <h1 className={css.name}>{name}</h1>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className = {css.stats} >
        <li className = {css.item}>
          <span className={css.label}>Followers: </span>
          <span className={css.quantity}>{folowers}</span>
        </li>
        <li className = {css.item}>
          <span className={css.label}>Views: </span>
          <span className={css.quantity}>{view}</span>
        </li>
        <li className = {css.item}>
          <span className={css.label}>Likes: </span>
          <span className={css.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  )
}

export default Profile;