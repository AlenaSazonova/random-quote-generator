import React, { useState, useEffect } from 'react';
import {
    Container,
    Title,
    QuoteText,
    AuthorText,
    Button
}
    from './RandomQuote.style';

const RandomQuote = () => {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    const fetchQuote = async () => {
        try {
            const response = await fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://zenquotes.io/api/random'));
            console.log(response);

            if (!response.ok) {
                throw new Error('Error: ' + response.statusText);
            }

            const data = await response.json();
            console.log(data);
            const quoteData = JSON.parse(data.contents);
            setQuote(quoteData[0].q);
            setAuthor(quoteData[0].a);

        } catch (error) {
            console.error('Error fetching the quote: ', error);
            setQuote('Не удалось загрузить цитату');
            setAuthor('');
        }

    };


    useEffect(() => {
        fetchQuote();
    }, []);


    return (
        <Container>
            <Title>Random Quote</Title>
            <QuoteText>{quote}</QuoteText>
            <AuthorText>{author}</AuthorText>
            <Button onClick={fetchQuote}>Get Another Quote</Button>
        </Container>
    )
}

export default RandomQuote;