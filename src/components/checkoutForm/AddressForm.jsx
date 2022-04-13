import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { actionTypes } from "../../reducer";
import { useForm, FormProvider } from "react-hook-form";/* 104 */
import AddressInput from "./AddressInput";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";

export default function AddressForm({ nextStep }) {/* 116 */
  const methods = useForm();/* 105 */
  const [{ shippingData }, dispatch] = useStateValue();

  return (
    <React.Fragment>
      <Typography variant='h6' gutterBottom>
        Pasarela de Pago
      </Typography>
      <FormProvider {...methods}>{/* 106 */}
        <form
          onSubmit={methods.handleSubmit((data) => {/* 112 */
            console.log(data)
            dispatch({/* 113 */
              type: actionTypes.SET_SHIPPINGDATA,
              shippingData: data,
            });
            nextStep();/* 117 */
          })}
        >
          <Grid container spacing={3}>{/* 107 */}
            <AddressInput required name='firstName' label='Nombre' />
            <AddressInput required name='lastName' label='Apellido' />
            <AddressInput required name='address1' label='Direción' />
            <AddressInput required name='email' label='Correo Electrónico' />
            <AddressInput required name='city' label='Provincia' />
             <AddressInput required name='city' label='País' />
            <AddressInput required name='postCode' label='Código Postal' />
          </Grid>
          <div
            style={{ /* 112 */
              display: "flex",
              justifyContent: "space-between",
              marginTop: "1rem",
            }}
          >
            
              <Button component={Link} to='/checkout-page' variant='outlined'>{/* 110 */}
              Atras
            </Button>
            <Button type='submit' variant='contained' color='primary'>
             Proximo
            </Button>
            
            
          </div>
        </form>
      </FormProvider>
    </React.Fragment>
  );
}