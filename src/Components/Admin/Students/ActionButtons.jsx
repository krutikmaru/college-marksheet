import {
  faArrowLeft,
  faArrowUpRightFromSquare,
  faChevronUp,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDataStore } from "../../../contexts/DataStoreContext";

const ActionButtons = ({ isAddStudent, setIsAddStudent, goBackToCourse }) => {
  const { updateStudents } = useDataStore();
  return (
    <div className="my-4 w-full flex items-center justify-between">
      <button
        className="text-sm text-white bg-jhc-blue-primary py-2 px-4 rounded-md "
        onClick={goBackToCourse}
      >
        <FontAwesomeIcon icon={faArrowLeft} className="mr-3" />
        Back to Courses
      </button>
      <div className="flex space-x-4">
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
        <button
          onClick={updateStudents}
          className="text-sm text-white bg-green-500 py-2 px-4 rounded-md "
        >
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="mr-3" />
          Update
        </button>
      </div>
    </div>
  );
};

export default ActionButtons;
