import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useEffect, useState } from 'react';
import "./FinancialExpenses.css"
import { FaPlusSquare } from 'react-icons/fa';
import { RiEditBoxFill, RiDeleteBin2Fill } from 'react-icons/ri';
import { GrView } from 'react-icons/gr';

const FinancialExpense = () => {

  const [expenses, setExpenses] = useState([]);
  const [form, setForm] = useState({ title: '', description: '', date: '', amount: '', billFormat: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [currentExpenseIndex, setCurrentExpenseIndex] = useState(null);
  const [viewExpense, setViewExpense] = useState(null); // State for the selected expense to view
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSave = (e) => {
    e.preventDefault();

    if (isEditing) {
      const updatedExpenses = [...expenses];
      updatedExpenses[currentExpenseIndex] = form;
      setExpenses(updatedExpenses);
    } else {
      setExpenses([...expenses, form]);
    }

    // Reset the form and close modal
    setForm({ title: '', description: '', date: '', amount: '', billFormat: '' });
    setIsEditing(false);
    setCurrentExpenseIndex(null);
  };

  const handleCancel = () => {
    setForm({ title: '', description: '', date: '', amount: '', billFormat: '' });
    setIsEditing(false);
    setCurrentExpenseIndex(null);
  };

  const handleEdit = (index) => {
    setForm(expenses[index]);
    setIsEditing(true);
    setCurrentExpenseIndex(index);
  };

  const handleView = (index) => {
    setViewExpense(expenses[index]); // Set the selected expense to view
  };

  const handleDeleteClick = (index) => {
    setDeleteIndex(index);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = () => {
    const updatedExpenses = expenses.filter((_, i) => i !== deleteIndex);
    setExpenses(updatedExpenses);
    setShowDeleteModal(false);
    setDeleteIndex(null);
  };





  return (
    <>
      <div className="container-fluid border main-content-wrapper">
        <div className="row">
          <div className="col-12">
            <div className="row mx-2 d-flex justify-content-between align-items-center">
              <div className="col-lg-2 pt-3 pb-3">
                <h5>Add Expenses Details</h5>
              </div>

              <div className="col-lg-3 d-flex justify-content-end align-items-center pt-3">
                <button
                  className="pt-2 pb-2 px-3 add_expense_btn"
                  data-bs-toggle="modal"
                  data-bs-target="#addExpenseModal"
                  onClick={() => {
                    setIsEditing(false);
                    setForm({ title: '', description: '', date: '', amount: '', billFormat: '' });
                  }}
                >
                  <FaPlusSquare className="add_expense_icon" />
                  Add New Expenses Details
                </button>
              </div>
            </div>

            <div className="row border mx-2 mb-2 add_expense_heading">
              <div className="col-2 py-2"><h6>Title</h6></div>
              <div className="col-3 py-2"><h6>Description</h6></div>
              <div className="col-2 py-2"><h6 className="text-center">Date</h6></div>
              <div className="col-1 py-2"><h6 className="text-center">Amount</h6></div>
              <div className="col-2 py-2"><h6 className="text-center">Bill Format</h6></div>
              <div className="col-2 py-2"><h6 className="text-center">Action</h6></div>
            </div>

            {expenses.map((expense, index) => (
              <div className="row mt-2 mx-2" key={index}>
                <div className="col-2 py-2"><p>{expense.title}</p></div>
                <div className="col-3 py-2"><p>{expense.description}</p></div>
                <div className="col-2 py-2"><p className="text-center">{expense.date}</p></div>
                <div className="col-1 py-2"><p className="text-center amount-column">₹ {expense.amount}</p></div>
                <div className="col-2 py-2"><p className="text-center">{expense.billFormat}</p></div>
                <div className="col-2 py-2 d-flex gap-3 justify-content-center action_btn_main">
                  <button
                    className="px-2 action_btn"
                    onClick={() => handleEdit(index)}
                    data-bs-toggle="modal"
                    data-bs-target="#addExpenseModal"
                  >
                    <RiEditBoxFill className="action_icon edit_icon" />
                  </button>
                  <button
                    className="px-2 action_btn"
                    onClick={() => handleView(index)}
                    data-bs-toggle="modal"
                    data-bs-target="#viewExpenseModal"
                  >
                    <GrView className="action_icon view_icon" />
                  </button>

                  {/* delete */}
                  <button
                    className="px-2 action_btn"
                    onClick={() => handleDeleteClick(index)}
                    data-bs-toggle="modal"
                    data-bs-target="#deleteExpenseModal"  // Add this line
                  >
                    <RiDeleteBin2Fill className="action_icon delete_icon" />
                  </button>


                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Updated Add Expense Modal */}
      <div className="modal fade" id="addExpenseModal" tabIndex="-1" aria-labelledby="addExpenseModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content custom-modal">
            <div className="modal-header">
              <h5 className="modal-title" id="addExpenseModalLabel">
                {isEditing ? 'Edit Expenses Details' : 'Add Expenses Details'}
              </h5>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSave}> {/* Add onSubmit here */}
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Title*</label>
                  <input type="text" className="form-control" name="title" placeholder="Enter Title" value={form.title} onChange={handleInputChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description*</label>
                  <input type="text" className="form-control" name="description" placeholder="Enter Description" value={form.description} onChange={handleInputChange} required />
                </div>
                <div className="row">
                  <div className="col-6 mb-3">
                    <label htmlFor="date" className="form-label">Date*</label>
                    <div className="input-group">
                      <input type="date" className="form-control" name="date" value={form.date} onChange={handleInputChange} required />
                    </div>
                  </div>
                  <div className="col-6 mb-3">
                    <label htmlFor="amount" className="form-label">Amount*</label>
                    <input type="number" className="form-control " name="amount" placeholder="₹ 0000" value={form.amount} onChange={handleInputChange} required />
                  </div>
                </div>
                <div className="mb-0">
                  <label htmlFor="billFormat" className="form-label">Upload Bill*</label>
                  <div className="file-upload-box file-upload-box-border">
                    <input
                      type="file"
                      className="form-control file-input"
                      name="billFormat"
                      onChange={(e) => setForm({ ...form, billFormat: e.target.value.split('\\').pop() })}
                      accept=".jpg,.jpeg,.png,.gif"
                    />
                    <div><span className="upload-instructions">Upload a file </span> or drag and drop</div>
                    <small className="form-text text-muted">PNG, JPG, GIF up to 10MB</small>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="modal-footer">
                  <div className="d-flex w-100 justify-content-between">
                    <button
                      type="button"
                      className="btn btn-outline-secondary modal_btn w-50 me-2"
                      data-bs-dismiss="modal"
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>

                    <button
                      type="submit" // Change button type to submit
                      className="btn modal_btn save_btn w-50 ms-2"
                      data-bs-dismiss="modal"
                    >
                      {isEditing ? 'Update' : 'Save'}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>




      {/* View Expense Modal */}
      <div className="modal fade" id="viewExpenseModal" tabIndex="-1" aria-labelledby="viewExpenseModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content custom-modal">
            <div className="modal-header  mb-0">
              <h5 className="modal-title" id="viewExpenseModalLabel "> View Expense Details</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <hr className="no-margin-hr" />


            <div className="modal-body mt-0">
              {viewExpense && (
                <div>
                  <div className="col-12">
                    <p><strong className='viewPageLabel'>Title </strong><br /> {viewExpense.title}</p>
                  </div>

                  <p><strong className='viewPageLabel'>Description</strong> <br />{viewExpense.description}</p>
                  <div className='d-flex '>
                    <div className="col-5">
                      <p><strong className='viewPageLabel'>Date</strong><br /> {viewExpense.date}</p>
                    </div>
                    <div className="col-5">
                      <p><strong className='viewPageLabel '>Amount</strong> <br /> <span className='amount-view-deatils' > ₹ {viewExpense.amount} </span></p>
                    </div>


                  </div>
                  <div className="col-12">
                    <p><strong className='viewPageLabel '>Bill </strong><br /> <img className='view-bill-body ' src={viewExpense.billFormat} /></p>
                  </div>

                </div>
              )}
            </div>

          </div>
        </div>
      </div>


      {/* Delete Confirmation Modal */}
      <div
        className="modal fade"
        id="deleteExpenseModal"
        tabIndex="-1"
        aria-labelledby="deleteExpenseModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content custom-modal ">
            <div className="modal-header delete_expense_border">
              <h5 className="modal-title delete_expense_title" id="deleteExpenseModalLabel">Delete Expense?</h5>
            </div>
            <hr className="no-margin-hr" />

            <div className="modal-body">
              <p className='delete_para'>Are you sure you want to delete this?</p>
            </div>
            <div className="modal-footer">
              <div className="d-flex w-100 justify-content-between">

                <button
                  type="button"
                  className="btn btn-outline-secondary w-50 ms-2"
                  data-bs-dismiss="modal" // Add this attribute to close the modal on cancel
                  onClick={() => setShowDeleteModal(false)}
                >
                  Cancel
                </button>


                <button
                  type="button"
                  className="btn btn-danger w-50 ms-2"
                  data-bs-dismiss="modal" // Add this attribute to close the modal on delete
                  onClick={handleDeleteConfirm}
                >
                  Delete
                </button>
              </div>



            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FinancialExpense
