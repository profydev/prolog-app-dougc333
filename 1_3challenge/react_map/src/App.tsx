import "./App.css";
import issues from "./issues-page-1.json";

console.log(issues);
//step 1) JSON.stringify
//step 2) {issues.map((issue)=>console.log(issue))}
//step 3) separate the items in array and put in list
/* <ul>
    {issues.map(issue => <li key={issue.id}>{JSON.stringify(issue)}</li>)}
</ul>
*/

function App() {
  return (
    <>
      <ul>
        {issues.map((issue) => (
          <li key={issue.id}>{JSON.stringify(issue)}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
