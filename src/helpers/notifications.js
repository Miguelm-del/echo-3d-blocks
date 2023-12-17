import { Notify } from "quasar";

export function notifySuccess(message) {
  Notify.create({
    message: message,
    type: "positive",
    position: "top-right",
  });
}

export function notifyError(message) {
  Notify.create({
    message: message,
    type: "negative",
    position: "top-right",
  });
}
