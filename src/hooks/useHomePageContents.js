import {useContext} from 'react';
import {ContentsStoreContext } from '../providers/ContentsStoreProvider';

function useContents(){
    const {contents} =useContext(ContentsStoreContext);

    return contents
}


export {useContents}