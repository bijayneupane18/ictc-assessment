import { Button, ButtonProps, Card, CardActionArea, CardActions, CardContent, CardMedia, styled, Typography } from "@mui/material"
import { useState, useEffect } from "react";
import { getService } from "../../service/Index";
import { teal } from "@mui/material/colors";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type topOffersType = {
    id: number;
    name: string;
    description: string;
    image: string;
    price: string
}

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(teal[600]),
    backgroundColor: teal[600],
    borderRadius: "20px",
    '&:hover': {
      backgroundColor: teal[700],
    },
  }));

const TopOffers = () => {
    const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<topOffersType[]>([]);

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

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1350,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              dots: true
            }
          },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  };

  return (
    <>
    
      <div className="flex flex-col">
          <h2 className="font-bold text-xl text-teal-600 underline decoration-2 underline-offset-8">
            Top Offers <span className="text-lg text-slate-700 font-normal">of the month</span>
          </h2>
              <Slider {...settings}  className="my-10">
          {/* <div className="flex gap-4 items-center overflow-scroll no-scrollbar"> */}
            {data?.map((data)=>
            <div key={data.id} className="px-4">
            <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                sx={{height: 120}}
                image={data.image}
                alt=""
              />
              <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {data.description}
                <Typography gutterBottom variant="h5" component="div">
                  ${data.price}
                </Typography>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <ColorButton size="small" variant="contained">
                Add to cart
              </ColorButton>
            </CardActions>
          </Card>
          </div>
            )}
          
    {/* </div> */}
            </Slider>
            {error && <p className="text-red-500 text-center">{error}</p>}
            {loading && <p className="text-center">Loading....</p>}
    </div>
        </>
  )
}

export default TopOffers
