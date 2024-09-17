import { Link } from "react-router-dom";
import Logo from "../../assets/react.svg";

const franchiseList = [
  { id: 1, name: "Franchise 1", logo: Logo },
  { id: 2, name: "Franchise 2", logo: Logo },
  { id: 3, name: "Franchise 3", logo: Logo },
  { id: 4, name: "Franchise 4", logo: Logo },
  { id: 5, name: "Franchise 5", logo: Logo },
];

const TopFranchise = () => {
  return (
    <>
      <div className="flex flex-col">
        <h2 className="font-bold text-xl text-teal-600 underline decoration-2 underline-offset-8">
          Top Franchise{" "}
          <span className="text-lg text-slate-700 font-normal">
            of the month
          </span>
        </h2>
        {/* <div className="flex justify-between items-center flex-wrap"> */}
        <div className="grid grid-cols-1 gap-4 xsm:grid-cols-2 sm:grid-cols-3 md:grid-cols-5 my-6 xsm:my-0">
        {franchiseList.map((data) => (
            <Link key={data.id} to="">
          <div className="flex flex-col items-center gap-4 my-5 xsm:my-10">
            <div className="flex justify-center items-center h-36 w-36 p-4 rounded-full bg-slate-200 shadow-xl">
              <img src={data.logo} alt="" className="h-full w-full" />
            </div>
            <h1 className="text-lg">{data.name}</h1>
          </div>
          </Link>
        ))}
        </div>
      </div>
    </>
  );
};

export default TopFranchise;
