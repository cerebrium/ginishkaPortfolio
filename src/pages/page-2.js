import React, { useState } from "react"
import { Link } from "gatsby"
import '../components/layout.css'
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => {


  const [status, setStatus] = useState('')
  const [ secondPage, setSecondPage ] = useState('contactPage')

  const submitForm = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus({ status: "SUCCESS" });
      } else {
        this.setStatus({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }

  return (
    <Layout>
      <div className='pageTwo'>
        <SEO title="Page two" />
          <form onSubmit={submitForm} action="https://formspree.io/meqelkae" method="POST" className='myContactForm'>
              <label className='label'>Name:  </label><br />
              <input type="text" name="name"/><br />
              <label className='label'>Email:  </label><br />
              <input type="email" name="email" /><br />
            <label className='label'>Message:</label>
            <textarea type="text" name="message" rows='20' cols='90'></textarea><br />
            {status === "SUCCESS" ? <p>Thanks!</p> : <button className='submitButton'> Submit</button>}
            {status === "ERROR" && <p>Ooops! There was an error.</p>}
          </form>
          {/* link back to main page */}
          <br /><br />
          <Link to="/" >
            <div className='backToHomeDiv'>
              <h3>Back to Homepage</h3>
            </div>
          </Link>
      </div>
    </Layout>
  )
}

export default SecondPage
