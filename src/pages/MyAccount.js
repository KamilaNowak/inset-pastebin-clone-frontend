import React from 'react'
import ReactDOM from 'react-dom'
import { getLoggedUserProfile } from '../api/ApiCalls'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

class MyAccount extends React.Component {
    state = {
        name: "",
        username: "",
        created: "",
        email: ""
    }
    componentDidMount() {

        getLoggedUserProfile().then(res => this.setState({
            name: res.nameAndUsername,
            username: res.username,
            created: res.createdAt,
            email: res.email

        }))
    }
    render() {

        return (
            <div  style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>
            <List >
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="account" src="https://cdn3.iconfinder.com/data/icons/unigrid-phantom-human-vol-3-1/60/011_145_user_profile_avatar_man_boy_round_photo-512.png" />
                </ListItemAvatar>
                <ListItemText
                  primary="Name and surname" 
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        color="textPrimary"
                      >
                       {this.state.name}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="account" src="https://cdn3.iconfinder.com/data/icons/users-36/24/_man_user_3-512.png" />
                </ListItemAvatar>
                <ListItemText
                  primary="Username"
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        color="textPrimary"
                      >
                    {this.state.email}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="email" src="https://cdn0.iconfinder.com/data/icons/email-set-2-1/64/x-13-512.png" />
                </ListItemAvatar>
                <ListItemText
                  primary="E-mail address"
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        color="textPrimary"
                      >
                    {this.state.email}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="created" src="https://cdn1.iconfinder.com/data/icons/clock-faces-1-12/100/Clock-11-512.png" />
                </ListItemAvatar>
                <ListItemText
                  primary="Account creation date"
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        color="textPrimary"
                      >
                        {this.state.created.slice(0,10)}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
            </List>
            </div>
          );
    }
}
export default MyAccount