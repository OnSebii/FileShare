<template>
  <div id="screen" class="d-flex flex-column justify-content-center align-items-center">
    <form class="d-flex flex-column align-items-center p-4 bg-dark rounded">
      <p class="icon mt-2 mb-1"><i class="fas fa-user-plus"></i></p>
      <h4 class="font-weight-normal">Create an account</h4>

      <label for="inputFirst" class="mt-3 w-100">First name</label>
      <input
        type="text"
        id="inputFirst"
        class="form-control input-field"
        placeholder="First name"
        required
        autofocus
        v-model="firstname"
      />

      <label for="inputLast" class="mt-3 w-100">Last name</label>
      <input
        type="text"
        id="inputLast"
        class="form-control input-field"
        placeholder="Last name"
        required
        autofocus
        v-model="lastname"
      />

      <label for="inputEmail" class="mt-3 w-100">Email address</label>
      <input
        type="email"
        id="inputEmail"
        class="form-control input-field"
        placeholder="Email address"
        required
        autofocus
        v-model="email"
      />

      <label for="inputPassword" class="mt-3 w-100">Password</label>
      <input
        type="password"
        id="inputPassword"
        class="form-control input-field"
        placeholder="Password"
        required
        v-model="password"
      />
      <div class="mt-2">
        <button class="btn mt-3 highlighted-button mr-1" type="button" @click="register">
          Register
        </button>
        <router-link to="/login"
          ><button class="btn background-button mt-3" type="button">Login</button></router-link
        >
      </div>

      <p class="mt-3 mb-3 text-muted">&copy; 2021 Fileshare</p>
      <p v-if="message" class="mb-3 text-danger">An error occurred</p>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      firstname: '',
      lastname: '',
      message: false,
    };
  },
  methods: {
    async register() {
      try {
        await axios({
          url: '/register',
          method: 'post',
          contentType: 'application/json',
          data: {
            email: this.email,
            password: this.password,
            firstname: this.firstname,
            lastname: this.lastname,
          },
        });
        localStorage.setItem('email', this.email);
        this.$router.push({ name: 'Login' });
      } catch (error) {
        console.log(error);
        this.message = true;
      }
    },
  },
};
</script>

<style scoped>
#screen {
  height: 100vh;
}
form {
  width: 100%;
  max-width: 360px;
  margin-bottom: 10vh;
}

.icon {
  font-size: 3.5em;
  color: #2aa58a;
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
.background-button {
  background-color: #585858;
}
.background-button:hover {
  background-color: #494949;
}
</style>
