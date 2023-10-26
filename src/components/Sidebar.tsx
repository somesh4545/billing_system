import React from "react";

const images = [
  {
    link: "/dashboard",
    alt: "Dashboard Icon",
    src: "/svgs/dashboard.icon.svg",
    activeSrc: "/svgs/dashboard-light.icon.svg",
  },
  {
    link: "/customers",
    alt: "Customers Icon",
    src: "/svgs/customers.icon.svg",
  },
];

export default function Sidebar() {
  return (
    <div className="h-screen bg-white flex flex-col justify-center items-center border-r">
      {images.map((image, _) => (
        <div
          key={image.alt}
          onClick={() => (location.href = image.link)}
          className={
            "flex cursor-pointer items-center justify-center w-14 h-14 " +
            (location.pathname == image.link ||
            (location.pathname == "/" && _ == 0)
              ? "bg-[#383838] rounded-2xl"
              : "")
          }
        >
          <img
            width={24}
            height={24}
            src={
              location.pathname == image.link ||
              (location.pathname == "/" && _ == 0)
                ? image.activeSrc ?? image.src
                : image.src
            }
            alt={image.alt}
          />
        </div>
      ))}
    </div>
  );
}
