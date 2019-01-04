import React from 'react';
import Helmet from 'react-helmet';

import { LinkButton } from 'components/button';

import {
  FormControl,
  InputLabel,
  Input,
  Button,
  Paper,
  Typography
} from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing.unit * 8,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  header: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing.unit * 3
  },
  form: {
    padding: theme.spacing.unit * 3
  },
  formActions: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginTop: theme.spacing.unit * 2
  },
  button: {
    '&:not(:last-child)': {
      marginRight: theme.spacing.unit
    }
  }
}));
const Signup = () => {
  const classes = useStyles({});

  return (
    <>
      <Helmet
        title={'Signup - React with Typescript and Webpack'}
        meta={[
          {
            name: 'description',
            content: 'Signup - React with Typescript and Webpack'
          }
        ]}
      />
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h5" className={classes.header}>
          Signup
        </Typography>
        <form method="POST" className={classes.form}>
          <FormControl required fullWidth margin="normal">
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input name="email" autoComplete="email" autoFocus />
          </FormControl>
          <FormControl required fullWidth margin="normal">
            <InputLabel htmlFor="passowrd">Password</InputLabel>
            <Input
              name="passowrd"
              type="passowrd"
              autoComplete="current-password"
            />
          </FormControl>
          <FormControl required fullWidth margin="normal">
            <InputLabel htmlFor="confirmPassowrd">Confirm Password</InputLabel>
            <Input
              name="confirmPassowrd"
              type="confirmPassowrd"
              autoComplete="confirm-password"
            />
          </FormControl>
          <div className={classes.formActions}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Signup
            </Button>
            <LinkButton
              variant="text"
              color="primary"
              to="/account/signin"
              className={classes.button}
            >
              Signin
            </LinkButton>
          </div>
        </form>
      </Paper>
    </>
  );
};

export default Signup;
