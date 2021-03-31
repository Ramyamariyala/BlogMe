// var myCropWidget = cloudinary.createUploadWidget({
//     cloudName: 'demo', uploadPreset: 'preset1', folder: 'widgetUpload', cropping: true}, 
//     (error, result) => { console.log(error, result) })

document.getElementById("upload_widget_opener").addEventListener("click", function() {
    cloudinary.openUploadWidget({ cloud_name: 'demo', upload_preset: 'a5vxnzbp'}, 
      function(error, result) { console.log(error, result) });
  }, false);

  