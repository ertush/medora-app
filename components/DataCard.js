import {FaArrowDown ,FaArrowUp} from 'react-icons/fa'

function DataCard({cost, description, state, delta, renderIcon, children}) {
    return (
        <div className="flex-col center-content space-y-2 p-4">
                        <div className="flex space-x-2 justify-center">
                        <h2 className="text-2xl font-bold text-dark-green  "><span className="text-base font-extrbold text-light-yellow">KSH</span> {cost}</h2>
                        {
                          !renderIcon && ( state ? <><FaArrowUp className="text-green-500 w-8 h-8"/> <p>{delta}{"% gain"}</p></> : <><FaArrowDown className="text-red-500 w-8 h-8"/><p>{delta}{"% loss"}</p></> )
                        }

                        {
                            renderIcon && <div className="w-9 h-9 bg-light-green flex center-content">{renderIcon()}</div>
                        }
                        
                        </div>
                        <p className="text-base font-thin pt-2 text-center text-dark-maroon">{description}</p>
                        {children}
        </div>
    )
}

export default DataCard
