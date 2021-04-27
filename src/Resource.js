import ReactMarkdown from "react-markdown";

const Resource = ({ resource }) => {
  return (
    <div className="home">
      <div id="content">
        <ReactMarkdown source={resource} />
      </div>
    </div>
  );
};

export default Resource;