import React, { useState } from 'react'
import QuoteNavbar from './QuoteNavbar'

const AddQuote = () => {
    const[input,changeInput]=useState(
        { id:"",quote:"",author:""}
    )

    const inputHandler=(event)=>{
        changeInput( {...input,[event.target.name]:event.target.value} )
    }

    const readValues=()=>{
        console.log(input)
    }

  return (
    <div>
        <QuoteNavbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">id</label>
                            <input type="text" className="form-control" name='id' value={input.id} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">quote</label>
                            <input type="text" className="form-control" name='quote' value={input.quote} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">author</label>
                            <input type="text" className="form-control" name='author' value={input.author} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValues}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddQuote