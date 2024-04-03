import { Input } from "../input/Input";
import { useData } from "../DataProvider/DataProvider";
import { useState } from "react";

export const InputWrapper = () => {
  const { setNumberOfRows, numberOfRows } = useData();
  const [status, setStatus] = useState<boolean>(false);
  const [errorMSG, setErrorMsg] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const parsedValue = parseInt(e.target.value);
    const value: number | string = !isNaN(parsedValue) ? parsedValue : "";
    checkValue(value);
  };

  const checkValue = (value: number | string) => {
    const numberValue = typeof value === "number" ? value : parseInt(value);
    switch (true) {
      case numberValue > 100:
        setStatus(true);
        setErrorMsg("Max 100");
        setNumberOfRows(100);
        break;
      default:
        setNumberOfRows(numberValue);
        setStatus(false);
        setErrorMsg(" ");
        break;
    }
  };

  const labelTitle = (label: string) => (status ? "Error" : label);

  return (
    <>
      <Input
        value={numberOfRows}
        label={labelTitle("Podaj liczbę wierszy")}
        type={"number"}
        handle={handleChange}
        error={errorMSG}
        status={status}
      />
    </>
  );
};
