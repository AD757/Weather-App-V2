import React from 'react';
import styled from 'styled-components';
import ResultFadeIn from './Result/ResultFadeIn';

const ErrorWrapper = styled.div`
  max-width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px auto 0;
  padding: 20px;
  opacity: 0;
  visibility: hidden;
  position: relative;
  border-radius: 10px;
  top: 20px;
  background-color: rgba(205, 8, 32, 0.9);
  border-radius: 10px;
  animation: ${ResultFadeIn} 0.5s 1.4s forwards;
`;

const ErrorText = styled.span`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;

const Error = () => {
  return (
    <ErrorWrapper>
      <ErrorText>Could not find the specified city. Try a city nearby</ErrorText>
    </ErrorWrapper>
  );
};

export default Error;
