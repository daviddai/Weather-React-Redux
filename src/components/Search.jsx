import React from "react";

class Search extends React.Component {

    render() {
        return (
            <div className="col-12 mt-3 mb-3">
                <form>
                    <div className="input-group">
                        <input className="form-control" type="text"/>
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary">
                                <span className="fa fa-search" />
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

}

export default Search;