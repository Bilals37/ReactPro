import Sidebar from "../reactSide";

const ReactES = () => {
    return (
        <>

            <div className="row">
                <div class="col-md-2 customDiv">
                    <Sidebar />
                </div>
                <div class="col-md-8">
                    <div>
                        <h2>React Introduction</h2>
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
                            <h2>What is React?</h2>
                            <p>React, sometimes referred to as a frontend JavaScript framework, is a JavaScript library created by Facebook.</p>
                            <p>React is a tool for building UI components.</p>
                        </div>


                    </div>
                </div>
            </div>
        </>
    );
};

export default ReactES;
