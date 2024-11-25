import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { addVideoApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setAddStatus}) {
  const [show, setShow] = useState(false);

const[videoDetails,setVideoDetails]=useState({
    caption:"",
    Imgurl:"",
    emdedLink:""
})
console.log(videoDetails);



  const handleClose = () => {setShow(false);
  handleCancel()
  }
  const handleShow = () => setShow(true);

const handleCancel=()=>{
  setVideoDetails({
    caption:"",
    Imgurl:"",
    emdedLink:""
  })
}

const handleadd=async()=>{
  const {caption,Imgurl,emdedLink}=videoDetails

  if(!caption || !Imgurl || !emdedLink){
    toast.info('please fill the form completely')
  }
  else{
    if(emdedLink.startsWith('https://youtu.be/')){
      let link = `https://www.youtube.com/embed/${emdedLink.slice(17,28)}`
      console.log(link);
      const result=  await addVideoApi({caption,Imgurl,emdedLink:link})
      console.log(result);
      if(result.status>=200 && result.status<300){
        toast.success('video added sucessfully')
        handleClose()
        setAddStatus(result)
      }
      else{
        toast.error('something went wrong')
        handleCancel()
      }
      
    }
    else{
      let link=`https://www.youtube.com/embed/${emdedLink.slice(-11)}`
      console.log(link);
      const result=  await addVideoApi({caption,Imgurl,emdedLink:link})
      console.log(result);
      if(result.status>=200 && result.status<300){
        toast.success('video added sucessfully')
        handleClose()
        setAddStatus(result)
      }
      else{
        toast.error('something went wrong')
        handleCancel()
      }
      
    }


   
    
  }
}

  return (
    <>
    <h5>
    <span className='d-md-inline d-none'>Upload New Video</span><FontAwesomeIcon onClick={handleShow} icon={faCloudArrowUp} className='ms-3'/>
    </h5>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'><FontAwesomeIcon icon={faFilm}  className='me-2'/>Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details</p>
          <form className='border border-secondary p-3 rounded'>
            <div className='mb-3'>
              <input type="text" value={videoDetails.caption} placeholder='Video Caption' className='form-control' onChange={(e)=>setVideoDetails({...videoDetails ,caption:e.target.value})}/>

            </div>
            <div className='mb-3'>
              <input type="text" value={videoDetails.Imgurl} placeholder='Video Image' className='form-control' onChange={(e)=>setVideoDetails({...videoDetails ,Imgurl:e.target.value})}/>

            </div>
            <div className='mb-3'>
              <input type="text" value={videoDetails.emdedLink} placeholder='Video Url' className='form-control' onChange={(e)=>setVideoDetails({...videoDetails ,emdedLink:e.target.value})}/>

            </div>

          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleadd}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme="colored" autoClose={2000}/>
    </>
  )
}

export default Add