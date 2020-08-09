// import React from 'react';

// import GiphysIndex from './giphys_index';

// class GiphysSearch extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             searchTerm: ""
//         } 
//         this.updateSearchTerm = this.updateSearchTerm.bind(this); 
//         this.handleSubmit = this.handleSubmit(this); 
//     }

//     updateSearchTerm(e) {
//         this.setState({ searchTerm: e.currentTarget.value });
//     }

//     handleSubmit() {
//         event.preventDefault(); 
//         this.props.fetchSearchGiphys(this.state.searchTerm); 
//         this.setState({
//             searchTerm: ""
//         }); 
//     }

//     render() {
//         return (
//             <div>
//                 <form >
//                     <label>Search for a Gif!
//                         <input type="text" value={this.state.searchTerm} onChange={this.updateSearchTerm}/>
//                     </label>
//                     <br/>
//                     <button type="submit" onClick={this.handleSubmit}> Search </button>
//                 </form>

//                 <GiphysIndex giphys={this.props.giphys}/>
//             </div>
//         )  
//     }
// }

// export default GiphysSearch; 


import React from 'react';

import GiphysIndex from './giphys_index';

class GiphysSearch extends React.Component {
    constructor() {
        super();
        this.state = { searchTerm: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componentDidMount() {
    //     this.props.fetchSearchGiphys('golden+retriever');
    // }

    handleChange(e) {
        this.setState({ searchTerm: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        // let searchTerm = this.state.searchTerm.split(' ').join('+');
        this.props.fetchSearchGiphys(this.state.searchTerm);
        this.setState({ searchTerm: ""});
    }

    render() {
        // let { giphys } = this.props;

        return (
            <div>
                <form>
                    <input value={this.state.searchTerm} onChange={this.handleChange} />
                    <button type="submit" onClick={this.handleSubmit}>Search Giphy</button>
                </form>
                <GiphysIndex giphys={this.props.giphys} />
            </div>
        );
    }
}

export default GiphysSearch;