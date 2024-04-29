import React, {useState,useEffect} from "react"
import imgb from "../assets/logo.png"
import imga from "../assets/a.jpeg"
import Dropdown from 'react-bootstrap/Dropdown';
function Home1() {
  const [input, setInput] = useState([]);
  const [selectedNumber, setSelectedNumber] = useState('');

  const handleInputChange = (value) => {
    setInput([]);
    for (let i = 0; i < value; i++) {
      setInput(prevInput => [...prevInput, i + 1]);
    }
    setSelectedNumber(value);
  };
  const handleDeleteInput = (index) => {
    setInput(prevInput => prevInput.filter((_, i) => i !== index));
  };
  
  // useEffect(()=>{
  //   return(
  //     <div>
  //       <input></input>
  //     </div>
  //   )
  // },[input])
  return (

    <div class='row' style={{ padding: '0 0 0 0', margin: '0 0 0 0' }}>
       
      <div class="col-md-6 " id="intro" style={{ padding: '0 0 0 0', margin: '0 0 0 0' }}>
      <img src={imgb} class="img-fluid" style={{width: '200px', margin: '15px 15px 15px 15px'}} alt="..."></img>

      </div>
      
      <div class="col-md-6" style={{ padding: '0 0 0 0', margin: '0 0 0 0' }}>
        <nav class="navbar navbar-light " style={{ backgroundcolor: 'black', padding: '10px 0 0 0' }}>
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              {/* <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top"></img> */}
            
            </a>
            <a className="nav-link active " aria-current="page" href="#">Home</a>
            <a className="nav-link" href="#">Features</a>
            <a className="nav-link" href="#">Pricing</a>
            <a className="nav-link" href="#"> <i class="bi bi-bell"></i></a>
            <a className="nav-link" href="#" style={{paddingRight:'25px'}}> <i class="bi bi-person-circle"></i>  </a>
      




          </div>
         

        </nav>
   <hr></hr>
        <div class="row  mx-auto d-block" style={{ padding: '0 0 0 0', margin: '0 0 0 0' }}>
        <div class="col-md-6 mx-auto d-block" style={{  }}>
          <img src={imga} class="img-fluid rounded mx-auto d-block" style={{ margin: '15px 15px 15px 15px '}} alt="..."></img>
          <h3 class="text-center ">Why Choose Us?</h3>
          </div>
          <p class="text-center" style={{alignContent:'center', padding:'0px 110px 0px 110px'}}>Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.</p>
<div></div>
<div class="col mx-auto d-block text-center" >
  
          <Dropdown  >
          <button type="button" class="btn btn-light" onClick={() => handleInputChange(1)} style={{margin:'5px 5px 5px 5px', borderRadius:'160px', height: '50px', width: '50px'}}>1</button>
          <button type="button" class="btn btn-light" onClick={() => handleInputChange(2)} style={{margin:'5px 5px 5px 5px', borderRadius:'160px',  height: '50px', width: '50px'}}>2</button>
          <button type="button" class="btn btn-light" onClick={() => handleInputChange(3)} style={{margin:'5px 5px 5px 5px', borderRadius:'160px',  height: '50px', width: '50px'}}>3</button>
        
      <Dropdown.Toggle variant="light" id="dropdown-basic"  class="btn btn-light" style={{margin:'5px 5px 5px 5px', borderRadius:'160px', height: '50px'}}>
        +
      </Dropdown.Toggle>

      <Dropdown.Menu className='text-center ' class="custom-dropdown-menu">
      <Dropdown.Item onClick={() => handleInputChange(1)}>1</Dropdown.Item>
      <Dropdown.Item onClick={() => handleInputChange(2)}>2</Dropdown.Item>
      <Dropdown.Item onClick={() => handleInputChange(3)}>3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown> 
   
          
          </div>
          <div class='row'>
            <div className="col-md-6 mx-auto d-block text-center">
          <h3 class="text-center ">Input Fields </h3> 
          <p className="text-center">
          {input.length > 0 && input.map((value, index) => (
  <div key={index} className="row">
    <div className="col-md-10" style={{marginRight: '0px', marginLeft: '5px', margin: '0px 10px 10px 10px'}}>
      <input type="text" placeholder="Enter..." className="form-control" />
    </div>
    <div className="col" style={{padding: '7px 10px 10px 10px'}}>
      <a  onClick={() => handleDeleteInput(index)}><i className="bi bi-trash"></i></a>
    </div>
  </div>
))}

              </p>
              <button type="button" class="btn btn-secondary "  style={{margin:'5px 5px 5px 5px'}}>Save</button>
          </div>
          </div>
          </div>
      </div>

    </div>

  )
}


export default Home1;


