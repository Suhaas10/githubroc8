import styled from "styled-components";

const AnimatedButton = styled.button`
  position: relative;
  padding: 19px 36px;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  border-radius: 40px;
  border: none;

  &:span 
    position: relative;
    color: #fff;
    font-family: Arial;
    letter-spacing: 8px;
    z-index: 1;
  

  &:liquid 
    position: absolute;
    top: -80px;
    left: 0;
    width: 100%;
    height: 200px;
    background: red;
    box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.5);
    transition: 0.5s;
  

  &:liquid::after,
  &:liquid::before 
    content: "";
    width: 200%;
    height: 200%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -75%);
    background: #fff;
  

  &:liquid::before 
    border-radius: 45%;
    background: rgba(20, 20, 20, 1);
    animation: animate 5s linear infinite;
  

  &:liquid::after 
    border-radius: 40%;
    background: rgba(20, 20, 20, 0.5);
    animation: animate 10s linear infinite;
  

  &:hover .liquid 
    top: -120px;
`;

export default AnimatedButton;
