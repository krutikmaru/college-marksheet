import {
  faArrowLeft,
  faChevronUp,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ActionButtons = ({ isAddStudent, setIsAddStudent, goBackToCourse }) => {
  return (
    <div className="my-4 w-full flex items-center justify-between">
      <button
        className="text-sm text-white bg-jhc-blue-primary py-2 px-4 rounded-md "
        onClick={goBackToCourse}
      >
        <FontAwesomeIcon icon={faArrowLeft} className="mr-3" />
        Back to Courses
      </button>
      <button
        onClick={() => setIsAddStudent(!isAddStudent)}
        className="text-sm text-white bg-jhc-blue-primary py-2 px-4 rounded-md "
      >
        <FontAwesomeIcon
          icon={isAddStudent ? faChevronUp : faPlus}
          className="mr-3"
        />
        Add Student
      </button>
    </div>
  );
};

export default ActionButtons;
