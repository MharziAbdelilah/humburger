

function App() {
  return (
    <>
  <div className="menu-wrap">
    <input type="checkbox" className="toggler" />
    <div className="hamburger">
      <div />
    </div>
    <div className="menu">
      <div>
        <div>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="content">
      <h2>Welcome</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard.
      </p>
      <a href="#" className="btn">
        Read more
      </a>
    </div>
  </div>
</>

  );
}

export default App;
