// Node modules
import { ChangeEvent } from "react";

// Project files
import iInputTextArea from "types/iInputTextArea";

interface iProps {
  field: iInputTextArea;
  state: [any, Function];
}

export default function InputField({ field, state }: iProps) {
  const { key, autoFocus, label, required } = field;
  const [value, setValue] = state;

  // Properties
  const initialValue = value[key] ?? "";

  // Methods
  function onChange(event: ChangeEvent<HTMLTextAreaElement>) {
    const newValue = event.target.value;

    changeValue(newValue);
  }

  function changeValue(newValue: any) {
    const clonedItem = { ...value };

    clonedItem[key] = newValue;
    setValue(clonedItem);
  }

  return (
    <label className="input input-text-area">
      <span>{label}:</span>
      <textarea
        autoFocus={autoFocus}
        onChange={onChange}
        required={required}
        value={initialValue}
      />
    </label>
  );
}
