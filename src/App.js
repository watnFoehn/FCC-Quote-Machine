import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  width: 50%;
  height: 50%;
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #7fd485;
`;

const TextWrapper = styled.div`
  padding: 5px;
`;

const AuthorWrapper = styled.div`
  padding: 5px;
`;

const Button = styled.button`
  padding: 5px;
`;

const Tweet = styled.a`
  padding: 5px;
`;

const quotes = [
  {
    quote:
      "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
    author: "Robert Frost"
  },
  {
    quote: "You must be the change you wish to see in the world.",
    author: "Mahatma Gandhi"
  },
  {
    quote:
      "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama"
  }
];

function App() {
  const createRandomNumber = () => {
    return Math.floor(Math.random() * Math.floor(3));
  };

  const [randomNumber, setRandomNumber] = useState(createRandomNumber());
  const [quote, setQuote] = useState(quotes[randomNumber].quote);
  const [author, setAuthor] = useState(quotes[randomNumber].author);

  const handleClick = () => {
    setRandomNumber(createRandomNumber());
    setQuote(quotes[randomNumber].quote);
    setAuthor(quotes[randomNumber].author);
  };

  return (
    <Wrapper id="quote-box">
      <TextWrapper id="text">{quote}</TextWrapper>
      <AuthorWrapper id="author">{author}</AuthorWrapper>
      <Button id="new-quote" onClick={() => handleClick()}>
        New quote please.
      </Button>
      <Tweet href="twitter.com/intent/tweet" target="_blank" id="tweet-quote">
        Tweet quote.
      </Tweet>
    </Wrapper>
  );
}

export default App;
