import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import img from "../assets/bg-boost-desktop.svg";
import axios from "axios"
import Link from './Link';
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
    const [urls,setURLS]=useState({"google.com":'https://shrtco.de/Edfgvg'})
//       useEffect(() => {
//     db.collection('urls').orderBy('timestamp','desc').onSnapshot(snapshot => {
//       setURLs(snapshot.docs.map(doc => (
//         {
//           id: doc.id,
//               ourl: doc.data().ourl,
//               surl:doc.data().surl
//         }
//       )
//       ))
//     })
//   }, []
//   //loads once when the app loads
//   )

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
        <Container>
            <Form>
  <Input value={url} onChange={(e)=>(setURL(e.target.value))} placeholder="Shorten a link here..." />
                 <Button disabled={!url} type="submit" onClick={shorturl}  >
  Shorten It!
        </Button>   
            </Form>
            <ul>{
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
      </ul> 
        </Container>
    )
}

export default Short
