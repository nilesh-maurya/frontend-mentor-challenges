import { useState } from "react";
import styled from "styled-components";
import "./App.css";

import RatingState from "./components/RatingState";
import ThankyouState from "./components/ThankyouState";

const Wrapper = styled.div`
  max-width: 390px;
  background-color: var(--dark-blue);
  padding: 25px;
  border-radius: 20px;
`;

function App() {
  const [state, setState] = useState({ hasRating: false, rating: 0 });
  console.log("Rendering..");
  return (
    <Wrapper>
      {state.hasRating ? (
        <ThankyouState state={state} />
      ) : (
        <RatingState setState={setState} />
      )}
    </Wrapper>
  );
}

export default App;
