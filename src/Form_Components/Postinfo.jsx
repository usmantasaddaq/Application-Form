import React from 'react'
const Postinfo=(props)=> {
  return (
 <>
 <div className='styleing' >
   <div className="sidebarP">
   <button className="Editstylepp" onClick={()=>{
            props.setModel(!props.model)
        }
        }> X </button>
              <h1>Name:{props?.data.user?.name}</h1>
              <h2>Title:{props?.data.title}</h2>
              <h4>Category:{props?.data.category}</h4>
              <h4>Discription:{props?.data.description}</h4>
   
       
      </div>
      </div>

 </>
  )
}

export default Postinfo;