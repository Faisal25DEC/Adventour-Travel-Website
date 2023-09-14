import React, { useState } from "react";
import "./Pagination.css";
const Pagination = ({ totalPages, page, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(page);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    onPageChange(pageNumber);
  };

  const generatePaginationItems = () => {
    const paginationItems = [];

    let liTag = "";
    let beforePage = currentPage - 1;
    let afterPage = currentPage + 1;

    if (beforePage < 0) beforePage = 0;

    if (currentPage > 1) {
      paginationItems.push({
        page: currentPage - 1,
        label: "Prev",
        className: "btn prev",
      });
    }

    if (currentPage > 2) {
      paginationItems.push({ page: 1, label: "1", className: "first numb" });
      if (currentPage > 3) {
        paginationItems.push({ label: "...", className: "dots" });
      }
    }

    if (currentPage === totalPages) {
      beforePage = beforePage - 2;
    } else if (currentPage === totalPages - 1) {
      beforePage = beforePage - 1;
    }

    if (currentPage === 1) {
      afterPage = afterPage + 2;
    } else if (currentPage === 2) {
      afterPage = afterPage + 1;
    }

    for (let plength = beforePage; plength <= afterPage; plength++) {
      if (plength > totalPages) {
        continue;
      }
      if (plength === 0) {
        plength = plength + 1;
      }
      const activeClass = plength === currentPage ? "active" : "";
      paginationItems.push({
        page: plength,
        label: plength.toString(),
        className: `numb ${activeClass}`,
      });
    }

    if (currentPage < totalPages - 1) {
      if (currentPage < totalPages - 2) {
        paginationItems.push({ label: "...", className: "dots" });
      }
      paginationItems.push({
        page: totalPages,
        label: totalPages.toString(),
        className: "last numb",
      });
    }

    if (currentPage < totalPages) {
      paginationItems.push({
        page: currentPage + 1,
        label: "Next",
        className: "btn next",
      });
    }

    // Add logic for generating pagination items here
    // You can adapt your original logic to create paginationItems

    return paginationItems;
  };

  return (
    <ul className="pagination">
      {generatePaginationItems().map((item, index) => (
        <li
          key={index}
          className={`numb ${item.page === currentPage ? "active" : ""}`}
          onClick={() => handlePageChange(item.page)}
        >
          <span>{item.page}</span>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
