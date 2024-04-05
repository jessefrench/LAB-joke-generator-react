import { useState } from 'react';
import { Button } from 'react-bootstrap';
import getJoke from '../api/jokeData';
import Joke from '../components/Joke';

export default function Home() {
  const [joke, setJoke] = useState({});
  const [btnText, setBtnText] = useState('Get a joke');

  const setButton = (text) => {
    setBtnText(text);
  };

  const getAJoke = () => {
    getJoke().then((obj) => {
      setJoke({
        setup: obj.setup,
        delivery: obj.delivery,
      });
      setButton('Get punchline');
    });
  };

  return (
    <>
      <Joke joke={joke} btnText={btnText} />
      {btnText === 'Get a joke' || btnText === 'Get a new joke' ? (
        <Button type="button" onClick={getAJoke}>{btnText}</Button>
      ) : (
        <Button type="button" onClick={() => setButton('Get a new joke')}>{btnText}</Button>
      )}
    </>
  );
}
