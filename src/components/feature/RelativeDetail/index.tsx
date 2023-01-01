import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import Slide from "@mui/material/Slide";
import Toolbar from "@mui/material/Toolbar";
import { TransitionProps } from "@mui/material/transitions";
import * as React from "react";
import Input from "../../common/Input";
import styles from "./style";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const RelativeDetail = ({ control, errors, handleSubmit }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Relative
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
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
        </Box>
      </Dialog>
    </div>
  );
};

export default RelativeDetail;
