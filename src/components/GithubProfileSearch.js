import React from "react";
import Axios from "axios";
import {CLIENT_ID, CLIENT_SECRETS} from "./GithubCredentials";
import GithubProfile from "./GithubProfile";

class GithubProfileSearch extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            githubUsername:'',
            githubProfile:{},
            errorMessage:''
        }

    }

    submitSearchUser= (e)=>{
        e.preventDefault();
        this.searchProfile(this.state.githubUsername);
    }

    // search profile
    searchProfile = (githubUsername) =>{
        let dataURL = `http://api.github.com/users/${githubUsername}?client_id=${CLIENT_ID}& client_secrets=${CLIENT_SECRETS}`
        Axios.get(dataURL).then((response)=>{
            this.setState({
                ...this.state,
                githubProfile:response.data
            });
        }).catch((error)=>{
            this.setState({
                ...this.state,
                errorMessage:error.message
            });


        })

    };

    render() {
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-secondary text-white">
                                    <p className="h4">Github Profile Search</p>

                                </div>
                                <div className="card-body bg-light " onSubmit={this.submitSearchUser}>
                                    <form className="form-inline" >
                                        <div className="form-group   ">
                                            <input
                                                value={this.state.githubUsername}
                                                onChange={e=> this.setState({...this.state, githubUsername:e.target.value})}
                                                size="30" type="text" className="form-control mr-2 " placeholder="Github Username"/>
                                        </div>
                                        <input type="submit" value="Search" className="btn btn-secondary btn-sm"/>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col">
                            {
                                Object.keys(this.state.githubProfile).length>0?
                                    <React.Fragment>
                                        <GithubProfile githubProfile={this.state.githubProfile}/>
                                    </React.Fragment> :null
                            }

                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }


}

export default GithubProfileSearch;