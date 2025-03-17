import React from 'react'

const Createtask = () => {
  return (
    <div>
            <div className="p-6 bg-gray-800 mt-7 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-gray-200 mb-4">Create New Task</h2>
        <form className="flex w-full flex-wrap items-start justify-between gap-6">
          {/* Left Side */}
          <div className="w-1/2 space-y-4">
            <div>
              <h3 className="text-sm text-gray-300 mb-1">Task Title</h3>
              <input 
                className="text-sm py-2 px-3 w-4/5 rounded-lg outline-none bg-gray-700 border border-gray-600 focus:border-emerald-400 transition duration-300"
                type="text" 
                placeholder="Enter task title"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-1">Date</h3>
              <input 
                className="text-sm py-2 px-3 w-4/5 rounded-lg outline-none bg-gray-700 border border-gray-600 focus:border-emerald-400 transition duration-300"
                type="date"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-1">Assign To</h3>
              <input 
                className="text-sm py-2 px-3 w-4/5 rounded-lg outline-none bg-gray-700 border border-gray-600 focus:border-emerald-400 transition duration-300"
                type="text" 
                placeholder="Employee name"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-1">Category</h3>
              <input 
                className="text-sm py-2 px-3 w-4/5 rounded-lg outline-none bg-gray-700 border border-gray-600 focus:border-emerald-400 transition duration-300"
                type="text" 
                placeholder="Design, Dev, etc."
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="w-2/5 flex flex-col">
            <h3 className="text-sm text-gray-300 mb-1">Description</h3>
            <textarea 
              className="w-full h-44 text-sm py-2 px-4 rounded-lg outline-none bg-gray-700 border border-gray-600 focus:border-emerald-400 transition duration-300 resize-none"
              placeholder="Enter task details..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button 
            className="bg-emerald-500 py-3 px-5 rounded-lg text-sm font-medium mt-4 w-full 
                       hover:bg-emerald-600 transition duration-300 shadow-md transform hover:scale-105">
            Create Task
          </button>
        </form>
      </div>
    </div>
  )
}

export default Createtask
