function Footer() {
  return (
    <div>
      <footer className="p-3 text-center bg-gray-900 text-white">
        <div className="grid grid-cols-3">
          <div>
            <div className="flex flex-row justify-center">
              <img className="vgu" src="/vgu_logo.png" alt="Logo" />
              <img className="logo" src="/logo.png" alt="Logo" />
            </div>
            <div>
              <h4>VIETNAMESE GERMAN UNIVERSITY</h4>
              <h4>ROBOTICS AND ELECTRONICS CLUB</h4>
            </div>
          </div>

          <div className="grid grid-cols-2 mt-8">
            <div>
              <div className="uppercase py-2 text-sm">Home</div>
              <div className="uppercase py-2 text-sm">Activity</div>
              <div className="uppercase py-2 text-sm">Project</div>
            </div>
            <div>
              <div className="uppercase py-2 text-sm">Blog</div>
              <div className="uppercase py-2 text-sm">Achievement</div>
              <div className="uppercase py-2 text-sm">About</div>
            </div>
          </div>

          <div className="pl-20">
            <div className="flex flex-row p-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-7 h-7" ><path fill="white" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"/></svg>
              <p className="px-2">robot_club@vgu.edu.vn</p>
            </div>
            <div className="flex flex-row p-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-7 h-7"><path fill="white" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
              <p className="px-2">@vgu.rec</p>
            </div>

            <div className="flex flex-row p-3">
              <img className="w-7 h-7 bg-white" src="/icons8-map-64.png" alt="address"/>
              <p className="px-2">Lê Lai Thủ Dầu Một, Bình Dương</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export { Footer };
