import axios from "axios";
import { useEffect, useState } from "react";

function Quotes() {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      const res = await axios.get("http://api.quotable.io/random");
      setQuote(res.data);
    };

    fetchQuote();
  }, []);

  return (
    <div>
      <h1>Get quotes using fetch API</h1>

      <div>{quote?.content}</div>
    </div>
  );
}

export default Quotes;
