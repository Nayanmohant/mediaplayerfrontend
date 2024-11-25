import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
FontAwesomeIcon
import { faTrashCan,  } from '@fortawesome/free-solid-svg-icons'
import Videocard from './Videocard'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addCategoryApi, deleteCategoryApi, getCategoryApi, updateCategoryApi } from '../services/allApi'
import Allvideos from './Allvideos'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Category(updateStatus) {

  const [show, setShow] = useState(false);
  
  const [categoryName,setCategoryName]=useState("");

  const [allCategory,setAllCategory]=useState([])

  const [categoryStatus,setCategoryStatus]=useState({})
  const [deleteStatus,setDeleteStatus]=useState({})
  const [categoryUpdateStatus,setCategoryUpdateStatus]=useState({})

 


  const handleClose = () => {setShow(false);
    handleCancel()
  }
  const handleShow = () => setShow(true);

  console.log(categoryName);
  
  const handleCancel=()=>{
    setCategoryName("")

  }

  const handleAdd=async()=>{

    if(!categoryName){
      toast.info('please fill the category name')
    }
    else{
      const reqBody={
        Category:categoryName,
        Allvideos:[]
      }
    const result=await addCategoryApi(reqBody)
    console.log(result);
    if(result.status>=200 && result.status<300){
      toast.success('category added successfully')
      handleClose()
      setCategoryStatus(result)
    }
    else{
      toast.error('something went wrong')
    }
    
    }
  }
  const getCategory=async()=>{
  const result= await getCategoryApi()
  //  console.log(result);
  if(result.status>=200 && result.status<300){
  setAllCategory(result.data)
  
  }
}
  console.log(allCategory);
  
 const deleteCategory=async(id)=>{
  const result=   await deleteCategoryApi(id)
  if(result.status>=200 && result.status<300){
    setDeleteStatus(result)
  }
 }

 const videoOver=(e)=>{
  e.preventDefault()
 }

 const videoDrop=async(e,categoryDetails)=>{
  console.log(categoryDetails);
  const videoDetails=JSON.parse(e.dataTransfer.getData("videoDetails"))
  console.log(videoDetails);

 

  if(categoryDetails.Allvideos.find((item)=>item.id==videoDetails.id)){
    toast.warning('video already in the same category')
    
  }
  else{
    categoryDetails.Allvideos.push(videoDetails)
    console.log(categoryDetails);

    const result=await updateCategoryApi(categoryDetails.id,categoryDetails)
     console.log(result);
     if(result.status>=200 && result.status<300){
      setCategoryUpdateStatus(result)
     }
     
  }
  

 }

 const videoDrag= (e,videoDetails,categoryDetails)=>{
  console.log(videoDetails,categoryDetails);

  const details={
    videoDetails,
    categoryDetails
  }
  e.dataTransfer.setData("details",JSON.stringify(details))

  
 }

  useEffect(()=>{
    getCategory()
  },[categoryStatus,deleteStatus,categoryUpdateStatus,updateStatus])

  return (


    <>
    
    <h4 className='mt-5'>Category</h4>
    <button onClick={handleShow} className='btn btn-warning mt-4 w-100'>Add Category</button>
   { allCategory?.length >0 ?
   allCategory?.map((item)=>(
    <div className='border border-secondary mt-4 rounded p-3' droppable onDragOver={(e)=>videoOver(e)} onDrop={(e)=>videoDrop(e,item)}>
      <div className='d-flex justify-content-between'>
        <h4>{item.Category}</h4>
        <button className='btn btn-danger' onClick={()=>deleteCategory(item?.id)}><FontAwesomeIcon icon={faTrashCan} /></button>

      </div>
      {item?.Allvideos.length>0 &&
        item?.Allvideos.map((video)=>(
         <div draggable onDragStart={(e)=>videoDrag(e,video,item)}>
           <Videocard videoDetails={video} present={true} />
           </div>
        ))
       
       }
    

    </div>
    ))
      :
    <h5 className='text-center text-danger mt-4'>No category Added Yet...</h5>

   }
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='p-4 rounded border-dark border'>
            <input type="text" placeholder='Enter  category name' className='form-control' value={categoryName} onChange={(e)=>setCategoryName(e.target.value)}/>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    <ToastContainer position='top-center' theme="colored" autoClose={2000}/>
    </>
  
  )
}

export default Category