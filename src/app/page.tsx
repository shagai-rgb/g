/** @format */
"use client";
import { useState } from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Card from "@/components/Card";

export default function Home() {
  const [username, setUsername] = useState(""); // Хэрэглэгчийн нэр
  const [password, setPassword] = useState(""); // Нууц үг
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = () => {
    if (username === "" || password === "") {
      setUsernameError(username === "");
      setPasswordError(password === "");
    } else {
      console.log("Form submitted");
    }
  };

  return (
    <div className="flex flex-col gap-10 justify-center items-center w-full min-h-screen">
      {/* <Input
          label="Name"
          type="text"
          placeholder="Enter your name"
          size="md"
          onChange={(e) => setUsername(e.target.value)}
          error={usernameError}
          iconLeft={
            <i className="fa fa-user">
              <img
                className="h-4 w-4"
                src="https://cdn-icons-png.flaticon.com/128/2321/2321232.png"
                alt="username"
              />
            </i>
          }
        />

        <Input
          label="Text"
          type="password"
          placeholder="Enter your text"
          size="md"
          onChange={(e) => setPassword(e.target.value)}
          error={passwordError}
          iconLeft={
            <i className="fa fa-user">
              <img
                className="h-4 w-4"
                src="https://cdn-icons-png.flaticon.com/128/2321/2321232.png"
                alt="username"
              />
            </i>
          }
          // eye
        /> */}

      <Button
        color="danger"
        size="lg"
        type="link"
        hover="shadow-lg"
        effect="transition"
        error
        onClick={handleSubmit}
      >
        Click me!
      </Button>
      <Card
        title="Thunder ch ymu "
        content="hha"
        image="image.png"
        background="gray"
        price={231}
        textColor="white"
        size="lg"
        border="rounded"
        hoverEffect
        footer
        Logo=""
      />
      <Card
        image="image.png"
        title="test"
        content={""}
        border="rounded"
        background="gray"
      />
    </div>
  );
}
