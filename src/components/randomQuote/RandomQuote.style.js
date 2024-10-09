import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 30px;
    margin-top: 10px;
`;


export const Title = styled.h1`
    color: black;
    font-size: 50px;
    margin-bottom: 20px;
`;

export const QuoteText = styled.p`
    margin-bottom: 20px;
    font-weight: 400;
`;

export const AuthorText = styled.p`
    margin-bottom: 20px;
    font-weight: 400;
`;

export const Button = styled.button`
    border-radius: 10px;
    max-width: 250px;
    width: 100%;
    height: 84px;
    background: #080909;;
    font-weight: 700;
    font-size: 25px;
    line-height: 247%;
    text-align: center;
    color: #fff;
    cursor: pointer;
    transition: background 0.3s;
    margin-left: 50px;

    &:hover {
        background: #3d4848;
    }
`;