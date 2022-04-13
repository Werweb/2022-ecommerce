import { TextField, Grid } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";/* 108 */

const AddressInput = ({ name, label, required }) => {
  const  {control}  = useFormContext(); /* 109 */
  

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        as={TextField}/* 110 */
        control={control}
        fullWidth
        defaultValue=''
        name={name}
        label={label}
        required={required}
      />
    </Grid>
  );
};

export default AddressInput;
