

import {useState} from 'react'
import { FaFileExcel,  FaUser, FaTachometerAlt, FaStore } from 'react-icons/fa'
import ChartCard from '../components/ChartCard'
import DataCard from '../components/DataCard'
import { HiUserGroup, HiBell, HiLogout } from 'react-icons/hi'
import {Line} from 'react-chartjs-2'
import {lineChartData,lineChartOptions, multiAxisOptions, multiAxisData} from '../shared/DummyData'

function InputProvider() {

    const [user, setUser] = useState('User')

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
            <div className="w-8 h-8 rounded-full flex center-content bg-dark-maroon">
              <p className="text-gray-100 text-lg font-semibold capitalize">{user[0]}</p>
            </div>
            {/* Welcome user */}
            <p className="text-base md:flex hidden text-darker-green">
              Welcome back!
            </p>

            {/* Notification */}
            <button><HiBell className="w-6 h-6 text-dark-green" /> </button>

            {/* Logout */}
            <a href="/" className="flex center-content space-x-2 p-2 rounded-md bg-dark-green">
              <p className="text-base font-semibold text-gray-100">logout</p>
              <HiLogout className="w-6 h-6 text-gray-100"/>
            </a>
            
          </div>
        </div>
      
      {/*  container */}
      <div className=" md:h-screen flex justify-between items-start w-full h-full bg-gray-100">
          {/* Menu Strip */}
          <div className="  md:w-[15%] md:px-4 md:max-h-screeen w-[12%] h-screen bg-dark-green space-y-8 px-2  py-4 flex-col justify-evenly items-center">
            <p className="hidden md:flex md:pt-4 text-gray-100 font-bold">Input Provider View</p>
            <button className="md:flex  md:space-x-3 items-center">
              <FaUser className="w-6 h-6 text-gray-100" />
              <p className="hidden md:flex text-gray-100">My Account</p>
            </button>
            <button className="md:flex md:space-x-3 items-center">
              <FaTachometerAlt className="w-6 h-6 text-light-yellow" />
              <p className="hidden md:flex text-light-yellow">Dashboard</p>
            </button>
            <button className="md:flex md:space-x-3 items-center">
              <HiUserGroup className="w-6 h-6 text-gray-100" />
              <p className="hidden md:flex text-gray-100">Farmer Saccos</p>
            </button>
            <button className="md:flex md:space-x-3 items-center">
              <FaStore className="w-6 h-6 text-gray-100" />
              <p className="hidden md:flex text-gray-100">Inputs Inventory</p>
            </button>
            <button className="md:flex  md:space-x-3 items-center">
              <FaFileExcel className="w-6 h-6 text-gray-100" />
              <p className="hidden md:flex text-gray-100">Input Records</p>
            </button>
          
          </div>

          {/* Charts container*/}

          <div className="flex-col w-[79%] space-y-10 mx-auto center-content h-auto">
            {/* Data Cards */}
            <div className={"md:hidden"}>
              <ChartCard
                renderItem={() => (
                  <DataCard
                    cost={2344}
                    description={"Cost of units farm input sold"}
                    delta={81}
                    state={true}
                  />
                )}
              />

              <ChartCard
                renderItem={() => (
                  <DataCard
                    cost={1240}
                    description={"Inputs on Demand"}
                    delta={35}
                    state={true}
                  />
                )}
              />

              <ChartCard
                renderItem={() => (
                  <DataCard
                    cost={389750}
                    description={"Profits Accrude p/a"}
                    delta={19}
                    state={true}
                  />
                )}
              />

              <ChartCard
                renderItem={() => (
                  <DataCard
                    cost={4500}
                    description={"Happy Farmers"}
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
                    description={"Cost of units farm input sold"}
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
                    description={"Inputs on demand"}
                    delta={35}
                    state={true}
                  />
                )}
              />

              <ChartCard
                renderItem={() => (
                  <DataCard
                    cost={790}
                    description={"Profits Accrude p/a"}
                    delta={19}
                    state={true}
                  />
                )}
              />

              <ChartCard
                renderItem={() => (
                  <DataCard
                    cost={1200}
                    description={"Cost of Input per capita"}
                    delta={23}
                    state={false}
                  />
                )}
              />
            </div>

            {/* Line & scatter Charts md break point */}
            <div className="hidden md:flex md:h-auto space-x-6">
              <ChartCard
                renderItem={() => (
                  <Line
                    data={lineChartData}
                    options={lineChartOptions}
                  />
                )}
              />
              <ChartCard
                renderItem={() => (
                  <Line
                    height={160}
                    data={multiAxisData}
                    options={multiAxisOptions}
                  />
                )}
              />
            </div>

            {/* Line & Scatter Charts for sm break point  */}
            <div className={"md:hidden"}>
              <ChartCard
                renderItem={() => (
                  <Line
                    height={67}
                    data={lineChartData}
                    options={lineChartOptions}
                  />
                )}
              />
              <ChartCard
                renderItem={() => (
                  <Line
                  height={110}
                    data={multiAxisData}
                    options={multiAxisOptions}
                  />
                )}
              />
            </div>
          </div>
        </div>
        
        </div>
    )
}

export default InputProvider
