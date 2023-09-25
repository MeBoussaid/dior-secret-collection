import React from "react";
import styles from "../styles/textField.module.scss";

interface TextFieldProps {
  Id: string;
  Name?: string;
  Type: string;
  LabelStyleViaProps?: string;
  LabelText?: string;
  InputStyleViaProps?: string;
  IfError?: boolean;
  OnChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  Value?: string;
  Placeholder?: string;
}

function TextField(props: TextFieldProps) {
  return (
    <div className={styles.inputGroup}>
      <input
        id={props.Id}
        name={props.Name || " "}
        type={props.Type}
        className={`${props.InputStyleViaProps || " "} ${styles.inputField} ${
          props.IfError && styles.inputErrorStyle
        }`}
        onChange={props.OnChange || undefined}
        value={props.Value || ""}
        placeholder={props.Placeholder}
      />

      <div className={styles.inputErrorMessage}>{props.IfError || " "}</div>
    </div>
  );
}

export default TextField;
