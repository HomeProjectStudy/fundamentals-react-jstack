import React from 'react';
import PropTypes from 'prop-types';
import { PostHeader } from './PostHeader';
import { Container, Rate, Subtitle } from './styled';
export function Post(props) {
  return (
    <Container removed={props.post.removed}>
      <PostHeader
        onRemove={props.onRemove}
        post={{
          id: props.post.id,
          title: props.post.title,
          read: props.post.read
        }}
      />
      <Subtitle>{props.post.subtitle}</Subtitle>
      <Rate>

        Likes: {props.post.likes / 2}
      </Rate>
    </Container>
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