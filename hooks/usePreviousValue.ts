import React from 'react';

export function usePreviousValue<T>(value: T) {
    const previousValueRef = React.useRef<T>();

    React.useEffect(() => {
        previousValueRef.current = value;
    });

    return previousValueRef.current;
}