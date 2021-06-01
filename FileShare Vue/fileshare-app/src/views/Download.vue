<template>
  <div class="m-5">
    <!-- <p>Example: localhost:8080/down?user=anon&file=8hti9S6V4.jpg</p> -->
    <h4 v-if="fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg'">View {{ fileName }}</h4>
    <h4 v-else>Download {{ fileName }}</h4>

    <img
      v-if="fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg'"
      :src="serverUrl"
      height="100%"
      width="80%"
    />
    <a v-else :href="'http://localhost:3000' + serverUrl" class="btn custom-front-button mt-2"
      >Download <i class="fa fa-download"></i
    ></a>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      fileName: '',
      fileExt: '',
      user: '',
      serverUrl: '',
    };
  },

  methods: {},
  created() {
    this.user = this.$route.query.user;
    this.fileName = this.$route.query.file;
    this.fileExt = this.fileName.split('.')[1];
    this.serverUrl = `/upload/${this.user}/${this.fileName}`;
    console.log(this.serverUrl);
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
.gifEL {
  height: 500px;
}

.custom-front-button {
  background-color: #268a74;
  color: white !important;
  padding: 5px 10px !important;
}
.custom-front-button:hover {
  background-color: #217563;
}
.custom-text {
  font-size: 0.9em;
  color: #bbbbbb;
}
</style>
