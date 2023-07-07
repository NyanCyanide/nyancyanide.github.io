import React from "react";

type CardProps = {
  title: string;
  image: string;
  link: string;
  type: string;
};

const Card: React.FC<CardProps> = ({ title, image , link, type}) => {
  return (
    <>
      <a
      href = {link}
        data-type={type}
        className="relative interactable overflow-hidden group"
        target="_blank"
      >
        <div className="aspect-w-16 aspect-h-9 bg-gray-300">
          <img
            className="group-hover:scale-125 duration-[2000ms]"
            src={image}
            alt=""
          />
        </div>
        <div className="">
          <div className="absolute font-mono font-bold bottom-0 left-0 bg-gradient-to-b from-transparent via-transparent to-slate-950 h-full w-full flex flex-col justify-end px-2 py-1">
            <p className="text-2xl ">{title}</p>
          </div>
        </div>
      </a>
    </>
  );
};

export default Card;