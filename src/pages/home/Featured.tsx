import { useEffect, useState } from "react";
import { getService } from "../../service/Index";
import { Avatar } from "@mui/material";

type featuredPepleType = {
  id: number;
  avatar: string;
};

function Featured() {
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<featuredPepleType[]>([]);

  const getData = async () => {
    try {
      const response = await getService("featuredpeople");
      setData(response.data);
      setError(null);
    } catch (err: any) {
      setError(err.message);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 1500);
    // getData();
  }, []);

  console.log(data);
  console.log(error);

  return (
    <>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-4 py-6">
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-xl text-teal-600 underline decoration-2 underline-offset-8">
            People
          </h2>
          <div className="grid grid-cols-3 gap-2 py-4 h-40 overflow-hidden">
            {data.length > 0
              ? data.map((person) => (
                  <div
                    key={person.id}
                    className="flex items-center justify-center shadow-md border h-full lg:w-40 md:w-28 p-2 bg-slate-200 rounded-xl"
                  >
                    {loading ? (
                      <p>Loading...</p>
                    ) : error ? (
                      <p className="text-red-500">{error}</p>
                    ) : (
                      <Avatar
                        alt={person.id.toString()}
                        src={person.avatar}
                        sx={{ width: 80, height: 80 }}
                      />
                    )}
                  </div>
                ))
              : // If there's no data, render placeholders
                [...Array(3)].map((_, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center shadow-md h-full lg:w-40 md:w-28 p-2 bg-slate-200 rounded-xl"
                  >
                    {loading ? (
                      <p>Loading...</p>
                    ) : error ? (
                      <p className="text-red-500">Loading failed!</p>
                    ) : (
                      <p>No Data</p>
                    )}
                  </div>
                ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-xl text-teal-600 underline decoration-2 underline-offset-8">
            Platforms
          </h2>
          <div className="grid grid-cols-3 gap-2 py-4 h-40 overflow-hidden">
            <div className="flex items-center justify-center shadow-md h-full lg:w-40 md:w-28 p-2 bg-slate-200 rounded-xl"></div>
            <div className="flex items-center justify-center shadow-md h-full lg:w-40 md:w-28 p-2 bg-slate-200 rounded-xl"></div>
            <div className="flex items-center justify-center shadow-md h-full lg:w-40 md:w-28 p-2 bg-slate-200 rounded-xl"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Featured;
