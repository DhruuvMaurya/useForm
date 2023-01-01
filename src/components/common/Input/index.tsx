import { InputLabel, InputBase, Box } from "@mui/material";
import { Controller, FieldErrors } from "react-hook-form";
import styles from "./style";

type InputCompProps = {
  name: string;
  label: string;
  errors: FieldErrors;
  control: any;
  rules: any;
  placeholder: string;
};

const InputComp = ({
  name,
  control,
  rules,
  label,
  placeholder,
  errors,
  ...rest
}: InputCompProps) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <Box sx={styles.inputWrapper}>
          <InputLabel sx={styles.label}>{label}</InputLabel>
          <InputBase
            value={field.value}
            error={!!errors}
            onChange={field.onChange}
            placeholder={placeholder}
            sx={styles.input}
          />
        </Box>
      )}
    />
  );
};

export default InputComp;
