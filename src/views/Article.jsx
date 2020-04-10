import React from "react";
import Articles from "components/other/Articles"

class Article extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Articles></Articles>
        </div>
      </>
    );
  }
}

export default Article;
