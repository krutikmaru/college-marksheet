import { faArrowLeft, faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDataStore } from "../../contexts/DataStoreContext";

const ViewMarks = () => {
  const { state } = useLocation();
  const { course, setCourse, updateCourse } = useDataStore();
  const navigate = useNavigate();
  const pendingPublish = state.pendingPublish;

  const handleSendForRefactor = async () => {
    const copy = JSON.parse(JSON.stringify(course));
    copy.data[pendingPublish.batch][pendingPublish.course][
      pendingPublish.sem
    ].subjects[pendingPublish.index]["status"][pendingPublish.examType] =
      "unpublished";
    setCourse(copy);
    await updateCourse(copy);
    navigate("/");
  };
  return (
    <div>
      <div className="flex flex-col space-y-4 pt-10 pb-20 px-20">
        <div className="flex items-center justify-between">
          <button
            onClick={handleSendForRefactor}
            className="text-sm bg-yellow-500 text-black font-medium py-2 px-4 rounded-md "
          >
            Send for Refactor <FontAwesomeIcon icon={faRotateLeft} />
          </button>
          <Link
            className="text-sm text-white bg-jhc-blue-primary py-2 px-4 rounded-md "
            to={"/"}
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-3" />
            Back
          </Link>
        </div>
        {state.students.map((student) => {
          return (
            <div className="flex flex-col bg-[#131313] p-5 rounded-md">
              <div className="flex items-center justify-start">
                <div className="w-9 h-9 rounded-full flex justify-center items-center mr-4 bg-jhc-blue-primary cursor-pointer relative overflow-hidden">
                  {student.name[0].toUpperCase()}
                </div>
                <div className="flex flex-col justify-center items-start">
                  <h1 className="text-lg ">{student.name}</h1>
                  <span className="text-xs text-[#9c9c9c]">{student.uid}</span>
                </div>
              </div>
              <div className="w-full mt-4">
                <span className="text-xs text-[#5f5f5f] font-medium">
                  Marks
                </span>
                <input
                  value={
                    student[state.pendingPublish.sem.toUpperCase()][
                      state.pendingPublish.abbrevation
                    ][state.pendingPublish.examType]
                  }
                  type="number"
                  disabled
                  className="w-full bg-[#131313] py-3 px-4 rounded-md border-2 border-[#1d1d1d] outline-none text-base"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ViewMarks;
