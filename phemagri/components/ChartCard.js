function ChartCard({renderItem, title, styling}) {
    return (
      
        <>
          {
                title && <h5 className="text-gray-500 w-auto font-bold text-base text-center">{title}</h5>
          }
        <div className={` ${styling && styling } w-full h-auto flex-col justify-evenly items-center p-4 rounded-lg mt-4 shadow-md bg-white`}>
          
            {renderItem()}
        </div>
        </>
    )
}

export default ChartCard
