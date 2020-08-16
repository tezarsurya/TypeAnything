import { Formik, Form } from "formik";
import { useState } from "react";
import { TextField, makeStyles, Card, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: 0,
    padding: 0,
    display: "flex",
    alignItems: "center",
    alignContent: "center",
  },
  formContainer: {
    flex: 0.3,
    padding: theme.spacing(3),
    margin: "auto",
  },
}));

const sign_in = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (values, { setSubmitting }) => {
    alert(JSON.stringify(values, null, 4));
    setSubmitting(false);
  };

  return (
    <div className={classes.container}>
      <Card className={classes.formContainer}>
        <Formik
          initialValues={{
            email: email,
            password: password,
          }}
          onSubmit={handleSubmit}
        >
          <Form>
            <TextField
              name="email"
              type="text"
              value={email}
              variant="outlined"
              label="E-mail"
              fullWidth
              onChange={(e) => {
                const newValue = e.currentTarget.value;
                setEmail(newValue);
              }}
            />
            <TextField
              name="password"
              type="password"
              value={password}
              variant="outlined"
              label="Password"
              fullWidth
              onChange={(e) => {
                const newValue = e.currentTarget.value;
                setPassword(newValue);
              }}
            />
            <Button type="submit" variant="contained" fullWidth>
              Sign In
            </Button>
          </Form>
        </Formik>
      </Card>
    </div>
  );
};
export default sign_in;
