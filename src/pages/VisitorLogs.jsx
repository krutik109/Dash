import React from "react";

const VisitorLogs = () => {
  return (
    <div>
      <div
        className="border rounded complaint-list p-3 mt-3 mb-3 "
        style={{ backgroundColor: " rgba(240, 245, 251, 1) ", boxShadow: "none", height: "auto", border: "none" }}
      >
        <div  className="d-flex justify-content-between align-items-center mb-3 text-dark">
          <h2 style={{ fontSize: "20px" }}>Visito Logs</h2>
        </div>
        <div
          style={{ overflowX: "auto", height: "900px" }}
          className="table-responsive   mt-2"
        >
          <table className="table  rounded-table">
            <thead>
              <tr>
                <th className="text-start">Visitor Name</th>
                <th>Phone Number</th>
                <th>Date</th>
                <th>Unit Number</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="complainer d-flex align-items-center">
                  <img
                    src="src/Images/profileimg.png"
                    alt="Complainer"
                    className="complainer-image mb-2  me-2"
                  />
                  Evelyn Harper
                </td>
                <td>3214598765</td>
                <td>Providing false information or deliberately.</td>
                <td>
                  <span className="status open">A</span> 1001
                </td>
                <td>
                  <span className="badge2 badgebg">5:46 PM</span>
                </td>
              </tr>
              <tr>
                <td className="complainer">
                  <img
                    src="src/Images/profileimg.png"
                    alt="Complainer"
                    className="complainer-image mb-2 me-2"
                  />
                  EstherHoward
                </td>
                <td>3214598765</td>
                <td>Regular waste collection services.</td>
                <td>
                  <span className="status open">B</span> 1002
                </td>
                <td>
                  <span className= "badge2 badgebg">4:50 PM</span>
                </td>
              </tr>
              <tr>
                <td className="complainer">
                  <img
                    src="src/Images/profileimg.png"
                    alt="Complainer"
                    className="complainer-image mb-2 me-2"
                  />
                  Jenny Wilson
                </td>
                <td>3214598765</td>
                <td>Providing false information or deliberately.</td>
                <td>
                  <span className="status open">C</span> 1003
                </td>
                <td>
                  <span className= "badge2 badgebg">High</span>
                </td>
              </tr>
              <tr>
                <td className="complainer">
                  <img
                    src="src/Images/profileimg.png"
                    alt="Complainer"
                    className="complainer-image mb-2 me-2"
                  />
                  Guy Hawkins
                </td>
                <td>3214598765</td>
                <td>Regular waste collection services.</td>
                <td>
                  <span className="status open">D</span> 1004
                </td>
                <td>
                  <span className= "badge2 badgebg">5:46 PM</span>
                </td>
              </tr>
              <tr>
                <td className="complainer">
                  <img
                    src="src/Images/profileimg.png"
                    alt="Complainer"
                    className="complainer-image mb-2 me-2"
                  />
                  Robert Fox
                </td>
                <td>3214598765</td>
                <td>Providing false information or deliberately.</td>
                <td>
                  <span className="status open">E</span> 1005
                </td>
                <td>
                  <span className= "badge2 badgebg">4:50 PM</span>
                </td>
              </tr>
              <tr>
                <td className="complainer">
                  <img
                    src="src/Images/profileimg.png"
                    alt="Complainer"
                    className="complainer-image mb-2 me-2"
                  />
                  Jacob Jones
                </td>
                <td>3214598765</td>
                <td>Regular waste collection services.</td>
                <td>
                  <span className="status open">F</span> 1006
                </td>
                <td>
                  <span className= "badge2 badgebg">High</span>
                </td>
              </tr>
              <tr>
                <td className="complainer">
                  <img
                    src="src/Images/profileimg.png"
                    alt="Complainer"
                    className="complainer-image mb-2 me-2"
                  />
                  Cody Fisher
                </td>
                <td>3214598765</td>
                <td>Event hosting and recreational activities.</td>
                <td>
                  <span className="status open">G</span> 1007
                </td>
                <td>
                  <span className= "badge2 badgebg">5:46 PM</span>
                </td>
              </tr>
              <tr>
                <td className="complainer">
                  <img
                    src="src/Images/profileimg.png"
                    alt="Complainer"
                    className="complainer-image mb-2 me-2"
                  />
                  BessieCooper
                </td>
                <td>3214598765</td>
                <td>Regular waste collection services.</td>
                <td>
                  <span className="status open">H</span> 1009
                </td>
                <td>
                  <span className= "badge2 badgebg">4:50 PM</span>
                </td>
              </tr>
              <tr>
                <td className="complainer">
                  <img
                    src="src/Images/profileimg.png"
                    alt="Complainer"
                    className="complainer-image mb-2 me-2"
                  />
                  Albert Flores
                </td>
                <td>3214598765</td>
                <td>Providing false information or deliberately.</td>
                <td>
                  <span className="status open">I</span> 2001
                </td>
                <td>
                  <span className= "badge2 badgebg">High</span>
                </td>
              </tr>
              <tr>
                <td className="complainer">
                  <img
                    src="src/Images/profileimg.png"
                    alt="Complainer"
                    className="complainer-image mb-2 me-2"
                  />
                  Floyd Miles
                </td>
                <td>3214598765</td>
                <td>preferences by categorizing organizing you</td>
                <td>
                  <span className="status open">J</span> 2002
                </td>
                <td>
                  <span className= "badge2 badgebg">5:46 PM</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VisitorLogs;
