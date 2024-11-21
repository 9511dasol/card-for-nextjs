import { FieldError } from "react-hook-form";

type InputFieldProps = {
  lable: string;
  type?: string;
  register: any;
  name: string;
  defaultValue?: string;
  error?: FieldError;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};
// interface가 = 이 필요음따!!@

function InputField({
  lable,
  type = "text",
  register,
  name,
  defaultValue,
  error,
  inputProps,
}: InputFieldProps) {
  return (
    <div className="text-xs text-gray-500 gap-2 md:w-1/4">
      <label htmlFor={lable} className="text-xs text-gray-600">
        {lable}
      </label>
      <input
        id={lable}
        type={type}
        {...register(name)}
        className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
        {...inputProps}
        defaultValue={defaultValue}
      />
      {error?.message && (
        <p className="text-sm text-red-400">{error.message.toString()}</p>
      )}
    </div>
  );
}

export default InputField;
