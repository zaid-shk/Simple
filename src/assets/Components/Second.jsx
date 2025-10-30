import React from "react";

function Second() {
  return (
    <div className="grid grid-cols-2 gap-5">
      <div className="border border-zinc-700 p-3 rounded-2xl bg-zinc-900">
        <div className="flex justify-between items-center p-2 border-b border-zinc-700">
          <div className="">
            <h1 className="text-2xl font-medium pb-1">Freelancer</h1>
            <p className="text-sm text-gray-500 font-medium">LOGO/Brand Designer</p>
          </div>
          <p className="bg-black rounded-xl text-gray-500 text-xs px-4 py-2">
            2021-now
          </p>
        </div>
        <div className="flex flex-col gap-1 py-2 px-2">
          <li className="text-sm ml-3 ">
            Worked on Diverse logo and brand identity projects.
          </li>
          <li className="text-sm ml-3 ">
            Collaborated with clients from multiple countries.
          </li>
          <li className="text-sm ml-3 ">
            Developed a versittle design skill set.
          </li>
          <li className="text-sm ml-3 ">
            Adapted to unique challenges and requirements.
          </li>
        </div>
      </div>
      <div className="border border-zinc-700 p-3 rounded-2xl bg-zinc-900">
        <div className="flex justify-between items-center p-2 border-b border-zinc-700">
          <div className="">
            <h1 className="text-2xl font-medium ">Meetzed</h1>
            <p className="text-sm text-gray-500 font-medium">Graphic Designer</p>
          </div>
          <p className="bg-black rounded-xl text-gray-500 text-xs px-4 py-2">
            2021-now
          </p>
        </div>
        <div className="flex flex-col gap-1 py-2 px-2">
          <li className="text-sm ml-3 ">
            Collaborated with clients from multiple countries.
          </li>
          <li className="text-sm ml-3 ">
            Developed a versittle design skill set.
          </li>
          <li className="text-sm ml-3 ">
            Adapted to unique challenges and requirements.
          </li>
        </div>
      </div>
    </div>
  );
}

export default Second;
