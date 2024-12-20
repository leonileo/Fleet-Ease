
const SkeletonCard = () => {
  return (
  <div className={`w-full animate-pulse duration-1000 bg-[rgba(217,217,217,0.20)] rounded p-3 md:min-h-[9vh] flex items-center gap-5 border`}>
    <div>
        <span className={`text-xl flex gap-4 items-center justify-center sm:w-[80px] sm:h-[80px] w-[50px] h-[50px] sm:p-5 p-1 rounded-full`}>
            <div className="num w-4 h-[90%] block bg-gray-300 rounded"></div>
            <div className="num w-4 h-[90%] block bg-gray-300 rounded"></div>
        </span>
    </div>
    <p className={`text-xl w-full bg-gray-300 h-4 rounded-full`}></p>
    </div>
    )
}

export default SkeletonCard