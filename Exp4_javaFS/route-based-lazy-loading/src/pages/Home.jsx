import React from "react";

export default function Home() {
  return (
    <div style={styles.container}>
      <h1>Welcome to Our SPA</h1>
      <p>
        This is the Home Page. Route-based lazy loading ensures this component
        is loaded only when the user visits this route.
      </p>
      <div style={styles.card}>
        <h3>Why Lazy Loading?</h3>
        <ul>
          <li>Improves initial load speed</li>
          <li>Reduces bundle size</li>
          <li>Enhances user experience</li>
        </ul>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    textAlign: "center",
  },
  card: {
    marginTop: "20px",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    width: "60%",
    marginLeft: "auto",
    marginRight: "auto",
  },
};
