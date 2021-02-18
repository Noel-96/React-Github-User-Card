import React from 'react';


class UserFollowers extends React.Component {


  render() {
    const { userFollowers } = this.props;

    return (
      <>
        {
          userFollowers.map(follower => {
            // console.log("follower: ", follower.login)
            return (
              // <button>hi</button>
              <p>{follower.login}</p>
              // <p>hi{`Follower Name: ${follower.login}`}</p>
            )
          })
        }
      
      </>
    )
  }
}

export default UserFollowers;