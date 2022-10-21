import { createContext, useState } from 'react';

export const NotificationContext = createContext({
    isNotificationOpen: false,
    setIsNotificationOpen: () => {},
});

export const NotificationPorvider = ({ children }) => {
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const value = { isNotificationOpen, setIsNotificationOpen };

    return <NotificationContext.Provider value={value}>{children}</NotificationContext.Provider>;
}