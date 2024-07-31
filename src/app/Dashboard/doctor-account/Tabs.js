import React, { useContext, useState } from "react";
import { authContext } from "../../../../components/context/AuthContext";
import Link from "next/link";

const Tabs = ({ activeTab, setActiveTab }) => {
  const { dispatch } = useContext(authContext);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const handleDeleteAccount = () => {
    // Handle delete account logic here
  };

  return (
    <section className="px-4">
      <div className="flex flex-col justify-between gap-5 p-7 bg-white shadow-panelShadow items-center rounded-md">
        <div className="flex flex-col gap-1 w-full">
          <button
            onClick={() => setActiveTab("overview")}
            className={`${
              activeTab === "overview"
                ? "bg-blue-400 text-white"
                : "bg-transparent text-black"
            } w-full btn rounded-md py-2`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("appointments")}
            className={`${
              activeTab === "appointments"
                ? "bg-blue-400 text-white"
                : "bg-transparent text-black"
            } w-full btn rounded-md py-2`}
          >
            Appointments
          </button>
          <button
            onClick={() => setActiveTab("profile")}
            className={`${
              activeTab === "profile"
                ? "bg-blue-400 text-white"
                : "bg-transparent text-black"
            } w-full btn rounded-md py-2`}
          >
            Profile
          </button>
          <button
            onClick={() => setActiveTab("3dmodel")}
            className={`${
              activeTab === "3dmodel"
                ? "bg-blue-400 text-white"
                : "bg-transparent text-black"
            } w-full btn rounded-md py-2`}
          >
            3D Model
          </button>
        </div>
        <div className="flex flex-col gap-1 w-full pt-5">
          <div className="flex flex-col gap-2 w-full mt-3">
            <Link href="/">
              <button
                onClick={handleLogout}
                className="w-full bg-black text-white p-2 text-[16px] rounded-md font-bold"
              >
                Logout
              </button>
            </Link>
            <button
              onClick={handleDeleteAccount}
              className="w-full bg-red-500 text-white p-2 text-[16px] rounded-md font-bold"
            >
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tabs;
