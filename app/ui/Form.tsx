"use client";
import { useRef, ReactNode } from "react";
interface fromProps {
  children: ReactNode;
  action: (formData: FormData) => Promise<void | boolean>;
  className?: string;
  onSubmit?: () => void;
}
const Form = ({ children, action, className, onSubmit }: fromProps) => {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <form
      className={className}
      onSubmit={onSubmit}
      ref={ref}
      action={async (formData) => {
        await action(formData);
        ref.current?.reset();
      }}
    >
      <div className="p-2 border rounded-lg m-1">{children}</div>
    </form>
  );
};

export default Form;
