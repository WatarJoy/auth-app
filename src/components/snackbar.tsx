import React, { useEffect } from "react";

interface SnackbarProps {
  message: string;
  type?: "info" | "error" | "success";
  open: boolean;
  onClose: () => void;
}

const Snackbar: React.FC<SnackbarProps> = ({ message, type = "info", open, onClose }) => {
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [open, onClose]);

  return (
    <div
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded shadow-lg text-white transition-all duration-300
      ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
      ${
        type === "error"
          ? "bg-red-500"
          : type === "success"
          ? "bg-green-500"
          : "bg-blue-500"
      }`}
    >
      {message}
    </div>
  );
};

export default Snackbar;
