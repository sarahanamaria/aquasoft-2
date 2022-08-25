import './Candidates.css'
import {useEffect, useState} from 'react'
import axios from 'axios' //library used to make get/post/delete etc requests on frontend

export default function Candidates() {



    const [candidate, setCandidate] = useState([]) //useState hook used to store the fetched candidates data from our database
    const [candidateData, setCandidateData] = useState({Candidate_name: '', Email: '', Start_date: '', Salary: 0})//useStateHook for storing data about a candidate received from the frontend
    const [candidateUpdateData, setCandidateUpdateData] = useState({_id:'',Candidate_name: '', Email: '', Start_date: '', Salary: 0})//same as above, this is data used to update/delete a candidate



    useEffect(() => {//useEffect hook runs at the beginning of our app, before any rendering so we can get the data before anything else happens
        const fetchCandidates = async () => {
            await axios.get('http://localhost:3000/getAllCandidates')
            .then(res =>{ //after candidates are fetched successfully, run this
              const allCandidates = res.data
              setCandidate(allCandidates) //put the constant inside our candidate useState hook so we can use it through the application
            }) //store the received data from the database in a constant
        } 
        fetchCandidates() //call the function so we get the data
    }, [candidate])//useEffect also runs everytime the variable inside [] changes the data it holds





    const addCandidateData = (e) =>{//function which sets the data information of a candidate inside the useState by looking at the values of the <input> tags
      setCandidateData({...candidateData, [e.target.name]: e.target.value})//...candidateData = copy the previous object and after that overwrite it with e.target.value
    }
    const addCandidateUpdateData = (e)=>{
      setCandidateUpdateData({...candidateUpdateData, [e.target.name]: e.target.value})
    }
    

    const postCandidate = () => {
      const data = {//data that will be submited on posting a candidate
        Candidate_name: candidateData.Candidate_name,
        Email: candidateData.Email,
        Start_date: candidateData.Start_date,
        Salary: candidateData.Salary
      }

      axios.post('http://localhost:3000/newCandidate',data)//post the data in the db
      setCandidateData({Candidate_name: '', Email: '', Start_date: '', Salary: 0})//reset the useState for a candidate with blank values

    }


    const deleteCandidate = () =>{

      if(candidateUpdateData._id.trim().length !== 0){//if the _id field is not empty delete the candidate...trim() function removes all blank spaces in a string
        axios.delete(`http://localhost:3000/deleteCandidate/${candidateUpdateData._id}`)//delete the candidate with the id
        setCandidateUpdateData({...candidateUpdateData, _id: ''})
      }

    }


    const updateCandidate = () =>{
      const data = {//updated data which will be sent to update a candidate in the db
        Candidate_name: candidateUpdateData.Candidate_name,
        Email: candidateUpdateData.Email,
        Start_date: candidateUpdateData.Start_date,
        Salary: candidateUpdateData.Salary
      }

      if(candidateUpdateData._id.trim().length !== 0){//if _id string is not empty, send the data to update
        axios.put(`http://localhost:3000/putCandidate/${candidateUpdateData._id}`, data)//update the candidate
        setCandidateUpdateData({_id:'',Candidate_name: '', Email: '', Start_date: '', Salary: 0})
      }
    }






    return (
      <>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">_id</th>
                    <th scope="col">Nume</th>
                    <th scope="col">Email</th>
                    <th scope="col">Start date</th>
                    <th scope="col">Salary</th>
                </tr>
            </thead>
            <tbody>
              {
                candidate.length > 0 ? candidate.map((cand) => (//if we have candidates in the candidate useState hook then start rendering a <tr></tr> for each candidate
                    <tr key={cand._id}>
                        <td>{cand._id}</td>
                        <td>{cand.Candidate_name}</td>
                        <td>{cand.Email}</td>
                        <td>{cand.Start_date?.split('').reverse().slice(14).reverse().join('')/*cut off last characters of the date because it is formatted too long*/}</td>
                        <td>{cand.Salary}</td>
                    </tr>
                )) : null//if we dont have candidates in the candidate useState hook then don't render anything on the page
            }
            </tbody>
        </table>
      <div className='wrap'>
        <div className='candidates'>
          <button className='btn btn-success' onClick={postCandidate}>Adauga candidat</button>{/*onClick fires a function when the button is clicked*/}
          <label>Nume</label><input type='text' name='Candidate_name' onChange={addCandidateData} value={candidateData.Candidate_name}/>{/*onChange fires a function whenever data changes in the input field*/}
          <label>Email</label><input type='text' name='Email' onChange={addCandidateData} value={candidateData.Email}/>{/*value displays the value from the {} inside the input field on the page*/}
          <label>Start date</label><input type='text' name='Start_date' onChange={addCandidateData} value={candidateData.Start_date}/>
          <label>Salary</label><input type='text' name='Salary' onChange={addCandidateData} value={candidateData.Salary}/>
        </div>

        <div className='candidates'>
          <button className='btn btn-warning' onClick={updateCandidate}>Actualizeaza candidat</button>
          <label>_id</label><input type='text' name='_id' onChange={addCandidateUpdateData} value={candidateUpdateData._id}/>
          <label>Nume</label><input type='text' name='Candidate_name' onChange={addCandidateUpdateData} value={candidateUpdateData.Candidate_name}/>
          <label>Email</label><input type='text' name='Email' onChange={addCandidateUpdateData} value={candidateUpdateData.Email}/>
          <label>Start date</label><input type='text' name='Start_date' onChange={addCandidateUpdateData} value={candidateUpdateData.Start_date}/>
          <label>Salary</label><input type='text' name='Salary' onChange={addCandidateUpdateData} value={candidateUpdateData.Salary}/>
        </div>

        <div className='candidates'>
          <button className='btn btn-danger' onClick={deleteCandidate}>Sterge Candidat</button>
          <label>_id</label><input type='text' name='_id' onChange={addCandidateUpdateData} value={candidateUpdateData._id}/>
        </div>
      </div>
      </>
    )
}
