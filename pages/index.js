import Ubuntu from "../components/ubuntu";
import ReactGA from "react-ga4";
import Meta from "../components/SEO/Meta";

const GA4_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;
ReactGA.initialize(GA4_MEASUREMENT_ID);

function App() {
  return (
    <>
      <Meta />
      <Ubuntu />
    </>
  );
}

export default App;
