import TrackingButton from "../../components/TrackingButton/TrackingButton";

import './TrackingPage.css';

const TrackingPage = () => {
  const trackingCategories = [
    { label: "small" },
    { label: "medium" },
    { label: "large" },
  ];

  const getButtons = trackingCategories.map((cat) => {
    return <TrackingButton category={cat}></TrackingButton>;
  });

  return (
    <>
      <section className="buttons-container">{getButtons}</section>
    </>
  );
};

export default TrackingPage;
