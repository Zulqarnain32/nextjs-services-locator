import React from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {/* <h1>Admin layout</h1> */}

      {/* REQUIRED: child pages render here */}
      <div>{children}</div>
    </div>
  );
};

export default AdminLayout;
