import ReactLoading from "react-loading";

const LoadingAnimation = ({ bubbles, whitesmoke }) => (
  <ReactLoading
    type={bubbles}
    color={whitesmoke}
    height={"100%"}
    width={"100%"}
  />
);

export default LoadingAnimation;
