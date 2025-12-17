import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  // A "confused/lost" cat image
  const catImage =
    "https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=1000&auto=format&fit=crop";

  return (
    <div className="min-h-screen pt-24 pb-12 flex flex-col items-center justify-center px-6 text-center">
      {/* 1. Giant 404 Watermark */}
      <h1 className="text-[12rem] md:text-[16rem] leading-none font-black font-syne text-zinc-100 dark:text-zinc-900 select-none absolute z-0 opacity-50 pointer-events-none">
        404
      </h1>

      <div className="relative z-10 flex flex-col items-center max-w-lg mx-auto">
        {/* 2. Cat Image Card */}
        <div className="w-64 h-64 md:w-80 md:h-80 mb-8 rounded-full overflow-hidden border-4 border-white dark:border-zinc-800 shadow-2xl relative">
          <img
            src={catImage}
            alt="Confused Cat"
            className="w-full h-full object-cover"
          />
        </div>

        {/* 3. Text Content */}
        <h2 className="text-3xl md:text-5xl font-bold font-syne text-page-dark dark:text-page mb-4">
          Are you lost?
        </h2>

        <p className="text-lg md:text-xl font-sans text-muted mb-8 max-w-md">
          Looks like my cat knocked this page off the table. Let's get you back
          to safety.
        </p>

        {/* 4. Home Button */}
        <Link
          to="/"
          className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-page-dark dark:bg-page text-page dark:text-page-dark font-bold font-syne text-lg transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
