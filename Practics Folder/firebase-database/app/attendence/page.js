import Header from "../(components)/Header/Header"
import Sidebar from "../(components)/Sidebar/sidebar"

export default function attendence() {
  return (
    <div className='container-fluid mt-3'>
      <div className="row">
        <div className="col-3">
          <Sidebar/>
        </div>
        <div className="col-9">
          <Header/>
        </div>
      </div>
    </div>
  )
}
