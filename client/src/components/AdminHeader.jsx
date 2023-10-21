import React from "react";

const AdminHeader = ({title }) => {
  return (
    <div className="mb-10">
      {/* <p className="text-gray-400">{category}</p> */}
      <p className="text-3xl font-extrabold tracking-tight text-slate-900 mt-4 pl-4">
        {title}
      </p>
    </div>
  );
};

export default AdminHeader
