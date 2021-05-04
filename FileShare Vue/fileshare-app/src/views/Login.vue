<template>
  <div
    id="screen"
    class="d-flex flex-column justify-content-center align-items-center"
  >
    <div
      class="d-flex flex-column align-items-center p-4 bg-dark rounded"
      style="width: 300px"
    >
      <!-- TODO: from habe ich zu div geändert. Wenn das Form tag drinnen bleibt wird die Seite aktuallisert und der request nicht gesendet -->
      <!-- Ich habe auch eine Width von 300 Hinzugefügt weil sonst alles so zusammen gedrückt wäre -->
      <p class="icon mt-2 mb-1"><i class="fas fa-users"></i></p>
      <h4 class="font-weight-normal">Please sign in</h4>

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
        <button class="btn mt-3 highlighted-button mr-1" @click="login">
          Login
        </button>
        <button class="btn background-button mt-3" to="/register">
          Register
        </button>
      </div>

      <p class="mt-3 mb-3 text-muted">&copy; 2021 Fileshare</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Login',
  data() {
    return {
      email: 'lang.s03@htlwienwest.at',
      password: '1',
    };
  },
  methods: {
    async login() {
      try {
        const result = await axios({
          url: '/login',
          method: 'post',
          contentType: 'application/json',
          data: {
            email: this.email,
            password: this.password,
          },
        });
        const { firstname, lastname, email } = result.data;
        console.log(firstname, lastname, email);
        localStorage.setItem('firstname', firstname);
        localStorage.setItem('lastname', lastname);
        localStorage.setItem('email', email);
        this.$router.push('/dashboard');
      } catch (error) {
        console.log(error);
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
  max-width: 330px;
  margin-bottom: 20vh;
}

.icon {
  font-size: 4.6em;
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
