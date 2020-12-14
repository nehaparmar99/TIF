import React, { useState } from 'react'
import styled from 'styled-components';
import img from "../assets/bg-boost-desktop.svg";
import axios from "axios"
import Link from './Link';
const MAIN = styled.div`
   padding:0;
   margin:0;
`;
const Input = styled.input`
     padding: 1em;
    height:40px;
    // margin-top:16px;
	color: red;
	background: white;
	border: none;
    border-radius: 3px;
    width:80%;
      @media (max-width: 768px) {
     width:80%;
     margin-top:20px;
}
`;
const Container = styled.div`
   background:url(${img});
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-color: #3b3054;
        background-size:stretch;
        background-color:#3b3054;
        border-radius:10px;
        width:80%;
        margin:auto;
`;
const Form = styled.form`
// width:80%;
// margin:auto;
// padding-bottom:15px;
    display:flex;
    flex-wrap:wrap;
justify-content: space-around;
padding:3%;
padding-left:2%;
padding-right:2%;
& button{
     color: white;
  border: 2px solid #2acfcf;
  background:#2acfcf;
  font-size: 1.6em;
  font-weight:bold;
//   margin-top:15px;
//   margin: 1em;
//   padding: 10px;
  padding-left:35px;
   padding-right:35px;
  border-radius: 10px;
  @media (max-width: 768px) {
     width:80%;
     margin-top:20px;
     margin-bottom:20px;
}
}
`;

// const Button = styled.button`
//   color: white;
//   border: 2px solid #2acfcf;
//   background:#2acfcf;
//   font-size: 1.6em;
//   font-weight:bold;
//   margin: 1em;
//   padding: 10px;
//   padding-left:35px;
//    padding-right:35px;
//   border-radius: 10px;
//   @media (max-width: 768px) {
//      width:80%;

//     }
// `;
function Short() {
    const [url, setURL] = useState("");
    const [urls,setURLS]=useState({"google.com":'https://shrtco.de/Edfgvg'})

    const shorturl = (e) => {
        e.preventDefault();
        console.log("clicked");
        // console.log(urls)
const urll = "https://api.shrtco.de/v2/shorten";
        axios.get(urll, {
            params: {
                url: url,
            }
})
.then((response) => {
    console.log(response.data.result["full_short_link"]);
    const short = response.data.result["full_short_link"];
    console.log(short)
     setURLS({...urls,[url]:short});
    console.log(urls)
}, (error) => {
  console.log(error);
});
        setURL("");
    }


    return (
        <>
        <Container>
            <Form>
  <Input value={url} onChange={(e)=>(setURL(e.target.value))} placeholder="Shorten a link here..." />
                 <button disabled={!url} type="submit" onClick={shorturl}  >
  Shorten It!
        </button>   
            </Form>
             </Container>
            <>{
                // ourl.map((url,index) => (
                //     <h1>{url}:</h1>
                // ))
                //   surl.map((url,index) => (
                //     <h1>{url}:</h1>
                // ))
                Object.entries(urls)
                    .map(([key, value]) => (
                        // <h1>{key}   :    {value}</h1>
                        <Link original={key} value={value}></Link>
                    )
                    )
            }
      </> 
       </>
    )
}

export default Short
