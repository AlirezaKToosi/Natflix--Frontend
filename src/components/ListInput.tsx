// Project files
import InputField from "components/InputField";
import InputImage from "components/InputImage";
import InputSelect from "components/InputSelect";
import InputTextArea from "components/InputTextArea";

interface iProps {
  fields: any;
  state: [any, Function];
}

export default function ListInput({ fields, state }: iProps) {
  const Inputs = fields.map((item: any, index: number) => {
    switch (item.type) {
      case "select":
        return <InputSelect key={index} field={item} state={state} />;
      case "image":
        return <InputImage key={index} field={item} state={state} />;
      case "text-area":
        return <InputTextArea key={index} field={item} state={state} />;
      default:
        return <InputField key={index} field={item} state={state} />;
    }
  });

  return Inputs;
}
