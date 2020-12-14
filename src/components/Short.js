import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import img from "../assets/bg-boost-desktop.svg";
import axios from "axios"
const Input = styled.input`
    padding: 1em;
    height:40px;
    margin-top:16px;
	color: red;
	background: white;
	border: none;
    border-radius: 3px;
    width:80%;
`;
const Container = styled.div`
  background:url(${img});
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-color: #3b3054;
        background-size:stretch;
        background-color:#3b3054;
        width:80%;
        margin:auto;
        border-radius:10px;
`;
const Form = styled.form`
 padding:2%;
// text-align:center;
// vertical-align:middle;
// background:#3b3054;

// border: none;
// margin-left:65px;
// margin-right:65px;
    // border-radius: 10px;
    display:flex;
    flex-wrap:wrap;
justify-content: space-around;
`;

const Button = styled.button`
  color: white;
  border: 2px solid #2acfcf;
  background:#2acfcf;
  font-size: 1.6em;
  font-weight:bold;
  margin: 1em;
  padding: 10px;
  padding-left:35px;
   padding-right:35px;
  border-radius: 10px;
`;
function Short() {
    const [url, setURL] = useState("");
    const shorturl = (e) => {
        e.preventDefault();
        console.log("clicked");
    //      fetch("https://api.shrtco.de/v2/shorten/", {
    //   method: "POST",
    //    headers: {
    //       "Content-type": "application/json"
    //     }, 
    //   body: JSON.stringify({
    //     // date:JSON.stringify(startDate),
    //      url:url
    //     }),
    // }) 
    // .then(res => console.log(res))
    // .catch(err => console.log(err));
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
const urll = "https://api.shrtco.de/v2/shorten";
     axios.post(proxyurl+urll, {
     url:url,
})
.then((response) => {
  console.log(response);
}, (error) => {
  console.log(error);
});
        setURL("");
    }
    return (
        <Container>
            <Form>
                 {/* <FormControl> */}
          {/* <Label htmlFor="label">Shorten a link here...</Label> */}
  <Input value={url} onChange={(e)=>(setURL(e.target.value))} placeholder="Shorten a link here..." />
        {/* </FormControl> */}
                 <Button disabled={!url} type="submit" onClick={shorturl} variant="contained" color="primary" >
  Shorten It!
        </Button>   
            </Form>
        </Container>
    )
}

export default Short
