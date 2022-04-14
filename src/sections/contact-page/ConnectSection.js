import { useState } from 'react';
import useInput from '../../hooks/useInput';

import Heading from '../../components/UI/Heading';
import Form from '../../components/UI/form-components/Form';
import TextInput from '../../components/UI/form-components/TextInput';
import ArrowButton from '../../components/UI/buttons/ArrowButton';
import Overlay from '../../components/UI/Overlay';
import Modal from '../../components/UI/Modal';
import Paragraph from '../../components/UI/Paragraph';
import EmptyButton from '../../components/UI/buttons/EmptyButton';

import classes from './ConnectSection.module.css';

function ConnectSection({ className }) {
  const {
    state: nameState,
    handleInput: handleNameInput,
    checkInputEmpty: checkNameEmpty,
    resetField: resetNameField
  } = useInput();

  const {
    state: emailState,
    handleInput: handleEmailInput,
    checkInputEmpty: checkEmailEmpty,
    resetField: resetEmailField,
    dispatch: dispatchEmailAction
  } = useInput();

  const {
    state: messageState,
    handleInput: handleMessageInput,
    checkInputEmpty: checkMessageEmpty,
    resetField: resetMessageField
  } = useInput();

  const [successModal, setSuccessModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const nameEmpty = checkNameEmpty('Name');
    const emailEmpty = checkEmailEmpty('Email');
    const messageEmpty = checkMessageEmpty('Message')

    const re = /^[a-z0-9_.-]+@[a-z0-9-]+\.[a-z]{2,}$/;

    const emailValid = re.test(emailState.value.toLowerCase())

    if (!emailEmpty && !emailValid) {
      dispatchEmailAction({ type: 'SET_ERROR_MESSAGE', payload: { errorMessage: 'Please enter a valid email address.' } });
    }

    if (nameEmpty || emailEmpty || messageEmpty || !emailValid) {
      return;
    }

    const messageObj = {
      name: nameState.value,
      email: emailState.value,
      message: messageState.value
    };

    setLoading(true);

    fetch('https://arch-email-service.vercel.app/send-mail', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(messageObj)
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.ok) {
          setSuccessModal(true);
        } else {
          setErrorModal(true);
        }
      })
      .catch(() => setErrorModal(true))
      .finally(() => setLoading(false));

    resetNameField();
    resetEmailField();
    resetMessageField();
  };


  return (
    <section className={`${classes['connect-section']} ${className}`}>
      {successModal && (
        <Overlay>
          <Modal className={classes['modal']}>
            <Paragraph>The email is successfully sent. Please check your inbox.</Paragraph>
            <EmptyButton
              className={classes['close-button']} 
              handleClick={() => setSuccessModal(false)}
            >
              Close
            </EmptyButton>
          </Modal>
        </Overlay>
      )}
      {errorModal && (
        <Overlay>
          <Modal className={classes['modal']}>
            <Paragraph>
              Something went wrong. We couldn't send the email. Please, try again,
              or write an email to: archcompany.akos@gmail.com directly from your email service provider.
            </Paragraph>
            <EmptyButton
              className={classes['close-button']} 
              handleClick={() => setErrorModal(false)}
            >
              Close
            </EmptyButton>
          </Modal>
        </Overlay>
      )}
      <Heading level="2" className={classes['connect-title']}>
        Connect <br className={classes['title-line-break']} />with us
      </Heading>
      <Form className={classes['form']} handleSubmit={handleFormSubmit}>
        <TextInput
          id="name"
          label="Name"
          value={nameState.value}
          handleInput={handleNameInput}
          errorMessage={nameState.errorMessage}
        />
        <TextInput
          id="email"
          label="Email"
          value={emailState.value}
          handleInput={handleEmailInput}
          errorMessage={emailState.errorMessage}
        />
        <TextInput
          id="message"
          type="textarea"
          label="Message"
          value={messageState.value}
          handleInput={handleMessageInput}
          errorMessage={messageState.errorMessage}
        />
        <ArrowButton className={classes['submit-button']} loading={loading} disabled={loading ? true : false} />
      </Form>
    </section>
  );
};

export default ConnectSection;