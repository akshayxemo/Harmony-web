// import { useState } from 'react';

// const Questionnaire = () => {
//   const [responses, setResponses] = useState(0)

//   // Handle user response for each question
//   const handleResponse =(e)=>{
//     setResponses(e.target.value)
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <h1>Questionnaire</h1>
//       <label htmlFor="q1">Question 1: Are you feeling happy right now?</label>
//       <select id="q1" onChange={handleResponse}>
//         <option value="">Select response</option>
//         <option value="yes">Yes</option>
//         <option value="no">No</option>
//       </select>

//       <label htmlFor="q2">Question 2: Are you feeling sad at the moment?</label>
//       <select id="q2" onChange={handleResponse}>
//         <option value="">Select response</option>
//         <option value="yes">Yes</option>
//         <option value="no">No</option>
//       </select>

//       <label htmlFor="q3">Question 3: Have you been experiencing any frustration recently?</label>
//       <select id="q3" onChange={handleResponse}>
//         <option value="">Select response</option>
//         <option value="yes">Yes</option>
//         <option value="no">No</option>
//       </select>

//       <label htmlFor="q4">Question 4: Has something been making you feel angry?</label>
//       <select id="q4" onChange={handleResponse}>
//         <option value="">Select response</option>
//         <option value="yes">Yes</option>
//         <option value="no">No</option>
//       </select>

//       <label htmlFor="q5">Question 5: Are you feeling bored or uninterested?</label>
//       <select id="q5" onChange={handleResponse}>
//         <option value="">Select response</option>
//         <option value="yes">Yes</option>
//         <option value="no">No</option>
//       </select>

//       <button type="submit">Submit</button>

//       {therapy && <div>{therapy}</div>}
//     </form>
//   );
// };

// export default Questionnaire;