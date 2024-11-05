import { useState } from 'react';

export const useForm = (initialState) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName) {
      newErrors.fullName = "Це поле обов'язкове";
    }
    
    if (!formData.email) {
      newErrors.email = "Це поле обов'язкове";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Невірний формат email";
    }
    
    if (!formData.age || formData.age < 18) {
      newErrors.age = "Вік повинен бути більше 18 років";
    }
    
    if (!formData.education) {
      newErrors.education = "Оберіть освіту";
    }
    
    if (!formData.purpose) {
      newErrors.purpose = "Оберіть мету";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return {
    formData,
    errors,
    handleChange,
    validateForm,
    setFormData
  };
};

export default useForm;