import React from "react";
import Card from "./Card";
import TestimonialsCard from "./TestimonialsCard";

function Home() {
  return (
    <div>
      <div className="flex pt-36 flex-col items-center bg-[#F3F8FC]">
        <span className="bg-gray-200 py-2 px-4 rounded-full">
          Explore best abroad study facilities
        </span>
        <span className="font-bold text-6xl leading-20 px-48 text-center py-4">
          Find your perfect university abroad facilities
        </span>
        <span className="text-lg text-center px-60 py-4">
          NeoEducation is an online platform designed specifically for students
          wishing to study to facilitate the university admission and
          registration process
        </span>

        <div className="flex items-center space-x-4 py-4">
          <span className="flex">
            <div className="w-10 h-10 bg-black rounded-full"></div>
            <div className="w-10 h-10 bg-green-400 rounded-full -ml-7"></div>
            <div className="w-10 h-10 bg-red-400 rounded-full -ml-7"></div>
            <div className="w-10 h-10 bg-black rounded-full -ml-7"></div>
          </span>
          <span>Trusted already 2k peoples</span>
        </div>
        <div className="flex space-x-4 py-4">
          <p className="border-black border-2 text-center px-4 py-2 font-bold rounded-xl">
            Learn more
          </p>
          <p className="bg-blue-500 text-white text-center px-4 py-2 font-bold rounded-xl">
            Get Started Now
          </p>
        </div>
        <div className="py-4">
          <p className="text-center text-3xl">
            <span>🎓</span>
            Find out best study destination
          </p>
          <div className="flex justify-around min-w-6xl py-2">
            <span className="flex flex-col items-center">
              <span className="text-7xl">🇮🇳</span>
              <span>India</span>
            </span>
            <span className="flex flex-col items-center">
              <span className="text-7xl">🇮🇳</span>
              <span>India</span>
            </span>
            <span className="flex flex-col items-center">
              <span className="text-7xl">🇮🇳</span>
              <span>India</span>
            </span>
            <span className="flex flex-col items-center">
              <span className="text-7xl">🇮🇳</span>
              <span>India</span>
            </span>
            <span className="flex flex-col items-center">
              <span className="text-7xl">🇮🇳</span>
              <span>India</span>
            </span>
            <span className="flex flex-col items-center">
              <span className="text-7xl">🇮🇳</span>
              <span>India</span>
            </span>
          </div>
        </div>
      </div>
      <div className="bg-white pt-20 text-center">
        <p className="text-4xl font-bold py-2">Join study abroad revolution</p>
        <p className="max-w-2xl py-2 mx-auto">
          Develop yourself with opportunities one to our local chapters. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Nobis, quo?
        </p>
      </div>
      <div className="grid grid-cols-4 gap-12 text-zinc-800 font-semibold pb-20 py-4">
        <span className="flex flex-col items-center px-6 py-10 col-span-1 bg-sky-100 border-2 border-zinc-800 rounded-md">
          <span className="text-5xl">100+</span>
          <span className="text-lg">University and Institutes</span>
        </span>
        <span className="flex flex-col items-center px-6 py-10 col-span-1 bg-blue-500 text-white rounded-md">
          <span className="text-5xl">150+</span>
          <span className="text-lg">Academic specialization</span>
        </span>
        <span className="flex flex-col items-center px-6 py-10 col-span-1 bg-sky-100 border-2 border-zinc-800 rounded-md">
          <span className="text-5xl">200k</span>
          <span className="text-lg">Students</span>
        </span>
        <span className="flex flex-col items-center px-6 py-10 col-span-1 bg-sky-100 border-2 border-zinc-800 rounded-md">
          <span className="text-5xl">15+</span>
          <span className="text-lg">Years of Experience</span>
        </span>
      </div>

      <div className="py-20 text-center">
        <p className="text-5xl leading-14 font-semibold">
          Most popular study destination
        </p>
        <p className="max-w-3xl mx-auto">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum ex
          maxime possimus recusandae ab hic, nostrum iste perspiciatis provident
          esse.
        </p>
        <div className="grid grid-cols-3 grid-rows-2 gap-12 py-6">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <span className="bg-blue-500 px-4 py-2 font-bold text-lg text-white rounded-md">
          View all destination
        </span>
      </div>

      <div className="flex flex-col text-center py-20">
        <span className="text-5xl font-semibold py-2">Testimonials</span>
        <span>
          Roam through our detailed breakdown of the study destinations around
          the world!
        </span>
        <span className="pb-20">
          See what other students are reading this month.
        </span>

        <div className="grid grid-cols-3 grid-rows-2 gap-8 text-left">
          <TestimonialsCard />
          <TestimonialsCard />
          <TestimonialsCard />
          <TestimonialsCard />
          <TestimonialsCard />
          <TestimonialsCard />
        </div>
      </div>
      <div className="text-center flex flex-col">
        <span className="text-5xl font-semibold py-2">
          Explore Articles about study
        </span>
        <span className="text-5xl font-semibold py-2">aboard countries</span>
      </div>
    </div>
  );
}

export default Home;
