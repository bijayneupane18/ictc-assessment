import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Rating,
} from "@mui/material";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import { getService } from "../../service/Index";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type topProductType = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
  rating: number;
};

const TopProduct = () => {
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<topProductType[]>([]);

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
    getData();
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
    dots: true,
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
          dots: true,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <>
      <div className="flex flex-col">
        <h2 className="font-bold text-xl text-teal-600 underline decoration-2 underline-offset-8">
          Top Products{" "}
          <span className="text-lg text-slate-700 font-normal">
            of the month
          </span>
        </h2>
        <Slider {...settings} className="my-10 px-6">
          {/* <div className="flex gap-4 items-center overflow-scroll no-scrollbar"> */}
          {data?.map((data) => (
            <div key={data.id} className="relative px-4">
              <div className="absolute flex items-center justify-center right-4 top-0 z-10 h-14 w-14 p-1 rounded-tr-xl rounded-bl-xl bg-teal-600 text-white">
                15% <br></br>Off
              </div>
              <Card sx={{ borderRadius: "5%" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    sx={{ height: 150 }}
                    image={data.image}
                    alt=""
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {data.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Rating
                    name="read-only"
                    value={data.rating}
                    precision={0.5}
                    size="small"
                    readOnly
                  />
                </CardActions>
              </Card>
            </div>
          ))}

          {/* </div> */}
        </Slider>
        {error && <p className="text-red-500 text-center">{error}</p>}
        {loading && <p className="text-center">Loading....</p>}
      </div>
    </>
  );
};

export default TopProduct;
