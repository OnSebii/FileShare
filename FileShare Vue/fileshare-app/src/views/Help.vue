<template>
  <div>
    <div class="container-sm">
      <h3 class="text-center m-3">File Share</h3>
      <div class="row">
        <ul class="col-2">
          <li id="tosLi" class="active"><a href="#tos" @click="enableDisableEl('tos', true)">Terms Of Service</a></li>
          <li id="ppLi"><a href="#pp" @click="enableDisableEl('pp', true)">Privacy Policy</a></li>
        </ul>
        <div class="col-10">
          <div id="tos">
            <a @click="enableDisableEl('tos')">Terms of Service</a>
            <div v-if="displayTos == true">
              <a>Note: Remove the scroll-behavior property to remove smooth scrolling.</a>
            </div>
          </div>
          <br />
          <div id="pp">
            <a @click="enableDisableEl('pp')">Privacy Policy</a>
            <div v-if="displayPp == true">
              <a>Note: Remove the scroll-behavior property to remove smooth scrolling.</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      displayTos: false,
      displayPp: false,
    };
  },
  created() {},
  methods: {
    enableDisableEl(el, state) {
      if (state) {
        if (el == 'tos') this.displayTos = true;
        if (el == 'pp') this.displayPp = true;
      } else {
        if (el == 'tos') this.displayTos = !this.displayTos;
        if (el == 'pp') this.displayPp = !this.displayPp;
      }
    },
  },
};
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}

#section1 {
  height: 600px;
  background-color: pink;
}

#section2 {
  height: 600px;
  background-color: yellow;
}

ul {
  list-style-type: none;
}

li {
  padding: 8px;
  margin: 5px;
}

.active {
  background-color: #252525;
}

a:link {
  text-decoration: none;
}
</style>
