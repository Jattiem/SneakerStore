<template>
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <router-link class="navbar-brand"  to="/home"><img src="https://i.postimg.cc/gkTytsLv/360-F-136554929-JG7-RLQNf-AKp-AQlm-Rmd-V7-Qhb-EM1-PDt6k2.jpg" alt=""></router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/home">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link"  to="/about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link"  to="/Allproducts">Products</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link"  to="/singleproduct">Product</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link"  to="/login">login</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link"  to="/register">Register</router-link>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit"><i class="bi bi-search"></i></button>
      </form>
      <div class="personicon"><a href="" class="bi bi-person-fill"></a></div>
      <div class="shopicon"><a href="" class="bi bi-bag-fill"></a></div>
    </div>
  </div>
</nav>
  <router-view/>
</template>

<script>
export default {

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
}

nav a.router-link-exact-active {
  /* color: #42b983; */
}
img{
  height: 80px;
  border-radius: 50px;
}
.shopicon{
  /* height: 20px; */
  font-size: 25px;
  /* padding-bottom: px; */
}
.personicon{
  /* height: 20px; */
  font-size: 30px;
  /* padding-bottom: 10px; */
}
</style>