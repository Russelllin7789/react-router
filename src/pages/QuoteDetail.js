import { useParams } from "react-router-dom";

const QuoteDetail = () => {
  const params = useParams();

  return (
    <div>
      <h1>Quote Detail</h1>
      <h4>{params.quoteId}</h4>
    </div>
  );
};

export default QuoteDetail;
