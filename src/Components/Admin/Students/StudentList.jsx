import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ConfirmDelete from "./ConfirmDelete";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useApplicationManager } from "../../../contexts/ApplicationContext";

const StudentList = ({
  students,
  selectedBatch,
  selectedCourse,
  handleDelete,
}) => {
  const { activatePopupCenter, deactivatePopupCenter } =
    useApplicationManager();

  return (
    <div className="w-full flex flex-col space-y-2">
      {students[selectedBatch][selectedCourse].students.map(
        (student, index) => {
          return (
            <div
              key={student.uid}
              className="w-full min-h-[80px] bg-[#141414] rounded-md cursor-pointer p-4 px-7 flex justify-between items-center"
            >
              <div className="flex justify-start items-center">
                <div className="w-9 h-9 rounded-full flex justify-center items-center mr-4 bg-jhc-blue-primary cursor-pointer relative overflow-hidden">
                  {student.name[0].toUpperCase()}
                </div>
                <div className="flex flex-col justify-center items-start">
                  <h1 className="text-lg ">{student.name}</h1>
                  <span className="text-xs text-[#9c9c9c]">{student.uid}</span>
                  <span className="text-xs text-[#9c9c9c]">
                    {student.email}
                  </span>
                </div>
              </div>

              <FontAwesomeIcon
                icon={faTrash}
                onClick={() => {
                  activatePopupCenter(
                    <ConfirmDelete
                      handleDelete={() => {
                        handleDelete(index);
                        deactivatePopupCenter();
                      }}
                    />
                  );
                }}
                className="bg-red-500 p-2 rounded-md cursor-pointer text-xs"
              />
            </div>
          );
        }
      )}
    </div>
  );
};

export default StudentList;
