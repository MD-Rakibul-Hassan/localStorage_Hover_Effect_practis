
export const getValueFormLocalStorage = () => {
    const savedValue = localStorage.getItem('books');
    if (savedValue) {
        return JSON.parse(savedValue);
    }
    return []
}

export const saveValueToLocalStorage = (key, value) => {
    const savedValue = getValueFormLocalStorage(key);
    savedValue.push(value);
    localStorage.setItem(key,JSON.stringify(savedValue))
}