import React, { useState, useEffect } from 'react';
import axios from 'axios';
// components
// import MyButton from '../../components/button';
// import MyTable from '../../components/table';

const Home = () => {
  
  const [userData, setUserData] = useState([])
  const getUserData = async() => {
    const response = await fetch(`http://universities.hipolabs.com/search?country=United+States`)
    const responseJson = await response.json()

    setUserData(responseJson)

    console.log(responseJson, 'Data Kampus')
  }

  useEffect(() => {
    getUserData()
  }, [])

  return (
    <>
      <div style={{backgroundColor: '#94C2F6'}} align="center" className="container">
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-3">
              <div class="card-body">
                <div align="left" className="card-body">
                <img src="https://www.wkok.com/wp-content/uploads/2021/05/marywood-university_586-300x119.jpg" alt="" />
                </div>
              </div>
          </div>
          <div className="col-lg-3">
            <div align="left" class="card-body">
              <p>Country: {userData[0]?.country}</p>
              <p>Universities: {userData[0]?.name}</p>
              <p>Website: {userData[0]?.web_pages}</p>
              <p>Domains: {userData[0]?.domains}</p>
            </div>
          </div> 
          <div className="col-lg-3"></div>
        </div>
      </div>
    </>
  );
}

export default Home;