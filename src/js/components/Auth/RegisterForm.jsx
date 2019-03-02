import React from "react";
import TextInput from "../common/TextInput";

const RegisterForm = ({
                      auth,
                      onSave,
                      onChange,
                      loading,
                      errors = {}
                    }) => {
  return (
    <form>
      <h1>Register Here </h1>
      <TextInput
        name="username"
        label="Username"
        value={auth.username}
        onChange={onChange}
        error={errors.username}
      />

      <TextInput
        name="email"
        label="Email"
        value={auth.email}
        onChange={onChange}
        error={errors.email}
      />

      <TextInput
        name="password"
        label="Password"
        value={auth.password}
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
