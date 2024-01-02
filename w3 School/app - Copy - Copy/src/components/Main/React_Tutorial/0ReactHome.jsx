import LearnReact from "./ReactToplis/LearnReact";
const ReactHome = () => {
    return (
        <>

            <div className="row">
                <div class="col-md-2 customDiv">
                    <LearnReact />
                </div>
                <div class="col-md-8">
                    <div>
                        <h2>React Tutoial</h2>
                        <div class="container text-center">

                            <div class="row">
                                <div class="col">
                                    <button type="button" class="btn btn-success">&lt;Home</button>
                                </div>
                                <div class="col">
                                    <button type="button" class="btn btn-success">Next&gt;</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p> React is a JavaScript library for building user interfaces.<br />

                                React is used to build single-page applications.<br />

                                React allows us to create reusable UI components.</p>
                            <div class="col">
                                <button type="button" class="btn btn-success">Start Learning React now&gt;</button>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </>
    );
};

export default ReactHome;
