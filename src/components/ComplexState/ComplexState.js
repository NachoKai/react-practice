import React, { useState } from "react";

const ComplexState = () => {
  //   const [fName, setFName] = useState("");
  //   const [lName, setLName] = useState("");
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  //   function getFName(e) {
  //     setFName(e.target.value);
  //   }

  //   function getLName(e) {
  //     setLName(e.target.value);
  //   }
  function handleChange(event) {
    const { name, value } = event.target;

    //   setContact((prevValue) => {
    //     if (name === "fName") {
    //       return {
    //         fName: value,
    //         lName: prevValue.lName,
    //         email: prevValue.email,
    //       };
    //     } else if (name === "lName") {
    //       return {
    //         fName: prevValue.fName,
    //         lName: value,
    //         email: prevValue.email,
    //       };
    //     } else if (name === "email") {
    //       return {
    //         fName: prevValue.fName,
    //         lName: prevValue.lName,
    //         email: value,
    //       };
    //     }
    //   });
    // }
    setContact((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  return (
    // <div className="container">
    //   <h1>
    //     Hello {fName} {lName}
    //   </h1>
    //   <form>
    //     <input
    //       onChange={getFName}
    //       name="fName"
    //       placeholder="First Name"
    //       value={fName}
    //     />
    //     <input
    //       onChange={getLName}
    //       name="lName"
    //       placeholder="Last Name"
    //       value={lName}
    //     />
    //     <button>Submit</button>
    //   </form>
    // </div>
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleChange}
          value={contact.fName}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          value={contact.lName}
          name="lName"
          placeholder="Last Name"
        />
        <input
          onChange={handleChange}
          value={contact.email}
          name="email"
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ComplexState;
