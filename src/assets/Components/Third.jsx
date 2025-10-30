import React from "react";
import Photoshope from './imgs/photoshop.png'
import Illustrator from './imgs/illustrator (1).png'
import Xs from './imgs/xd.png'
import Indesign from './imgs/indesign (1).png'
import India from './imgs/india.png'
import America from './imgs/flag.png'

function Third() {
  return (
    <div className="grid grid-cols-2 h-70 mt-6 gap-5">
      <div className=" flex flex-col gap-7 justify-center ">
        <div className="h-18 bg-zinc-900 border border-zinc-700 rounded-2xl flex items-center p-2">
          <h1 className=" Design border-r-2 pr-3">Design Tools</h1>
          <div className="flex gap-6 justify-center p-3">
                <img src={Photoshope} alt="" className="h-8" />
                <img src={Illustrator} alt="" className="h-8" />
                <img src={Xs} alt="" className="h-8" />
                <img src={Indesign} alt=""  className="h-8"/>
          </div>
        </div>
        <div className="h-18 bg-zinc-900 border border-zinc-700 rounded-2xl flex items-center p-2">
          <h1 className="border-r-2 pr-3">Editing Tools</h1>
          <div className="flex gap-6 justify-center p-3">
                <img src="https://w7.pngwing.com/pngs/942/865/png-transparent-adobe-premiere-pro-cc-14-3-hd-logo.png" alt="" className="h-8 rounded-2xl" />
                <img src={Illustrator} alt="" className="h-8" />
                <img src={Xs} alt="" className="h-8" />
          </div>
        </div>
        <div className="h-18 bg-zinc-900 border border-zinc-700 rounded-2xl flex items-center p-2">
          <h1 className="border-r-2 pr-6">Languages</h1>
          <div className="flex gap-6 justify-center p-5">
                <img src={India} alt="" className="h-8" />
                <img src={America} alt="" className="h-8" />
          </div>
        </div>
      </div>
      <div className="bg-zinc-900 rounded-2xl">
        <div className="p-3 px-4">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-normal">High School</h1>
                <p className="bg-black px-3 py-1 rounded-xl text-zinc-600" >2017</p>
            </div>
            <div className="">
                <p className="text-zinc-600">Humanities <br />Delhi Cantonment,India</p>
            </div>
            <hr />
        </div>
        <div className="px-4">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-normal">Diploma</h1>
                <p className="bg-black px-3 py-1 rounded-xl text-zinc-600" >2017-18</p>
            </div>
            <div className="">
                <p className="text-zinc-600">Animation and Fraphic Design <br />Delhi, India</p>
            </div>
            <hr />
        </div>
        <div className="py-2 px-4">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-normal">Graduation</h1>
                <p className="bg-black px-3 py-1 rounded-xl text-zinc-600" >2017-21</p>
            </div>
            <div className="">
                <p className="text-zinc-600">Bachelor of fine Arts <br />IGNOU Delhi, India</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Third;
