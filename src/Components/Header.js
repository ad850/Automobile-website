import React from 'react';
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import { selectCars } from '../redux/carSlice';
import { useSelector } from 'react-redux';
import ReactLogo from "../images/logo.svg"

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars)
    return (
        <Container>
            <a>
                <img src={ReactLogo} alt="google" />
            </a>

            <Menu>
                {cars.map((car, index) => (
                    <a href="#" key={index}>{car}</a>
                ))}
            </Menu>
            <RightMenu>
                <a href="">Shop</a>
                <a href="">Account</a>
                <CustomMenu onClick={() => { setBurgerStatus(true) }} />
            </RightMenu>

            <BurgerNav show={burgerStatus} >
                <CustomeClose><IconButton onClick={() => { setBurgerStatus(false) }}> <CloseIcon /></IconButton> </CustomeClose>
                {cars.map((car, index) => (
                    <li key={index}><a href="#" >{car}</a></li>
                ))}
                <li><a href="#"> Existing Inventory</a></li>
                <li><a href="#"> Used Inventory</a></li>
                <li><a href="#"> Trade -In</a></li>
                <li><a href="#"> Cyber Truck</a></li>
                <li><a href="#">Charging</a></li>
            </BurgerNav>
        </Container>
    )
}
export default Header
const Container = styled.div`

min-height:60px;
position:fixed;
display: flex;
align-items: center;
justify-content: space-between;
padding:0 20px;
top:0;
left:0;
right:0;

Z-index:1;

`
const Menu = styled.div`

display:flex;
align-items:center;
justify-content:center;
flex:1;
a{
    font-weight:600;
    text-decoration:uppercase;
    padding:0 10px;
    flex-wrap:nowrap;

}
@media(max-width:768px){

    display:none;
}

`
const RightMenu = styled.div`
display:flex;
justify-content:center;
align-items:center;
a{
    font-weight:600;
    text-decoration:uppercase;
    margin-right:15px;
}
`
const CustomMenu = styled(MenuIcon)`
cursor:pointer;
`
const BurgerNav = styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
background: white;
width:300px;
Z-index:16;
list-style:none;
padding:20px;
display: flex;
flex-direction:column;
justify-content: flex-start;
transform: ${props => props.show ? 'translateX(0%)' : 'translateX(100%)'};

transition: transform 0.2s ease-in;

li{

    padding: 15px 0;
    border-bottom: 1px solid rgba(0,0,0,.2);

a{

    font-weight: 600;
}
}
`

const CustomeClose = styled.div`

display:flex;
justify-content:flex-end;

`
