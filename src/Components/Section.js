import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const Section = ({ lbutton, name, rbutton, tagline, image }) => {


    return (
        <Wrap style={{ backgroundImage: `url(${image})` }}>

            <Fade Top>
                <ItemText>
                    <h1>{name}</h1>
                    <p> {tagline}</p>
                </ItemText>

            </Fade>


            <Buttons>

                <Fade bottom>

                    <ButtonGroup>
                        <LeftButton>
                            {lbutton}
                        </LeftButton>

                        {
                            rbutton &&
                            <RightButton>
                                {rbutton}
                            </RightButton>
                        }
                    </ButtonGroup>

                </Fade>

                <DownArrow src="/images/down-arrow.svg" />
            </Buttons>

        </Wrap >
    )
}

export default Section


const Wrap = styled.div`


width:100vw;
height:100vh;
background-size:cover;
background-position:center;
background-repeat:no-repeat;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items: center;


`


const ItemText = styled.div`

padding-top:15vh;
text-align: center;

`
const ButtonGroup = styled.div`

display: flex;
margin-bottom:30px;

@media(max-width:768px){

flex-direction:column;
}
`
const LeftButton = styled.div`

background-color: rgba(23,26,32,0.8);
height:40px;
width:256px;
color:white;
display:flex;
justify-content: center;
align-items: center;
border-radius: 100px;
opacity: 0.85;
text-transform: uppercase;
font-size:12px;
cursor: pointer;
margin:16px;


`
const RightButton = styled(LeftButton)`

background-color: white;
color: #393c41;
font-size: 12px;
opacity:0.65

`

const DownArrow = styled.img`
margin-top:20px;
height:40px;
animation: animateDown  infinite 1.5s;
overflow-x:hidden;

`

const Buttons = styled.div`
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;


`