import React from "react";
import Logo from "../common/logo";
import { useSmartButton } from "../hooks"

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
