import { Box, Button } from "@mui/material";
import Input from "../../common/Input";
import { useForm } from "react-hook-form";
import styles from "./style";

type PersonalDetailProp = {
  children: React.ReactNode;
};

type FormDataProps = {
  name: NameProp;
  email: string;
  address: AddressProp;
};

type NameProp = {
  firstName: string;
  lastName: string;
};

type AddressProp = {
  currentAddress: string;
  permanentAddress: string;
};

const PersonalDetail = ({ control, errors, handleSubmit , children }: PersonalDetailProp) => {
  const submitData = (data): FormDataProps => {
    console.log(data);
  };

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.heading}>My Form.</Box>
      <Box
        component="form"
        sx={styles.form}
        onSubmit={handleSubmit(submitData)}
      >
        <Input
          name="name.firstName"
          label="First Name"
          placeholder="Enter your First Name"
          control={control}
          errors={errors}
          rules={{ required: "This field is required" }}
        />
        <Input
          name="name.lastName"
          label="Last Name"
          placeholder="Enter your Last Name"
          control={control}
          errors={errors}
          rules={{ required: "This field is required" }}
        />
        <Input
          name="email"
          label="Email"
          placeholder="Enter your Email Address"
          control={control}
          errors={errors}
          rules={{ required: "This field is required" }}
        />
        <Input
          name="address.currentAddress"
          label="Current Address"
          placeholder="Enter your Current Address"
          control={control}
          errors={errors}
          rules={{ required: "This field is required" }}
        />
        <Input
          name="address.permanentAddress"
          label="Permanent Address"
          placeholder="Enter your Permanent Address"
          control={control}
          errors={errors}
          rules={{ required: "This field is required" }}
        />
        <Button variant="contained" type="submit">
          Submit
        </Button>
        {children}
      </Box>
    </Box>
  );
};

export default PersonalDetail;
