import { Box, Button } from '@mui/material'
import Input from '../../common/Input'
import { useForm } from "react-hook-form";
import styles from "./style";

type FormDataProps = {
  name: {firstName: string, lastName: string};
  email: string;
  address: addressProp;
};

type addressProp = {
  currentAddress: string;
  permanentAddress: string
}

const PersonalDetail = () => {

  const { formState: {errors}, handleSubmit, control } = useForm({
    mode: "all",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      currentAddress: "",
      permanentAddress: ""
    }
  })

  const submitData = (data): FormDataProps => {
    console.log(data)
  }

  return (
    <Box component="form" onSubmit={handleSubmit(submitData)}>
      <Input 
       name= "firstName"
       label="First Name"
       placeholder="Enter your First Name"
       control={control}
       errors={errors}
       rules = { {required: "This field is required"}}
       />
      <Input 
       name= "lastName"
       label="Last Name"
       placeholder="Enter your Last Name"
       control={control}
       errors={errors}
       rules = { {required: "This field is required"}}
       />
      <Input 
       name= "email"
       label="Email"
       placeholder="Enter your Email Address"
       control={control}
       errors={errors}
       rules = { {required: "This field is required"}}
       />
      <Input 
       name= "currentAddress"
       label="Current Address"
       placeholder="Enter your Current Address"
       control={control}
       errors={errors}
       rules = { {required: "This field is required"}}
       />
      <Input 
       name= "permanentAddress"
       label="Permanent Address"
       placeholder="Enter your Permanent Address"
       control={control}
       errors={errors}
       rules = { {required: "This field is required"}}
       />
     <Button variant="contained" type="submit">Submit</Button>
    </Box>
  )
}

export default PersonalDetail