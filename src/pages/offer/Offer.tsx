import { useEffect, useState } from "react";
import { getService } from "../../service/Index";
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, ButtonProps, styled } from "@mui/material";
import { teal } from "@mui/material/colors";

type topOffersType = {
    id: number;
    name: string;
    description: string;
    image: string;
    price: string;
  };

const Offer = () => {

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
    getData();
  }, []);

  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(teal[600]),
    backgroundColor: teal[600],
    borderRadius: "20px",
    "&:hover": {
      backgroundColor: teal[700],
    },
  }));

  return (
    <>
    <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xsm:grid-cols-2 gap-4">
      {data?.map((data) => (
            <div key={data.id} className="px-4">
              <Card  sx={{borderRadius: "5%"}}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    sx={{ height: 120 }}
                    image={data.image}
                    alt=""
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
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
          ))}
          </div>

        {error && <p className="text-red-500 text-center">{error}</p>}
        {loading && <p className="text-center">Loading....</p>}
    </>
  )
}

export default Offer
