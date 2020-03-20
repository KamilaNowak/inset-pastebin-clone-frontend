import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import ShareIcon from '@material-ui/icons/Share';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

const useStyles = makeStyles( theme => ({
  root: {
    maxWidth: 'auto',
  }
}));

export default function PasteBelt({title, text, createdAt, createdBy}){
    
    const classes= useStyles();

    return(
      <Card className="{classes.root">
        <CardHeader
              title= {title} 
              subheader= {createdBy}
                />
        <CardContent>
          <Typography variant="body1" color="textPrimary">
            {text}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <IconButton aria-label="share">
                <ShareIcon/>
            </IconButton>
            <IconButton>
                <Button> <span className="check-button"> CHECK <OpenInNewIcon/> </span></Button>
            </IconButton>
        </CardActions>
      </Card>
    )
}