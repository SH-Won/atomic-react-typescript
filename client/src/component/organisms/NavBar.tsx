import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface NavItemProps {
    [key: string]: string;
}
const NavList = styled.ul`
    display: flex;
    list-style: none;
`;
const Li = styled.li`
    padding: 0.8rem;
    margin: 0.3rem;
    font-size:1.5rem;
    color: ${props => props.theme.white};
`;
const A = styled(Link)`
    color: ${props => props.theme.white};
`;

const Nav = styled.nav`
    display:flex;
    
    background-color: ${props => props.theme.darkBlue};
    height:100%;
`;

const items = [
    { to: '/movie', name: '영화' },
    { to: '/tvpro', name: 'TV프로그램' },
];
const NavBar = () => {
    return (
        <Nav>
            <NavList>
                {items.map((item: NavItemProps) => (
                    <Li key={item.to}>
                        <A to={item.to}>{item.name}</A>
                    </Li>
                ))}
            </NavList>
        </Nav>
    );
};

export default NavBar;
