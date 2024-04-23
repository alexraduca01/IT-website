import React, { useState } from "react";

const Form = () => {
  // controllo messaggio

  const [message, setMessage] = useState("");
  const [messageLength, setMessageLength] = useState(0);

  const handleMessageChange = (e) => {
    const newMessage = e.target.value;
    setMessage(newMessage);
    setMessageLength(newMessage.length);
  };

  // controllo nome

  const [nameValue, setNameValue] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);

  const handleNameChange = (e) => {
    const initialValue = e.target.value;
    setNameValue(initialValue);

    const pattern = /^[a-zA-Z]+$/;

    if (pattern.test(initialValue)) {
      setIsNameValid(true);
    } else {
      setIsNameValid(false);
    }
  };

  // controllo cognome

  const [surnameValue, setSurnameValue] = useState("");
  const [isSurnameValid, setIsSurnameValid] = useState(true);

  const handleSurnameChange = (e) => {
    const initialValue = e.target.value;
    setSurnameValue(initialValue);

    const pattern = /^[a-zA-Z]+$/;

    if (pattern.test(initialValue)) {
      setIsSurnameValid(true);
    } else {
      setIsSurnameValid(false);
    }
  };

  // controllo email

  const [emailValue, setEmailValue] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleEmailChange = (e) => {
    const initialValue = e.target.value;
    setEmailValue(initialValue);

    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (pattern.test(initialValue)) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  };

  return (
    <form
      className="w-1/2 m-auto p-5 bg-white rounded-xl shadow flex flex-col gap-5"
      id="contactForm"
    >
      <div className="flex gap-3 justify-between">
        <div className="w-1/2">
          <label
            for="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Name <span className="text-red-500">*</span>
          </label>
          <input
            value={nameValue}
            onChange={handleNameChange}
            type="text"
            id="first_name"
            className={`bg-gray-50 border text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 ${
              isNameValid ? "border-gray-600" : "border-red-500"
            }`}
            minLength={3}
            maxLength={50}
            required
          />
          {!isNameValid && (
            <p className="text-red-500">Please enter a valid name</p>
          )}
        </div>
        <div className="w-1/2">
          <label
            for="last_name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Surname <span className="text-red-500">*</span>
          </label>
          <input
            value={surnameValue}
            onChange={handleSurnameChange}
            type="text"
            id="last_name"
            className={`bg-gray-50 border text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 ${
              isSurnameValid ? "border-gray-600" : "border-red-500"
            }`}
            minLength={3}
            maxLength={50}
            required
          />
          {!isSurnameValid && (
            <p className="text-red-500">Please enter a valid surname</p>
          )}
        </div>
      </div>
      <div className="w-full">
        <label
          for="email"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Email <span className="text-red-500">*</span>
        </label>
        <input
          value={emailValue}
          onChange={handleEmailChange}
          type="email"
          id="email"
          className={`bg-gray-50 border text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 ${
            isEmailValid ? "border-gray-600" : "border-red-500"
          }`}
          minLength={3}
          maxLength={100}
          required
        />
        {!isEmailValid && (
          <p className="text-red-500">Please enter a valid email</p>
        )}
      </div>
      <div className="w-full">
        <label
          for="email"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Phone
        </label>
        <input
          type="text"
          id="text"
          className="bg-gray-50 border text-sm rounded-lg block w-full p-2.5  border-gray-600 placeholder-gray-400  focus:ring-blue-500 focus:border-blue-500"
          maxLength={20}
        />
      </div>
      <div className="w-full relative">
        <label
          for="message"
          className="block mb-2 text-sm font-medium text-gray-900"
          id="messageLabel"
        >
          Message <span className="text-red-500">*</span>
          {messageLength > 0 && (
            <span
              className={`absolute  ${
                messageLength === 1000 || messageLength < 20
                  ? "text-red-500"
                  : "text-green-400"
              }`}
              style={{ right: "0", bottom: "-20px" }}
            >
              {messageLength}/1000
            </span>
          )}
        </label>
        <textarea
          onChange={handleMessageChange}
          value={message}
          rows={4}
          type="text"
          id="message"
          className="bg-gray-50 border text-sm rounded-lg block w-full p-2.5  border-gray-600 placeholder-gray-400  focus:ring-blue-500 focus:border-blue-500"
          minLength={20}
          maxLength={1000}
          required
        />
      </div>
      <div className="w-full flex justify-center gap-10 mt-5">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        >
          Send
        </button>
        <button
          type="reset"
          className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default Form;
