import LearnReact from "./ReactToplis/LearnReact";
const Reactjsx = () => {
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
                            <h2>What is JSX?</h2>
                            <p> JSX stands for JavaScript XML.<br />

                                JSX allows us to write HTML in React.<br />

                                JSX makes it easier to write and add HTML in React. </p>

                            <h2>Coding JSX</h2>
                            <p>JSX allows us to write HTML elements in JavaScript and place them in the DOM <br />
                                without any createElement()  and/or appendChild() methods.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reactjsx;