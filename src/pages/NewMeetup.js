import { useNavigate } from "react-router-dom";

// insted of useHistory v6 replaced with useNavigate 
//https://reactrouter.com/en/v6.3.0/upgrading/v5

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
      navigate('/');
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
