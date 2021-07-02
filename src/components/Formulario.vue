<template>

 <div class="container-sm">

    <!-- INPUT PRESUPUESTO -->
    <label for="presupuesto" class="form-label">Presupuesto</label>
    <input type="number" name="presupuesto" id="presupuesto" class="form-control" v-model.number="presupuesto" required :min="importeMin">



  <vue-form :state="formstate" @submit.prevent="onSubmit">

        <!-- INPUT NAME -->
    <validate tag="div" class="mb-3">
      <label for="name" class="form-label">Nombre</label>
      <input type="text" name="name" class="form-control" id="name" v-model.trim="data.name" required :minlength="stringMin" :maxlengh="stringMax" espacios-vacios>

      <field-messages name="name" show="$dirty">
        <div slot="required" class="alert alert-danger mt-1">El nombre es obligatorio</div>                  
        <div slot="espacios-vacios" class="alert alert-danger mt-1">No se permiten espacios vacios</div>                 
        <div slot="minlength" class="alert alert-danger mt-1">
          El nombre debe contener como mínimo {{ stringMin }} caracteres
        </div>            
        <div v-if="data.name.length >= stringMax" class="alert alert-warning mt-1">
          El nombre debe contener como máximo {{ stringMax }} caracteres
        </div>            
      </field-messages>
    </validate>

        <!-- INPUT DESCRIPTION -->
    <validate tag="div" class="mb-3">
      <label for="description" class="form-label">Descripcion</label>
      <input type="text" name="description" class="form-control" id="description" v-model.trim="data.description" required :minlength="stringMin" :maxlengh="stringMax">

      <field-messages name="description" show="$dirty">
        <div slot="required" class="alert alert-danger mt-1">El campo Descripcion es obligatorio</div>
        <div slot="minlength" class="alert alert-danger mt-1">
          El Descripcion debe contener como mínimo {{ stringMin }} caracteres
        </div>            
        <div v-if="data.description.length >= stringMax" class="alert alert-warning mt-1">
          El Descripcion debe contener como máximo {{ stringMax }} caracteres
        </div>            
      </field-messages>
    </validate>

    <!-- INPUT IMPORTE -->
    <validate tag="div" class="mb-3">
      <label for="importe" class="form-label">Importe</label>
      <input type="number" name="importe" class="form-control" id="importe" v-model.number="data.importe" required :min="importeMin">

      <field-messages name="importe" show="$dirty">
        <div slot="min" class="alert alert-danger mt-1">El importe mínimo permitido es {{ importeMin }}</div>
        <div slot="required" class="alert alert-danger mt-1">El campo Importe es obligatorio</div>
      </field-messages>
    </validate>

    <button type="submit"  :disabled="formstate.$invalid" class="btn btn-primary">Agregar Importe</button>

  </vue-form>

  <div v-if="gastos.length <= 0" class="alert alert-warning mt-3" role="alert">
    No se encuentran registros de gastos
  </div>

  <table v-if="gastos.length > 0" class="table container-sm mt-5">
    <thead class="thead-dark">
      <tr>
        <th scope="col">Nombre</th>
        <th scope="col">Descripcion</th>
        <th scope="col">Importe</th>
        <th scope="col">Fecha</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(gasto, i) in gastos" :key="i" >
        <td>{{gasto.name}}</td>
        <td>{{gasto.description}}</td>
        <td>${{gasto.importe}}</td>
        <td>{{gasto.fecha}}</td>
      </tr>
      <tr>
        <td :class="{green: gastoTotal < 1000, magenta: gastoTotal >= 1000 && gastoTotal <= 5000, orange: gastoTotal > 5000, red: gastoTotal > presupuesto}"  colspan="4">Gasto total: ${{gastoTotal}}</td>
      </tr>
    </tbody>
  </table>

</div>

</template>

<script lang="js">

  export default  {
    name: 'src-components-formulario',
    components: { },
    props: [],
    mounted () {

    },
    data () {
      return {
        formstate: {},
        presupuesto: 0,
        data: {
          name: '',
          description: '',
          importe: ''
        },
        stringMin: 3,
        stringMax: 15,
        importeMin: 0,
        gastos: [],
    }
  },
    methods: {
       onSubmit() {
         let date = new Date();
         let day = date.getDate();
         let month = date.getMonth() + 1;
         let year = date.getFullYear();
         let hours = date.getHours();
         let minutes = date.getMinutes();
         let seconds = date.getSeconds();
         if(day < 10){
           day = (`0${day}`);
          }
          if(month < 10){
            month = (`0${month}`);
          }

          if(hours < 10){
            hours = (`0${hours}`);
          }

          if(minutes < 10){
            minutes = (`0${minutes}`);
          }

          if(seconds < 10){
            seconds = (`0${seconds}`);
          }
          let fecha = `${day}/${month}/${year}   ${hours}:${minutes}:${seconds}`
          
          this.data.fecha = fecha;
          this.gastos.push({...this.data})

          this.data = {
            name: '',
            description: '',
            importe: ''
          }

          console.log(this.presupuesto);

          this.formstate._reset();
       }
    },
    computed: {
      gastoTotal: function () {
        let sum = 0;
        this.gastos.forEach(g => {
          sum += g.importe;
        });
        return sum;
      }
    }
}


</script>

<style scoped lang="css">
  .src-components-formulario {

  }
  .magenta {
    color: magenta;
  }

  .green {
    color: green;
  }

  .orange {
    color: orange;
  }

  .red {
    color: red;
  }

</style>
