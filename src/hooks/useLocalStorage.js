import {useState} from 'react';

const useLocalStorage = (name , initialValue) =>{
    const [storageValue,setStorageValue]=useState(()=>{
        let data = JSON.parse(localStorage.getItem(name));
        return data || initialValue
    });

    const setValue = (value)=>{
        setStorageValue(value);
        localStorage.setItem(name,JSON.stringify(value))
    }
    return [storageValue,setValue]

}
export {useLocalStorage}