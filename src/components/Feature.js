import React from 'react'
import styled from 'styled-components';
const Flex = styled.div`
  background-color:#EBE5F3;
//   height:100%;
  margin:0;
padding:0;
  display:flex;
  flex-direction:column;
  flex-wrap:wrap;
  padding-bottom:30px;
  & div{
  text-align:center;
  }
  & h1{
      margin-top:40px;
font-size:24px;
  }
  & p{
        font-size:19px;
        margin-top:10px;
        color:grey;
        letter-spacing:1.2px;
  }
`;
const Flexbox = styled.div`
display:flex;
flex-direction:row;
// flex-wrap:wrap;
margin-top:40px;
margin-bottom:20px;
@media (max-width: 768px) {
      flex-direction:column;
      flex-wrap:wrap;
    }
`;
const C1 = styled.div`
display:flex;
flex-direction:column;
flex-wrap:wrap;
align-items:flex-start;
// width:30%;
// margin:auto;
background-color:white;
margin:20px;
& h2{
    margin-top:24px;
     margin-bottom:17px;
     padding:10px;
    font-size:25px;
}
& p{
    letter-spacing:1px;
     font-size:17px;
     padding:10px;
     padding-right:20px;
}
& div{
    margin:20px;
    // margin-right:30px;
    text-align:left;
    // margin-left:20px;
    line-height:25px;
}
@media (max-width: 768px) {
     width:90%;
     margin:auto;
     margin-bottom:10px;
    }
`;
function Feature() {
    return (
        <Flex>
            <div>
  <h1>Advanced Statistics</h1>
 <p>Track how your links are performing across the web with our advanced statistics dashboard</p>  
            </div>
            <Flexbox>
                <C1>
                    <div>
                      <h2>Brand Recognition</h2>
                      <p>Boost your brand recognition with each click.Generic links dont mean
                        a thing.Branded links help instil confidence in your content.
                      </p>
                        </div>
                  </C1>  
                <C1>
                    <div>
                      <h2>Detailed Records</h2>
                      <p>Gain insights into who is clicking your links.Knowing when and where people engage with your content helps inform better decisions.</p>
                  </div></C1>  
                  <C1><div>
                      <h2>Fully Customizable</h2>
                      <p>Improve brand awareness and content discoverability through customizable links,supercharging audience engagement.</p>
            </div>      </C1>  
            </Flexbox>
        </Flex>
    )
}

export default Feature
