import React from 'react';
import { Drawer, List, ListItemIcon, ListItemText } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import {
  DashboardOutlined,
  GroupOutlined,
  SettingsOutlined,
  LockOutlined,
  CategoryOutlined
} from '@material-ui/icons';
import { LinkListItem } from 'components/button';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  drawer: {
    width: 240,
    flexShrink: 0
  },
  drawerPaper: {
    width: 240
  },
  toolbar: theme.mixins.toolbar
}));

const Items = [
  {
    name: 'Dashboard',
    link: '/admin',
    icon: <DashboardOutlined />
  },
  {
    name: 'User',
    link: '/admin/user',
    icon: <GroupOutlined />
  },
  {
    name: 'Role',
    link: '/admin/role',
    icon: <LockOutlined />
  },
  {
    name: 'Setting Category',
    link: '/admin/setting-category',
    icon: <CategoryOutlined />
  },
  {
    name: 'Settings',
    link: '/admin/setting',
    icon: <SettingsOutlined />
  }
];

const Sidebar = () => {
  const classes = useStyles({});

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div className={classes.toolbar} />
      <List>
        {Items.map(item => (
          <LinkListItem button key={item.name} to={item.link}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </LinkListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
