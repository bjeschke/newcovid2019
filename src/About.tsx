import React from 'react';


interface states {}

class About extends React.Component<{}, states > {

    componentDidMount() {
        document.title = "About us - NewCOIVID2019 Statistics";
    }

    render() {
        return(
            <div id="content mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1 className="mb-5 mt-3">Who made this website?</h1>
                            <p>
                                This website was created by a group of programmer.
                                In order to keep people informed with data from official sources.
                            </p>
                            <p>
                                <strong>Sources</strong>
                                <br/><br/>
                                Local government websites/health departments
                                <br/><br/>
                                <strong>Contact</strong>
                                <br/><br/>
                                You can email us at contace@covid19stats.live
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;
