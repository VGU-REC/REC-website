import { CardNoImage, Carousel, Pagination } from "components";
import { FC, useState } from "react";

const Activities: FC = () => {
  let data = [
    {
      headline: "Headline",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      headline: "Headline",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      headline: "Headline",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      headline: "Headline",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      headline: "Headline",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      headline: "Headline",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      headline: "Headline",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      headline: "Headline",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      headline: "Headline",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3;

  //Get current Blogs
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = data.slice(indexOfFirstBlog, indexOfLastBlog);

  // Change page
  const paginate = (pagenumber: number) => {
    setCurrentPage(pagenumber);
  };

  return (
    <div>
      <Carousel />
      <div className="grid grid-cols-1 divide-y-4 divide-black">
        <div>
          <h1 className="p-3 text-xl font-bold">ACTIVITY</h1>
        </div>
        <div className="p-3">
          {currentBlogs.map(({ headline, description }) => (
            <CardNoImage headline={headline} description={description} />
          ))}
        </div>
      </div>
      <Pagination
        blogsPerPage={blogsPerPage}
        totalBlogs={data.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export { Activities };
