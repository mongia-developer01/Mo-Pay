import React from 'react';
import { withAuth } from 'views/dashboard/Default/login';
import { Typography, List, ListItem, ListItemText, Button } from '@material-ui/core';

class GroupList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      groups: [
        { id: 1, name: 'Admin', members: [] },
        { id: 2, name: 'Managers', members: [] },
        { id: 3, name: 'Clients', members: [] }
      ],
      selectedUser: null,
      selectedGroup: null,
      users: [],
    };
  }

  handleRemoveFromGroup = (group, username) => {
    const updatedGroups = this.state.groups.map(grp => {
      if (grp.id === group.id) {
        return {
          ...grp,
          members: grp.members.filter(member => member !== username)
        };
      } else {
        return grp;
      }
    });

    this.setState({ groups: updatedGroups });
  };

  handleUserSelect = (event, username) => {
    this.setState({ selectedUser: username });
  };

  handleGroupSelect = (event, group) => {
    this.setState({ selectedGroup: group });
  };

  handleAssignUserClick = async (group) => {
    try {
      this.setState({ isLoading: true });
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await response.json();
      const availableUsers = users.filter(user => !this.state.groups.some(g => g.members.includes(user.username) && g.id !== group.id));
      this.setState({ users: availableUsers, selectedGroup: group });
    } catch (error) {
      console.error(error);
    } 
  };

  handleUserAssign = (username) => {
    const updatedGroups = this.state.groups.map(grp => {
      if (grp.id === this.state.selectedGroup.id) {
        return {
          ...grp,
          members: [...grp.members, username]
        };
      } else {
        return grp;
      }
    });

    this.setState({ groups: updatedGroups, selectedGroup: null });
  };

  render() {
    const { groups, selectedUser, users, selectedGroup } = this.state;

    return (
      <div>
        <Typography variant="h5">Groups</Typography><br/>
        {groups.map(group => (
          <div key={group.id}>
            <Typography variant="h6">{group.name}</Typography>
            <Button variant="outlined" color="primary" size="small" style={{ marginRight: 'auto' }} onClick={() => this.handleAssignUserClick(group)}>Assign User</Button>
            <List>
              {group.members.map((member, index) => (
                <ListItem key={index}>
                  <ListItemText primary={member} />
                  
                  <Button variant="outlined" color="secondary" size="small" onClick={() => this.handleRemoveFromGroup(group, member)}>
                    Remove
                  </Button>
                </ListItem>
              ))}
            </List>
            {selectedGroup && selectedGroup.id === group.id && (
              <div>
                {users.length > 0 && (
                  <List>
                    {users.map(user => (
                      <ListItem key={user.id} button onClick={event => this.handleUserAssign(user.username)}>
                        <ListItemText primary={user.username} />
                      </ListItem>
                    ))}
                  </List>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default withAuth(GroupList);
