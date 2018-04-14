  

 

(function(Vue){

var app = new Vue({
el: '#app',
methods: {
    mostrarejemplos: function () {
      this.showejemplos = true;
      this.showejercios = false;
      this.$nextTick(function () {
        this.showejemplos = true;
      this.showejercios = false;
        
      })
      Vue.set('showejercios',false);
         Vue.set('showejemplos',true);
     
    },
    mostrarejercicios: function () {
     Vue.set('showejercios',true);
         Vue.set('showejemplos',false);
     
    }
  },

   data: function() {
        return {
            showejercios:false,
  showejemplos:true,
  ejercicios:[{titulo:"Eejercio de prueba para el previo de programacion web",descripcion:"descripcion del ejercicio propuesto en clase"},
{titulo:"Eejercio de prueba para el previo de programacion web",descripcion:"descripcion del ejercicio propuesto en clase"},
{titulo:"Eejercio de prueba para el previo de programacion web",descripcion:"descripcion del ejercicio propuesto en clase"},
{titulo:"Eejercio de prueba para el previo de programacion web",descripcion:"descripcion del ejercicio propuesto en clase"},
{titulo:"Eejercio de prueba para el previo de programacion web",descripcion:"descripcion del ejercicio propuesto en clase"}],
ejemplos:[{titulo:"Ejemplo de prueba para el previo de programacion web",descripcion:"descripcion del Ejemplo propuesto en clase"},
{titulo:"Eejercio de prueba para el previo de programacion web",descripcion:"descripcion del Ejemplo propuesto en clase"},
{titulo:"Eejercio de prueba para el previo de programacion web",descripcion:"descripcion del Ejemplo propuesto en clase"},
{titulo:"Eejercio de prueba para el previo de programacion web",descripcion:"descripcion del Ejemplo propuesto en clase"},
{titulo:"Eejercio de prueba para el previo de programacion web",descripcion:"descripcion del Ejemplo propuesto en clase"}]
            
        }
      }

 
})

})(window.Vue);