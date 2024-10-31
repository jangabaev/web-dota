import React from "react";

export const Card = ({
  photo,
  name,
  id,
}: {
  photo: string;
  name: string;
  id: number;
}) => {
  return (
    <div className="flex justify-center flex-col w-[145px]">
      <img src={`/img/${photo}`} alt="" className="w-full h-[78px]" />
      <p className="text-center text-textColor opacity-50 pt-[2px] pb-[4px]">
        {name}
      </p>
    </div>
  );
};
