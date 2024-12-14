import { toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const options: ToastOptions = { position: 'top-right', autoClose: 1500 };

export const showWarningToast = (message: string) => {
  toast.warning(message, options);
};

export const showSuccessToast = (message: string) => {
  toast.success(message, options);
};

export const showErrorToast = (message: string) => {
  toast.error(message, options);
};
