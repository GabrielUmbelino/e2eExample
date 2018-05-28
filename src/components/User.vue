<template>
  <div class="container">
    <h1>Usuários</h1>
    <div class="row">
      <div class="col m6 s12">
        <div class="card">
          <div class="card-content">
            <span class="card-title">Novo Usuário</span>
            <form>
              <div class="row">
                <div class="input-field col s10">
                  <input id="name" type="text" class="validate" placeholder="Nome" v-model="model.name">
                </div>
              </div>
              <div class="row">
                <div class="input-field col s10">
                  <input id="age" type="text" class="validate" placeholder="Idade" v-model="model.age">
                </div>
              </div>
              <div class="row">
                <a class="waves-effect waves-teal btn-flat" @click="save()">Adicionar</a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col m6 s12">
        <div class="card">
          <div class="card-content">
          <span class="card-title">Usuários</span>
          <table class="highlight">
            <tr>
              <th>
                Código
              </th>
              <th>
                Nome
              </th>
              <th>
                Idade
              </th>
            </tr>
            <tr v-for="user in users" :key="user.id" :class="'id-'+user.id">
              <td class="id">
                {{user.id}}
              </td>
              <td class="name">
                {{user.name}}
              </td>
              <td class="age">
                {{user.age}}
              </td>
            </tr>
          </table>            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as json from "../../src/assets/users.json";

export default {
  name: "List",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      users: json.users,
      model: {}
    };
  },
  methods: {
    save() {
      this.model.id = this.users.length + 1;
      this.users.push(Object.assign({}, this.model));
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.card-content {
  max-height: 450px;
  overflow: auto;
}
</style>
