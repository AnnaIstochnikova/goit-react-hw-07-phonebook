import { RevolvingDot } from 'react-loader-spinner';

export default function Loader() {
  return (
    <RevolvingDot
      radius="30"
      strokeWidth="4"
      color="white"
      secondaryColor="rgb(35, 8, 66)"
      ariaLabel="revolving-dot-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
}
