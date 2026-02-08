import './Footer.css'
function Footer({ storeName, email, phone, address }) {
  return (
    <footer className="app-footer">
        <div className='storeName1'>
            <h2>{storeName}</h2>
        </div>
        <div className='contact'>
            <h4>Email: {email}</h4>
            <h4>Phone: {phone}</h4>
            <h4>Address: {address}</h4>
        </div>
        <nav>
          <a href="#" className="nav-link">About</a>
          <a href="#" className="nav-link">Contact</a>
          <a href="#" className="nav-link">Privacy Policy</a>
          <a href="#" className="nav-link">Terms of Service</a>
        </nav>
    </footer>
  );
}

export default Footer;