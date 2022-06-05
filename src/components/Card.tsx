interface content {
  image: string;
  alt: string;
  headline: string;
  description: string;
}

function Card({image, alt, headline, description}: content) {
  return (
    <div>
      <div className="flex justify-center p-3">
        <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
          <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={image} alt={alt} />
          <div className="p-6 flex flex-col justify-start">
            <h5 className="text-gray-900 text-xl font-medium mb-2">{headline}</h5>
            <p className="text-gray-700 text-base mb-4">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Card };
