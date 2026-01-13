import React from "react";
import { useState } from "react";

const useForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // console.log(name + ":", value);
  };

  return {formData, handleChange};
};

export default useForm;
