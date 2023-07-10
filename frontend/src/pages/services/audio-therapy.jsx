
function AudioTherapy(){
    const audios = localStorage.getItem("audio-session")
    const mindStateScore = localStorage.getItem('mindScore')
    const audioData = JSON.parse(audios)
    console.log("data: "+ audios)
    console.log(audioData.foundPlaylist)
    const evaluate = (score)=>{
        
        if(score>=-3 && score<=3 && score > 3)
            return <>
            <p style={{marginBottom:"1rem"}}>For your present Mental State we have some playlist and podcasts.</p>
            </>
        else
            return <>
            <p style={{marginBottom:"1rem"}}>For your present Mental State we have some playlist and podcasts. But we strongly recommend that to consult a doctor ASAP.</p>
            </>
    }
    const myAudios = audioData.foundPlaylist.map((list)=>{
        console.log(list.url);
        return(<><iframe style={{borderRadius:"12px", marginTop:"1rem"}} src={list.url} width="100%" height="352" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></>)
        // <p>{list.url}</p>
    })
    const myPodcasts = audioData.foundPodcast.map((list)=>{
        return(<><iframe style={{borderRadius:"12px", marginTop:"1rem"}} src={list.url} width="100%" height="352" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></>)
    })
    return(
        <div className="container">
            <div className="center-title">
                <p className="mini-heading">Services</p>
                <h1 className="heading">Audio Therapy</h1>
                <p className="desc">Audio therapy utilizes sound and music to promote relaxation, reduce stress, and enhance mental and emotional well-being. It can be used as a standalone therapy or as a complementary approach in conjunction with other therapeutic techniques.</p>
            </div>
            {}
            <h1 style={{textAlign:'center', fontSize:'1.2rem', fontWeight:"500", marginBottom:'1rem'}}>Recomended Songs</h1>
            <div className="service-content-container center-flex-column">
            {evaluate(mindStateScore)}
            {myAudios}
            </div>
            <h1 style={{textAlign:'center', fontSize:'1.2rem', fontWeight:"500", margin:'2rem 0'}}>Podcasts</h1>
            <div className="podcast-sec">
                {myPodcasts}
            </div>
        </div>
    )
}

export default AudioTherapy