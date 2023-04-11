import './TrackingButton.css';

const TrackingButton = ({category}) => {



    return (
        <button className={ `button-1 button-${category.label}` }>{category.label}</button>
    );
};

export default TrackingButton;