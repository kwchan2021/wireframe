import { useCallback } from 'react';

const TabButton = ({name, tabName, onActiveTabChange}) => {
    const handleClick = useCallback(() => {
        onActiveTabChange(tabName);
    }, [onActiveTabChange, tabName])
    return (
        <button
            onClick={handleClick}
        >
            {name}
        </button>
    )
}

export default TabButton