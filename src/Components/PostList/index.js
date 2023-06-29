import React from 'react';

import { Container } from './styles';
import Post from './Post';

import list from './list';

export default class PostsList extends React.Component {
  render() {
    return (
      <Container>
        {list.map((post) => (
          <Post
            key={post.id}
            title={post.title}
            description={post.description}
          />
        ))}
      </Container>
    );
  }
}
