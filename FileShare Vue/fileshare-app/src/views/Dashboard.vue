<template>
  <div>
    <div class="container my-4">
      <!-- NAVBAR -->
      <nav class="navbar navbar-expand navbar-dark bg-dark py-2 rounded">
        <a class="navbar-brand ml-2 custom-brand font-weight-bold">FileShare <span>Dashboard</span></a>
        <div class="collapse navbar-collapse navbar-right">
          <ul class="nav navbar-nav ml-auto">
            <li
              class="nav-item"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <a class="nav-link active"><i class="fas fa-user-circle custom-profile"></i></a>
              <div class="dropdown-menu dropdown-menu-right custom-dropdown px-3">
                <p class="my-2">
                  <span class="font-weight-bold text-white">Email:</span>
                  {{ user.email }}
                </p>
                <p class="mb-2">
                  <span class="font-weight-bold text-white">Name:</span>
                  {{ user.firstname }} {{ user.lastname }}
                </p>
                <p
                  class="dropdown-item custom-dropdown-item p-0 mt-1 mb-3 text-white"
                  @click="activeMenu = 'settings'"
                >
                  Edit Account
                </p>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item p-0 mb-1 "><router-link to="/logout">Logout</router-link></a>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <!-- My Account -->
      <div v-if="activeMenu == 'settings'" class="mt-3 bg-dark rounded">
        <form class="p-4">
          <legend class="mb-3 custom-headline">My Account: {{ updateUser.email }}</legend>
          <div class="row">
            <div class="form-group col-12 col-sm-6 px-3">
              <label for="inputFirst">First name</label>
              <input
                type="text"
                class="form-control custom-input"
                id="inputFirst"
                placeholder="First name"
                v-model="updateUser.firstname"
              />
            </div>
            <div class="form-group col-12 col-sm-6 px-3">
              <label for="inputLast">Last name</label>
              <input
                type="text"
                class="form-control custom-input"
                id="inputLast"
                placeholder="Last name"
                v-model="updateUser.lastname"
              />
            </div>
            <div class="form-group col-12 col-sm-6 px-3 pb-2">
              <label for="inputPassword">Password</label>
              <input
                type="password"
                class="form-control custom-input"
                id="inputPassword"
                placeholder="Password"
                v-model="updateUser.password"
              />
            </div>
          </div>
          <button class="btn custom-front-button mb-1 mr-2" type="button" @click="userChange">
            Save
          </button>
          <button class="btn mb-1" type="button" @click="activeMenu = 'main'">
            Discard changes
          </button>
          <br />
          <button class="btn custom-background-button mt-3 mb-1" @click="deleteUser">
            Delete User
          </button>
        </form>
      </div>

      <!-- PROJECTS -->
      <div v-if="activeMenu == 'main'" class="mt-3 bg-dark rounded">
        <div class="p-4">
          <div class="d-flex justify-content-between align-items-center">
            <p class="custom-headline">Shared Files</p>
            <a class="mb-3 custom-plus" type="button" data-toggle="modal" data-target="#addModal">
              <i class="fas fa-plus"></i>
            </a>
          </div>

          <!-- Inserted FILE Cards -->
          <div class="card border-secondary mb-3" v-for="file of files" :key="file.id">
            <div class="card-header d-flex justify-content-between align-items-center px-3 py-2">
              <p class="m-0 custom-title">{{ file.name }}</p>
              <div class="d-flex justify-content-end align-items-center">
                <button class="btn btn-sm mr-2 custom-front-button" @click="copyURL">
                  Copy URL <i class="fas fa-copy ml-1"></i>
                </button>
                <button
                  class="btn btn-sm mr-2 custom-background-button"
                  data-toggle="modal"
                  data-target="#shareModal"
                  @click="openShareModal(file)"
                >
                  Share <i class="fas fa-share ml-1"></i>
                </button>
                <a type="button" data-toggle="modal" data-target="#deleteModal">
                  <i class="fas fa-trash-alt ml-1"></i
                ></a>
              </div>
            </div>
            <div class="card-body px-3 py-2">
              <div class="d-flex justify-content-between my-1 custom-text">
                <span>{{ formatDateTime(file.upload_date) }}</span
                ><span>{{
                  formatDateTime(new Date(file.upload_date).setDate(new Date(file.upload_date).getDate() + 7))
                }}</span>
              </div>
              <div class="progress mb-2 custom-progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  :style="{
                    width:
                      progress(
                        new Date(file.upload_date),
                        new Date(file.upload_date).setDate(new Date(file.upload_date).getDate() + 7),
                      ) + '%',
                  }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- FILE UPLOAD Modal -->
    <div class="modal fade" id="addModal" role="dialog" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              File Upload
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <label for="inputName">Name</label>
            <input
              type="text"
              id="inputName"
              class="form-control custom-input mb-3"
              placeholder="..."
              required
              autofocus
              v-model="cstmFileName"
            />

            <label class="d-block">Select File</label>
            <div class="custom-file">
              <input type="file" class="custom-file-input" id="inputGroupFile02" @change="onFileChange"/>
              <label class="custom-file-label custom-input" for="inputGroupFile02"
                >{{fileName}}</label
              >
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn custom-front-button" data-dismiss="modal" @click="uploadFile">
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- FILE DELETE Modal -->
    <div class="modal fade" id="deleteModal" role="dialog" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              Delete File "<span class="font-weight-bold text-green">{{ 'file_name' }}</span
              >"?
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>
              Data will be deleted automatically on {{ 'delete_date' }}. When deleting a file before this
              date, there is no chance to restore it again.
            </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn custom-front-button" data-dismiss="modal">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- FILE SHARE Modal -->
    <div v-if="selectedFile" class="modal fade" id="shareModal" role="dialog" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              Share To
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <label for="inputEmail">Email address</label>
            <input
              type="text"
              id="inputEmail"
              class="form-control custom-input mb-3"
              placeholder="Email"
              required
              autofocus
              v-model="shareToField"
            />

            <ul class="list-group mb-1">
              <!-- Inserted USER Cards -->
              <li class="list-group-item d-flex justify-content-between align-items-center py-2 px-3">
                email-name@domain
                <span><i class="fas fa-trash-alt ml-1"></i></span>
              </li>
            </ul>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn custom-front-button" data-dismiss="modal" @click="addUser">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Login',
  data() {
    return {
      activeMenu: 'main',
      user: { firstname: '', lastname: '', email: '' },
      updateUser: null,
      files: [],
      selectedFile: null,
      shareToField: '',
      fileUsers: [],
      cstmFileName: "",
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
      formData.append('email', this.user.email);

      try {
        const { data } = await axios({
          url: '/upload',
          method: 'post',
          contentType: 'multipart/form-data',
          data: formData,
        });
        this.uploadedFile = `${window.location.host}/${data}`;
      } catch (error) {
        console.error(error);
      }
    },
    async getData() {
      const { data } = await axios({
        url: '/user',
        method: 'post',
        contentType: 'application/json',
        data: {
          email: this.user.email,
        },
      });
      this.files = data.data;
    },
    async userChange() {
      try {
        let data = await axios({
          url: 'http://127.0.0.1:3000/user-email',
          method: 'put',
          contentType: 'application/json',
          data: {
            email: this.updateUser.email,
            firstname: this.updateUser.firstname,
            lastname: this.updateUser.lastname,
          },
        });
        localStorage.setItem('firstname', this.updateUser.firstname);
        localStorage.setItem('lastname', this.updateUser.lastname);
        console.log(data);
        if (this.updateUser.password != '') {
          data = await axios({
            url: '/user-password',
            method: 'put',
            contentType: 'application/json',
            data: {
              email: this.user.email,
              new_password: this.updateUser.password,
            },
          });
          console.log(data);
        }
        this.activeMenu = 'main';
      } catch (error) {
        console.log(error);
      }
    },
    format(value) {
      if (value < 10) return '0' + value;
      return value;
    },
    formatDateTime(time) {
      let datetime = new Date(time);
      return `${this.format(datetime.getDate())}.${this.format(
        datetime.getMonth() + 1,
      )}.${datetime.getFullYear()} ${this.format(datetime.getHours())}:${this.format(datetime.getMinutes())}`;
    },
    progress(start, ende) {
      if (start.getTime() > new Date().getTime()) return 0;
      else if (new Date(ende).getTime() < new Date().getTime()) return 100;
      else {
        let margin = new Date(ende).getTime() - start.getTime();
        let temp = new Date().getTime() - start.getTime();
        return (temp / margin) * 100;
      }
    },
    copyURL() {},
    async openShareModal(file) {
      try {
        this.selectedFile = file;
        const { data } = await axios({
          url: '/get-file-owner',
          method: 'post',
          contentType: 'application/json',
          data: {
            email: this.user.email,
            id: this.selectedFile.id,
          },
        });
        this.fileUsers = data;
      } catch (error) {
        console.log(error);
      }
    },
    async addUser() {
      try {
        await axios({
          url: '/add-user',
          method: 'post',
          contentType: 'application/json',
          data: {
            email: this.user.email,
            id: this.selectedFile.id,
            new_email: this.shareToField,
          },
        });

        await this.getData();
      } catch (error) {
        console.log(error);
      }
    },
    async deleteUser() {
      try {
        if (confirm('Are you sure to delete this account?')) {
          await axios({
            url: '/user',
            method: 'delete',
            contentType: 'application/json',
            data: {
              email: this.user.email,
            },
          });
          // HELP Logout?
          this.$router.push('/');
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  async created() {
    try {
      if (localStorage.getItem('firstname') != null) this.user.firstname = localStorage.getItem('firstname');
      if (localStorage.getItem('lastname') != null) this.user.lastname = localStorage.getItem('lastname');
      if (localStorage.getItem('email') != null) this.user.email = localStorage.getItem('email');

      this.updateUser = this.user;
      this.updateUser.password = '';

      await this.getData();
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style scoped>
textarea {
  min-height: 20vh;
}

.custom-brand {
  font-size: 1.25em;
}
.custom-brand span {
  color: #30ac91;
}
.custom-profile {
  font-size: 2.2em;
}

.custom-dropdown {
  top: 55px;
  right: 22px;
}
.custom-dropdown p {
  font-size: 1em;
  color: #bbbbbb;
}
.custom-dropdown span {
  color: #dddddd;
}
.custom-dropdown a {
  color: #30ac91;
}
.custom-dropdown a:hover {
  background-color: #222222;
}
.custom-dropdown-item:hover {
  background-color: #222;
}

.custom-headline {
  font-size: 1.2em;
}
.custom-plus {
  color: #268a74;
}
.custom-title {
  font-size: 1.1em;
}
.custom-text {
  font-size: 0.9em;
  color: #bbbbbb;
}
.custom-progress {
  height: 4px;
}
.custom-progress div {
  background-color: #268a74;
}

/* Modal */
.custom-front-button {
  background-color: #268a74;
}
.custom-front-button:hover {
  background-color: #217563;
}
.custom-background-button {
  background-color: #6d6d6d;
}
.custom-background-button:hover {
  background-color: #626262;
}

.custom-input {
  color: #fff;
  background-color: #444444;
  border: 1px solid #686868;
}
.custom-input:focus {
  color: #fff;
  background-color: #505050;
}
.custom-input:active {
  color: #fff;
  background-color: #686868;
}
.custom-input::placeholder {
  color: #fff;
}

.text-green {
  color: #30ac91;
}
</style>
