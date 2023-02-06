import { useState } from "react";

export default function useJoke() {
  const [joke, setJoke] = useState(null);
  const [goodJokes, setGoodJokes] = useState([]);
  const [badJokes, setBadJokes] = useState([]);

  const handleVote = (event) => {
    console.log(event.target);
    if (event.target.textContent === "Good Joke 👍") {
      setGoodJokes([...goodJokes, joke]);
    } else {
      setBadJokes([...badJokes, joke]);
    }

    // Clear the joke
    setJoke();
  };

  return { joke, setJoke, goodJokes, badJokes, handleVote };
}
