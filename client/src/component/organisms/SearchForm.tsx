import React from 'react';
import styled from 'styled-components';
import Button from '../atoms/Button';

const SearchWrapper = styled.form`
    box-sizing: border-box;
`;
const Input = styled.input`
    border: 0px;
    background-color: white;
    margin-right: 0.5rem;
    padding: 1rem;
    font-size: 18px;
    border-radius: 10px;
    vertical-align: middle;
`;

const SearchForm = ({ searchValue, onChange, onSubmit }) => {
    return (
        <SearchWrapper onSubmit={onSubmit}>
            <Input placeholder={'영화,TV 를 검색하세요'} value={searchValue} onChange={onChange} />
            <Button text={'검색'} />
        </SearchWrapper>
    );
};

export default SearchForm;
