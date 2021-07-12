const fs = require('fs');

require('colors');

const crearArchivo = async(variable = 5, listar = false, hasta) => {

   try {
   
      let salida = '';

      for(let numero = 1; numero <= hasta; numero++){

         salida += (`${variable} ${'x'.green} ${numero} ${'='.green} ${numero*variable}\n`);

      }

      if(listar){

         console.log('======================================='.green);
         console.log(`           Tabla del: ${variable}`)
         console.log('======================================='.green);

         console.log(salida);

      }

      fs.writeFileSync(`tabla-${variable}.txt`, salida);

      return `tabla-${variable}.txt `;

   } catch (error) {
      
      throw error;

   }
  
}

module.exports = {
   crearArchivo
}