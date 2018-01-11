var React = require("react");
var {Link, IndexLink} = require('react-router'); 

var Nav = React.createClass({
    onSearch : function(e){
        e.preventDefault();
        var location = this.refs.navsearchinput.value;
        var encodeLocation = encodeURI(location);
        if(location.length > 0){
            this.refs.navsearchinput.value = " ";
            window.location.hash = "#/?location=" + encodeLocation; 
        }
        //alert(location)
    },
    render : function(){
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">Weather App</li>
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
                        </li>
                        <li>
                            <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link> 
                        </li>
                        <li>
                            <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form action="" onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input type="text" ref="navsearchinput" placeholder="Search weather"/>
                            </li>
                            <li>
                                <input type="submit" className="button" value="Get Weather"/>
                            </li>
                        </ul>
                    </form>
                </div>

            </div>
        );
    }
});


module.exports = Nav;

{/* <div>
<h2>Nav component</h2>
 
  
   
</div> */}