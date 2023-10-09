"use client"
import { useState, useEffect } from "react"
import { collection, addDoc, query, where, deleteDoc, doc, updateDoc, getDocs } from "firebase/firestore"
import { db } from "@/config/firebase"
import Header from "../(components)/Header/Header"
import Sidebar from "../(components)/Sidebar/Sidebar"

export default function Courses() {
  const [course, setCourse] = useState("")
  const [courseCode, setCourseCode] = useState("")
  const [description, setDescription] = useState("")


  const HandleSubmit = async () => {
    let student = {
      course,
      courseCode,
      description
    }

    try {
      const collectionName = collection(db, "courseList")

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
      const collectionName = collection(db, "courseList")
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
    const docRef = doc(db, "courseList", id)

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
      const docRef = doc(db, "courseList", id)
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
              <input type="text" onChange={(e) => setCourse(e.target.value)} placeholder="Enter Your Course" className="form-control" />
              <input type="number" onChange={(e) => setCourseCode(e.target.value)} placeholder="Enter Your Code" className="form-control my-3" />
             <textarea  rows="5" onChange={(e) => setDescription(e.target.value)} placeholder="Description" className="form-control"></textarea>
              <button onClick={HandleSubmit} className="btn btn-success mt-3">Submit</button>

            </div>
            <div className="col-12">
              <div className="card mt-5 p-3">
                <table class="table table-hover">
                  <tr >
                    <th>Course Code</th>
                    <th>Course</th>
                    <th>Description</th>
                    <th>Update</th>
                    <th>Delete</th>
                  </tr>
                {students.map((student,index) => {
                    return (

                      <tr key={index}>
                        <td>{student.courseCode}</td>
                        <td>{student.course}</td>
                        <td>{student.description}</td>
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
