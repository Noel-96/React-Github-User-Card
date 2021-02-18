import React from 'react';
import axios from 'axios';
import './GithubUser.css';
import UserFollowers from './UserFollowers';

import {
    Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
  } from 'reactstrap';

  class GithubUser extends React.Component {
    constructor() {
        super();
        this.state = {
          userFollowers: []
        }
      }


      componentDidMount() {
        axios.get(`https://api.github.com/users/${this.props.user.login}/followers`)
          .then(res => { 
            this.setState({
              ...this.state,
              userFollowers: res.data 
            })
          })
          .catch(err => console.log(err))
      }

      componentDidUpdate(prevProps, prevState) {

        if (prevProps.user !== this.props.user) {
          axios.get(`https://api.github.com/users/${this.props.user.login}/followers`)
          .then(res => { 
            this.setState({
              ...this.state,
              userFollowers: res.data 
            })
          })
          .catch(err => console.log(err))
    
        }
      }
        

    render() {
        const { user } = this.props;
        return (
            <div>
                <Card>
                    <CardBody>
                        <CardTitle >{user ? `${user.login}` : "We don't have a user"}</CardTitle>
                        <CardSubtitle >{user ? `${user.company}` : "We don't have a company"}</CardSubtitle>
                    </CardBody>
                    <img width="25%" src={`${user.avatar_url}`} alt="Card image cap" />
                    <CardBody>
                        <CardText>Bio : {user ? `${user.bio}` : "We don't have a bio"}</CardText>
                        <CardLink href="#"> {user ? `${user.blog}` : "We don't have a blog"}</CardLink>
                        <div className="github-user-sub-card">
                            <CardText> Followers : {user ? `${user.followers}` : "cant fetch followers"}</CardText>
                            <CardText> Following : {user ? `${user.following}` : "cant fetch following"}</CardText>
                        </div>
                    </CardBody>
                </Card>

                <Card>
                    <CardBody>
                    <h3>Followers</h3>
                        <UserFollowers userFollowers={this.state.userFollowers} />
                    </CardBody>
                </Card>
            </div> 
        );
    }

}
export default GithubUser;