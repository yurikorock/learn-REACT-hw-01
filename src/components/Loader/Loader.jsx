import { GridLoader } from "react-spinners";

export default function Loader() {
  return (
    <div>
      <GridLoader
        color="#43b1ab"
        cssOverride={{}}
        loading
        margin={2}
        size={10}
        speedMultiplier={1}
        width={4}
      />
    </div>
  );
}
