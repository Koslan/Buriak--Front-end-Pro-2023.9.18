import { useState } from 'react';
import './App.css';

const SmileCard = ({ smiley, count, onVote }) => (
  <div className="smileCard">
    <span role="img" aria-label="smiley">{smiley}</span>
    <span>{`Votes: ${count}`}</span>
    <button onClick={onVote}>Vote</button>
  </div>
);

function App() {
  const [smileys, setSmileys] = useState([
    { emoji: '😀', votes: 0 },
    { emoji: '😅', votes: 0 },
    { emoji: '😂', votes: 0 },
    { emoji: '🤣', votes: 0 },
  ]);

  const voteSmiley = (index) => {
    const newSmileys = [...smileys];
    newSmileys[index].votes++;
    setSmileys(newSmileys);
  };

  const showResults = () => {
    const winner = smileys.reduce((max, curr) => (curr.votes > max.votes ? curr : max), smileys[0]);
    alert(`The winning smiley is ${winner.emoji} with ${winner.votes} votes.`);
  };

  return (
    <div className="App">
      <h1>Голосування за найкращий смайлик</h1>
      <div className="smileys">
        {smileys.map((smiley, index) => (
          <SmileCard
            key={index}
            smiley={smiley.emoji}
            count={smiley.votes}
            onVote={() => voteSmiley(index)}
          />
        ))}
      </div>
      <button onClick={showResults}>Show Results</button>
    </div>
  );
}

export default App;
