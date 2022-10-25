import { useNavigate} from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const navigate = useNavigate();

  function addMeetupHandler(meetupData) {
    fetch(
      "https://react01-getting-started-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      } 
    ).then(() => {
      navigate.replace('./');
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;

// https://react01-getting-started-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json
// "fetch"send http request / get request
// fire base url should end with navigating a page + end with json
// set methord prop to define http methord // we will use post methord
