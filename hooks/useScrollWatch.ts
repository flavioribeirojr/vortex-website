import React from 'react';
import { usePreviousValue } from './usePreviousValue';

export function useScrollWatch() {
    const [ currentScroll, setCurrentScroll ] = React.useState(0);
    const previousScrollPosition = usePreviousValue(currentScroll);

    React.useEffect(() => {
        updateScrollDirection();
    }, [currentScroll]);

    const [ scrollDirection, setScrollDirection ] = React.useState<ScrollDirection>(ScrollDirection.bottom);

    React.useEffect(() => {
        document.addEventListener('scroll', updateCurrentScrollToWindow);

        return () => {
            document.removeEventListener('scroll', updateCurrentScrollToWindow);
        }
    }, []);

    function updateCurrentScrollToWindow() {
        setCurrentScroll(window.scrollY);
    }

    function updateScrollDirection() {
        const previousPosition = previousScrollPosition || 0;

        if (currentScroll > previousPosition) {
            setScrollDirection(ScrollDirection.bottom);
            return;
        }

        setScrollDirection(ScrollDirection.top);
    }

    return {
        currentScroll,
        scrollDirection
    };
}

export enum ScrollDirection {
    top = 'top',
    bottom = 'bottom'
}