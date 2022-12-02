/**
 * 
 * Helper
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// SET BROWSER STORAGE
export const setStorage = (key: string, value: string) => {
    localStorage.setItem(key, value);
}

// GET BROWSER STORAGE
export const getStorage = (key: string) => {
    return localStorage.getItem(key);
}

// CLEAR BROWSER STORAGE
export const clearStorage = () => {
    localStorage.clear();
}