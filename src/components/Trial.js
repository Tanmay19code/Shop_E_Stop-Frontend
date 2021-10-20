import React from "react";
import laptop from "../sampleData/laptop.js";
// import mobile from '../sampleData/mobile.js'
const array = ["Title1", "Title2", "Title3", "Title4"];
let i = 0;
function Trial() {
  return (
    <div className="page-container">
      {laptop.map((element) => {
        return (
          <>
            <p>{element.name}</p>
            {element.highlights.map((e) => {
              return (
                <>
                  {e.highlight1 ? (
                    <>
                      <p>Highlight1</p>
                      <p>{e.highlight1}</p>
                      <br />
                    </>
                  ) : null}
                  {e.highlight2 ? (
                    <>
                      <p>Highlight2</p>
                      <p>{e.highlight2}</p>
                      <br />
                    </>
                  ) : null}
                  {e.highlight3 ? (
                    <>
                      <p>Highlight3</p>
                      <p>{e.highlight3}</p>
                      <br />
                    </>
                  ) : null}
                </>
              );
            })}
          </>
        );
      })}
    </div>
  );
}

export default Trial;
