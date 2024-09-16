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
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
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
    title: "HTML,CSS,JS E-commerce site",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
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
    title: "HTML,CSS,JS E-commerce site",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
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
