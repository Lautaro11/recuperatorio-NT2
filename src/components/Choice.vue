<template>

 <div class="container-sm">

  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">Pregunta: </th>
        <th scope="col">Respuesta: </th>
      </tr>
    </thead>
    <tbody v-for="(item, i) in preguntas" :key="i">
      <tr>
        <td>{{ item.numero }}</td>
        <td>{{ item.respuestas }}</td>
      </tr>
    </tbody>
  </table>

 </div>
</template>

<script lang="js">

  export default  {
    name: 'src-components-choice',
    props: [],
    mounted () {

    },
    data () {
      return {
        preguntas: [
          { numero: 1, respuestas: ['b,d']},
          { numero: 2, respuestas: ['c']},
          { numero: 3, respuestas: ['b']},
        ],
      }
    },
    methods: {

    },
    computed: {
    }
}


</script>

<style scoped lang="css">
  .src-components-choice {

  }
</style>
