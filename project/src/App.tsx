import React from 'react';
import { Header } from './components/Header';
import { Post } from './components/Post';
import { posts } from './data/posts';

function App() {
  return (
    <div className="max-w-lg mx-auto bg-white min-h-screen">
      <Header />
      <div className="pb-16">
        {posts.map((post, index) => (
          <Post key={index} {...post} />
        ))}
      </div>
    </div>
  );
}

export default App;