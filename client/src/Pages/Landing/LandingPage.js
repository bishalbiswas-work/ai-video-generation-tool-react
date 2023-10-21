import React, { Component } from "react";
import { useState, useEffect } from "react";

// import ReactDOM from "react-dom/client";
// import Header from "../Extra_Components/Header";
// import htmlContent from "./index.html"; // Make sure you provide the correct path
import htmlContent from "./htmlContent";

const LandingPage = () => {
  // const [htmlContent, setHtmlContent] = useState("");

  // useEffect(() => {
  //   fetch("/pages/index.html")
  //     .then((response) => response.text())
  //     .then((data) => {
  //       setHtmlContent(data);
  //     });
  // }, []);

  return (
    <div>
      <div>
        <h1>Home Page</h1>

        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        <toggleFaq />
      </div>
    </div>
  );
};

function toggleFaq({ button }) {
  const faq = button.parentElement;
  faq.classList.toggle("active");
  const text = faq.querySelector(".faq-text");
  text.style.display = text.style.display === "none" ? "block" : "none";

  if (faq.classList.contains("active")) {
    button.style.transform = "rotate(180deg)";
    button.style.backgroundColor = "#a876aa";
    button.style.borderColor = "#a876aa";
    button.style.color = "#fff";
  } else {
    button.style.transform = "none";
    button.style.backgroundColor = "transparent";
    button.style.borderColor = "#e6e6e6";
    button.style.color = "inherit";
  }
}

export default LandingPage;
