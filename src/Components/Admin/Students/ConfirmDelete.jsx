import { useApplicationManager } from "../../../contexts/ApplicationContext";

const ConfirmDelete = ({ handleDelete }) => {
  const { deactivatePopupCenter } = useApplicationManager();
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-[350px] h-60 rounded-md bg-[#131313] font-lexend flex flex-col justify-center items-center"
    >
      <h1 className="text-white text-xl mb-5">Confirm Delete?</h1>
      <div>
        <span
          onClick={deactivatePopupCenter}
          className="mr-4 text-[#5c5c5c] text-sm underline cursor-pointer"
        >
          Cancle
        </span>
        <span
          onClick={handleDelete}
          className="py-2 px-4 text-sm bg-red-600 text-white rounded-md cursor-pointer"
        >
          Delete
        </span>
      </div>
    </div>
  );
};

export default ConfirmDelete;
