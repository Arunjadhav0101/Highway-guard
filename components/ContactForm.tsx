"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;

  message: string;
}
interface FormField {
  label: string;
  name: keyof FormData;
  placeholder: string;
  type: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",

    message: "",
  });
  const formFields: FormField[] = [
    {
      label: "First Name",
      name: "firstName",
      placeholder: "Enter your first name",
      type: "text",
    },
    {
      label: "Last Name",
      name: "lastName",
      placeholder: "Enter your last name",
      type: "text",
    },
    {
      label: "Email",
      name: "email",
      placeholder: "Enter your email",
      type: "email",
    },
    {
      label: "Contact",
      name: "phone",
      placeholder: "Enter your contact number",
      type: "tel",
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name as keyof FormData;
    const newFormData: FormData = { ...formData, [name]: value };
    setFormData(newFormData);
  };
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData, "Form data");
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="w-full max-h-fit grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
        {formFields.map((field) => (
          <div className="flex-1" key={field.name}>
            <label
              htmlFor={field.name}
              className="block  font-semibold text-[#474747] p-3 text-md"
            >
              {field.label}
            </label>
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              onChange={handleChange}
              placeholder={field.placeholder}
              value={formData[field.name]}
              className="w-full px-4 py-2 border-b border-input pb-1 mb-2 outline-none"
              required
            />
          </div>
        ))}
      </div>

      <div className="w-full flex justify-end">
        <Button className="p-6 px-8 mt-8">Send Message</Button>
      </div>
    </form>
  );
};

export default ContactForm;
