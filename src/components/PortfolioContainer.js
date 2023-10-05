import React, { useState } from "react";
import NavTabs from './NavTabs';
import Footer from "./Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');


  const handlePageChange = (page) => setCurrentPage(page);

  // Render the corresponding page based on the current value of currentPage
  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
  };

  return (
    <div>
      {/* Render the navigation tabs with the current page and handlePageChange function */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      
      {/* Render the page based on the current value of currentPage */}
      {renderPage()}

      {/* Render the footer */}
      <Footer />
    </div>
  );
}