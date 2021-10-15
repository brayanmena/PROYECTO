<template>
  <div>
      <div class="container-menu">
        <div class="container-logo">
          <h1 class="site-title">Geps EPS</h1>
        </div>
        <nav class="nav-list">
          <ul class="main-menu">
            <li class="main-menu__item">
              <a href="/" class="main-menu__link">Inicio</a>
            </li>
            <li class="main-menu__item">
              <a href="/afiliados" class="main-menu__link">Registros</a>
            </li>
          </ul>
        </nav>
      </div>
    <!--    <h2>Afiliados Futurama</h2> -->
    <br />
    <h2>Registro de afiliados a GEPS</h2>

    <br />

    <!-- Inicio formulario para creación y actualización -->
    <v-form ref="form" v-model="valid" lazy-validation>
      <fieldset>
      <v-text-field
        v-model="nombre"
        :counter="10"
        :rules="nombreRules"
        label="Nombre"
        required
      ></v-text-field>

      <v-text-field
        v-model="apellido"
        :counter="20"
        :rules="apellidoRules"
        label="Apellidos"
        required
      ></v-text-field>

      <v-text-field
        v-model="edad"
        :counter="10"
        :rules="edadRules"
        label="Edad"
        type="number"
        required
      ></v-text-field>

      <v-text-field
        v-model="documento"
        :counter="15"
        :rules="documentoRules"
        label="Documento de identidad"
        type="number"
        required
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="Email"
        required
      ></v-text-field>
      </fieldset>

      <v-btn v-if="id==null" rounded x-small color="primary" class="mr-4" @click="crearPersonaje">Afiliar</v-btn>

      <v-btn v-if="id!=null" rounded x-small color="primary" class="mr-4" @click="actualizarPersonaje(id)">Actualizar</v-btn>

      <v-btn v-if="id!=null" rounded x-small color="error" class="mr-4" @click="btnCancelar">Cancelar</v-btn>

      <v-btn rounded x-small color="error" class="mr-4" @click="reset"> Limpiar </v-btn>

    </v-form>
    <!-- Fin formulario para creación y actualización -->

    <br />

    <!-- Inicio tabla que muestra los documentos (registros) -->
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Nombre</th>
            <th class="text-left">Apellidos</th>
            <th class="text-left">Edad</th>
            <th class="text-left">Documento</th>
            <th class="text-left">Email</th>
            <th class="text-left">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in afiliados" :key="item._id">
            <td>{{ item.nombre }}</td>
            <td>{{ item.apellido }}</td>
            <td>{{ item.edad }}</td>
            <td>{{ item.documento }}</td>
            <td>{{ item.email }}</td>
            <td>
              <v-btn
                color="error"
                elevation="8"
                class="mr-4"
                rounded
                x-small
                @click="eliminarPersonaje(item._id)"
                >Eliminar
              </v-btn>
              <v-btn
                color="primary"
                elevation="8"
                class="mr-4"
                rounded
                x-small
                v-on:click="btnActualizar(item._id, item.nombre, item.apellido, item.edad, item.documento, item.email)"
                >Actualizar
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <!-- Fin tabla que muestra los documentos (Registros) -->
    <footer class="footer">
                <p class="section-text">Section Footer</p>
                <div class="cfoot">
                    <div class="cfoot1">
                        <p class="footer-links">
                            .
                            <a href="/inicio" class= "main-menu__link">Principal</a>
                            ·
                        </p>
                    </div>
                    <div class="cfoot2">
                        <p class="footer-company-name">Desarrollado por estudiantes Grupo 32-05 MisionTic
                            &copy; 2021</p>
                        <hr>
                        <i class="fab fa-github-square" style="font-size: 30px; padding: 15px;"></i><br>
                        <a href="https://github.com/Senshi-G/Grupo-32-5-" target="_blank" class="boton2">Repositorio del
                            proyecto</a>
                    </div>
                </div>
                <div class="cfoot">
                    <p style="text-align: center;">Desarrolladores del sitio</p>
                    <ul>
                        <i class="fas fa-user">Santiago Arenas | </i>
                        <i class="fas fa-laptop-code">Scrum Master | </i>
                        <i class="fas fa-phone-alt">3205264539</i>
                        <br><br>
                        <i class="fas fa-user">Raúl Guerrero | </i>
                        <i class="fas fa-laptop-code">Product Owner | </i>
                        <i class="fas fa-phone-alt">3226539210</i>
                        <br><br>
                        <i class="fas fa-user">Eliasib Varela | </i>
                        <i class="fas fa-laptop-code">Development Team | </i>
                        <i class="fas fa-phone-alt">3006653329</i>
                        <br><br>
                        <i class="fas fa-user">Jhohandris Cabarcas | </i>
                        <i class="fas fa-laptop-code">Development Team | </i>
                        <i class="fas fa-phone-alt">3042034845</i>
                        <br><br>
                        <i class="fas fa-user">Brayan Mena | </i>
                        <i class="fas fa-laptop-code">Development Team | </i>
                        <i class="fas fa-phone-alt">3216999069</i>
                        <br><br>
                    </ul>
                </div>
            </footer>
  </div>
</template>

<script>
import store from "../store/index.js";

export default {
  data: () => ({
    valid: true,
    nombre: "",
    nombreRules: [
      (v) => !!v || "Nombre es obligatorio",
      (v) => (v && v.length <= 10) || "Nombre debe tener menos de 10 caracteres",
    ],
    apellido: "",
    apellidoRules: [
      (v) => !!v || "Apellido es obligatorio",
      (v) => (v && v.length <= 10) || "Apellido debe tener menos de 10 caracteres",
    ],
    edad: "",
    edadRules: [
      (v) => !!v || "Edad es obligatorio",
      (v) => (v > 0) || "El número debe ser mayor que cero",
    ],
    documento: "",
    documentoRules: [
      (v) => !!v || "Documento es obligatorio",
      (v) => (v % 1 == 0) || "El documento no debe llevar puntos o comas",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "Email es obligatorio",
      (v) => /.+@.+\..+/.test(v) || "Email debe ser válido",
    ],
    checkbox: false,
    id: null,
  }),
  methods: {
    eliminarPersonaje(id) {
      let obj = { id };
      store.dispatch("deleteAfiliados", obj).then(() => {
        store.dispatch("getAfiliados");
      });
    },
    crearPersonaje() {
      let obj = {
        nombre: this.nombre,
        apellido: this.apellido,
        edad: this.edad,
        documento: this.documento,
        email: this.email,
      };
      store.dispatch("setAfiliados", obj).then(() => {
        store.dispatch("getAfiliados");
        this.$refs.form.reset();
      });
    },
    actualizarPersonaje(id) {
      let obj = {
        id: id,
        nombre: this.nombre,
        apellido: this.apellido,
        edad: this.edad,
        documento: this.documento,
        email: this.email,
      };
      store.dispatch("updateAfiliados", obj).then(() => {
        store.dispatch("getAfiliados");
        this.$refs.form.reset();
        this.id = null;
      });
    },
    btnActualizar(id, nombre, apellido, edad, documento, email){
      this.id = id;
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.documento = documento;
      this.email = email;
    },
    btnCancelar(){
      this.$refs.form.reset();
      this.id = null;
    },
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
  created: () => {
    //Acceder a las actions del store
    store.dispatch("getAfiliados");
  },
  computed: {
    afiliados: () => {
      return store.state.afiliados;
    },
  },
};
</script>

<style>
</style>