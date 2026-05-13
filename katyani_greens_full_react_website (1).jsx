/*
KATYANI GREENS - COMPLETE WEBSITE

HOW TO RUN LOCALLY

1. Install Node.js
https://nodejs.org

2. Create React Project

npm create vite@latest katyani-greens
cd katyani-greens
npm install

3. Install Tailwind CSS

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

4. Replace App.jsx with this file

5. Start Website

npm run dev

Website URL:
http://localhost:5173

--------------------------------------
HOW TO SHARE WITH ANYONE ONLINE
--------------------------------------

1. Create GitHub Account
https://github.com

2. Upload Project to GitHub

3. Create Vercel Account
https://vercel.com

4. Import GitHub Project into Vercel

5. Click Deploy

Public Website Example:
https://katyani-greens.vercel.app

Anyone can open from:
- Mobile
- Laptop
- Desktop
- Tablet

--------------------------------------
PRODUCTION STACK
--------------------------------------
Frontend: React + Tailwind CSS
Backend: Node.js + Express
Database: MongoDB Atlas
Authentication: JWT + OTP
Payment Gateway: Razorpay
Hosting: Vercel
Domain: katyanigreens.com

--------------------------------------
NEXT FEATURES TO CONNECT
--------------------------------------
- MongoDB Database
- Resident Registration API
- Admin Login
- Razorpay Live Payment
- OTP Authentication
- Complaint Management
- WhatsApp Integration
- Notice Board
- Visitor Management

*/

export default function KatyaniGreensWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-950 to-green-900 text-white font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-green-950/90 backdrop-blur border-b border-green-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img
              src="/mnt/data/WhatsApp Image 2026-05-12 at 11.51.04 PM.jpeg"
              alt="Katyani Greens Logo"
              className="w-14 h-14 rounded-full border-2 border-yellow-500"
            />
            <div>
              <h1 className="text-2xl font-bold tracking-wide text-yellow-400">
                KATYANI GREENS
              </h1>
              <p className="text-sm text-green-300">
                Where Peace Finds Home
              </p>
            </div>
          </div>

          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#home" className="hover:text-yellow-400">Home</a>
            <a href="#about" className="hover:text-yellow-400">About</a>
            <a href="#amenities" className="hover:text-yellow-400">Amenities</a>
            <a href="#register" className="hover:text-yellow-400">Register</a>
            <a href="#payment" className="hover:text-yellow-400">Payment</a>
            <a href="#admin" className="hover:text-yellow-400">Admin</a>
            <a href="#contact" className="hover:text-yellow-400">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight text-yellow-400">
            Welcome to Katyani Greens
          </h2>
          <p className="mt-6 text-lg text-green-100 leading-8">
            Premium Township & Society Management Platform with Resident
            Registration, Online Maintenance Payment, Notices, Events, and
            Modern Admin Dashboard.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-6 py-3 rounded-2xl shadow-xl">
              Register Now
            </button>

            <button className="border border-yellow-400 hover:bg-yellow-500 hover:text-black px-6 py-3 rounded-2xl font-semibold">
              Pay Maintenance
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="/mnt/data/WhatsApp Image 2026-05-12 at 11.51.04 PM.jpeg"
            alt="Katyani Greens"
            className="rounded-full shadow-2xl border-4 border-yellow-500 w-[400px] h-[400px] object-cover"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-green-900/60 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-yellow-400">About Township</h3>
          <p className="mt-6 text-lg text-green-100 leading-8 max-w-4xl mx-auto">
            Katyani Greens is a modern township focused on peaceful living,
            smart management, secure society operations, and digital resident
            experience. Residents can register, pay maintenance online, raise
            complaints, and receive society updates in one platform.
          </p>
        </div>
      </section>

      {/* Amenities */}
      <section id="amenities" className="py-20 px-6 max-w-7xl mx-auto">
        <h3 className="text-4xl font-bold text-center text-yellow-400 mb-14">
          Amenities
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            '24x7 Security',
            'Club House',
            'Green Park',
            'Gym Facility',
            'Parking Area',
            'Kids Play Zone',
          ].map((item, index) => (
            <div
              key={index}
              className="bg-green-800/50 rounded-3xl p-8 border border-green-700 shadow-xl hover:scale-105 transition"
            >
              <h4 className="text-2xl font-semibold text-yellow-300">{item}</h4>
              <p className="mt-4 text-green-100">
                Premium facility available for residents with modern township
                infrastructure.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Registration Form */}
      <section id="register" className="bg-green-900/50 py-20 px-6">
        <div className="max-w-4xl mx-auto bg-green-950 rounded-3xl p-10 border border-green-700 shadow-2xl">
          <h3 className="text-4xl font-bold text-yellow-400 text-center mb-10">
            Resident Registration
          </h3>

          <form className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="bg-green-900 border border-green-700 rounded-xl px-4 py-3"
            />

            <input
              type="text"
              placeholder="Mobile Number"
              className="bg-green-900 border border-green-700 rounded-xl px-4 py-3"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="bg-green-900 border border-green-700 rounded-xl px-4 py-3"
            />

            <input
              type="text"
              placeholder="Flat / Plot Number"
              className="bg-green-900 border border-green-700 rounded-xl px-4 py-3"
            />

            <input
              type="number"
              placeholder="Family Members"
              className="bg-green-900 border border-green-700 rounded-xl px-4 py-3"
            />

            <input
              type="password"
              placeholder="Password"
              className="bg-green-900 border border-green-700 rounded-xl px-4 py-3"
            />

            <textarea
              placeholder="Address"
              className="md:col-span-2 bg-green-900 border border-green-700 rounded-xl px-4 py-3"
              rows="4"
            ></textarea>

            <button className="md:col-span-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 rounded-2xl text-lg">
              Submit Registration
            </button>
          </form>
        </div>
      </section>

      {/* Payment Section */}
      <section id="payment" className="py-20 px-6 max-w-6xl mx-auto">
        <h3 className="text-4xl font-bold text-center text-yellow-400 mb-12">
          Online Maintenance Payment
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {[2500, 3500, 5000].map((price, index) => (
            <div
              key={index}
              className="bg-green-800/40 rounded-3xl border border-green-700 p-8 text-center shadow-xl"
            >
              <h4 className="text-2xl font-bold text-yellow-300">
                Maintenance Plan
              </h4>
              <p className="text-5xl font-extrabold mt-6 text-white">
                ₹{price}
              </p>

              <button className="mt-8 bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-2xl font-bold w-full">
                Pay with Razorpay
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Admin Dashboard */}
      <section id="admin" className="bg-green-900/50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-center text-yellow-400 mb-14">
            Admin Dashboard Preview
          </h3>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              'Total Residents',
              'Pending Approvals',
              'Monthly Collection',
              'Complaints',
            ].map((item, index) => (
              <div
                key={index}
                className="bg-green-950 rounded-3xl p-8 border border-green-700 shadow-xl"
              >
                <h4 className="text-lg text-green-300">{item}</h4>
                <p className="text-4xl font-bold mt-4 text-yellow-400">
                  {index === 0
                    ? '245'
                    : index === 1
                    ? '12'
                    : index === 2
                    ? '₹4.5L'
                    : '8'}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-green-950 rounded-3xl p-8 border border-green-700 overflow-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-green-700 text-yellow-400">
                  <th className="py-4">Resident</th>
                  <th>Flat</th>
                  <th>Status</th>
                  <th>Payment</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-green-800">
                  <td className="py-4">Sujeet Singh</td>
                  <td>A-101</td>
                  <td>Approved</td>
                  <td>Paid</td>
                </tr>
                <tr>
                  <td className="py-4">Rahul Sharma</td>
                  <td>B-205</td>
                  <td>Pending</td>
                  <td>Pending</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h3 className="text-4xl font-bold text-yellow-400">Contact Us</h3>

        <p className="mt-6 text-lg text-green-100">
          Email: info@katyanigreens.com
        </p>
        <p className="text-lg text-green-100">Phone: +91 99999 99999</p>
        <p className="text-lg text-green-100">Location: India</p>

        <button className="mt-8 bg-green-600 hover:bg-green-500 px-8 py-4 rounded-2xl font-bold text-lg">
          Join WhatsApp Group
        </button>
      </section>

      {/* Footer */}
      <footer className="border-t border-green-800 py-8 text-center text-green-300">
        © 2026 Katyani Greens • Where Peace Finds Home
      </footer>
    </div>
  );
}
