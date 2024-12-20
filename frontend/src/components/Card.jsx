/* eslint-disable react/prop-types */

const Card = ({ data, id }) => {
  return (
    <div id={id} className={`transition-all w-full group bg-[rgba(217,217,217,0.20)] rounded p-3 md:min-h-[9vh] flex items-center gap-5 border ${data.boc} ${data.hover}`}>
        <div>
        <span className={`${data.bgc} group-hover:border font-bold text-${data.tc} sm:text-2xl text-xl flex items-center justify-center sm:w-[80px] sm:h-[80px] w-[50px] h-[50px] p-5 rounded-full`}>{data.value}</span>
        </div>
        <p className={`${id !== 2 && "group-hover:text-white" } sm:text-2xl text-xl font-semibold w-full`}>{data.title}</p>
    </div>
  )
}

export default Card