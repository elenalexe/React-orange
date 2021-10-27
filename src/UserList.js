import React from "react";

const USER_DATA = [
  {
    username: "Maria",
    email: "b.maria@example.com",
  },

  {
    username: "Consuela",
    email: "22consuela@example.com",
  },

  {
    username: "Benni",
    email: "Superbenni@example.com",
  },

  {
    username: "Zina",
    email: "zina@example.com",
  },
]

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: USER_DATA,
      column: '',
      direction: 'asc',
    }
  }

  sortByUsername = () => {
    let sortedArray = this.state.users.slice();
    let direction = this.state.direction;
    if(this.state.column === 'username') {
      direction = direction === 'asc' ? 'desc' : 'asc';
    }
    sortedArray.sort((a,b) => {
      if(direction === 'asc') {
        //asc sort
      return a.username > b.username ? 1 : a.username < b.username ? -1 : 0;
      } else {
        //desc sort
      return a.username > b.username ? -1 : a.username < b.username ? 1 : 0;
      }
    });
    this.setState({
      users: sortedArray,
      column: 'username',
      direction: direction,
    });
  }

  sortByEmail = () => {
    let sortedArray = this.state.users.slice();
    let direction = this.state.direction;

    if(this.state.column === 'email') {
      direction = direction === 'asc' ? 'desc' : 'asc';
    }

    sortedArray.sort((a,b) => {
      if(direction === 'asc') {
        //asc sort
        return a.email > b.email ? 1 : a.email < b.email ? -1 : 0;
      } else {
        //desc sort
      return a.email > b.email ? -1 : a.email < b.email ? 1 : 0;
      }
      });

      this.setState({
        users: sortedArray,
        column: 'email',
        direction: direction,
      });
  }



  render() {
    return (
      <React.Fragment>
        <table className="table table-dark">
          <thead>
            <tr className="table-dark">
            <th>#</th>
            <th><button className="btn btn-danger" onClick={this.sortByUsername}>
              <span>Username</span>
              {this.state.column === 'username' &&
              <span className={[
                  "fas", 
                  this.state.direction === 'asc' ? 'fa-angle-up': 'fa-angle-down'
                ].join(' ')}></span>
              }
              </button></th>
            <th><button className="btn btn-warning" onClick={this.sortByEmail}>
              <span>Email</span>
              {this.state.column === 'email' &&
              <span className={[
                  "fas", 
                  this.state.direction === 'asc' ? 'fa-angle-up': 'fa-angle-down'
                ].join(' ')}></span>
              }
              </button></th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user, index) => {
              return(
                <tr key="index">
                <td>{index+1}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
              )
            })}
            <tr></tr>
          </tbody>
        </table>
      </React.Fragment>
    )
  }
}





export default UserList;