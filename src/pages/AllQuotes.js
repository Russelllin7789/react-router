import QuoteList from "../components/quotes/QuoteList";

const DUMMY_DATA = [
  { id: "q1", author: "Max", text: "Learning React is Great!!!" },
  { id: "q2", author: "Russell", text: "Learning React is Great as well." },
  { id: "q3", author: "Kurt", text: "Learning languages is so much fun!" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_DATA} />;
};

export default AllQuotes;
