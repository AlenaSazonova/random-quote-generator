import './App.css';
import GlobalStyle from './GlobalStyles';
import TitleQuoteGenerator from '../src/components/titleQuoteGenerator/TitleQuoteGenerator';
import RandomQuote from '../src/components/randomQuote/RandomQuote';


function App() {
    return (
        <>
            <GlobalStyle />
            <TitleQuoteGenerator />
            <RandomQuote />
        </>
    );
}

export default App;
