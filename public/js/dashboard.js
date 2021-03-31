// var myCropWidget = cloudinary.createUploadWidget({
//     cloudName: 'demo', uploadPreset: 'preset1', folder: 'widgetUpload', cropping: true}, 
//     (error, result) => { console.log(error, result) })

document.getElementById("upload_widget_opener").addEventListener("click", function() {
    cloudinary.openUploadWidget({ cloud_name: 'demo', upload_preset: 'a5vxnzbp'}, 
      function(error, result) { console.log(error, result) });
  }, false);

 
  
  // row.append("<p>On " + new Date(data[i].created_at).toLocaleDateString() + "</p>"); for Date.

  // $(document).ready(function(){

  //   var blogContainer = $(".blog-container");
  
  //   //add the id to the post

  //   $(document).on("Click", "#add-post",handleBlogPostSubmit);
    
  //   // function () {
  //   //   var query = window.location.search;
  //   //   var partial = "";
      
  //   //   blogContainer.empty();
  //   //   var messageH2 = $("<h2>");
  //   //   messageH2.css({ "text-align": "center", "margin-top": "50px" });
  //   //   messageH2.html("No posts yet" + partial + ", navigate <a href='/cms" + query +
  //   //   "'>here</a> in order to get started.");
  //   //   blogContainer.append(messageH2);
  //   // }

  // })