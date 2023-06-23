import React from 'react';
import PropTypes from 'prop-types';
import { PostHeader } from './PostHeader';
import styles from './Post.scss'
export function Post(props) {
  return (
    <article 
      className={
        props.post.removed ? styles.postDeteled : styles.post
      }
    >
      <PostHeader 
        onRemove={props.onRemove} 
        post={{
          id: props.post.id,
          title: props.post.title,
          read: props.post.read
        }}
      />
      <br />
      <small>{props.post.subtitle}</small>
      <br />
      Likes: {props.post.likes / 2}
    </article>
  )
}



Post.PropTypes = {
  id: PropTypes.number.isRequired,
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired,
    removed: PropTypes.bool.isRequired
  }).isRequired,
}