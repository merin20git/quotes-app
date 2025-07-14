import React, { useEffect, useState } from 'react'
import QuoteNavbar from './QuoteNavbar'
import axios from 'axios'

const ViewAllQuote = () => {

    const[quoteData,changeQuote]=useState(
        {"quotes":[],"total":0,"skip":0,"limit":0}
    )
    const fetchDatafromAPI=()=>{
        axios.get("https://dummyjson.com/quotes").then(
            (response)=>{
                changeQuote(response.data)
            }
        ).catch()
    }
    useEffect(()=>{fetchDatafromAPI()},[])
  return (
    <div>
        <QuoteNavbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Quote</th>
      <th scope="col">Author</th>
    </tr>
  </thead>
  <tbody>
    
    {quoteData.quotes.map(
        (value,index)=>{
            return(
                <tr>
      <td>{value.id}</td>
      <td>{value.quote}</td>
      <td>{value.author}</td>
    </tr>
            )
        }
    )}
    
  </tbody>
</table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewAllQuote