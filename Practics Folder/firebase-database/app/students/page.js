import Header from "../(components)/Header/Header"
import Sidebar from "../(components)/Sidebar/sidebar"

export default function Student() {
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
        <input type="text" placeholder="Enter Your Name" className="form-control"/>
        <input type="text" placeholder="Enter Your Student Id" className="form-control my-3"/>
        <input type="number" placeholder="Contact Number" className="form-control"/>
        <button className="btn btn-success mt-3">Submit</button>

          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
