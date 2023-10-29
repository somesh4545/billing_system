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
  {
    link: "/services",
    alt: "Services Icon",
    src: "/svgs/services.icon.svg",
    scale: 2,
    activeSrc: "/svgs/services-light.icon.svg",
  },
];

export default function Sidebar() {
  return (
    <div className="h-full min-h-screen bg-white gap-2 flex flex-col justify-center items-center border-r">
      {images.map((image, _) => (
        <div
          key={image.alt}
          onClick={() => (location.href = image.link)}
          className={
            "flex cursor-pointer items-center justify-center w-14 h-14 " +
            (location.pathname == image.link ||
            (location.pathname == "/" && _ == 0)
              ? "bg-[#434343] rounded-2xl"
              : "")
          }
        >
          <div className="w-6 h-6 overflow-hidden grid place-items-center">
            <img
              style={{ transform: `scale(${image.scale})` }}
              src={
                location.pathname == image.link ||
                (location.pathname == "/" && _ == 0)
                  ? image.activeSrc ?? image.src
                  : image.src
              }
              alt={image.alt}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
