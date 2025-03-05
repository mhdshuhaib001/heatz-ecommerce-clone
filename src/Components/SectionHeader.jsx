import React from "react";

function SectionHeader({ title, description, titleClasses = "", descriptionClasses = "" }) {
  return (
    <div className="flex flex-col md:flex-row justify-between mb-8">
      <div className="md:w-1/2 mb-4 md:mb-0">
        <h1 className={`text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight ${titleClasses}`}>
          {title}
        </h1>
      </div>
      <div className="md:w-1/3">
        <p className={`text-xs sm:text-sm text-gray-400 ${descriptionClasses}`}>
          {description}
        </p>
      </div>
    </div>
  );
}

export default SectionHeader;
