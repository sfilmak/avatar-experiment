import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

export default function WelcomeCard({onChildClick}) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="ritsumeikan_experiment"
                    height="140"
                    image="https://64.media.tumblr.com/2ce8d8c95a0f95bc3d757b3eaed94f90/tumblr_p9urq7Ls6i1xr6hcno1_400.gifv"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Welcome
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Participate in this experiment to help us. Follow the instructions on the left side
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="secondary" onClick={onChildClick} fullWidth>
                    Start
                </Button>
            </CardActions>
        </Card>
    );
}
