import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import { Header, Footer } from "./components";
import App from "./App";
import Gallery from "./Gallery";
import Lesson from "./Lesson";
import Resources from "./Resources";
import Resource from "./Resource";
import {
  lesson_one,
  lesson_two,
  lesson_three,
  lesson_four,
  competitions,
} from "./data/markdown";

import "./index.css";

const Index = () => (
  <div className="main">
    <BrowserRouter>
      <Header />
      <div>
        <Route exact path="/" component={App} />
        <Route path="/resources" component={Resources} />
        <Route path="/hall-of-fame" component={Gallery} />
        <Route path="/competitions">
          <Resource resource={competitions} />
        </Route>
        <Route path="/lesson-one">
          <Lesson lesson={lesson_one} />
        </Route>
        <Route path="/lesson-two">
          <Lesson lesson={lesson_two} />
        </Route>
        <Route path="/lesson-three">
          <Lesson lesson={lesson_three} />
        </Route>
        <Route path="/lesson-four">
          <Lesson lesson={lesson_four} />
        </Route>
      </div>
      <Footer />
    </BrowserRouter>
  </div>
);

ReactDOM.render(<Index />, document.getElementById("root"));
