import React ,{ useRef, useState } from 'react'
import styled from 'styled-components';
const Container = styled.div`
padding:20px;
//    display:flex;
//    flex-wrap:wrap;
   & div{
       background-color:white;
   border-radius:10px;
   padding:5px;
   display:flex;
   flex-wrap:wrap;
   justify-content:space-between;
    margin: 1em;
    vertical-align:center;
   }
  
`;
const Button = styled.button`
  color: white;
  border: 2px solid #2acfcf;
  background:#2acfcf;
  font-size: 1.6em;
  font-weight:bold;
//   margin: 1em;
//   padding: 0.25em 1em;
padding-left:10px;
padding-right:10px;
  border-radius: 20px;
  cursor:pointer;
`;
function Link(props) {
    const textAreaRef = useRef(null);
  const [copySuccess, setCopySuccess] = useState("Copy");
    const copyurl = (e) => {
        console.log("clicked")
          textAreaRef.current.select();
    document.execCommand('copy');
    e.target.focus();
    setCopySuccess('Copied!');
}


    return (
        <Container>
            <div>
                <h2>{props.original}</h2>
                {/* <h2>{props.value}</h2> */}
                  <textarea
          ref={textAreaRef}
          value={props.value}
        />
                <Button type="submit" onClick={copyurl}>{ copySuccess}</Button>
        </div>   
        </Container>
    )
}
export default Link
