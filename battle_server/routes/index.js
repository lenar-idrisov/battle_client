var express = require('express');

module.exports = (app) => {
	app.use('/', _ =>{
    console.log('понял принял')
  });

}