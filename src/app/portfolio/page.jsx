"use client";
import React from "react";
import Image from "next/image";
import { StickyScroll } from "@/components/ui/stickyPortfolio"; 

const content = [
  {
    sourceCode: "https://github.com/Maheshkumarjena/majorProject.git",
    websiteLink: "https://maheshkumarjena.github.io/majorProject/",
    title: "HTML,CSS,JS E-commerce site",
    description:
      " A simple E-commmerce website made out of Pure HTML,CSS and JS  ",
    content: (
      <div style={{ position: "relative", paddingTop: "100%" }}>
        {" "}
        {/* Maintain aspect ratio */}
        <h1>Responsive Embedded Website</h1>
        <div
          style={{
            position: "absolute",
            top: "190px", // Adjust top position for placement
            left: "20px", // Adjust left position for placement
            color: "white", // Text color (adjust as needed)
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
            padding: "10px", // Padding around the text
            borderRadius: "8px", // Rounded corners
            zIndex: 1, // Ensure text is above the iframe
          }}
        >
          <h2>HTML,CSS,JS E-commerce site</h2>
        </div>
        <iframe
          src="https://maheshkumarjena.github.io/majorProject/" // URL of the live website
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none",
          }}
          title="Embedded Website"
          allowFullScreen
        ></iframe>
      </div>
    ),
  },

  {
    sourceCode: "git@github.com:Maheshkumarjena/AuthFrontend.git",
    websiteLink:
      "https://auth-frontend-bt9fsab5b-maheshkumarjenas-projects.vercel.app/",
    title: "React CRUD application",
    description:
      "This React-based web app implements CRUD operations for user authentication. Users can sign up, log in, update their profiles, and delete accounts. It includes form validation, password encryption, and session management for secure authentication. The front-end is in React, while the back-end, built with Node.js and Express, connects to a MongoDB database. This project demonstrates basic user authentication flows and CRUD functionality.",
    content: (
      <div style={{ position: "relative", paddingTop: "100%" }}>
        {" "}
        {/* Maintain aspect ratio */}
        <h1> </h1>
        <div
          style={{
            position: "absolute",
            top: "190px", // Adjust top position for placement
            left: "20px", // Adjust left position for placement
            color: "white", // Text color (adjust as needed)
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
            padding: "10px", // Padding around the text
            borderRadius: "8px", // Rounded corners
            zIndex: 1, // Ensure text is above the iframe
          }}
        >
          <h2>CRUD application</h2>
        </div>
        <iframe
          src="https://auth-frontend-bt9fsab5b-maheshkumarjenas-projects.vercel.app/" // URL of the live website
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none",
          }}
          title="Embedded Website"
          allowFullScreen
        ></iframe>
      </div>
    ),
  },
  {
    sourceCode: "https://github.com/Maheshkumarjena/Quiz_app.git",
    websiteLink: "https://maheshkumarjena.github.io/Quiz_app/",
    title: "A simple quiz aap ",
    description:
      "This quiz app is built with HTML, CSS, and JavaScript. It presents multiple-choice questions, tracks user answers, and calculates the score in real-time. JavaScript handles the quiz logic, while HTML and CSS create a responsive, user-friendly interface. This project showcases basic front-end development and dynamic functionality.",
    content: (
      <div style={{ position: "relative", paddingTop: "100%" }}>
        {" "}
        {/* Maintain aspect ratio */}
        <h1>Responsive Embedded Website</h1>
        <div
          style={{
            position: "absolute",
            top: "190px", // Adjust top position for placement
            left: "20px", // Adjust left position for placement
            color: "white", // Text color (adjust as needed)
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
            padding: "10px", // Padding around the text
            borderRadius: "8px", // Rounded corners
            zIndex: 1, // Ensure text is above the iframe
          }}
        >
          <h2>Quiz app</h2>
        </div>
        <iframe
          src="https://maheshkumarjena.github.io/Quiz_app/" // URL of the live website
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none",
          }}
          title="Embedded Website"
          allowFullScreen
        ></iframe>
      </div>
    ),
  },
];


const page = () => {
   return (
     <div className="p-2 flex justify-center items-center w-screen">
       <StickyScroll content={content} />
     </div>
   );
}

export default page
