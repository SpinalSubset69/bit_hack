import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { modeSelected } from "../../../redux/actions/game.actions";
import useLevelSelector from "../hooks/useLevelSelector";
import LevelSelectorComponent from "./levelSelector";

const steps = ["Easy Level", "Medium Level", "Oh BAE!! u gonna cry"];
export default function ModeSelectorComponent() {
  const [activeStep, setActiveStep] = React.useState(0);
  const { mode } = useLevelSelector();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(modeSelected("easy"));
  }, []);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    if (activeStep === 3) setActiveStep(0);
    setLevels("forward");
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
    setLevels("back");
  };

  const handleReset = () => {
    setActiveStep(0);
    setLevels();
  };

  const setLevels = (type) => {
    const state = type === "back" ? activeStep - 1 : activeStep + 1;
    console.log(state);
    if (state === 0) dispatch(modeSelected("easy"));
    if (state === 1) dispatch(modeSelected("medium"));
    if (state === 2) dispatch(modeSelected("hard"));
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {/* LEVELS GOES HERE */}
      <React.Fragment>
        <div className="select-levels-wrapper">
          <LevelSelectorComponent />
        </div>
      </React.Fragment>
      {/* LEVELS GOES HERE */}
      {activeStep === steps.length ? null : (
        <React.Fragment>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
