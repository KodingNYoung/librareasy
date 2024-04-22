import { FormState } from "@/utilities/types";
import { useCallback, useEffect, useRef } from "react";
import { Id, ToastOptions, toast } from "react-toastify";

export const useFormToast = (
  formState: FormState,
  initialMessage: string = "Loading..."
) => {
  const toastRef = useRef<Id>("");
  const formRef = useRef<HTMLFormElement>(null);

  const openToast = useCallback(() => {
    toastRef.current = toast(initialMessage, {
      type: "default",
      isLoading: true,
      closeButton: false
    });
  }, [initialMessage, toastRef]);

  //   handle form loading
  useEffect(() => {
    if (!formRef.current) return;
    const form = formRef.current;
    form.addEventListener("formdata", openToast);

    return () => form.removeEventListener("formdata", openToast);
  }, [formRef]);

  // handle form success
  useEffect(() => {
    if ("success" in formState) {
      const toastProps: ToastOptions = {
        type: "success",
        isLoading: false,
        autoClose: 3000,
        closeButton: true
      };
      if (toastRef.current) {
        toast.update(toastRef.current, {
          ...toastProps,
          render: formState.success?.message
        });
      } else {
        toast(formState.success?.message, toastProps);
      }
    }
  }, [formState]);

  // handle form failed
  useEffect(() => {
    if ("error" in formState) {
      const toastProps: ToastOptions = {
        type: "error",
        isLoading: false,
        autoClose: 3000,
        closeButton: true
      };
      if (toastRef.current) {
        toast.update(toastRef.current, {
          ...toastProps,
          render: formState.error?.message
        });
      } else {
        toast(formState.error?.message, toastProps);
      }
    }
  }, [formState]);

  return formRef;
};
