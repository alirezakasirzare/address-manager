<template>
  <nav
    class="navbar navbar-expand-sm navbar-light fixed-top"
    style="background-color: var(--bs-gray-200)"
  >
    <div class="container-fluid">
      <!-- brand -->
      <router-link class="navbar-brand" to="/">
        <span class="fw-bold">AD</span> manager</router-link
      >
      <!-- toggle mobile menu -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar-menu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- menu -->
      <div class="collapse navbar-collapse" id="navbar-menu">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/add">Add address</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
