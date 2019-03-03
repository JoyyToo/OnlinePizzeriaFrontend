import React from "react";
import TextInput from "../common/TextInput";

const RegisterForm = ({
                      state,
                      onSave,
                      onChange,
                      loading,
                      errors = {}
                    }) => {
  return (
    <form>
      <h1>Register Here </h1>
      <TextInput
        name="email"
        label="Email"
        value={state.email}
        onChange={onChange}
        error={errors.email}
      />

      <TextInput
        name="username"
        label="Username"
        onChange={onChange}
        value={state.username}
        error={errors.username}
      />

      <TextInput
        name="password"
        label="Password"
        value={state.password}
        onChange={onChange}
        error={errors.password}
      />

      <input
        type="submit"
        disabled={loading}
        value={loading ? "Saving..." : "Save"}
        className="btn btn-primary"
        onClick={onSave}
      />
    </form>
  );
};

export default RegisterForm;
