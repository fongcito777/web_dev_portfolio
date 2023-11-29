import React, { useState } from 'react';
import moviesData from './data';

const App = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [comments, setComments] = useState([]);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleLikeDislike = (action) => {
    console.log(`Movie ${selectedMovie.name} ${action}d`);
  };

  const handleCommentSubmit = (name, comment) => {
    const newComment = { name, comment };
    setComments([...comments, newComment]);
  };

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {moviesData.map((movie) => (
          <div
            key={movie.name}
            style={{
              border: '1px solid #ddd',
              padding: '10px',
              margin: '10px',
              width: '200px',
              textAlign: 'center',
              position: 'relative',
            }}
            onClick={() => handleMovieClick(movie)}
            onMouseEnter={() => handleMovieHover(movie)}
            onMouseLeave={() => handleMovieLeave()}
          >
            <img
              src={movie.poster}
              alt={movie.name}
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <h3>{movie.name}</h3>
            <p>{movie.year}</p>
            <button onClick={() => handleLikeDislike('like')}>Like</button>
            <button onClick={() => handleLikeDislike('dislike')}>Dislike</button>
            <button onClick={() => handleMoreClick(movie)}>More...</button>
          </div>
        ))}
      </div>

      {selectedMovie && (
        <div>
          <h2>Details for {selectedMovie.name}</h2>
          <img
            src={selectedMovie.mainCharacter.affiliation === 'good' ? '/images/blue-logo.png' : '/images/red-logo.png'}
            alt={selectedMovie.mainCharacter.affiliation}
            style={{ width: '50px', height: '50px' }}
          />
          <p>Main Character: {selectedMovie.mainCharacter.name}</p>
          <p>Bio: {selectedMovie.mainCharacter.bio}</p>
          <h3>Comments:</h3>
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>
                <strong>{comment.name}:</strong> {comment.comment}
              </li>
            ))}
          </ul>
          <h3>Add a Comment:</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleCommentSubmit(e.target.elements.name.value, e.target.elements.comment.value);
            }}
          >
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="comment">Comment:</label>
            <textarea id="comment" name="comment" required></textarea>
            <button type="submit">Submit Comment</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default App;
