import React from 'react';
import './SearchBar.css';
import VideoContainer from './VideoContainer';
export default class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            searchText:'',
            clicked:false
        }
        this.onFormSubmit=this.onFormSubmit.bind(this);
        this.onInputChange=this.onInputChange.bind(this);
    }
    shouldComponentUpdate(nextProps,nextState){
        return this.state.searchText!==nextState.searchText || this.state.clicked!==nextState.clicked ;
    }
    onInputChange=(event)=>{
        this.setState({
            searchText:event.target.value,
            clicked:false,
        })
    }
    onFormSubmit = (event)=>{
        event.preventDefault();
        this.setState({
            clicked:true,
        });
        
    }
    render(){
        return <React.Fragment>
            <header>
            <form onSubmit={this.onFormSubmit}>
                <p>{this.props.name}</p>
                <input 
                    id="search-bar"
                    type="text"
                    value={this.state.searchText}
                    onChange={this.onInputChange}
                 />
                <button type="submit">Search</button>
            </form>
            </header>
            {
                this.state.clicked && <VideoContainer id="videoContainer" searchText={this.state.searchText} />
            }
        </React.Fragment>
    }
}