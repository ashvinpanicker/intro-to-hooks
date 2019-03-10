import React from 'react'

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

export {
    useSmartButton
}