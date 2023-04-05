import './Video.css';
function Video(props){
    return <div className={props.className} >
        <img src={props.thumbnail} alt="video"></img>
        <h3><a href={props.videoRef}>{props.title}</a></h3>
    </div>;
}
export default Video;