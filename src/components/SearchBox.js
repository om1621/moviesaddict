import React from 'react';
import './component-style/bootstrap.min.css'
import {Link} from 'react-router-dom';
import './component-style/searchBox.css'

class SearchBox extends React.PureComponent {

    state = {
        crieteriaType : 'Name',
        genreValue: 'Drama',
        searchValue: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.getCrieteria(this.state);
        console.log(this.state);
        // const searchValue = this.state.searchValue;
        // localStorage.setItem("searchValue" , searchValue);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    // componentDidMount(){
    //     const searchValue = localStorage.getItem("searchValue");
    //     this.setState({
    //         searchValue
    //     })
    // }

    render() {
        return (
        <div className="container">
            <div className="row my-auto" style={{paddingTop: "10%"}}>
                <div className="col-md-6 col-sm-12" style={{marginRight: 'auto', marginLeft: 'auto'}}>
                    <div className="card card-body">
                    <h2 className="text-center">Search Your Favourite Movies</h2>
                    <form onSubmit={this.onSubmit} className="mt-4 mb-4">
                        <div className="form-group">
                        <label id="crieteria" style={{fontWeight: '500'}}>Search Movie By:</label>
                        <select id="crieteria" className="form-control" name="crieteriaType" onChange={this.handleChange} value={this.state.crieteriaType}>
                            <option value="Name">Name</option>
                            <option value="Genre">Genre</option>
                        </select>
                        </div>
                        <div className="form-group">
                        <label id="genre" style={{fontWeight: '500'}}>Select Genre</label>
                        <select id="genre" className="form-control" name="genreValue" onChange={this.handleChange} value={this.state.genreValue}>
                            <option value='Drama'>Drama</option>
                            <option value='Romance'>Romance</option>
                            <option value='Action'>Action</option>
                            <option value='Comedy'>Comedy</option>
                            <option value='Family'>Family</option>
                            <option value='Horror'>Horror</option>
                            <option value='Science Fiction'>Science Fiction</option>
                            <option value='Thriller'>Thriller</option>
                            <option value='Fantasy'>Fantasy</option>
                        </select>
                        <small id="emailHelp" className="form-text text-muted">If you choose by Genre</small>
                        </div>
                        <div className="form-group">
                            <label id="value" style={{fontWeight: '500'}}>Enter Name of movie:</label>
                            <input type="text" id="value" name="searchValue" placeholder="e.g Arjun Reddy" className="form-control" onChange={this.handleChange}/>
                            <small id="emailHelp" className="form-text text-muted">If you choose by Name</small>
                        </div>
                      <button className="btn btn-primary btn-block"> <Link  to="/options" style={{color:'white', textDecoration: "none"}}>SEARCH</Link></button>
                    </form>
                    </div>   
                </div>
            </div>
        </div>
    );
    }
}



export default SearchBox;