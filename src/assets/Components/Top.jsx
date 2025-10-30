import React from "react";
import { Gamepad2 } from "lucide-react";
import { Tent } from "lucide-react";
import { TvMinimalPlay } from "lucide-react";
import Img from "../Components/imgs/2560-anime-one-piece.png";

function Top() {
  return (
    <div className="lg:grid lg:grid-cols-[30%_70%] flex flex-col items-center h-65 w-full">
      <div className="">
        <img src={Img} alt="" className="rounded-3xl h-50" />
      </div>
      <div className="flex flex-col gap-3">
        <div className="text-white bg-zinc-900 text-lg h-26 border p-3 border-zinc-700 w-full rounded-2xl mt-1">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
            sequi cumque quae dolore consectetur esse, saepe veritatis odit
            consequuntur ipsa.
          </p>
        </div>
        <div className="text-white bg-zinc-900 flex gap-4  p-4 items-center border border-zinc-700 mt-2 rounded-2xl">
          <h3 className="border-r-2 pr-5 ">Interests</h3>
          <h4 className="bg-black px-2 py-1 rounded-xl border border-zinc-600 flex items-center gap-2">
            <Gamepad2 size={20} />
            Gaming
          </h4>
          <h4 className="bg-black px-2 py-1 rounded-xl border border-zinc-600 flex items-center gap-2">
            <TvMinimalPlay size={20} />
            Movie
          </h4>
          <h4 className="bg-black px-2 py-1 rounded-xl border border-zinc-600 flex items-center gap-2">
            <Tent size={20} />
            Traviling
          </h4>
          <h4 className="bg-black px-2 py-1 rounded-xl border border-zinc-600">
            Etc
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Top;
