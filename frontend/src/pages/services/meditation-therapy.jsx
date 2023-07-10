import concerntration from './images/concentration.png'
import absorption from './images/mindfulness.png'
import mindfullness from './images/peace-of-mind.png'
import './__test__/meditation.css'
function MeditationTherapy(){
    return (
        <>
         <div className="container">
            <div className="center-title">
                <p className="mini-heading">Services</p>
                <h1 className="heading">Meditation</h1>
                <p className="desc">Meditation is a practice that involves focusing attention and achieving a state of mental calm and clarity. It is used to promote relaxation, reduce stress, and enhance overall well-being.</p>
            </div>

            <div className="service-content-container" style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
            <h1 style={{textAlign:'center', fontSize:'1.2rem', fontWeight:"500", margin:'2rem 0 0.5rem 0'}}>Lets Get Started</h1>
            <p className="desc" style={{marginBottom:"1rem"}}>a mindful video to calm yourself down</p>
                <iframe
                    width="80%"
                    src="https://www.youtube.com/embed/ZToicYcHIOU"
                    allowFullScreen
                    style={{aspectRatio:"16/9"}}
                />
            </div>

            <div className="podcast-sec center-flex-column" style={{padding:"3rem 0"}}>
                <h1 className="heading" style={{textAlign:'center', fontSize:'2rem', fontWeight:"600", margin:'3rem 0 5px 0'}}>Meditation Techniques</h1>
                <p className="desc" style={{marginBottom:"1rem"}}>The stages of meditation can vary depending on the specific meditation technique or tradition. However, a common framework includes three main stages:</p>
                <div className="card-wrap">
                    <div className="card">
                        <img src={concerntration} alt="" className='card-img'/>
                        <h1 className="card-title">Concerntration</h1>
                    </div>
                    <div className="card">
                        <img src={absorption} alt="" className='card-img'/>
                        <h1 className="card-title">Absorption</h1>
                    </div>
                    <div className="card">
                        <img src={mindfullness} alt="" className='card-img'/>
                        <h1 className="card-title">Mindfullness</h1>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-lg" style={{backgroundColor: "var(--gray-bg)"}}>
            <div className="meditation-steps container">
                    <div>
                        <h1 className="sub-heading heading-font">Concerntration</h1>
                        <div className="points">
                            <p>Find a quiet and comfortable place to sit. Close your eyes and take a few deep breaths to relax. Choose a specific object of focus, such as your breath, a mantra, or a visual image. Direct your attention solely to this object and try to maintain your focus on it.Whenever your mind wanders, gently bring your attention back to the chosen object. Practice this process of sustained focus for a designated period of time, gradually increasing the duration as you progress.</p>
                        </div>
                        <div className="video">
                            <iframe
                                width="50%"
                                src="https://www.youtube.com/embed/ZToicYcHIOU"
                                allowFullScreen
                                style={{aspectRatio:"16/9"}}
                            />
                        </div>
                    </div>
                </div>
                <div className="meditation-steps container">
                    <div>
                        <h1 className="sub-heading heading-font">Mindfullness</h1>
                        <div className="points">
                            <p>Sit in a comfortable position and bring your attention to the present moment. Begin by observing your breath, sensations in your body, or sounds in your environment. Allow your thoughts, emotions, and bodily sensations to arise without judgment or attachment. Simply observe them as they come and go, maintaining a non-reactive and accepting stance. Whenever you notice your mind wandering, gently redirect your attention back to the present moment. Cultivate an attitude of curiosity and openness as you observe the continuous flow of experiences.</p>
                        </div>
                        <div className="video">
                            <iframe
                                width="50%"
                                src="https://www.youtube.com/embed/ZToicYcHIOU"
                                allowFullScreen
                                style={{aspectRatio:"16/9"}}
                            />
                        </div>
                    </div>
                </div>
                <div className="meditation-steps container">
                    <div>
                        <h1 className="sub-heading heading-font">Absorption</h1>
                        <div className="points">
                            <p>Start with the previous steps of concentration and mindfulness to establish a sense of focused attention and present-moment awareness. As you deepen your meditation practice, you may experience periods of calmness, inner stillness, or a sense of oneness. Allow yourself to immerse fully in these states without striving or forcing. Embrace the experience of absorption, letting go of any expectations or attachments. Stay present and receptive, allowing the meditation to unfold naturally and effortlessly.</p>
                        </div>
                        <div className="video">
                            <iframe
                                width="50%"
                                src="https://www.youtube.com/embed/ZToicYcHIOU"
                                allowFullScreen
                                style={{aspectRatio:"16/9"}}
                            />
                        </div>
                    </div>
                </div>
        </div>
        </>
    )
}

export default MeditationTherapy