import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CssBaseline,
} from "@material-ui/core";

import { useState } from "react";
import useStyles from "./styles";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Confirmation from "./Review";
import { useStateValue } from "../../StateProvider";

const steps = ['Dirección de envío', 'Detalles del pago'];/* material 1 */

const Checkout = () => {
  const classes = useStyles();
  const [activeStep, setActivestep] = useState(0);/* material 3 */
  const [{ paymentMessage }, dispatch] = useStateValue();

  const nextStep = () => setActivestep((prevActivestep) => prevActivestep + 1);/* 114 */
  const backStep = () => setActivestep((prevActivestep) => prevActivestep - 1);/* 114 */

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm nextStep={nextStep}/* 115 */ />
    ) : (
      <PaymentForm backStep={backStep} nextStep={nextStep} />
    );

  return (
    <>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component='h1' variant='h4' align='center'>
            Pasarela de Pago
          </Typography>
          <Stepper activeStep={activeStep}/* material 4 */ className={classes.stepper}>
            {steps.map((step) => (/* material 2 */
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <Confirmation message={paymentMessage} />
          ) : (
            <Form step={activeStep} />
          )}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;



