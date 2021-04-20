<template>
  <div>
    <!-- Nav Bar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <a class="navbar-brand" href="#">Domain.name</a>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/help">Help</router-link>
          </li>
        </ul>
        <span class="nav-item">
          <router-link class="nav-link" to="/login">Login</router-link>
        </span>
      </div>
    </nav>
    <!-- Nav Bar ende -->

    <!-- Main Container -->
    <div class="container">
      <div class="text-center landing-title-body">
        <h1 class="glitch">File Share</h1>
        <!-- TODO: Subtext hinzufügen. -->
        <h5>Subtext</h5>
        <div class="custom-file w-25">
          <input type="file" name="upload" ref="upload" class="custom-file-input" id="inputGroupFile02" v-bind="file" @change="onFileChange" />
          <label class="custom-file-label custom-input text-left" for="inputGroupFile02">Please select a file.</label>
        </div>
        <button class="btn btn-primary" @click="uploadFile">Upload</button>
      </div>
      <div class="text-center">
        <a class="" id="subtitle"></a>
      </div>

      <hr />
      <h3 class="text-center">About</h3>
      <!-- FAQ_ -->
      <div>
        <p><strong>How is (File Share) Unique?</strong></p>
        <!-- TODO: Frage beantworten -->
        <a>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </a>
      </div>

      <hr />

      <!-- Features Tab  jeweils mit den eigenen Cards-->
      <h3 class="text-center">Features</h3>
      <br />
      <div class="row text-center">
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <i class="material-icons mi">done_all</i>
              <h4 class="card-title">Easy to use</h4>
              <span class="card-text">We are easy to use. Just upload your file and share it with your friends.</span>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <i class="material-icons mi">accessibility</i>
              <h4 class="card-title">Made for everyone</h4>
              <span class="card-text">Made for everyone! This is our slogan.</span>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <i class="material-icons mi">attach_money</i>
              <h4 class="card-title">No payments</h4>
              <span class="card-text">We say no to payments. We're completely free to use.</span>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <i class="material-icons mi">https</i>
              <h4 class="card-title">Security</h4>
              <span class="card-text">We are full HTTPS protected.</span>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <i class="material-icons mi">hourglass_empty</i>
              <h4 class="card-title">Auto delete</h4>
              <span class="card-text">(File Share) will automatically delete all files which get uploaded anonymously.</span>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <i class="material-icons mi">folder_open</i>
              <h4 class="card-title">Open Source</h4>
              <span class="card-text">
                <!-- TODO: Github Link mit eigener Domain ersetzen. -->
                Our whole project is open source. You can find the source code on
                <a href="https://github.com/OnSebii/FileShare" target="_blank" style="color: #2db194 !important">GitHub</a>
                .
              </span>
            </div>
          </div>
        </div>
      </div>
      <!-- Features Tab  jeweils mit den eigenen Cards ende-->

      <hr />
      <h3 class="text-center m-3 mb-4">How to use it?</h3>
      <div>
        <div class="row">
          <div class="col-6">
            <h4>Lorem Ipsum is simply dummy text of the printing</h4>
            <a>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </a>
          </div>
          <div class="col-6 mb-5">
            <img src="../assets/img/300.png" class="rounded mx-auto d-block" alt="Placeholder image" />
          </div>

          <div class="col-6">
            <img src="../assets/img/300.png" class="rounded mx-auto d-block" alt="Placeholder image" />
          </div>
          <div class="col-6">
            <h4>Lorem Ipsum is simply dummy text of the printing</h4>
            <a>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </a>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="landing-footer-body footer-bottom container">
        <div class="float-left">
          <span class="footer-title">Copyright © 2021&ensp;|&ensp;File Share&ensp;|&ensp;All rights reserved</span>
          <br />
          <!-- TODO: Mail hinzufügen sobald wir eine Domain haben -->
          <a>Email: admin@domain.name</a>
        </div>
        <div class="float-right">
          <span class="footer-title">Links</span>
          <br />
          <a target="_blank" href="https://material.io/resources/icons/">Icons</a>
          <router-link to="/login">Login</router-link>
          <router-link to="/help#tos">Terms Of Service</router-link>
          <router-link to="/help#pp">Privacy Policy</router-link>
        </div>
      </div>
    </div>
    <!-- Footer ende -->
    <!-- Main Container alles ist drinnen ende -->
  </div>
</template>

<style scoped>
body {
  background-color: #171717;
}

hr {
  width: 250px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: 0;
  height: 0;
  border-top: 1px solid #2db194;
  box-sizing: content-box;
}

a {
  color: #91979a !important;
}

span {
  color: #91979a !important;
}

/* Damit die Klasse Card Transparent ist */
.card {
  background-color: transparent !important;
  border: transparent !important;
}

.landing-footer-body {
  /* position: fixed; */
  height: 100px;
  bottom: 0;
  width: 100%;
  margin-top: 70px;
}

.landing-footer-body a {
  margin-right: 5px;
  font-size: 13px;
}

.footer-title {
  font-size: 14px;
  color: #fff !important;
}

.mi {
  color: #2db194;
  font-size: 64px !important;
}

.landing-title-body {
  padding-top: 5%;
  text-align: center;
}

.custom-file-label {
  background-color: #444444;
}
</style>

<script>
import axios from 'axios';
export default {
  name: 'Home',
  data() {
    return {
      file: '',
    };
  },
  methods: {
    onFileChange(e) {
      this.file = e.target.files[0];
    },
    async uploadFile() {
      let formData = new FormData();
      formData.append('upload', this.file);

      try {
        const { data } = await axios({
          url: 'http://127.0.0.1:3000/upload',
          method: 'post',
          contentType: 'multipart/form-data',
          data: formData,
        });
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
