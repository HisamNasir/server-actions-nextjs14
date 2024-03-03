import AddTodo from "@/app/lib/AddTodo";
import Todo from "@/app/lib/Todo";
import { prisma } from "@/utils/prisma";
import React from "react";

async function getData() {
  const data = await prisma.todo.findMany({
    select: {
      title: true,
      id: true,
      isCompleted: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
}

const Home = async () => {
  const data = await getData();
  return (
    <div className="p-2 py-8 mx-auto flex justify-center ">
      <div className=" w-full border p-2 rounded-lg flex flex-col gap-2">
        <h1 className=" font-black text-xl text-center tracking-widest">
          ToDo List
        </h1>
        <AddTodo />
        <div className="flex flex-col gap-2 m-1 p-2 ">
          <h1 className=" text-lg font-bold">List of Todos:</h1>
          {data.map((todo, id) => (
            <div className="w-full" key={id}>
              <Todo todo={todo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
