import { REGISTER } from "../constants/action-types";

export function register(payload) {
    return { type: REGISTER, payload }
  };
