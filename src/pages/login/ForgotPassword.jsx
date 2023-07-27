const ForgotPassword = () => {
  return (
    <div className="modal" id="forgotPassword" tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Forgot Password</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"></span>
              </button>
            </div>
            <div className="modal-body">
            <form>
        <div className="form-group">
          <label className="mb-2" htmlFor="exampleInputEmail1">Email : </label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email..." />
        </div>
      </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" >Send</button>
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ForgotPassword;