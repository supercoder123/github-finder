import React from "react";
import PropTypes from "prop-types";

const RepoItem = ({ repo }) => {
  return (
    <div className="card">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <h3>
          <a href={repo.html_url}>{repo.name}</a>
        </h3>
        <div className="badge">
          <i className="fas fa-star"></i> {repo.stargazers_count}
        </div>
      </div>
      <div>{repo.description}</div>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
};

export default RepoItem;
