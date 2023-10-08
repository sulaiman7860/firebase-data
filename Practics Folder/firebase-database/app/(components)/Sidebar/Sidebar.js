import Link from "next/link"
import "./sidebar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faClipboard } from '@fortawesome/free-solid-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'

export default function Sidebar() {
  return (
    <div className="container-fluid">
        <div className="row sidebar">
            <div className="col-12 mt-5" >
             <p className="projectLinks"><Link className="link1" style={{textDecoration:"none"}} href="/courses"><FontAwesomeIcon className="me-3" height={20} icon={faLink}/>Courses</Link></p>
             <p className="projectLinks"><Link className="link1" style={{textDecoration:"none"}} href="/students"><FontAwesomeIcon className="me-3" height={20} icon={faUser}/>Students</Link></p>
             <p className="projectLinks"><Link className="link1" style={{textDecoration:"none"}} href="/attendence"><FontAwesomeIcon className="me-3" height={20} icon={faClipboard}/>Attendence</Link></p>
            </div>
        </div>
    </div>
  )
}
