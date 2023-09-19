import './Pagination.css'

export const PaginationComp = ({ pageCount, pageIndex, setPageIndex }) => {
  let pagination = [];

  let pageCountSet = [];
  for (let i = 1; i <= pageCount; i++) {
    pageCountSet.push(i);
  }

  let finalIndexes = [];

  switch (pageCount > 5) {
    case true:
      switch (pageIndex) {
        case 1:
          //if on first page, show from 1-4 and then last page number
          if (pageIndex === 1) {
            finalIndexes = pageCountSet.slice(pageIndex - 1, pageIndex + 3);
            finalIndexes.push(pageCount);
            finalIndexes.splice(finalIndexes.length - 1, 0, "...");
          }
          break;

        //if on last page, show first page and last 4 page numbers
        case pageCountSet[pageCountSet.length - 1]:
          if (pageIndex === pageCountSet[pageCountSet.length - 1]) {
            finalIndexes = pageCountSet.slice(pageIndex - 4, pageIndex);
            finalIndexes.unshift(1);
            finalIndexes.splice(1, 0, "...");
          }
          break;

        //if on second page, show from 2-5 and last page number
        case pageCountSet[1]:
          if (pageIndex === pageCountSet[1]) {
            finalIndexes = pageCountSet.slice(0, pageIndex + 2);
            finalIndexes.push(pageCount);
            finalIndexes.splice(finalIndexes.length - 1, 0, "...");
          }
          break;

        //if on last but one page, show last 5 page numbers
        case pageCountSet[pageCountSet.length - 2]:
          if (pageIndex === pageCountSet[pageCountSet.length - 2]) {
            finalIndexes = pageCountSet.slice(pageIndex - 3, pageIndex + 1);
            finalIndexes.unshift(1);
            finalIndexes.splice(1, 0, "...");
          }
          break;

        default:
          //if numbers in between, show one on each side as well as first and last page numbers
          finalIndexes = pageCountSet.slice(pageIndex - 2, pageIndex + 1);
          finalIndexes.unshift(1);
          finalIndexes.push(pageCount);
          finalIndexes.splice(finalIndexes.length - 1, 0, "...");
          finalIndexes.splice(1, 0, "...");

          break;
      }
      break;

    default:
      for (let i = 1; i <= pageCount; i++) {
        pagination.push(
          <>
            <li
              key={i}
              className={`page-item${pageIndex === i ? " active" : ""}`}
              aria-current="page"
            >
              <a onClick={() => setPageIndex(i)}>
                <span className="page-link">{i}</span>
              </a>
            </li>
          </>
        );
      }
      break;
  }

  finalIndexes.map((index) => {
    pagination.push(
      <>
        {index !== "..." && (
          <>
            <li
              key={index}
              className={`page-item${pageIndex === index ? " active" : ""}`}
              aria-current="page"
            >
              <a onClick={() => setPageIndex(index)}>
                <span className="page-link">{index}</span>
              </a>
            </li>
          </>
        )}
        {index === "..." && (
          <>
            <li className="page-item">...</li>
          </>
        )}
      </>
    );
  });

  return <ul className="pagination justify-content-center">{pagination}</ul>;
};
