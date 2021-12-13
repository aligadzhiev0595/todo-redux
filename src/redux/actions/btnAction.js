import * as types from '../actions/actionTypes';

export const statusBtn = (status) => {
    return {
        type: types.STATUS_BTN, statusBtn: status
    }
}