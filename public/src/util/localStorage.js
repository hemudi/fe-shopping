const localStorageKey = 'HemPang';

export const addLocalData = (key, arrayData) => {
    const storedData = getLocalData() || {
        [key]: []
    };

    if (!storedData[key]) {
        storedData[key] = new Array();
    }

    storedData[key].push(...arrayData);
    localStorage.setItem(localStorageKey, JSON.stringify(storedData));
}

export const getLocalData = () => {
    const storedData = localStorage.getItem(localStorageKey);
    const parsedData = JSON.parse(storedData);
    return parsedData;
}

export const clearLocalData = () => {
    localStorage.clear();
}