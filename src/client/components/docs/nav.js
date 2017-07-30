import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import ListIcon from 'material-ui/svg-icons/action/list';
import Subheader from 'material-ui/Subheader';
import { List, ListItem } from 'material-ui/List';
import { withRouter } from 'react-router';

class Nav extends React.Component {
  render() {
    return (
      <Drawer width={300} open={true} containerClassName="drawer-nav">
        <div style={{ display: 'block', height: 100 }} />
        <Subheader>Table of content</Subheader>
        <List>
          <ListItem
            primaryText="Documenation"
            leftIcon={<ListIcon />}
            rightIcon={<span />}
            initiallyOpen={true}
            primaryTogglesNestedList={false}
            nestedItems={[
              <MenuItem
                onTouchTap={() => {
                  this.props.history.push('/docs');
                }}
                leftIcon={<ListIcon />}>
                Documenation home
              </MenuItem>
            ]}
          />
        </List>

      </Drawer>
    );
  }
}
export default withRouter(Nav);
