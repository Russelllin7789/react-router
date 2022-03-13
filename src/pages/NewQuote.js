import QuoteForm from "../components/quotes/QuoteForm";

import { useHistory } from "react-router-dom";

const NewQuote = () => {
  const history = useHistory();

  const addQuoteHandler = (quoteData) => {
    console.log("Quote to be added:", quoteData);

    history.push("/quotes");
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
