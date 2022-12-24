import React, {useState} from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./AdminPage.css";

function AdminPage() {
    const [nav,setNav]=useState('request')
    const handleNavigation = (e) =>{
        if(e.target.id==='request'){
            setNav(e.target.id)
            document.getElementById(e.target.id).classList.add('admin-nav-ative')
            document.getElementById('progress').classList.remove('admin-nav-ative')
            document.getElementById('completed').classList.remove('admin-nav-ative')
        }
        else if(e.target.id==='progress'){
            setNav(e.target.id)
            document.getElementById(e.target.id).classList.add('admin-nav-ative')
            document.getElementById('request').classList.remove('admin-nav-ative')
            document.getElementById('completed').classList.remove('admin-nav-ative')
        }
        else{
            setNav(e.target.id)
            document.getElementById(e.target.id).classList.add('admin-nav-ative')
            document.getElementById('request').classList.remove('admin-nav-ative')
            document.getElementById('progress').classList.remove('admin-nav-ative')
        }
    }
  return (
    <div>
      <Navbar />
      <div className="admin-nav mb-4">
          <div className="d-flex justify-content-between align-items-center">
            <div className="mx-auto fw-bold py-4 px-5 pointer admin-nav-ative" id="request" onClick={handleNavigation}>Request</div>
            <div className="mx-auto fw-bold py-4 px-5 pointer" id="progress" onClick={handleNavigation}>Progress</div>
            <div className="mx-auto fw-bold  py-4 px-5 pointer" id="completed" onClick={handleNavigation}>Completed</div>
        </div>
      </div>
      <div className="container">
      {nav==='request' &&
      <table class="table">
        <thead>
          <tr >
            <th scope="col">#</th>
            <th scope="col">Sender</th>
            <th scope="col">Receiver</th>
            <th scope="col">Project</th>
            <th scope="col">Accept</th>
            <th scope="col">Reject</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Karthi</td>
            <td>Jana</td>
            <td>Project Name</td>
            <td><button className="btn btn-outline-success">Accept</button></td>
            <td><button className="btn btn-outline-danger">Reject</button></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Logesh</td>
            <td>Karthi</td>
            <td>Project Name with long Characters Example</td>
            <td><button className="btn btn-outline-success ">Accept</button></td>
            <td><button className="btn btn-outline-danger">Reject</button></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry the Bird</td>
            <td>Logesh the blaster</td>
            <td>Project Name with long Characters Example</td>
            <td><button className="btn btn-outline-success">Accept</button></td>
            <td><button className="btn btn-outline-danger">Reject</button></td>
          </tr>
        </tbody>
      </table>
      }
      {nav==='progress' &&
      <table class="table">
        <thead>
          <tr >
            <th scope="col">#</th>
            <th scope="col">Sender</th>
            <th scope="col">Receiver</th>
            <th scope="col">Project</th>
            <th scope="col">Assigned Date</th>
            <th scope="col">Status</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Karthi</td>
            <td>Jana</td>
            <td>Project Name</td>
            <td>12-12-2022</td>
            <td>Beginning</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Logesh</td>
            <td>Karthi</td>
            <td>Project Name with long Characters Example</td>
            <td>12-12-2022</td>
            <td>Partial</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry the Bird</td>
            <td>Logesh the blaster</td>
            <td>Project Name with long Characters Example</td>
            <td>12-12-2022</td>
            <td>Beginning</td>
          </tr>
        </tbody>
      </table>
      }
      {nav==='completed' &&
      <table class="table">
        <thead>
          <tr >
            <th scope="col">#</th>
            <th scope="col">Sender</th>
            <th scope="col">Receiver</th>
            <th scope="col">Project</th>
            <th scope="col">Assigned Date</th>
            <th scope="col">Completed Date</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Karthi</td>
            <td>Jana</td>
            <td>Project Name</td>
            <td>12-12-2022</td>
            <td>12-12-2022</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Logesh</td>
            <td>Karthi</td>
            <td>Project Name with long Characters Example</td>
            <td>12-12-2022</td>
            <td>12-12-2022</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry the Bird</td>
            <td>Logesh the blaster</td>
            <td>Project Name with long Characters Example</td>
            <td>12-12-2022</td>
            <td>12-12-2022</td>
          </tr>
        </tbody>
      </table>
      }
      </div>
    </div>
  );
}

export default AdminPage;
