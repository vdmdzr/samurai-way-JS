import {maxLengthCreator, required} from "../../../Utils/validators/validators";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/formsControls/FormsControl";
import React from "react";

const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props) => {
    return (
        // handleSubmit появляется из reduxForm
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={'newMessageBody'}
                       placeholder={'enter your message'} validate={[required, maxLength50]}/>
            </div>
            <div>
                <button>send</button>
            </div>
        </form>
    )
}

export const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)