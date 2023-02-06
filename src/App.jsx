import JokeSelector from "./components/dadJokeSelector";
import JokeButton from "./components/jokeButton";
import JokeList from "./components/jokeList";
import Punchline from "./components/punchline";
import useJoke from "./hooks/useJoke";

function App() {
  const { joke, setJoke, goodJokes, badJokes, handleVote } = useJoke();
  return (
    <div className="flex flex-col items-center">
      <JokeButton setJoke={setJoke} />
      <Punchline setup={joke?.setup} punchline={joke?.punchline} />
      <div className="flex flex-row">
        <JokeSelector
          className="mt-4"
          goodOrBadJoke={handleVote}
          text={"Good Joke 👍"}
        />
        <JokeSelector
          className="mt-4"
          goodOrBadJoke={handleVote}
          text={"Bad Joke 👎"}
        />
      </div>
      <JokeList goodJoke={goodJokes} badJoke={badJokes} />
    </div>
  );
}

export default App;
