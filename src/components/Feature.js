import React from 'react'
import styled from 'styled-components';
const Container = styled.div`
        background-color:#9e9aa7;
        font-familty:Poppins;
        letter-spacing:1.5px;
        display:flex;
        flex-direction:column;
& div{
text-align:center;
padding:20px;
}
    & h1{
        margin-top:10px;
        padding-bottom:10px;
        font-weight:900;
        font-size:25px;
    }
    & p{
        color:black;
        opacity:70%;
        font-size:15px;

    }
`;
const Flex = styled.div`
display:flex;
flex-wrap:wrap;
padding:20px;
`;
const C1 = styled.div`
display:flex;
flex-direction:column;
flex-wrap:wrap;
justify-content:flex-start;
align-items:flex-start;
flex-shrink:1;
`;
function Feature() {
    return (
        <Container>
            <div>
            <h1>Advanced Statistics</h1>
            <p>Track how your links are performing across the web with</p> 
          <p>our advanced statistics dashboard</p>  
            </div>
            <Flex>
                <C1>
                    <h2>Brand Recognition</h2>
                    <p>Boost your brand recognition with each click.Generic links dont mean
                     a thing.Branded links help instil confidence in your content.
                    </p>
                </C1>  
                <C1>
                    <h2>Detailed Records</h2>
                    <p>Gain insights into who is clicking your links.Knowing when and where people engage with your content helps inform better decisions.</p>
                </C1>  
                <C1>
                    <h2>Fully Customizable</h2>
                    <p>Improve brand awareness and content discoverability through customizable links,supercharging audience engagement.</p>
                </C1>     
            </Flex>
        </Container>
    )
}

export default Feature
