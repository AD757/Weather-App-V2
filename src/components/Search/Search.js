import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import device from '../../Responsive/Device';

const SearchBar = styled.form`
  top: ${({ result }) => (result ? '0%' : '30%')};
  position: relative;
  margin: 0 auto;
  max-width: 500px;
  transition: 0.8s 0.5s;
  @media ${device.laptopL} {
    max-width: 600px;
  }
  @media ${device.desktop} {
    max-width: 700px;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  border: none;
  background-color: #fff;
  font-size: 16px;
  padding: 10px 15px 10px 40px;
  color: #031027;
  transition: 0.2s;
  border-radius: 20px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  &:focus {
    color: #031027;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    outline: none;
  }
  @media ${device.tablet} {
    font-size: 18px;
  }
  @media ${device.laptop} {
    padding: 15px 20px 15px 45px;
    border-radius: 30px;
  }
`;

const SearchIcon = styled.span`
  display: block;
  position: absolute;
  top: 50%;
  left: 22px;
  transform: translate(-50%, -50%);
  height: 14px;
  width: 14px;
  font-size: 14px;
  color: #1e1e1e;
  @media ${device.tablet} {
    height: 15px;
    width: 15px;
    font-size: 15px;
  }
  @media ${device.laptop} {
    height: 16px;
    width: 16px;
    font-size: 16px;
  }
`;

const Search = ({ submit, value, change, result }) => {
  return (
    <>
      <SearchBar result={result} onSubmit={submit}>
        <SearchInput type="text" value={value} placeholder="Search for a city" onChange={change} />
        <SearchIcon>
          <FontAwesomeIcon icon={faSearch} />
        </SearchIcon>
      </SearchBar>
    </>
  );
};

Search.propTypes = {
  submit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
  result: PropTypes.bool.isRequired,
};

export default Search;
