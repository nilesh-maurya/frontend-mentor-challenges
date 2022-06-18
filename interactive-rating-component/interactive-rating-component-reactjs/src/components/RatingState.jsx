import { useState } from "react";
import styled from "styled-components";

import star from "../../images/icon-star.svg";

const RoundBtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
`;

const RoundBtn = styled.div`
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--dark-blue-1);
  color: var(--medium-grey);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--orange);
    color: var(--white);
  }

  &.active {
    background-color: var(--medium-grey);
    color: var(--white);
  }
`;

const SubmitBtn = styled.button`
  display: block;
  padding: 15px 10px;
  width: 100%;
  border: none;
  border-radius: 20px;
  font-weight: 700;
  letter-spacing: 2px;
  background-color: var(--orange);
  color: var(--white);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: var(--orange);
    background-color: var(--white);
  }
`;

export default function RatingState(props) {
  const [rating, setRating] = useState();

  return (
    /* Rating state */
    <div>
      <RoundBtn>
        <img src={star} alt="icon-star" />
      </RoundBtn>
      <h2>How did we do?</h2>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <RoundBtnWrapper>
        <RoundBtn
          as="button"
          className={rating >= 1 ? "active" : ""}
          onClick={(e) => setRating(parseInt(e.target.textContent))}
        >
          1
        </RoundBtn>
        <RoundBtn
          as="button"
          className={rating >= 2 ? "active" : ""}
          onClick={(e) => setRating(parseInt(e.target.textContent))}
        >
          2
        </RoundBtn>
        <RoundBtn
          as="button"
          className={rating >= 3 ? "active" : ""}
          onClick={(e) => setRating(parseInt(e.target.textContent))}
        >
          3
        </RoundBtn>
        <RoundBtn
          as="button"
          className={rating >= 4 ? "active" : ""}
          onClick={(e) => setRating(parseInt(e.target.textContent))}
        >
          4
        </RoundBtn>
        <RoundBtn
          as="button"
          className={rating >= 5 ? "active" : ""}
          onClick={(e) => setRating(parseInt(e.target.textContent))}
        >
          5
        </RoundBtn>
      </RoundBtnWrapper>
      <SubmitBtn onClick={() => props.setState({ hasRating: true, rating })}>
        SUBMIT
      </SubmitBtn>
    </div>
  );
}
