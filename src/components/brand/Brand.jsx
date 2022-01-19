import React from 'react';
import { neladri, neladri2, neladri3 } from './imports';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './brand.css';

const Brand = () => (
  <div>
    <div className="subsection__padding gpt3__header-content">
    <p className='gradient__text' style={{ padding:4 , color: '#fff'}}>Top Influencers around you</p>
    
    </div>
  <div className="row-flex subsection__padding">
    
    <Card sx={{ maxWidth: 345, margin: 1 }}>
      <CardMedia
        component="img"
        height="200"
        image={neladri}
        alt="green iguana"
      />
      <CardContent className='gpt3__header-content'>
        <p className='gradient__text' gutterBottom variant="h5" component="div">
          Neladri Roy (Rank #1211)
          </p>
          <label>
          Catergories: LifeStyle
          </label>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345, margin: 1 }}>
      <CardMedia
        component="img"
        height="200"
        image={neladri3}
        alt="green iguana"
      />
      <CardContent className='gpt3__header-content'>
        <p className='gradient__text' gutterBottom variant="h5" component="div">
          Neladri Roy II(Rank #2311)
          </p>
          <label>
          Catergories: Musician
          </label>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345, margin: 1 }}>
      <CardMedia
        component="img"
        height="200"
        image={neladri3}
        alt="green iguana"
      />
      <CardContent className='gpt3__header-content'>
        <p className='gradient__text' gutterBottom variant="h5" component="div">
          Neladri Roy II(Rank #2311)
          </p>
          <label>
          Catergories: Musician
          </label>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    
   
    </div>
  </div>
);

export default Brand;
