import React from "react";
import Form from "../ui/Form";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { create } from "@/app/actions/todoActions";

const AddTodo = () => {
  return (
    <div className=" w-full border rounded-lg">
      <div>
        <Form action={create} className="w-2/3 mx-auto">
          <div className="flex gap-1">
            <Input name="input" type="text" placeholder="Add Todo.." />
            <Button type="submit" text="Add" />
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddTodo;
