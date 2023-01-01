import PersonalDetail from "./components/feature/PersonalDetail";
import "./App.css";
import RelativeDetail from "./components/feature/RelativeDetail";
import { useForm } from "react-hook-form";

function App() {
  const {
    formState: { errors },
    handleSubmit,
    control,
  } = useForm();

  return (
    <>
      <PersonalDetail
        control={control}
        errors={errors}
        handleSubmit={handleSubmit}
      >
        <RelativeDetail
          control={control}
          errors={errors}
          handleSubmit={handleSubmit}
        />
      </PersonalDetail>
    </>
  );
}

export default App;
