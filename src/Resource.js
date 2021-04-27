import ReactMarkdown from "react-markdown";

const Competition = ({ competition }) => {
  return (
    <div className="home">
      <div id="content">
        <ReactMarkdown source={competition} />
      </div>
    </div>
  );
};

export default Competition;