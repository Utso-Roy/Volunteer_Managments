import React from "react";

const Container = ({ children }) => {
  return (
    <div className="px-4 sm:px-8 w-full lg:px-16 xl:px-20 2xl:px-24 mx-auto">
      {children}
    </div>
  );
};

export default Container;
