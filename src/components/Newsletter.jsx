import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Newsletter = () => {
    return (
        <Container>
            <h1 className="title">Newsletter</h1>
            <div className="desc">Get timely updates from your favourite products.</div>
            <div className="inputContainer">
                <input type="email" placeholder='Your email' />
                <button><Send/></button>
            </div>
        </Container>
    )
}
const Container=styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h1{
        font-size: 70px;
        margin-bottom: 20px;
    }
    .desc{
        font-size: 24px;
        font-weight: 300;
        margin-bottom: 20px;
    }
    .inputContainer{
        width: 50%;
        height: 40px;
        background-color: white;
        display: flex;
        justify-content: space-between;
        border: 1px solid lightgrey;
        input{
            border: none;
            outline: none;
            padding-left: 20px;
            flex:8;
        }
        button{
            flex:1;
            border: none;
            background-color: teal;
            color: white;
        }
    }
`
export default Newsletter
