import {
  faArrowLeft,
  faArrowUpRightFromSquare,
  faChevronUp,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDataStore } from "../../../contexts/DataStoreContext";

const ActionButtons = ({ goBackToCourse, isAddTeacher, setIsAddTeacher }) => {
  const { updateTeachersAndAdmins } = useDataStore();
  return (
    <div className="my-4 flex items-center justify-between">
      <button
        className="text-sm text-white bg-jhc-blue-primary py-2 px-4 rounded-md "
        onClick={goBackToCourse}
      >
        <FontAwesomeIcon icon={faArrowLeft} className="mr-3" />
        Back to Courses
      </button>
      <div className="flex space-x-4">
        <button
          onClick={() => setIsAddTeacher(!isAddTeacher)}
          className="text-sm text-white bg-jhc-blue-primary py-2 px-4 rounded-md "
        >
          <FontAwesomeIcon
            icon={isAddTeacher ? faChevronUp : faPlus}
            className="mr-3"
          />
          Add Teacher
        </button>
        <button
          onClick={() => updateTeachersAndAdmins()}
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
