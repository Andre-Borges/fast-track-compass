import React from "react";

import "./styles.css";

export default function LoadRequest() {
  return (
    <div className="loading-container">
      <div className="spinner spinner-border text-primary" role="status"></div>
    </div>
  );
}
