import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';
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
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  animation: ${ResultFadeIn} 0.5s 1.4s forwards;
`;

const ErrorIcon = styled.span`
  display: block;
  text-align: center;
  color: #031027;
  font-size: 40px;
  margin-right: 10px;
`;

const ErrorText = styled.span`
  color: #031027;
  font-size: 17px;
`;

const Error = () => {
  return (
    <ErrorWrapper>
      <ErrorIcon>
        <FontAwesomeIcon icon={faFrown} />
      </ErrorIcon>
      <ErrorText>Could not find the specified city. Try a city nearby</ErrorText>
    </ErrorWrapper>
  );
};

export default Error;
