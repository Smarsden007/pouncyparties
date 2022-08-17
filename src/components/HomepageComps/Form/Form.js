import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

import {
    FormMaster,
    FormCol,
    FormButton,
    FormBox,
    LabelRow,
    FormLabel,
    FormInput,
    SelectForm,
    FormOption
} from './FormStyles'

function ContactForm() {
    const [state, handleSubmit] = useForm("mqknoyqr");
    const [name, setName] = useState();
    const [date, setDate] = useState();
    if (state.succeeded) {
        return <p className='return-message'>WE CAN'T WAIT TO CELEBRATE WITH YOU!</p>;
    }


    return (

        <FormMaster>

            <form onSubmit={handleSubmit}>
                <FormCol>
                    <FormBox>
                        <LabelRow>
                            <FormLabel htmlFor="name">
                                Name
                            </FormLabel>
                            <FormInput
                                id="name"
                                type="name"
                                name="name"
                                onChange={(e) => setName(e.target.value)}
                            />
                            <ValidationError
                                prefix="name"
                                field="name"
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
                                onChange={(e) => setName(e.target.value)}
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                        </LabelRow>

                        <LabelRow>
                            <FormLabel htmlFor="phone">
                                Phone
                            </FormLabel>
                            <FormInput
                                id="phone"
                                type="phone"
                                name="phone"
                                onChange={(e) => setName(e.target.value)}
                            />
                            <ValidationError
                                prefix="phone"
                                field="phone"
                                errors={state.errors}
                            />
                        </LabelRow>
                        <LabelRow>
                            <FormLabel htmlFor="address">
                                Address
                            </FormLabel>
                            <FormInput
                                id="address"
                                type="address"
                                name="address"
                                onChange={(e) => setName(e.target.value)}
                            />
                            <ValidationError
                                prefix="Address"
                                field="address"
                                errors={state.errors}
                            />
                        </LabelRow>
                        <LabelRow>
                            <FormLabel htmlFor="clock">
                                Start Time
                            </FormLabel>
                            <FormInput
                                id="time"
                                type="time"
                                name="time"
                                onChange={(e) => setName(e.target.value)}
                            />
                            <ValidationError
                                prefix="Address"
                                field="address"
                                errors={state.errors}
                            />
                        </LabelRow>
                        <LabelRow>
                            <FormLabel htmlFor="option">
                                Will you need a generator?
                            </FormLabel>
                            <SelectForm name="Generator" id='Generator' onChange={(e) => setName(e.target.value)}>
                                <FormOption value='Generator'>Select Option</FormOption>
                                <FormOption value='yes'>Yes ($50)</FormOption>
                                <FormOption value='no'>No</FormOption >
                            </SelectForm>
                            <ValidationError
                                prefix="date"
                                field="date"
                                errors={state.errors}
                            />
                        </LabelRow>
                        <LabelRow>
                            <FormLabel htmlFor="date">
                                Date
                            </FormLabel>
                            <FormInput
                                id="date"
                                type="date"
                                name="date"
                                onChange={(e) => setDate(e.target.value)}
                            />
                            <ValidationError
                                prefix="date"
                                field="date"
                                errors={state.errors}
                            />
                        </LabelRow>
                        <LabelRow>
                            <FormLabel htmlFor="package">
                                Package
                            </FormLabel>
                            <SelectForm name="Packages" id='Packages' onChange={(e) => setName(e.target.value)}>
                                <FormOption value='Packages'>Select Bouncer</FormOption>
                                <FormOption value='toddler'>The Toddler</FormOption>
                                <FormOption value='classic'>The Classic Castle</FormOption >
                                <FormOption value='basteel'>The Basteel</FormOption >
                                <FormOption value='mixpounce'>The Mix & Pounce</FormOption >

                            </SelectForm>
                            <ValidationError
                                prefix="select"
                                field="select"
                                errors={state.errors}
                            />
                        </LabelRow>
                        <LabelRow> <FormLabel htmlFor="package">
                            Rental Length
                        </FormLabel>
                            <SelectForm name="Duration" id='Duration' onChange={(e) => setName(e.target.value)}>
                                <FormOption value='none'>Select Rental Length</FormOption>
                                <FormOption value='4hrs'>4 HOURS</FormOption>
                                <FormOption value='6hrs'>6 HOURS</FormOption >
                                <FormOption value='8hrs'>8 HOURS</FormOption >


                            </SelectForm>
                        </LabelRow>
                        
                        <FormButton type="submit" disabled={!name && !date}>
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