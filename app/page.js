import React from "react";
import "./globals.css";
import AssessmentRules from "./Assessment_Rules";
import Header from "./Header";
const Page = () => {
  return (
    <>
      <Header />
      <div className="main-container">
        <AssessmentRules />
      </div>
    </>
  )
}
export default Page;


