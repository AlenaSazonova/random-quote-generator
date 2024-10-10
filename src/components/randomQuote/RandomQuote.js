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
            const uniqueParam = `?nocache=${new Date().getTime()}`;
            const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://zenquotes.io/api/random')}${uniqueParam}`);
            console.log('Response received:', response);


            if (!response.ok) {
                throw new Error('Error: ' + response.statusText);
            }

            const data = await response.json();
            console.log('Data received:', data);

            const quoteData = JSON.parse(data.contents);
            console.log('Parsed quote data:', quoteData);

            if (quoteData[0].q.includes('Too many requests')) {
                console.warn('Rate limit reached, delaying next request...');
                setQuote('Слишком много запросов. Попробуйте позже.');
                setAuthor('');
                return;
            }

            
            if (quoteData && quoteData.length > 0) {
                setQuote(quoteData[0].q);
                setAuthor(quoteData[0].a);
            } else {
                throw new Error('Invalid quote data');
            }

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