import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios';
import "./Course.css";
import StudyMaterialCard from '../../components/StudyMaterialCard/StudyMaterialCard';

function Course() {
  const [searchParams] = useSearchParams();
  const courseCode = searchParams.get("courseCode");

  {/* TODO: @pinki change this variable to useState variable and this data should come from getcourse api call */ }
  const [studematerial, setStudeMaterial] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('/studymaterial');
      if (response) {
        setStudeMaterial(response.data.data)
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      {/* TODO: @pinki complete this card */}
      <div className='course-header'>
        <h1>{courseCode}</h1>
      </div>

      <div className='course-material-container'>
        <div className='row'>
          {
            studematerial?.map((material, index) => {
              return (
                <div className='col-md-4 col-lg-3 d-flex justify-content-center' key={index}>
                  <StudyMaterialCard
                    contenttype={material.contenttype}
                    title={material.title}
                    description={material.description} />
                </div>)
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Course
