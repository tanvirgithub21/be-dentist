import { Link } from "react-router-dom";
import { BsFillCartCheckFill } from "react-icons/bs";

const SingleServices = ({services}) => {

  const {details} = services;
  
  let sliseDetails;

  if(details.length > 120){
    sliseDetails = (details.slice(0, 120)+"...");
  }
  else{
    sliseDetails = details;
  }
  

/*   const [sliseDetails, setSliseDetails] = useState("") ==========================>>PROBLEM

  if(details.length > 120){
    setSliseDetails = (details.slice(0, 120)+"...");
  }
  else{
  setSliseDetails(details)
} */

  return (
    <div className="min-w-[250px] w-full rounded overflow-hidden shadow-lg">
      <div className="imgBox min-w-[250px] w-full h-60">
        <img
          className=" object-fill w-full h-full p-2 rounded-2xl"
          src={services?.img}
          alt="Sunset in the mountains"
        />
      </div>
      <div className="px-6 py-4">
        <div className="nameAndPrice flex justify-between items-center text-lg">
          <div className="font-bold mb-2">
            {services?.servicesName}
          </div>
          <div className="font-bold mb-2">
            <span>$</span> {services?.price}
          </div>
        </div>

        <p className="text-gray-700 text-base">{sliseDetails}</p>
      </div>
      <div className="px-6 pt-4 pb-4">
        <Link className="px-2 py-1 font-semibold text-white rounded-lg bg-slate-600 hover:bg-slate-900 ease-in-out duration-300  inline-block inline-flex items-center" to={`/services/${services?.id}`} > checkout{" "} <span className="ml-2"> <BsFillCartCheckFill /> </span>{" "} </Link>
      </div>
    </div>
  );
};

export default SingleServices;
