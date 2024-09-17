import { useState, useEffect } from "react";
import Slider from "react-slick";
import { getService } from "../../service/Index";

type luckyDrawWinnersType = {
    id: number;
    image: string;
    name: string;
}

const LuckyDrawWinners = () => {

    const [error, setError] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<luckyDrawWinnersType[]>([]);
  
    const getData = async () => {
      try {
        const response = await getService("topoffers");
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

    const CustomNextArrow = (props: any) => {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{
              ...style,
              display: "block",
              background: "teal",
              borderRadius: "50%",
              right: "10px",
            }}
            onClick={onClick}
          />
        );
      };
    
      const CustomPrevArrow = (props: any) => {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{
              ...style,
              display: "block",
              background: "teal",
              borderRadius: "50%",
              left: "10px",
              zIndex: "10",
            }}
            onClick={onClick}
          />
        );
      };

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        arrows: true,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        responsive: [
          {
            breakpoint: 1350,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            },
          },
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 425,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

  return (
    <>
       <div className="flex flex-col py-8 px-10 bg-teal-600">
        <h2 className="font-bold text-xl text-white underline decoration-2 underline-offset-8">
          Top 10 Lucky Draw Winners
        </h2>
        <Slider {...settings} className="px-6">
          {/* <div className="flex gap-4 items-center overflow-scroll no-scrollbar"> */}
          {data?.map((data) => (
            <div key={data.id} className="px-4">
              <div className="flex flex-col items-center gap-2 my-5 xsm:my-5">
            <div className="flex justify-center items-center h-32 w-32 rounded-full bg-slate-200 shadow-xl">
              <img src={data.image} alt="" className="h-full w-full rounded-full" />
            </div>
            <h1 className="text-lg text-white">{data.name}</h1>
          </div>
              
            </div>
          ))}

          {/* </div> */}
        </Slider>
        {error && <p className="text-red-500 text-center">{error}</p>}
        {loading && <p className="text-center">Loading....</p>}
        </div>
    </>
  )
}

export default LuckyDrawWinners
