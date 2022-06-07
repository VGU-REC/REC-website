interface content {
  headline: string;
  description: string;
}

function CardNoImage({headline, description}: content) {
  return (
    <div>
      <div className="flex justify-center p-3">
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
          <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">{headline}</h5>
          <p className="text-gray-700 text-base mb-2">
            {description}
          </p>
          <button type="button" className="inline-block px-6 py-2.5 bg-orange-400 text-white font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-600 hover:shadow-lg focus:bg-orange-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Read more</button>
        </div>
      </div>
    </div>
  );
}

export { CardNoImage };
