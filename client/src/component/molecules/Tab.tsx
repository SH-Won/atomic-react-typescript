import React from 'react';
import styled from 'styled-components';
// import Link from '../atoms/Link'
import { Link } from 'react-router-dom';

const TabBox = styled.ul`
    margin: 0;
    padding: 1rem;
    list-style: none;
    display: flex;
    justify-content: space-around;
`;
interface itemProps {
    to: string;
    name: string;
}
const Tab = ({ items }) => {
    return (
        <TabBox>
            {items.map((item: itemProps) => (
                <Link key={item.name} to={item.to}>
                    {item.name}
                </Link>
            ))}
        </TabBox>
    );
};

export default Tab;
