import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Link } from "react-router-dom";
import React,{useState} from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import AuthenticationService from "../../auth/AuthenticationService";
import {Redirect} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  card: {
    overflow: "visible"
  },
  session: {
    position: "relative",
    zIndex: 4000,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column"
  },
  background: {
    backgroundColor: theme.palette.primary.main
  },
  content: {
    padding: `40px ${theme.spacing(1)}px`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: "1 0 auto",
    flexDirection: "column",
    minHeight: "100%",
    textAlign: "center"
  },
  wrapper: {
    flex: "none",
    maxWidth: "400px",
    width: "100%",
    margin: "0 auto"
  },
  fullWidth: {
    width: "100%"
  },
  logo: {
    display: "flex",
    flexDirection: "column"
  }
}));

const Signin = (props) => {

  const classes = useStyles();
  const { register, handleSubmit, watch, errors } = useForm();
  const [loaderBefore, setLoaderBefore] = useState(false);
  const [redirectToReferrer,setRedirectToReferrer] = useState(false);


  const handleLogin = async (event, e) => {
    
    AuthenticationService.login(event).then(()=>{
		
			setRedirectToReferrer(true);
			console.log('Autenticacion exitosa !!!');
		}).catch((error)=>{
			console.log(error)
		});
   
  };

  const {from} = props.location.state || {from:{pathname:'/productos'}};

  if(redirectToReferrer){
    console.log(from)
		return <Redirect to={from}/>;
	}


  return (
    <div className={classNames(classes.session, classes.background)}>
      <div className={classes.content}>
        <div className={classes.wrapper}>
          <Card>
            <CardContent>
            <form autocomplete="off" onSubmit={handleSubmit(handleLogin)}>
                <div
                  className={classNames(classes.logo, `text-xs-center pb-xs`)}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/static/images/logo-dark.png`}
                    alt=""
                    className="block"
                  />
                  <Typography variant="caption">
                  Inicie sesión con su usuario de aplicación para continuar.
                  </Typography>
                </div>
                <TextField
                  id="username"
                  label="Usuario"
                  className={classes.textField}
                  fullWidth
                  margin="normal"
                  {...register("user", {
                    required: true,
                  })}
                />
                <TextField
                  id="password"
                  label="Contraseña"
                  className={classes.textField}
                  type="password"
                  fullWidth
                  margin="normal"
                  {...register("password", {
                    required: true,
                  })}
                />
                
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                >
                  INGRESAR
                </Button>
                
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Signin;
