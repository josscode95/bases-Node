const argv = require('yargs')
   .option('b', {
      alias: 'base',
      type: 'number',
      demandOption: true,
      describe: 'La base de la Multiplicacion'
   })
   .option('l', {
      alias: 'listar',
      type: 'boolean',
      default: false,
      describe: 'Muestra la tabla en consola'
   })
   .option('h', {
      alias: 'hasta',
      type: 'number',
      default: 10,
      describe: 'Hasta que numero se multiplica'
   })
   .check((argv, options) => {
      if(isNaN(argv.b)){
         throw 'La base tiene que ser un número'
      }
      return true;
   })
   .argv;

module.exports = argv;

