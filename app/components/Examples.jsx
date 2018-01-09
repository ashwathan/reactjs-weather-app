var React = require('react');
var { Link } = require('react-router');
var Examples = (props)=>{
        return (
            <div>
                <h2 class="text-center page-title">Examples</h2>
                <p>Here are a few example locations to try</p>
                <ol>
                    <li>
                        <Link to="/?location=Sringeri">Sringeri, KA</Link>
                    </li>
                    <li>
                        <Link to="/?location=Bangalore">Bangalore, KA</Link>
                    </li>
                </ol>
            </div>

        );
}

module.exports = Examples;