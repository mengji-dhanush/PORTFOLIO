"use client";
import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    msg: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (data.status) {
      alert("email sent successfully");
    } else {
      alert("some error occured");
    }
    setFormData({ name: "", email: "", msg: "" });
  };

  return (
    <div className="form flex justify-center items-center ">
      <form
        onSubmit={handleSubmit}
        className="border border-white w-100 h-120 flex flex-wrap justify-center items-center px-4 py-2 rounded-xl border-2 m-4"
      >
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="enter your name (optional)"
          className="border border-white rounded-lg m-2 px-4 py-2 w-full h-[15%]"
        />
        <br />
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          required
          onChange={handleChange}
          placeholder="enter your email (mandatory)"
          className="border border-white rounded-lg m-2 px-4 py-2 w-full h-[15%]"
        />
        <br />
        <textarea
          name="msg"
          id="msg"
          required
          value={formData.msg}
          onChange={handleChange}
          placeholder="enter your message (mandatory)"
          className="border border-white rounded-lg m-2 px-4 py-2 w-full h-[30%]"
        ></textarea>
        <br />
        <button
          type="submit"
          className="cursor-pointer m-1 border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition duration-300"
        >
          submit
        </button>
      </form>
    </div>
  );
}
