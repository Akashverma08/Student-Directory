import { students } from "./studentData";
import StudentCard from "./StudentCard";

export default function StudentList() {
  return (
    <div className="student-list">
      {students.map((student) => (
        <div key={student.id}>
          <StudentCard user={student} />
        </div>
      ))}
    </div>
  );
}