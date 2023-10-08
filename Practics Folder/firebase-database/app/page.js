import Header from "./(components)/Header/Header";
import Sidebar from "./(components)/Sidebar/sidebar"
import Image from "next/image";
import student from "../public/assets/images/123456.jpg";
import teacher from "../public/assets/images/teacher1.jpg"
import event from "../public/assets/images/1055650.png"
import food from "../public/assets/images/food1.png"



export default function page() {
 
  return (
    <div className='container-fluid mt-3'>
      <div className="row">
        <div className="col-3">
          <Sidebar/>
        </div>
        <div className="col-9">
        <Header/>
        <div className="container">
        <div className="row mt-4 bg-light pt-3">
        <div className="col-3 d-flex">
        <Image src={student} className="rounded-circle" width={50} alt="" />
        <span className="ms-2"><p>Students <br />932</p></span>
        </div>
        <div className="col-3 d-flex">
        <Image src={teacher} className="rounded-circle" width={50} alt="" />
        <span className="ms-2"><p>Teachers <br />786</p></span>
        </div>
        <div className="col-3 d-flex">
        <Image src={event} className="rounded-circle" width={50} alt="" />
        <span className="ms-2"><p>Events <br />40</p></span>
        </div>
        <div className="col-3 d-flex">
        <Image src={food} className="rounded-circle" width={50} alt="" />
        <span className="ms-2"><p>Foods <br />32k</p></span>
        </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}

