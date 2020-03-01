import React, { useState } from 'react'

import styles from './form.module.scss'

const Form = () => {

  const [ formValues, setFormValues ] = useState({})

  const handleFormChange = event => {
    const { name, value } = event.target
    setFormValues({...formValues, [name]: value})
  }

  return (
    <form 
      className={styles['form']}
      name='contact'
      method='post'
      data-netlify='true'
      data-netlify-honeypot='bot-field'
    >
      <input type='hidden' name='bot-field' />
      <input type='hidden' name='form-name' value='contact' /> 
      
      <div>
        <input
          type='text'
          name='name'
          required={true}
          placeholder='Name'
          id='name'
          value={formValues['name']}
          onChange={handleFormChange}
        />
        <label htmlFor='name'>
          Name
        </label>
      </div>
      
      <div>
        <input
          type='email'
          name='email'
          required={true}
          id='email'
          placeholder='Email'
          value={formValues['email']}
          onChange={handleFormChange}
        />
        <label htmlFor='email'>
          Email
        </label>
      </div>
      
      <div>
        <textarea
          name='message'
          required={true}
          id='message'
          placeholder='Message'
          rows='6'
          value={formValues['message']}
          onChange={handleFormChange}
        />
        <label htmlFor='message'>
          Message
        </label>
      </div>

      <button type='submit'>
        Send
      </button>
    </form>
  )
}

export default Form