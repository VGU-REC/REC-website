function Footer() {
  return (
    <div>
      <footer className="text-center bg-gray-900 text-white">
        <div className="grid grid-cols-3">
          <div>
            <div className="flex flex-row">
              <img className="logo" src="logo.png" alt="Logo" />
              <img className="logo" src="logo.png" alt="Logo" />
            </div>
            <div>
              <h4>VIETNAMESE GERMAN UNIVERSITY</h4>
              <h4>ROBOTICS AND ELECTRONICS CLUB</h4>
            </div>
          </div>

          <div className="grid grid-cols-2">
            <div>
              <div>Home</div>
              <div>Activity</div>
              <div>Project</div>
            </div>
            <div>
              <div>Blog</div>
              <div>Achievement</div>
              <div>About</div>
            </div>
          </div>

          <div>
            <div className="flex flex-row">
            
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export { Footer };
