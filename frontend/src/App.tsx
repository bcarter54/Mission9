import "./App.css";
// Import all of the JSON file data into data variable to be used
import data from "./CollegeBasketballTeams.json";

const teams = data.teams;

// Welcome component to explain what's going on
function Welcome() {
  return (
    <>
      <h1>Welcome to Mission 9!</h1>
      <h2>
        This assignment entails printing out information on numerous NCAA teams, specifically the name of the school, the mascot, and where the school is located
      </h2>
      <br />
    </>
  );
}

// Setup team card to show the data in a particular way
function Team({
  school,
  name,
  city,
  state,
}: {
  school: string;
  name: string;
  city: string;
  state: string;
}) {
  return (
    <>
      <h3>{school}</h3>
      <h4>Mascot: {name}</h4>
      <h4>
        {city}, {state}
      </h4>
      <br />
    </>
  );
}

// Parse through each team in the JSON file represented by teams and make each one a team item
function TeamList() {
  return (
    <>
      {teams.map((singleTeam) => (
        <Team {...singleTeam} />
      ))}
    </>
  );
}

// Run the welcome function and receive the output of the TeamList each time it has a new team object
function App() {
  return (
    <>
      <Welcome />
      <TeamList />
    </>
  );
}

export default App;
