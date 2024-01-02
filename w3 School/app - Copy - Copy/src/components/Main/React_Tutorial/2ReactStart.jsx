import LearnReact from "./ReactToplis/LearnReact";
const ReactStart = () => {
  return (
    <>

      <div className="row">
        <div class="col-md-2 customDiv">
          <LearnReact />
        </div>
        <div class="col-md-8">
          <div>
            <h2>React Getting Started</h2>
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
              <p>To use React in production, you need npm which is included with Node.js.<br />

                To get an overview of what React is, you can write React code directly in HTML.<br />

                But in order to use React in production, you need npm and Node.js installed.</p>

              <h2>React Directly in HTML</h2>
              <p>The quickest way start learning React is to write React directly in your HTML files.</p>
            </div>



          </div>
        </div>
      </div>
    </>
  );
};

export default ReactStart;

