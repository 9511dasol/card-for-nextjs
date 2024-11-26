"use client";

import Image from "next/image";
import { useState } from "react";
import TeacherForm from "./forms/TeacherForm";
import StudentForm from "./forms/StudentForm";
import { useRouter } from 'next/navigation';

function FormModal({
  table,
  type,
  data,
  id,
}: {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
}) {
  const router = useRouter();
  const handleDelete = () => {
    router.refresh();
  };
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-lamaYellow"
      : type === "update"
      ? "bg-lamaSky"
      : "bg-lamaPurple";
  const [open, setOpen] = useState<boolean>(false);
  const Form = () =>
    type === "delete" && id ? (
      <form action="" className="p-4 flex flex-col gap-4">
        <span className="text-center font-medium">
          All data will be lost. Are you sure you want to delete this {table}
        </span>
        <button
          className="bg-red-700 text-white py-4 px-4 rounded-md border-none w-max self-center"
          onClick={() => setOpen(!open)}
        >
          Delete
        </button>
      </form>
    ) : table === "teacher" ? (
      <TeacherForm type={type} data={data} />
    ) : table === "student" ? (
      <StudentForm type={type} data={data} />
    ) : (
      <div className="flex justify-center items-center">작업중</div>
    );

  return (
    <>
      <button
        className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
        onClick={() => setOpen(!open)}
      >
        <Image src={`/${type}.png`} alt="" width={16} height={16} />
      </button>
      {open && (
        <div className="w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] xl:w-[50%] lg:w-[40%] ">
            {/* close */}
            <button
              className="absolute top-2 right-4 cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <Image src={"/close.png"} alt="" width={14} height={14} />
            </button>
            <Form />
          </div>
        </div>
      )}
    </>
  );
}

export default FormModal;
