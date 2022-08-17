import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

import {
    FormMaster,
    FormCol,
    FormButton,
    FormBox,
    LabelRow,
    FormLabel,
    FormInput,
    FormTextArea,
    SelectForm,
    FormOption
} from './FormStyles'

function ContactForm() {
    const [state, handleSubmit] = useForm("xzbokyra");
    if (state.succeeded) {
        return ;
    }


    return (
       
            <FormMaster>

                <form onSubmit={handleSubmit}>
                    <FormCol>
                        <FormBox>
                            <LabelRow>
                                <FormLabel htmlFor="email">
                                    Name
                                </FormLabel>
                                <FormInput
                                    id="name"
                                    type="name"
                                    name="name"
                                />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                />
                            </LabelRow>
                            <LabelRow>
                                <FormLabel htmlFor="email">
                                    Company Name
                                </FormLabel>
                                <FormInput
                                    id="name"
                                    type="name"
                                    name="name"
                                />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                />
                            </LabelRow>
                            <LabelRow>
                                <FormLabel htmlFor="email">
                                    Email Address
                                </FormLabel>
                                <FormInput
                                    id="email"
                                    type="email"
                                    name="email"
                                />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                />
                            </LabelRow>
                            <LabelRow>
                                <FormLabel htmlFor="email">
                                    Phone
                                </FormLabel>
                                <FormInput
                                    id="phone"
                                    type="phone"
                                    name="phone"
                                />
                                <ValidationError
                                    prefix="phone"
                                    field="phone"
                                    errors={state.errors}
                                />
                            </LabelRow>
                            <LabelRow> <FormLabel htmlFor="package">
                                    Package
                                </FormLabel>
                                <SelectForm name="Packages" id='Packages'>
                                    <FormOption value='smallempire'>The Toddler</FormOption>
                                    <FormOption  value='limitedpackage'>The Classic Castle</FormOption >
                                    <FormOption  value='premiumpackage'>The Basteel</FormOption >
                                    <FormOption  value='empirepackage'>The Mix & Pounce</FormOption >

                                </SelectForm>
                            </LabelRow>
                            <LabelRow>
                            <FormLabel htmlFor="email">
                                    Message
                                </FormLabel>
                                <FormTextArea
                                    id="message"
                                    name="message"
                                />
                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}
                                />
                            </LabelRow>
                            <FormButton type="submit" disabled={state.submitting}>
                                Submit
                            </FormButton>
                        </FormBox>
                    </FormCol>
                </form>

            </FormMaster>

     
    );
}
function App() {
    return (
        <ContactForm />
    );
}
export default App;