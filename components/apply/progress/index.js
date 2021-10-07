import PropTypes from "prop-types"

const Progress = ({percentage}) => {
    return (
        <div className="progress">
            <div
                className="progress-bar progress-bar-striped bg-success mb30"
                role="progressbar"
                style={{ width: `${percentage}%` }}
            >
                { percentage }%
            </div>
        </div>
    );
};

Progress.propTypes = {
    percentage: PropTypes.number.isRequired
}

export default Progress
