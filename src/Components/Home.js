import React from 'react'
import styled from 'styled-components'
import Section from './Section';
import List from './LIst';

function Home() {
    return (
        <Container>

            {

                List.map((val, index) => {

                    const { id, name, tagline, lbutton, rbutton, image } = val;

                    return <Section name={name} tagline={tagline} lbutton={lbutton} rbutton={rbutton} image={image} key={id} />


                })

            }

        </Container>
    )
}

export default Home


const Container = styled.div`

height:100vh;

`






