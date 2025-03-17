import React from "react";

const TaskList = () => {
  return (
    <div
      id="tasklist"
      className="flex overflow-x-scroll  flex-nowrap gap-5  align-center justify-start h-[55%] w-full py-5  mt-10 rounded-2xl "
    >
      <div className="h-full flex-shrink-0 w-[300px] p-5 bg-red-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm rounded-xl px-3 py-1">High</h3>
            <h4 className="text-sm">20 mar 2025 </h4>
        </div>
        <h2 className="mt-5 text-2xl font-2xl">Make a youtube video</h2>
        <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum mollitia veritatis amet voluptatibus quod iure.</p>
      </div>
      <div className="h-full flex-shrink-0 w-[300px] p-5 bg-blue-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm rounded-xl px-3 py-1">High</h3>
            <h4 className="text-sm">20 mar 2025 </h4>
        </div>
        <h2 className="mt-5 text-2xl font-2xl">Make a youtube video</h2>
        <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum mollitia veritatis amet voluptatibus quod iure.</p>
      </div>
      <div className="h-full flex-shrink-0 w-[300px] p-5 bg-green-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm rounded-xl px-3 py-1">High</h3>
            <h4 className="text-sm">20 mar 2025 </h4>
        </div>
        <h2 className="mt-5 text-2xl font-2xl">Make a youtube video</h2>
        <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum mollitia veritatis amet voluptatibus quod iure.</p>
      </div>
      <div className="h-full flex-shrink-0 w-[300px] p-5 bg-yellow-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm rounded-xl px-3 py-1">High</h3>
            <h4 className="text-sm">20 mar 2025 </h4>
        </div>
        <h2 className="mt-5 text-2xl font-2xl">Make a youtube video</h2>
        <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum mollitia veritatis amet voluptatibus quod iure.</p>
      </div>
    </div>
  );
};

export default TaskList;
