import { HiBell } from "react-icons/hi";
import { useState, useEffect } from "react";
import { HiLogout } from "react-icons/hi";
import ChartCard from "../components/ChartCard";
import { FaUser, FaTachometerAlt, FaCog, FaLeaf } from "react-icons/fa";
import {
  barChartData,
  barChartOptions,
  groupedBarOptions,
  groupedBarData,
} from "../shared/DummyData";

import { Bar } from "react-chartjs-2";
import DataCard from "../components/DataCard";

function Farmer() {
  const [user, _] = useState("User");
  const [selected, setSelected] = useState(2);

  const handleSelect = (e) => {
    setSelected(e.selected);
  };

  return (
    <div>
      {/* Menu Bar */}
      <div
        className="
        w-full
        flex
        justify-between
        items-center
        p-4
        bg-gray-100 
        border-b-2
        border-gray-400

        "
      >
        {/* Logo */}
        <p className="font-bold text-light-yellow text-lg">
          Phema<span className="text-dark-maroon">-</span>
          <span className="text-dark-green">Agri</span>
        </p>

        <div className="flex space-x-3 items-center">
          {/* Avatar */}
          <div>
            <span
              onClick={() => {}}
              className="w-8 h-8 rounded-full flex center-content bg-dark-maroon"
            >
              <a
                href="#"
                className="text-gray-100 text-lg font-semibold capitalize"
              >
                {user[0]}
              </a>
            </span>
          </div>

          {/* User email */}
          <p className="text-base md:flex hidden text-darker-green">Welcome back!</p>
          {/* Notification */}
          <button>
            <HiBell className="w-6 h-6 text-dark-green" />
          </button>
          {/* Logout */}
          <a
            href="/"
            className="flex center-content space-x-2 p-2 rounded-md bg-dark-green"
          >
            <p className="text-base font-semibold text-gray-100">logout</p>
            <HiLogout className="w-6 h-6 text-gray-100" />
          </a>
        </div>
      </div>

      {/*  container */}
      <div className=" md:h-screen flex justify-between items-start w-full h-full bg-gray-100">
        {/* Menu Strip */}
        <div className="  md:w-[15%] md:px-4 md:max-h-screeen w-[12%] h-screen bg-dark-green space-y-8 px-2  py-4 flex-col justify-evenly items-center">
          <p className="hidden md:flex md:pt-4 text-gray-100 font-bold">
            Farmer View
          </p>
          <button className="md:flex md:space-x-3 items-center">
            <FaUser className="w-6 h-6 text-gray-100" />
            <p className="hidden md:flex text-gray-100"> My Account</p>
          </button>
          <button className="md:flex md:space-x-3 items-center">
            <FaTachometerAlt className="w-6 h-6 text-light-yellow" />
            <p className="hidden md:flex text-light-yellow">Dashboard</p>
          </button>
          <button className="md:flex md:space-x-3 items-center">
            <FaCog className="w-6 h-6 text-gray-100" />
            <p className="hidden md:flex text-gray-100">Settings</p>
          </button>
          <button className="md:flex md:space-x-3 items-center">
            <FaLeaf className="w-6 h-6 text-gray-100" />
            <p className="hidden md:flex text-gray-100">Loans</p>
          </button>
        </div>

        {/* Charts container*/}

        <div className="flex-col w-[79%] space-y-10 mx-auto center-content h-auto">
          {/* Data Cards */}
          <div className={"md:hidden"}>
            <ChartCard
              renderItem={() => (
                <DataCard
                  cost={234}
                  description={"Monthly expenditure on farm inputs"}
                  delta={70}
                  state={true}
                />
              )}
            />

            <ChartCard
              renderItem={() => (
                <DataCard
                  cost={13700}
                  description={"Weekly income from produce"}
                  delta={35}
                  state={true}
                />
              )}
            />

            <ChartCard
              renderItem={() => (
                <DataCard
                  cost={750}
                  description={"Interest Accrude last month"}
                  delta={9}
                  state={true}
                />
              )}
            />

            <ChartCard
              renderItem={() => (
                <DataCard
                  cost={4500}
                  description={"Cost of Livestock Immunization"}
                  delta={25}
                  state={false}
                />
              )}
            />
          </div>

          <div className="hidden md:flex space-x-6">
            <ChartCard
              renderItem={() => (
                <DataCard
                  cost={234}
                  description={"Monthly expenditure on farm inputs"}
                  styling={"h-[20%]"}
                  delta={70}
                  state={true}
                />
              )}
            />

            <ChartCard
              renderItem={() => (
                <DataCard
                  cost={13700}
                  description={"Weekly income of produce"}
                  delta={35}
                  state={true}
                />
              )}
            />

            <ChartCard
              renderItem={() => (
                <DataCard
                  cost={750}
                  description={"Interest Accrude last month"}
                  delta={9}
                  state={true}
                />
              )}
            />

            <ChartCard
              renderItem={() => (
                <DataCard
                  cost={4500}
                  description={"Cost of Livestock Immunization"}
                  delta={25}
                  state={false}
                />
              )}
            />
          </div>

          {/* Bar & grouped Bar Chart md bkp */}
          <div className="hidden md:flex md:h-auto space-x-6">
            <ChartCard
              renderItem={() => (
                <Bar data={barChartData} options={barChartOptions} />
              )}
            />

            <ChartCard
              renderItem={() => (
                <Bar
                  data={groupedBarData}
                  height={160}
                  options={groupedBarOptions}
                />
              )}
            />
          </div>

          {/* Bar & grouped Bar Chart sm bkp */}

          <div className={"md:hidden"}>
            <ChartCard
              renderItem={() => (
                <Bar
                  data={barChartData}
                  height={67}
                  options={barChartOptions}
                />
              )}
            />

            <ChartCard
              renderItem={() => (
                <Bar
                  data={groupedBarData}
                  height={110}
                  options={groupedBarOptions}
                />
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Farmer;
