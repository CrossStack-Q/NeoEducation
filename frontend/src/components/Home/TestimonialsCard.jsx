import React from "react";

function TestimonialsCard() {
  return (
    <div className="bg-[#F3F8FC] col-span-1 p-4 rounded-md">
      <div className="flex items-center">
        <div className="w-10 h-10 bg-black rounded-full"></div>
        <div className="flex flex-col justify-center p-2">
          <span>Neo Bhai</span>
          <span>Software Engineer</span>
        </div>
      </div>
      <p className="py-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad itaque reprehenderit quas Doloremque excepturi temporibus magni sed sequi! Nihil optio ducimus in vero. Saepe, nulla!
      </p>
      <p className="text-xl">⭐⭐⭐⭐⭐</p>
    </div>
  );
}

export default TestimonialsCard;
