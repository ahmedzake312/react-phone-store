import styled from "styled-components"

export const ButtonContainer=styled.button`
text-transform:capitalize;
background: transparent;
font-size:1.4rem;
border:0.05rem solid var(--lightBlue);
border-color:${props=>props.cart?"var(--mainYellow)":"var(--lightBlue)"};
color:${props=>props.cart?"var(--mainYellow)":"var(--lightBlue)"};
padding:0.2rem 0.5rem;
border-radius:0.5rem;
cursor: pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition:all 0.5s;
&:focus{
outline: none;
}
&:hover{
background:${props=>props.cart?"var(--mainYellow)":"var(--lightBlue)"};
color:var(--mainBlue);
}
`;
