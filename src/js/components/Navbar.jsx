import React from 'react'

function Navbar() {
  return (
    <div className='bg-dark p-3 '>
      
  <nav class="d-flex justify-content-between align-items-center d-none d-md-flex">
    <ul class="nav">
  <li class="nav-item">
    <a class="nav-link active link-light" aria-current="page" href="#">Start Bootstrap</a>
  </li>
    </ul>
      <ul class="nav">
  <li class="nav-item">
    <a class="nav-link active link-light" aria-current="page" href="#">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link link-secondary  " href="#">About</a>
  </li>
  <li class="nav-item">
    <a class="nav-link link-secondary" href="#">Services</a>
  </li>
  <li class="nav-item">
    <a class="nav-link link-secondary" href="#">Contact</a>
  </li>
</ul>
</nav>


<nav class="navbar navbar-dark bg-dark d-md-none">
  <div class="container-fluid">
    <div>
      <a class="navbar-brand" href="#">Start Bootstrap</a>
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>

<div class="collapse" id="navbarToggleExternalContent" data-bs-theme="dark">
  <div class="bg-dark p-4 ">
<ul class="nav flex-column align-items-start">
  <li class="nav-item">
    <a class="nav-link active link-light" aria-current="page" href="#">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link link-secondary  " href="#">About</a>
  </li>
  <li class="nav-item">
    <a class="nav-link link-secondary" href="#">Services</a>
  </li>
  <li class="nav-item">
    <a class="nav-link link-secondary" href="#">Contact</a>
  </li>
</ul>
  </div>
</div>

    </div>
  )
}

export default Navbar
