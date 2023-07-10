import './__test__/main-service.css'
import PropTypes from 'prop-types'
import LaughingTherapy from './laughing-therapy'
import AudioTherapy from './audio-therapy'
import Meditation from './meditation-therapy'
import ReadingTherapy from './reading-therapy'
import Navbar from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Yoga from './yoga-therapy'
// import Question from './questions'
ServiceTemplate.propTypes = {
    page: PropTypes.node,
};
function renderSwitch(param){
    switch(param){
        case 'laugh':
            return <LaughingTherapy/>
        case 'audio':
            return <AudioTherapy/>
        case 'meditation':
            return <Meditation />
        case 'read':
                return <ReadingTherapy />
        case 'yoga':
                return <Yoga />
        default:
            return <AudioTherapy/>
    }
}
function ServiceTemplate(props){
    return(
        <>
        <Navbar/>
         {renderSwitch(props.page)}
         <br></br>
         <Footer/>
        </>
    )
}

export default ServiceTemplate