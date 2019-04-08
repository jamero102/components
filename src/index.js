import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Jane"
        timeAgo="Today at 4:45PM"
        commentText="Nice blog post!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Jonathan"
        timeAgo="Today at 2:05AM"
        commentText="Very informative!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Neptune"
        timeAgo="Yesterday at 6:45PM"
        commentText="I was a bit confused by the concept"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Danielle"
        timeAgo="Yesterday at 4:30PM"
        commentText="How great"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Kitty"
        timeAgo="Yesterday at 2:45AM"
        commentText="I liked this, but I disagree with some of the points"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
