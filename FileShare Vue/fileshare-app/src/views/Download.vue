<template>
  <div>
    <p>Example: localhost:8080/down?user=anon&file=8hti9S6V4.jpg</p>
    <h1>Download {{ fileName }}</h1>
    <button class="btn" :href="file"><i class="fa fa-download"></i> Download</button>
    <!-- <img :src="file" class="rounded mx-auto d-block" alt="Image" v-if="file" />
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==" alt="Red dot" /> -->
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Home',
  data() {
    return {
      fileName: '',
      user: '',
      fileNameDir: '',
      file: '',
    };
  },

  methods: {
    async getFile() {
      try {
        const data = await axios({
          url: `/download?user=anon&fileName=${this.fileName}`,
          method: 'get',
        });
        this.file = data;
        console.log(this.file);
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.user = this.$route.query.user;
    this.fileName = this.$route.query.file;
    this.getFile();
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
