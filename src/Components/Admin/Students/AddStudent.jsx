import { extractStartYearFromBatch } from "../../../utils/functions/extractStartYearFromBatch";
import { motion } from "framer-motion";
const AddStudent = ({
  students,
  studentName,
  setStudentName,
  studentEmail,
  setStudentEmail,
  selectedBatch,
  selectedCourse,
  handleAdd,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        ease: "easeInOut",
      }}
      className="bg-[#1b1b1b] w-full p-4 py-6 rounded-md flex flex-col items-start justify-center my-3 space-y-4"
    >
      <div className="w-full">
        <span className="text-xs text-[#5f5f5f] font-medium">Student Name</span>
        <input
          value={studentName}
          onChange={(e) => {
            setStudentName(e.target.value);
          }}
          className="w-full bg-[#131313] py-3 px-4 rounded-md border-2 border-[#1d1d1d] outline-none text-base"
        />
      </div>
      <div className="w-full">
        <span className="text-xs text-[#5f5f5f] font-medium">
          Student Email
        </span>
        <input
          value={studentEmail}
          onChange={(e) => {
            setStudentEmail(e.target.value);
          }}
          className="w-full bg-[#131313] py-3 px-4 rounded-md border-2 border-[#1d1d1d] outline-none text-base"
        />
      </div>
      <div className="w-full">
        <span className="text-xs text-[#5f5f5f] font-medium">UID</span>
        <div
          disabled
          className="w-full bg-[#131313] text-[#525252] py-3 px-4 rounded-md border-2 border-[#1d1d1d] outline-none text-base"
        >
          {`${extractStartYearFromBatch(selectedBatch)}${
            students[selectedBatch][selectedCourse]["UIDPrefix"]
          }${String(
            students[selectedBatch][selectedCourse].students.length + 1
          ).padStart(3, "0")}`}
        </div>
      </div>
      <div className="flex justify-end w-full">
        <button
          onClick={handleAdd}
          className="text-sm text-white bg-jhc-blue-primary py-2 px-6 rounded-md "
        >
          Add
        </button>
      </div>
    </motion.div>
  );
};

export default AddStudent;
