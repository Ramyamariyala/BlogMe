// var myCropWidget = cloudinary.createUploadWidget({
//     cloudName: 'demo', uploadPreset: 'preset1', folder: 'widgetUpload', cropping: true}, 
//     (error, result) => { console.log(error, result) })

// document.getElementById("upload_widget_opener").addEventListener("click", function() {
//     // cloudinary.openUploadWidget({ cloud_name: 'demo', upload_preset: 'a5vxnzbp'}, 
//       function(error, result) { console.log(error, result) });
//   }, false);

 
  
  // row.append("<p>On " + new Date(data[i].created_at).toLocaleDateString() + "</p>"); for Date.

  $(document).ready(function(){
     
    let currentUserId = parseInt($("#blog-info").attr("data-id"))
    function getUserPosts(id){
      $.get(`/api/userposts/${id}`).then (res =>
        {
          let userpostdiv = $("#userpostdiv");
          let postHtml = ""; 
          let postArray = res;
          
          if(postArray.length === 0){
            userpostdiv.html("<h3>No post yet!!</h3>");
          }
          else {
            for(let i=0; i< postArray.length; i++){
              let date = new Date((postArray[i].createdAt).substring(0,10)).toDateString();
              
                postHtml+=`<div class="post-preview">
                <h2 class="post-title">${postArray[i].title}</h2>
                <h3 class="post-subtitle">${postArray[i].body}</h3>
                <p class="post-meta">Posted on ${date}</p>
            </div>
            <hr>`
            }
            userpostdiv.html(postHtml);
          }
        });
    }

      getUserPosts(currentUserId);

       function handleBlogPostSubmit(event){
        event.preventDefault();
        let newPost = {
          title: $("#post-title").val().trim(),
          body: $("#message").val().trim(),
          UserId: parseInt($("#blog-info").attr("data-id"))
        }
      console.log(newPost);
      $.post("/api/posts", newPost, function (res){
        location.reload()
        console.log(res);
      })
       }

    $("#add-post-btn").on("click",handleBlogPostSubmit);
  
      });    
