import { useState } from "react"; 
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const [isloading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);


  fetch
    ("https://react01-getting-started-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json")
    
    .then(response => {
      return response.json();
    }).then(data => {
      setIsLoading(false);
      setLoadedMeetups(data);
    }); 

  if (isloading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
