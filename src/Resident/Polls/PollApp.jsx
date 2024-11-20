import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const PollApp = () => {
  const [polls, setPolls] = useState([]);
  const [newPoll, setNewPoll] = useState({ type: "", question: "", options: ["", ""] });

  const predefinedPolls = [
    {
      type: "Multichoice Poll",
      question: "",
      options: ["", ""],
    },
    {
      type: "Ranking Poll",
      question: "",
      options: ["", ""],
    },
    {
      type: "Rating Poll",
      question: "",
      options: ["", ""],
    },
  ];

  // Add a new poll to the list
  const addPoll = () => {
    const selectedPredefinedPoll = predefinedPolls.find((poll) => poll.type === newPoll.type);

    const newPollToAdd = selectedPredefinedPoll
      ? {
          ...selectedPredefinedPoll,
          question: newPoll.question,
          options: newPoll.options,
          votes: Array(selectedPredefinedPoll.options.length).fill({ yes: 0, no: 0 }),
        }
      : {
          type: newPoll.type || "Custom Poll",
          question: newPoll.question,
          options: newPoll.options,
          votes: Array(newPoll.options.length).fill({ yes: 0, no: 0 }),
        };

    setPolls([...polls, newPollToAdd]);

    // Reset newPoll
    setNewPoll({ type: "", question: "", options: ["", ""] });
  };

  // Update new poll option text
  const updateOption = (index, value) => {
    const updatedOptions = [...newPoll.options];
    updatedOptions[index] = value;
    setNewPoll({ ...newPoll, options: updatedOptions });
  };

  // Handle voting
  const handleVote = (pollIndex, optionIndex, voteType) => {
    const updatedPolls = polls.map((poll, pIndex) => {
      if (pIndex === pollIndex) {
        const updatedVotes = poll.votes.map((vote, vIndex) => {
          if (vIndex === optionIndex) {
            return {
              ...vote,
              [voteType]: vote[voteType] + 1,
            };
          }
          return vote;
        });
        return { ...poll, votes: updatedVotes };
      }
      return poll;
    });
    setPolls(updatedPolls);
  };

  return (
    <div className="container-fluid my-4">
      <div className="d-flex justify-content-between align-items-center mb-3">

      <h2 className="">Polls</h2>
 
      {/* Create Poll Modal */}
      <button className="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#createPollModal">
        Create Poll
      </button>
      </div>

      <div className="modal fade" id="createPollModal" tabIndex="-1" aria-labelledby="createPollModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
     
          <div className="modal-content ">
            <div className="modal-header">
              <h5 className="modal-title" id="createPollModalLabel">
                Create Poll
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Select Poll Type</label>
                <select


                  className="form-select"
                  value={newPoll.type}
                  onChange={(e) => setNewPoll({ ...newPoll, type: e.target.value })}
                >
                  <option value="">Choose a predefined poll...</option>
                  {predefinedPolls.map((poll, index) => (
                    <option key={index} value={poll.type}>
                      {poll.type}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Question</label>
                <input
                  type="text"
                  className="form-control"
                  value={newPoll.question}
                  onChange={(e) => setNewPoll({ ...newPoll, question: e.target.value })}
                />
              </div>
              {newPoll.options.map((option, index) => (
                <div className="mb-3" key={index}>
                  <label className="form-label">Option {index + 1}</label>
                  <input
                    type="text"
                    className="form-control"
                    value={option}
                    onChange={(e) => updateOption(index, e.target.value)}
                  />
                </div>
              ))}
              <button className="btn btn-secondary" onClick={() => setNewPoll({ ...newPoll, options: [...newPoll.options, ""] })}>
                Add Option
              </button>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Cancel
              </button>
              <button type="button" className="btn btn-primary" onClick={addPoll} data-bs-dismiss="modal">
                Create
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Poll Cards */}
      <div className="row">
        {polls.map((poll, pollIndex) => (
          <div className="col-md-6 col-lg-4 mb-4 " key={pollIndex}>
            <div className="card">
              <div className="card-body">

                <h5 className="card-title">{poll.type}</h5>
                <p className="card-text">
                     {poll.question}?
                </p>
                <ul className="list-group list-group-flush">
                  {poll.options.map((option, optionIndex) => {
                    const totalVotes = poll.votes[optionIndex].yes + poll.votes[optionIndex].no;
                    const yesPercent = totalVotes ? (poll.votes[optionIndex].yes / totalVotes) * 50  : 0;
                    const noPercent = totalVotes ? (poll.votes[optionIndex].no / totalVotes) * 100 : 0;

                    return (
                      <li key={optionIndex} className="list-group-item">
                        <div className="mb-2">
                          <strong>{option}</strong>
                        </div>
                        <div>
                          <input
                            type="radio"
                            name={`vote-${pollIndex}-${optionIndex}`}
                            id={`yes-${pollIndex}-${optionIndex}`}
                            onClick={() => handleVote(pollIndex, optionIndex, "yes")}
                          />
                          <label htmlFor={`yes-${pollIndex}-${optionIndex}`} className="ms-1 me-3">
                            Yes
                          </label>
                          <input
                            type="radio"
                            name={`vote-${pollIndex}-${optionIndex}`}
                            id={`no-${pollIndex}-${optionIndex}`}
                            onClick={() => handleVote(pollIndex, optionIndex, "no")}
                          />
                          <label htmlFor={`no-${pollIndex}-${optionIndex}`} className="ms-1">
                            No
                          </label>
                        </div>
                        <div className="progress mt-2" style={{ height: "8px" }}>
                          <div
                            className="progress-bar bg-success"
                            style={{ width: `${yesPercent}%` }}
                            role="progressbar"
                          >
                            
                          </div>
                          <div
                            className="progress-bar bg-danger"
                            style={{ width: `${noPercent}%` }}
                            role="progressbar"
                          >
                           
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PollApp;
