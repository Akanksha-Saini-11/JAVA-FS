import React from "react";

export default function About() {
  return (
    <div style={styles.container}>
      <h1>About Us</h1>
      <p>
        This page explains the concept of Route-Based Lazy Loading in a
        Single Page Application (SPA).
      </p>

      <div style={styles.infoBox}>
        <h3>Experiment Objective</h3>
        <p>
          To load route components only when required using React.lazy() and Suspense.
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    textAlign: "center",
  },
  infoBox: {
    marginTop: "20px",
    padding: "20px",
    backgroundColor: "#f5f5f5",
    borderRadius: "8px",
    width: "60%",
    margin: "20px auto",
  },
};
