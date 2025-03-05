const FeaturedProduct = ({ image }) => {
    return (
      <div className="col-span-1">
        <div className="relative h-full w-full overflow-hidden rounded-lg">
          <img
            src={image}
            alt="Featured product"
         
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <button className="bg-green-400 text-black px-4 py-2 rounded-full text-sm font-medium flex items-center">
              Shop Now <ChevronRight className="h-4 w-4 ml-1" />
            </button>
          </div>
        </div>
      </div>
    );
  };