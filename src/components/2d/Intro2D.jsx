import { TypeAnimation } from "react-type-animation";


const Intro2D = ({onReady}) => {
    return <TypeAnimation
    sequence={[
      "[SYSTEM] ...",
      200,
      "[SYSTEM] Welcome to the Mole Attack Simulator, please wait a second...",
      500,
      "[SYSTEM] Virtual Reality Headset not detected...",
      500,
      "[SYSTEM] Loading the 2D simulator...",
      800,
      "[SYSTEM] Loading the 2D simulator... OK.",
      800,
      "[SYSTEM] The 2D simulator is ready! Please press the START button to start the simulation.",
      500,
      () => {
        onReady();
      },
      "[SYSTEM] The 2D simulator is ready! Please press the START button to start the simulation. WARNING: Proceed at your own risk, good luck.",
    ]}
    wrapper="p"
    speed={80}
  />
}

export default Intro2D