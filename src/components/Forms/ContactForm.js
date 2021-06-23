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
          <label className="area">
            <textarea placeholder="رسالتك"  />
          </label>
          <label className="send">
          <input type="submit" value="ارسال" />
          </label>
        </form>
      );
    }
  }
  export default Contactform