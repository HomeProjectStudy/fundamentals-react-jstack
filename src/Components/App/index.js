import React, { useState } from 'react';
import { ThemeProvider } from '../../context/ThemeContext';
import { Post } from '../Post';
import { Header } from '../Header'
import styles from './App.scss'

function App() {
  const [posts, setPosts] = useState([
    { id: Math.random(),title: 'Title01', subtitle: 'Sub01', likes: 10, read: true, removed: false },
    { id: Math.random(),title: 'Title02', subtitle: 'Sub02', likes: 20, read: false, removed: true },
    { id: Math.random(),title: 'Title03', subtitle: 'Sub03', likes: 20, read: false, removed: false },
  ]);


  function handleRefresh() {
    setPosts((prevState) => [ ...prevState, {
        id: Math.random(),
        title: 'Title04', 
        subtitle: 'Sub04', 
        likes: 5
      }
    ]);
  };

  function handleRemovePost(postId) {
    setPosts((prevState) => prevState.map((post) => post.id === postId ? {
      ...post,
      removed: true
    } : post))
  };

  return (
    <ThemeProvider>
      <Header title="G.J!">
        <h2 className={styles.title}>Destaques da semana</h2>
        <button onClick={handleRefresh}>Atualizar</button>
      </Header>
      <hr />

      {
        posts.map(post => (
          <Post
            key={post.id}
            onRemove={handleRemovePost}
            post={post}
          />
        ))
      }
    </ThemeProvider>
  )
}

export default App;