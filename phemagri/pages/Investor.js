import {useState} from 'react'
import {HiBell} from 'react-icons/hi'
import { FaIndustry, FaMoneyBill, FaUser } from 'react-icons/fa'
import { HiChartSquareBar } from 'react-icons/hi'
import { FaTachometerAlt} from 'react-icons/fa'
import {lineChartOptions, lineChartData, scatterChartData, scatterChartOptions} from '../shared/DummyData'
import { Line, Scatter } from 'react-chartjs-2';
import ChartCard from '../components/ChartCard'
import DataCard from '../components/DataCard'

function Investor() {
    const [user, setUser] = useState('User')

    return (
      <div>
        {/* Menu Bar */}
        <div
          className="
        w-full
        flex
        justify-between <ChartCard 
                    renderItem={() => <Pie data={pieChartData} title={'crop coverage by acerage'} />} 
                />
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
              Welcome back {user}!
            </p>
            {/* Notification */}
            <button><HiBell className="w-6 h-6 text-dark-green" /></button>

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
            
            <button className="md:flex md:pt-12 md:space-x-3 items-center">
              <FaUser className="w-6 h-6 text-gray-100" />
              <p className="hidden md:flex text-gray-100">My Account</p>
            </button>
            <button className="md:flex md:space-x-3 items-center">
              <FaTachometerAlt className="w-6 h-6 text-light-yellow" />
              <p className="hidden md:flex text-light-yellow">Dashboard</p>
            </button>
            <button className="md:flex md:space-x-3 items-center">
              <HiChartSquareBar className="w-6 h-6 text-gray-100" />
              <p className="hidden md:flex text-gray-100">Market trends</p>
            </button>
            <button className="md:flex md:space-x-3 items-center">
              <FaMoneyBill className="w-6 h-6 text-gray-100" />
              <p className="hidden md:flex text-gray-100">Market Segments</p>
            </button>
            <button className="md:flex  md:space-x-3 items-center">
              <FaIndustry className="w-6 h-6 text-gray-100" />
              <p className="hidden md:flex text-gray-100">Establishments</p>
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
                  <Scatter
                    height={160}
                    data={scatterChartData}
                    options={scatterChartOptions}
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
                  <Scatter
                  height={110}
                    data={scatterChartData}
                    options={scatterChartOptions}
                  />
                )}
              />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Investor
