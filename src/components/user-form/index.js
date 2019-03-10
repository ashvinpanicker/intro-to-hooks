import React from "react";
import Logo from "../common/logo";

// Custom hook
function useSmartButton(buttonDefault) {
    const [disabled, setDisabled] = React.useState(buttonDefault);

    function onChange(event) {
        if (event.target.value.length === 0) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }

    return [disabled, onChange];
}

export default (props) => {
    const [disabled, onChange] = useSmartButton(true);

    return (
        <form className="user-form" onSubmit={props.onChange}>
            <Logo big="true" />

            <input
                onChange={onChange}
                type="text"
                placeholder="github username"
            />

            <button type="submit" disabled={disabled}>
                See profile
                </button>
        </form>
    );
}
