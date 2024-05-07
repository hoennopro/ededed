import React from "react";

interface FunctionalProps {
  name: string;
  students: string[];
}

export default function Functional(props: FunctionalProps) {
  const { name, students } = props;

  return (
    <div>
      Functional
      <p>Xin chào {name}</p>
      {/* hiển thị danh sách sinh viên */}
      <ul>
        {students.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
