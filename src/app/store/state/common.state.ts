import {ToastMessageModel} from "../../model/toast-message.model";

export interface CommonState {
    toastMessage: ToastMessageModel;
}

export const initialState: CommonState = {
    toastMessage: {
        message: undefined,
        messageType: undefined
    }
}
