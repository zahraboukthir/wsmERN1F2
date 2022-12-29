import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useSelector } from 'react-redux';

export default function ProductCard({el}) {
  const  currectuser=useSelector(state=>state.userReducer.currectuser)
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={el.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {el.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Price: {el.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Quantity: {el.qte}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Details
        </Button>
        {currectuser && currectuser.role=="admin" ?
        <Button size="small" color="primary">
        edit
       </Button> :null}
      </CardActions>
    </Card>
  );
}
