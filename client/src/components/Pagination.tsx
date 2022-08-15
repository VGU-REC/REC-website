import { FC } from "react";
import { Link, useSearchParams } from "react-router-dom";

interface PaginationProps {
  blogsPerPage: number;
  totalBlogs: number;
  paginate: (n: number) => void;
  currentPage: number;
}

const Pagination: FC<PaginationProps> = ({
  blogsPerPage,
  totalBlogs,
  paginate,
  currentPage,
}) => {
  const [search] = useSearchParams();
  const pageNumbers = [];
  let i = 1;
  for (i; i <= Math.ceil(totalBlogs / blogsPerPage); i++) {
    pageNumbers.push(i);
  }

  //Prev Link
  let prev = currentPage - 1;
  if (prev === 0) {
    prev = 1;
  }
  const [prevLink] = useSearchParams();
  prevLink.set("page", prev.toString());

  //Nex Link
  let next = currentPage + 1;
  if (next === i) {
    next = i - 1;
  }
  const [nextLink] = useSearchParams();
  nextLink.set("page", next.toString());

  return (
    <div>
      <div className="flex justify-center p-3">
        <nav aria-label="Page navigation example">
          <ul className="flex list-style-none">
            {currentPage > 1 && (
              <li className="page-item prev">
                <Link
                  className="relative block py-1.5 px-3 border-0 bg-transparent outline-none rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                  to={{ search: prevLink.toString() }}
                  onClick={() => {
                    paginate(prev);
                  }}
                >
                  &laquo;
                </Link>
              </li>
            )}

            {pageNumbers.map((number) => {
              search.set("page", number.toString());
              if (currentPage === number) {
                return (
                  <li key={number} className="page-item">
                    <Link
                      className="block py-1.5 px-3 border-0 bg-transparent outline-none rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none bg-orange-200"
                      to={{ search: search.toString() }}
                      onClick={() => paginate(number)}
                    >
                      {number}
                    </Link>
                  </li>
                );
              } else {
                return (
                  <li key={number} className="page-item">
                    <Link
                      className="block py-1.5 px-3 border-0 bg-transparent outline-none rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                      to={{ search: search.toString() }}
                      onClick={() => paginate(number)}
                    >
                      {number}
                    </Link>
                  </li>
                );
              }
            })}
            {currentPage < i - 1 && (
              <li className="page-item">
                <Link
                  className="relative block py-1.5 px-3 border-0 bg-transparent outline-none rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                  to={{ search: nextLink.toString() }}
                  onClick={() => paginate(next)}
                >
                  &raquo;
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export { Pagination };
