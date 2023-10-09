"use client"
import { useState, useEffect } from "react"
import { collection, addDoc, query, where, deleteDoc, doc, updateDoc, getDocs } from "firebase/firestore"
import { db } from "@/config/firebase"
import Header from "../(components)/Header/Header"
import Sidebar from "../(components)/Sidebar/Sidebar"

export default function Student() {
  const [name, setName] = useState("")
  const [studentId, setStudentId] = useState("")
  const [phone, setPhone] = useState("")


  const HandleSubmit = async () => {
    let student = {
      name,
      studentId,
      phone
    }

    try {
      const collectionName = collection(db, "collection")

      await addDoc(collectionName, student)
      console.log("Document written with ID: ",student);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

  }


  const [students, setStudents] = useState([])

  const [id, setId] = useState("")

  const [loading, setLoading] = useState(false)

  const fetchDocs = async () => {
    try {
      const collectionName = collection(db, "collection")
      // const queryRef = query(collectionName, where("email","==","naveed@gmail.com"))
      const docs = await getDocs(collectionName)
      const studentsData = []
      docs.forEach((doc) => {
        studentsData.push({
          id: doc.id,
          ...doc.data()
        })
      })
      setStudents(studentsData)
      console.log("students", studentsData)

    } catch (error) {
      console.log("error", error);
    }
  }
  useEffect(() => {
    fetchDocs()
  }, [])

  const onDeletHandler = async (id) => {
    const docRef = doc(db, "collection", id)

    try {
      setId(id)
      setLoading(true)

      await deleteDoc(docRef)


      const newStudents = students.filter((student) => id !== student.id)
      setLoading(false)
      setStudents(newStudents)

    } catch (error) {
      alert("error")
    }
  }

  const onUpdateHandler = async (id) => {
    try {
      const docRef = doc(db, "collection", id)
      setId(id)
      setLoading(true)
      await updateDoc(docRef, {
        email: "naveed@techloset.com"
      })
      fetchDocs()
      setLoading(false)


    } catch (error) {

    }
  }


  return (
    <div className='container-fluid mt-3'>
      <div className="row">
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col-9">
          <Header />
          <div className="row mt-4">
            <div className="col-12">
              <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name" className="form-control" />
              <input type="text" onChange={(e) => setStudentId(e.target.value)} placeholder="Enter Your Student Id" className="form-control my-3" />
              <input type="number" onChange={(e) => setPhone(e.target.value)} placeholder="Contact Number" className="form-control" />
              <button onClick={HandleSubmit} className="btn btn-success mt-3">Submit</button>

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
                {students.map((student,index) => {
                    return (

                      <tr key={index}>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.phone}</td>
                        <td><button className="btn btn-warning" onClick={() => onUpdateHandler(student.id)}>  {student.id == id && loading ? "loading..." : "Update"}</button></td>
                        <td><button className="btn btn-danger" onClick={() => onDeletHandler(student.id)}>  {student.id == id && loading ? "loading..." : "Delete"}</button></td>

                      </tr>
                    )
                  })
                }
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
