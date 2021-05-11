<template>
  <div>
    <!-- Nav Bar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <a class="navbar-brand" href="#">File Share</a>

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
        <h5>
          Upload your file anonym
        </h5>
        <div class="row mx-auto w-50">
          <div class="custom-file col">
            <input type="file" name="upload" ref="upload" class="custom-file-input" id="inputGroupFile02" v-bind="file" @change="onFileChange" />
            <label class="custom-file-label custom-input text-left" for="inputGroupFile02">{{ fileName }}</label>
          </div>
          <button class="btn btn-primary col-sm-3" @click="uploadFile">Upload</button>
        </div>
        <div v-if="uploadedFile" class="my-2">
          <span>Your File: </span>
          <a ref="fileLink" :href="uploadedFile">{{ uploadedFile }}</a>
          <button class="btn btn-primary mx-2" @click="copyURL">Copy</button>
        </div>
      </div>
      <div class="text-center">
        <a class="" id="subtitle"></a>
      </div>

      <hr />
      <h3 class="text-center">About</h3>
      <!-- FAQ_ -->
      <div>
        <p><strong>How is File Share Unique?</strong></p>
        <!-- TODO: Frage beantworten -->
        <span>
          There are currently no other services online where you can upload and share your files for free. With File Share you don’t have to create a user account to upload and
          share your files. Either you use the anonymous function on our main page, or you can
          <a href="/register" class="linkColor">create</a>
          an account. Our system deletes all anonymous uploaded files after 7 days for your security.
        </span>
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
                <a href="https://github.com/OnSebii/FileShare" target="_blank" class="linkColor">GitHub</a>
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
            <h4>Share your files anonym</h4>
            <span>
              You can upload your files anonymously on our
              <a @click="scrollToTop" class="linkColor">homepage</a>
              (this page). The uploaded anonymous files will be automatically deleted after 7 days from our system. After you have uploaded your file you will get a url back that
              you can share with your friends. Anyone who has this url can see the uploaded content.
            </span>
          </div>
          <div class="col-6 mb-5">
            <!-- <img src="../assets/gifs/uploadAnon.gif" class="rounded mx-auto d-block" alt="Placeholder Gif" /> -->
          </div>

          <div class="col-6">
            <img src="../assets/img/300.png" class="rounded mx-auto d-block" alt="Placeholder image" />
          </div>
          <div class="col-6">
            <h4>Login and share your files</h4>
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

<script>
import axios from 'axios';
export default {
  name: 'Home',
  data() {
    return {
      file: '',
      fileName: 'no file selected',
      uploadedFile: '',
    };
  },
  methods: {
    onFileChange(e) {
      this.file = e.target.files[0];
      this.fileName = this.file.name;
    },
    async uploadFile() {
      let formData = new FormData();
      formData.append('upload', this.file);

      try {
        const { data } = await axios({
          url: '/upload-anon',
          method: 'post',
          contentType: 'multipart/form-data',
          data: formData,
        });
        this.uploadedFile = `${window.location.host}/${data}`;
      } catch (error) {
        console.error(error);
      }
    },
    copyURL() {
      let range;
      if (document.selection) {
        range = document.body.createTextRange();
        range.moveToElementText(this.$refs.fileLink);
        range.select();
        document.execCommand('copy');
      } else if (window.getSelection) {
        range = document.createRange();
        range.selectNode(this.$refs.fileLink);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand('copy');
      }
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  created() {
    console.log(localStorage.getItem('id'));
  },
};
</script>

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

.linkColor {
  color: #2db194 !important;
}
</style>
