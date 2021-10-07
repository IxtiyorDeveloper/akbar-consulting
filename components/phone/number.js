import React from "react";
import { TextField } from "@material-ui/core";
import NumberFormat from "react-number-format";


const PhoneNumberFormat = props => {
    const { onChange, inputRef, focused, ...other } = props;
    const handleValueChange = values => {
        onChange({
            target: { value: values.value }
        });
    };

    return (
        <NumberFormat
            {...other}
            getInputRef={inputRef}
            format="+998 (##) ###-##-##"
            mask="_"
            allowEmptyFormatting={focused}
            onValueChange={handleValueChange}
            className="inputPhone1"
        />
    );
};

function Phone({num1,setNum1,type,num2,setNum2,num3,setNum3,num4,setNum4}) {


    const handlePhoneNumber = event => {
        type === "first"? setNum1(event.target.value):type === "second"?setNum2(event.target.value):
            type === "third"?setNum3(event.target.value):setNum4(event.target.value)
    };
    return (
        <div className="App">
            <TextField
                required
                label=""
                value={type === "first" ? num1:type === "second" ? num2 :type === "third" ? num3 :num4}
                placeholder={((type === "first") || (type === "third")) ? "+998":"+998"}
                inputProps={{
                    onChange: handlePhoneNumber
                }}
                InputProps={{
                    inputComponent: PhoneNumberFormat
                }}
            />
        </div>
    );
}
export default Phone
