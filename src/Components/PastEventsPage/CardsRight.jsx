import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './Cards.css'

function Cards(props) {
    return (
        <div>
            <Card style={{justifyContent: 'space-between'}} className="card-holder" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="0">
                <div style={{width: '60%'}}>
                    <CardContent>
                    <Typography component="h5" variant="h5">
                        {props.title}
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                        {props.date}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {props.description}
                    </Typography>
                    </CardContent>
                </div>
                <CardMedia
                        className = "card-imageo"
                        image={props.image}
                        title={props.title}
                />
            </Card>
        </div>
    );
}

export default Cards;