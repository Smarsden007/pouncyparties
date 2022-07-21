import React from 'react';
import './form.css'



import { useForm, ValidationError } from '@formspree/react';


function ContactForm() {
    const [state, handleSubmit] = useForm("xqknoaaq");
    if (state.succeeded) {
        return <p className='return-message'>WE CAN'T WAIT TO CELEBRATE WITH YOU!</p>;
    }
    return (

        <section className='book-now1'>
            <div className='background2'>
               
               

                <form onSubmit={handleSubmit}>

                    <div className='master-form'>
                        <div className='email1'>
                            <label htmlFor="name">
                                *first & last name
                            </label>
                            <input
                                id="name"
                                type="name"
                                name="name"
                                placeholder='Pouncy'
                            />
                        </div>


                        <div className='email1'>
                            <label htmlFor="phone">
                                *phone
                            </label>
                            <input
                                id="phone"
                                type="phone"
                                name="phone"
                                placeholder='111-111-1111'
                            />
                        </div>
                        <div className='email1'>
                            <label htmlFor="email">
                                *email
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder='hello@pouncyparties.com'
                            />
                        </div>
                        <div className='bouncer'>
                            <label htmlFor="bouncer">
                                *bouncer
                            </label>
                            <select name="bouncetype" id="bouncetype">
                                <option value="cass">The Classic Castle</option>
                                <option value="mixx">The Pounce and Slide Mix</option>
                                <option value="toddler">The Toddler Sized</option>
                            </select>
                        </div>
                        <div className='city1'>
                            <label htmlFor="eventaddy">
                                *event address
                            </label>
                            <input
                                id="address"
                                type="address"
                                name="address"
                                placeholder='111 Pouncy Lane, Pouncy, California'
                            />
                        </div>
                        <div className='city1'>
                            <label htmlFor="eventstart">
                                *event start time
                            </label>
                            <input
                                id="time"
                                type="time"
                                name="date"
                            />
                        </div>
                        <div className='city1'>
                            <label htmlFor="eventstart">
                                *event date
                            </label>
                            <input
                                id="date"
                                type="date"
                                name="date"
                            />
                        </div>
                         <div className='bouncer'>
                            <label htmlFor="bouncer">
                                *length of rental
                            </label>
                            <select name="bouncetype" id="bouncetype">
                                <option value="cass">4-hrs</option>
                                <option value="mixx">6hrs</option>
                                <option value="toddler">8hrs</option>
                            </select>
                        </div>
                        <label htmlFor="city">
                            *what type of surface will the rental be set-up on?(we do not set-up on rock, dirt, or gravel)
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder='Grass, Dirt, Pavement etc. (WE DO NOT SET-UP ON GRAVEL)'
                        />
                        <label htmlFor="city">
                            *how did you hear about us?
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder='Facebook, Instagram, Twitter, TikTok'
                        />
                        <label htmlFor="city">
                            coupon code
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder='LETSGETPOUNCY'
                        />

                        <ValidationError
                            prefix="Email"
                            field="email" 
                            errors={state.errors}
                        />


                        <ValidationError
                            prefix="message"
                            field="message"
                            errors={state.errors}
                        />
                        <button className='formb' type="submit" disabled={state.submitting}>
                            SUBMIT
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
function App() {
    return (
        <ContactForm />
    );
}
export default App;
