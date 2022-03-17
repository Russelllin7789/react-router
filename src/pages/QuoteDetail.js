import { useEffect } from "react";
import { useParams, useRouteMatch, Route, Link } from "react-router-dom";

import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";

// const DUMMY_DATA = [
//   { id: "q1", author: "Max", text: "Learning React is Great!!!" },
//   { id: "q2", author: "Russell", text: "Learning React is Great as well." },
//   { id: "q3", author: "Kurt", text: "Learning languages is so much fun!" },
// ];

const QuoteDetail = () => {
  // const quote = DUMMY_DATA.find((quote) => quote.id === params.quoteId);
  const params = useParams();
  const match = useRouteMatch();
  const { quoteId } = params;
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (!loadedQuote.text) {
    return <p className="centered">No Quote Found!</p>;
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  return (
    <div>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      {/* conditionally render components using routes */}
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </div>
  );
};

export default QuoteDetail;
