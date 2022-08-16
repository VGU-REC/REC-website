import { Card, Carousel, Pagination } from "components";
import { FC, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

type IdeaProps = {
  image: string;
  alt: string;
  headline: string;
  description: string;
}[];

const blogsPerPage = 3;

const ProjectIdeas: FC = () => {
  let data = [
    {
      image: "/img1.jpg",
      alt: "Image",
      headline: "Headline",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      image: "/img2.jpg",
      alt: "Image",
      headline: "Headline",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      image: "/img3.jpg",
      alt: "Image",
      headline: "Headline",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      image: "/img4.jpg",
      alt: "Image",
      headline: "Headline",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      image: "/img5.jpg",
      alt: "Image",
      headline: "Headline",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      image: "/img6.jpg",
      alt: "Image",
      headline: "Headline",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      image: "/img1.jpg",
      alt: "Image",
      headline: "Headline",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      image: "/img2.jpg",
      alt: "Image",
      headline: "Headline",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      image: "/img3.jpg",
      alt: "Image",
      headline: "Headline",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      image: "/img4.jpg",
      alt: "Image",
      headline: "Headline",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      image: "/img5.jpg",
      alt: "Image",
      headline: "Headline",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      image: "/img6.jpg",
      alt: "Image",
      headline: "Headline",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
  ];
  // Get current page from url search parameter
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page");
  const pageParam: number = page ? parseInt(page) : 1; // default to 1 if parsed to NaN
  const currentPage = Math.max(pageParam, 1); // default to 1 if negative

  const [currBlogs, setCurrBlogs] = useState<IdeaProps>([]);

  //Get current Blogs
  useEffect(() => {
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = data.slice(indexOfFirstBlog, indexOfLastBlog);
    setCurrBlogs(currentBlogs);
  }, [data, currentPage]);

  // Change page
  const paginate = (pagenumber: number) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", (pagenumber + 1).toString());
    setSearchParams(newParams);
  };

  return (
    <div>
      <Carousel />
      <div className="grid grid-cols-1 divide-y-4 divide-black">
        <div>
          <h1 className="p-3 text-xl font-bold">PROJECT IDEA</h1>
        </div>
        <div className="p-3">
          {currBlogs.map(({ image, alt, headline, description }) => (
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

export { ProjectIdeas };
