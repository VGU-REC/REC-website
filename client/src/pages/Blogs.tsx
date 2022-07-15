import { Card, Carousel, Pagination } from "components";
import { FC, useState } from "react";

const Blogs: FC = () => {
  let data = [
    {
      image: "img1.jpg",
      alt: "Image",
      headline: "Headline",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      image: "img2.jpg",
      alt: "Image",
      headline: "Headline",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      image: "img3.jpg",
      alt: "Image",
      headline: "Headline",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      image: "img4.jpg",
      alt: "Image",
      headline: "Headline",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      image: "img5.jpg",
      alt: "Image",
      headline: "Headline",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      image: "img6.jpg",
      alt: "Image",
      headline: "Headline",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      image: "img1.jpg",
      alt: "Image",
      headline: "Headline",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      image: "img2.jpg",
      alt: "Image",
      headline: "Headline",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      image: "img3.jpg",
      alt: "Image",
      headline: "Headline",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      image: "img4.jpg",
      alt: "Image",
      headline: "Headline",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      image: "img5.jpg",
      alt: "Image",
      headline: "Headline",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      image: "img6.jpg",
      alt: "Image",
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
          <h1 className="p-3 text-xl font-bold">BLOG</h1>
        </div>
        <div className="p-3">
          {currentBlogs.map(({ image, alt, headline, description }) => (
            <Card
              image={image}
              alt={alt}
              headline={headline}
              description={description}
            />
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

export { Blogs };
