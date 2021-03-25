<template>
  <div>
    <nav class="container navbar navbar-expand-lg navbar-dark bg-dark mt-4 py-2 rounded">
      <a class="navbar-brand ml-2" href="#"><span class="font-weight-bold">FileShare</span> <span class="font-weight-thin text-light">Dashboard</span></a>
      <div class="collapse navbar-collapse navbar-right">
        <ul class="nav navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link material-icons pr-0 profile" href="#">account_circle</a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container mt-3 bg-dark rounded">
      <form class="px-2 py-3">
        <legend class="mb-3">My Account</legend>
        <div class="row">
          <div class="form-group col-6 pr-2">
            <label for="inputFirst">First name</label>
            <input type="password" class="form-control input-field" id="inputFirst" placeholder="First name" />
          </div>
          <div class="form-group col-6 pl-2">
            <label for="inputLast">Last name</label>
            <input type="password" class="form-control input-field" id="inputLast" placeholder="Last name" />
          </div>
          <div class="form-group col-6 pr-2">
            <label for="inputEmail">Email address</label>
            <input type="email" class="form-control input-field" id="inputEmail" placeholder="Email address" />
            <small class="form-text text-muted">You have to confirm a new address.</small>
          </div>
          <div class="form-group col-6 pl-2">
            <label for="inputPassword">Password</label>
            <input type="password" class="form-control input-field" id="inputPassword" placeholder="Password" />
          </div>
        </div>
        <button class="btn highlighted-button mb-1">Save</button>
      </form>
    </div>

    <div class="container mt-3 bg-dark rounded">
      <div class="px-2 py-3">
        <div class="d-flex justify-content-between align-items-center">
          <p>My Projects</p>
          <a class="mb-3" data-toggle="modal" data-target="#exampleModal">
            <i class="fas fa-plus"></i>
          </a>
        </div>

        <div class="card border-secondary mb-3">
          <div class="card-header d-flex justify-content-between align-items-center px-3 py-2">
            <p class="m-0 text-small">Filename</p>
            <div>
              <span>Share <i class="fas fa-share mr-3 ml-1"></i></span> <span>Delete <i class="fas fa-trash-alt ml-1"></i></span>
            </div>
          </div>
          <div class="card-body px-3 py-2">
            ...
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.profile {
  font-size: 38px !important;
}
legend {
  font-size: 20px;
}
p {
  font-size: 20px;
}
.text-small {
  font-size: 16px;
}

/* Dark Mode Input */
.input-field {
  color: #fff;
  background-color: #444444;
  border: 1px solid #686868;
}
.input-field:focus {
  color: #fff;
  background-color: #505050;
}
.input-field:active {
  color: #fff;
  background-color: #686868;
}
.input-field::placeholder {
  color: #fff;
}

/* Customized Button Colors */
.highlighted-button {
  background-color: #2aa58a;
}
.highlighted-button:hover {
  background-color: #268a74;
}
</style>
