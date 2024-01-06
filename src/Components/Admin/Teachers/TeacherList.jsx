import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useApplicationManager } from "../../../contexts/ApplicationContext";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import ConfirmDelete from "./ConfirmDelete";

const TeacherList = ({
  teachers,
  selectedCourse,
  handleRemoveAdmin,
  handleAddAdmin,
  handleDelete,
}) => {
  const { activatePopupCenter, deactivatePopupCenter } =
    useApplicationManager();
  return (
    <div className="w-full flex flex-col space-y-2">
      {teachers[selectedCourse].teachers.map((teacher, index) => {
        return (
          <div
            key={teacher.UID}
            className="w-full min-h-[80px] bg-[#141414] rounded-md p-4 px-7 flex justify-between items-center"
          >
            <div className="flex justify-start items-center">
              <div className="w-9 h-9 rounded-full flex justify-center items-center mr-4 bg-jhc-blue-primary relative overflow-hidden">
                {teacher.name[0].toUpperCase()}
              </div>
              <div className="flex flex-col justify-center items-start">
                <div className="flex">
                  <h1 className="text-lg mr-2">{teacher.name}</h1>
                  {teacher.isAdmin && (
                    <span className="px-2 flex items-center justify-center rounded-md text-white bg-jhc-blue-primary text-[12px]">
                      Admin
                    </span>
                  )}
                </div>
                <span className="text-xs text-[#9c9c9c]">{teacher.email}</span>
              </div>
            </div>
            <div className="flex justify-center items-center space-x-4">
              {teacher.isAdmin ? (
                <button
                  className="text-xs text-white bg-jhc-blue-primary p-2  rounded-md "
                  onClick={() => handleRemoveAdmin(teacher.UID)}
                >
                  Remove Admin
                </button>
              ) : (
                <button
                  className="text-xs text-black-main font-medium bg-[#13ab5a] p-2 rounded-md "
                  onClick={() => handleAddAdmin(teacher.UID)}
                >
                  Make Admin
                </button>
              )}
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
          </div>
        );
      })}
    </div>
  );
};

export default TeacherList;
