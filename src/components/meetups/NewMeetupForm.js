// "useRef a reffrence object"
import { useRef } from "react";

import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm(props) {
    // connecting a form data by using ref in react
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

  // "event" argument to prevent default behaviour on browser
    
    function submitHandler(event) {
        event.preventDefault();
        //   Extract entered value using "submitHandler(event)"
        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;
        // new object meetup data object stores enterd value as values 
        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription,
        };
        // simply log that value using console.log to check soon we will send it to server 
        props.onAddMeetup(meetupData);
    }

  return (
    <Card>
      {/* "onSubmit={}" sumit even can be caught
        "submitHandler" connect on sumit button*/}
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          {/* "for" is a key word in javascript.."htmlfor" seting up the value is  */}
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          {/* txt area for writing comments for form */}
          <textarea id="description" required rows="5" ref={descriptionInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
