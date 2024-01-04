import { useEffect, useState } from "react";

function Quote() {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      const res = await fetch("https://api.quotable.io/random");
      const data = await res.json();
      setQuote(data);
    };

    fetchQuote();
  }, []);

  return (
    <div>
      <h2>Get quotes using fetch API</h2>
      <h3>{quote?.content}</h3>
    </div>
  );
}

export default Quote;
