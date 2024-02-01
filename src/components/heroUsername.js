"use client";

import { useState } from "react";

export default function HeroUsername() {
  const [usernameValue, setusernameValue] = useState("");

  const handleBlur = () => {
    // Remove spaces between words
    setusernameValue(usernameValue.replace(/\s+/g, ""));
  };
  return (
    <div className="max-w-lg mx-auto">
      <div className="flex bg-base-100 px-0 justify-between rounded-full">
        <div className="inline-flex items-center ps-6">
          <p className="font-semibold text-base">OnlyLinks.site/</p>
          <input
            type="text"
            placeholder="username"
            id="username"
            autoComplete="false"
            value={usernameValue}
            className="input w-full text-base ps-0 pe-2 rounded-none focus:outline-none focus:border-none"
            onChange={(e) => setusernameValue(e.target.value)}
            onBlur={handleBlur}
          />
        </div>
        <button className="btn btn-primary text-white px-6 text-md rounded-full">
          <span className="hidden md:inline">Join for Free</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6">
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
