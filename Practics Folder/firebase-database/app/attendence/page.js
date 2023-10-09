import Header from "../(components)/Header/Header"
import Sidebar from "../(components)/Sidebar/Sidebar"

export default function attendence() {
  return (
    <div className='container-fluid mt-3'>
      <div className="row">
        <div className="col-3">
          <Sidebar/>
        </div>
        <div className="col-9">
          <Header/>
          <div className="row mt-4">
            <div className="col-12">
              <input type="text"  placeholder="Enter Your Student ID" className="form-control" />
              <input type="text"  placeholder="Enter Your Course ID" className="form-control my-3" />
              <input type="date"  placeholder="Enter Your Date" className="form-control my-3" />
              <input type="text"  placeholder="Enter Your Status" className="form-control" />
            
              <button className="btn btn-success mt-3">Submit</button>

            </div>
            <div className="col-12">
              <div className="card mt-5 p-3">
                <table class="table table-hover">
                  <tr >
                    <th>Student Name</th>
                    <th>Student Id</th>
                    <th>Contact Number</th>
                    <th>Update</th>
                    <th>Delete</th>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
