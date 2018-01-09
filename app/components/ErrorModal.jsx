var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({
    getDefaultProps: function(){
        return {
            title: "Error",
            message: "Location not found"
        };
    },
    propTypes: {
        title : React.PropTypes.string,
    },
    componentDidMount: function(){
        var { title, message } = this.props;
        var modalMarkUp = (
            <div id="error-modal" className="reveal tiny text-center" data-reveal="">
                <h4>
                    {title}
                </h4>
                <p>
                    { message }
                </p>
                <p>
                    <button className="button hollow" data-close="">
                        OK
                    </button>
                </p>
            </div>
        );

        var $modal = $(ReactDOMServer.renderToString(modalMarkUp));
        $(ReactDOM.findDOMNode(this)).html($modal);
        var myModal = new Foundation.Reveal($('#error-modal'));
        myModal.open();
        
    },
    render : function(){ 
        return (
            <div>
            </div>
        );
    }
})

module.exports = ErrorModal;