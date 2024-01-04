import useSWR from "swr";

const fetcher = async (...args) => {
  const res = await fetch(...args);
  const data = await res.json();
  return data;
};

function Quotely() {
  const { data, error } = useSWR("http://api.quotable.io/random", fetcher, {
    suspense: true,
  });

  if (error) {
    return <h1>There was an error!</h1>;
  }

  return (
    <div>
      <h1>Get quotes using fetch API</h1>

      <div>{data.content}</div>

      {/* <div>{data?.content}</div> OK */}
      {/* <div>{data.content}</div>  Error Show */}
    </div>
  );
}

export default Quotely;
