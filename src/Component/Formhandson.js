import React, { Component } from 'react'

class Formhandson extends Component{
    constructor(){
        super();
        this.state={
            name:'',
            dept:'',
            rate:'',
            studata:[]
        }
     }
      handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
        console.log(this.state.name)
     }
     handleSubmit=()=>{
        
        const tempobj={
            name:this.state.name,
            dept:this.state.dept,
            rate:this.state.rate
        }
        if(tempobj.name.length>5){
            alert("Form submitted")
        }
        this.state.studata.push(tempobj);
        this.setState({
            studata:this.state.studata
        })
        console.log(this.state.studata)
     }
render(){
    return(
        <>
        <form>
            <label htmlFor='name'>Name :-    </label>
            <input type='text' id='name' name='name' onChange={this.handleChange} />
            <br></br>
            <label htmlFor='dept'>Department :-</label>
            <input type='text' id='dept' name='dept' onChange={this.handleChange}/>
            <br></br>
            <label htmlFor='rate'>Rating :-    </label>
            <input type='number' id='rate' name='rate' onChange={this.handleChange}/>
            <br></br>
            <button type='button' onClick={this.handleSubmit}>Submit</button>

          <div className='parent'>
          {this.state.studata.map((item,index)=>{
                    return(
                        <div className='child' key={index}>
                            <p>{item.name} | </p>
                            <p>{item.dept} | </p>
                            <p>{item.rate}</p>

                        </div>
                    )
            })}
          </div>

        </form>
        </>
    )
}

}
export default Formhandson;