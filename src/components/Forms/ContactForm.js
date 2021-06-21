import React from 'react';
import './ContactForm.css';
class Contactform extends React.Component {
    render() {
      return (
        <form>
          <label>
            <input type="text" placeholder="الأسم" />
          </label>
          <label>
            <input type="text" placeholder="بريدك الإلكتروني" />
          </label>
          <label>
            <input type="text" placeholder="رقم الهاتف" />
          </label>
          <label>
            <input type="text" placeholder="العنوان" />
          </label>
          <label>
            <textarea placeholder="رسالتك"  />
          </label>
          <input type="submit" value="ارسال" />
        </form>
      );
    }
  }
  export default Contactform