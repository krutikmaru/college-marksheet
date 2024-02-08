import { useLocation } from "react-router-dom";

const ViewMarks = () => {
    const {state} = useLocation()
    console.log(state)
    return <div>
              <div className="flex flex-col space-y-4 pb-20">
                {state.students.map(student => {
                    console.log(student[state.pendingPublish.sem.toUpperCase()])
                    return <div className="flex flex-col bg-[#131313] p-5 rounded-md">
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
                      <span className="text-xs text-[#5f5f5f] font-medium">Marks</span>
                      <input
                        // value={student[state.pendingPublish.sem.toUpperCase()][state.pendingPublish.abbrevation][state.pendingPublish.examType]}
                        type="number"
                        disabled
                        className="w-full bg-[#131313] py-3 px-4 rounded-md border-2 border-[#1d1d1d] outline-none text-base"
                      />
                    </div>
                  </div>
                })}

        </div>
    </div>
}

export default ViewMarks;