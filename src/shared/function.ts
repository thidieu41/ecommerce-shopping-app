import { notification } from "antd";

export const handleNotification = (message: string, type: string) => {
  (type === "error"
    ? notification.error
    : type === "warning"
    ? notification.warning
    : notification.success)({
    message,
    duration: 2,
  });
};
