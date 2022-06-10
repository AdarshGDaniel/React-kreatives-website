import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FiberNewOutlinedIcon from '@material-ui/icons/FiberNewOutlined';


function CardsScroll(props) {
    return (
        <div className='item'>
            <Card className="event-card" style={{maxWidth: "345px"}}>
                <CardActionArea >
                    <CardMedia
                    style={{height: "240px"}}
                    image={props.image}
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" style={{textAlign: "left"}}>
                    {props.Title}
                    </Typography>
                    <Typography variant="body1" className="content-text-date" component="p">{props.Date}</Typography>
                    <Typography className="content-text-card" variant="body2" component="p">
                        {props.description}
                    </Typography>
                    <FiberNewOutlinedIcon style={{fill: "#00AEEF"}}/>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}

export default CardsScroll;