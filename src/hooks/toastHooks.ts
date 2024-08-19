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

  useEffect(() => {
    const toastProps: ToastOptions = {
      isLoading: false,
      autoClose: 3000,
      closeButton: true
    };
    // handle form success
    if ("success" in formState && formState.success) {
      if (toastRef.current) {
        toast.update(toastRef.current, {
          ...toastProps,
          type: "success",
          render: formState.message
        });
      } else {
        toast(formState.message, toastProps);
      }
    }
    // handle form failed request
    if ("success" in formState && !formState.success && formState.errorType) {
      if (toastRef.current) {
        toast.update(toastRef.current, {
          ...toastProps,
          type: "error",
          render: formState.message
        });
      } else {
        toast(formState.message, toastProps);
      }
    }
    // handle form failed validation
    if ("fields" in formState) {
      console.log("Hello fields", console.log(formState.fields));
      toast.dismiss(toastRef.current);
    }
  }, [formState]);

  return formRef;
};
