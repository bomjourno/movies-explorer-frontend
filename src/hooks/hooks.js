/* eslint-disable import/prefer-default-export */
import React from 'react';

export function useFormWithValidation() {
  const [values, setValues] = React.useState({
    name: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (event) => {
    const { target } = event;
    const { name } = target;
    const { value } = target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest('form').checkValidity());
  };

  return {
    values, handleChange, errors, isValid, setValues, setIsValid,
  };
}
