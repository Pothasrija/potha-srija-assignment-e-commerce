

// you edit on your computer and i edit on my own

export default function Header() {
  return (
    <>
      <header>
        {/* Free Shipping Banner */}
        <div className="bar">
          <div className="cont">
            <div className="center">Free Shipping on orders above 999/-</div>
            <div>Call us on: +91 98768 05120</div>
          </div>
        </div>

        {/* Navbar */}
        <nav className="navbar"> 
          <div className="logo">
            <img src="logo.png" alt="Chaperone Logo" />
            <span>Chaperone Plants</span>
          </div>
          <ul className="menu">
            <li>
              <a href="#">Home</a>
            </li>
            <li className="active">
              <a href="#">Plants & Pots</a>
            </li>
            <li>
              <a href="#">Tools</a>
            </li>
            <li>
              <a href="#">Our Services</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Our Story</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
          </ul>
          <div className="right-section">
            <div className="search-bar">
              <input type="text" placeholder="Search Plant" />
              <i className="search-icon">🔍</i>
            </div>
            <div className="user-actions">
              <a href="#" className="profile">
                <i className="icon-user">👤</i> My Profile
              </a>
              <a href="#" className="cart">
                <i className="icon-cart">🛒</i> Cart (3)
              </a>
            </div>
          </div>
        </nav>

        {/* Tabs */}
        <div className="tabs">
          <button className="tab active">Plants</button>
          <button className="tab">Pots</button>
        </div>

        {/* Description */}
        <p className="description">
          Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut...
        </p>

        {/* Nursery Section */}
        <section className="nursery">
          <h2>Nursery</h2>
          <div className="n-box">
            {/* Add circular images */}
            <div className="box">
              <div
                className="avatar-cover"
                style={{ backgroundImage: `url('plant1.jpg')` }}
              ></div>
            </div>
            <div className="box">
              <div
                className="avatar-cover"
                style={{ backgroundImage: `url('plant2.jpg')` }}
              ></div>
            </div>
            {/* Add more as needed */}
          </div>
          <div className="pagination">1 / 1</div>
        </section>
      </header>
    </>
  );
}
