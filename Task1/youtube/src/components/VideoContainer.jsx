import React from 'react';
import Video from './Video';
import './VideoContainer.css';
import {List} from 'immutable';

export default class VideoContainer extends React.PureComponent{
    constructor(props){
        super(props);
        this.state={
            videos:List([]),
        }
    }
    componentDidMount(){
        const API_KEY="AIzaSyAG7u_sQGo1CcN0nWpaFdtqDXgTO5cL2G0";
        let url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=${this.props.searchText}&type=video&key=${API_KEY}`;
        $.get(url,(data) => {
        this.setState({videos:List(data.items)})
    })
}
    render()
    {
        return <div id={this.props.id}>
            {this.state.videos.map((item) => {
            return <Video className="video"
                        key={item.id.videoId}
                        thumbnail={item.snippet.thumbnails.medium.url}
                        title={item.snippet.title}
                        videoRef={`https://www.youtube.com/watch?v=${item.id.videoId}`}
                    />
            })}
            </div>;
    }
}


