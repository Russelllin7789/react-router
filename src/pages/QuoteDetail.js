import { useParams, Route } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_DATA = [
  { id: "q1", author: "Max", text: "Learning React is Great!!!" },
  { id: "q2", author: "Russell", text: "Learning React is Great as well." },
  { id: "q3", author: "Kurt", text: "Learning languages is so much fun!" },
];

const QuoteDetail = () => {
  const params = useParams();
  const quote = DUMMY_DATA.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No Quote Found!</p>;
  }

  return (
    <div>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </div>
  );
};

export default QuoteDetail;
