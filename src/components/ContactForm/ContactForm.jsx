import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import {
    FormStyled,
    LabelStyled,
    ButtonAddContactStyled,
    InputStyled,
} from './ContactFormStyled';

function ContactForm ({onSubmit}) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const newContact = {name, number};

    const resetInput = () => {
        setName('');
        setNumber('');
    };

    const handleChangeName = evt => {
        setName(evt.currentTarget.value);
    };

    const handleChangeNumber = evt => {
        setNumber(evt.currentTarget.value);
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        onSubmit(newContact);
        resetInput();
    };

    const nameInputId = nanoid();
    const numberInputId = nanoid();


        return (
            <FormStyled onSubmit={handleSubmit}>
                <LabelStyled>
                    Name
                    <InputStyled
                        onChange={handleChangeName}
                        type="text"
                        name="name"
                        id={nameInputId}
                        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Ba"
                        value={name}
                        required
                    />
                </LabelStyled>

                <LabelStyled>
                    Number
                    <InputStyled
                        onChange={handleChangeNumber}
                        type="tel"
                        name="number"
                        id={numberInputId}
                        pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        value={number}
                        required
                    />
                </LabelStyled>

                <ButtonAddContactStyled type="submit">
                    Add contact
                </ButtonAddContactStyled>
            </FormStyled>
        );
    }

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
export default ContactForm;
