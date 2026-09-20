import type { Student } from "./studentTypes";


export default function StudentCard({ user }: {user:Student}) {
    return (
        <div className="student-card">
            <h3>{user.name}</h3>
            <p><strong>Course:</strong> {user.course}</p>
            <p><strong>Age:</strong> {user.age}</p>
        </div>
    )
}