import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGreetingsFromAPI } from '../redux/Greetings/greetings';

const Greetings = () => {
  const selected = useSelector((state) => state.greetings);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getGreetingsFromAPI());
  };

  return (
    <>
      Greeting:
      {selected}
      <button type="button" id="get_greetings" onClick={handleClick}>
        Get a Greeting
      </button>
    </>
  );
};

export default Greetings;
