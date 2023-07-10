import axios from 'axios'
import './__test__/question.css'
import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import PropTypes from 'prop-types'
import Navbar from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

Question.propTypes = {
    page: PropTypes.node.isRequired,
};
function Question(props){
    const navigate = useNavigate()
    const questions = ["Are you feeling overwhelmed or stressed?","Do you have difficulty concentrating or making decisions?","Are you experiencing feelings of sadness or hopelessness?","Are you not finding pleasure or interest in activities that you used to enjoy?","Do you have thoughts of harming yourself or others?"]
    const[questionNo, setQuestionNo]= useState(0)
    const[finalSubmit, setFinalSubmit]=useState(false)
    const[calcStateOfMind, setCalcStateOfMind]=useState(0)
    const handleAnswer = (e)=>{
        setCalcStateOfMind(calcStateOfMind + Number(e.target.value))
    }
    const handleQuestionEvent =(e)=>{
        e.preventDefault()
        if(questionNo<5){
            let no = questionNo+1
            document.getElementById('ans1').checked = false
            document.getElementById('ans2').checked = false
            setQuestionNo(no)
        }
        if(questionNo == 3){
            setFinalSubmit(true)
        }
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:3000/api/audio-recomendation',{score:calcStateOfMind})
        .then((response) => {
            // Handle successful response
            localStorage.setItem("mindScore", calcStateOfMind)
            localStorage.setItem("audio-session",JSON.stringify(response.data))
            // localStorage.setItem("audio-session-podcast",response.data.foundPodcast)
            console.log(response.data)
            console.log(props.page)
            navigate(`${props.page}`)
          })
          .catch((error) => {
            // Handle error
            console.error(error)
          })
    }
    return(<>
        <div className="flex">
        <Navbar/>
        <div className="q-pop-up">
            <h1 className="heading">{questionNo+1}. {questions[questionNo]}</h1>
            <div className="q-option">
                <span><input type="radio" name='ans' id="ans1" value={-1} onChange={handleAnswer}/> yes</span>
                <span><input type="radio" name='ans' id="ans2" value={1} onChange={handleAnswer}/> no</span>
            </div>
            <form className='sentiment-form' onSubmit={handleSubmit}>
                {!finalSubmit && <button className="btn btn-black" onClick={handleQuestionEvent}>Next</button> || <button type="submit" className="btn btn-orange">Submit</button>}
                <Link to={`/`} className="btn btn-white">Skip</Link>
            </form>
        </div>
        <Footer/>
        </div>
    </>)
}

export default Question