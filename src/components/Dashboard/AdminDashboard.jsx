import React from "react";
import Header from "../other/Header";
import Createtask from "../other/Createtask";
import AllTask from "../other/AllTask";

const AdminDashboard = () => {
  return (
    <div className="h-screen w-full p-10 bg-gray-900 text-white">
      <Header />
      <Createtask/>
      <AllTask/>
    </div>
  );
};

export default AdminDashboard;
