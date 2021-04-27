import ReactMarkdown from "react-markdown";
import { abstract } from "./data/markdown";

const App = () => {
  return (
    <div className="home">
      <div id="content">
        <ReactMarkdown source={abstract} />
      </div>
    </div>
  );
};

export default App;
