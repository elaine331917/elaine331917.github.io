import ReactMarkdown from "react-markdown";
import { frontpage } from "./data/markdown";

const App = () => {
  return (
    <div className="home">
      <div id="content">
        <ReactMarkdown source={frontpage} />
      </div>
    </div>
  );
};

export default App;
