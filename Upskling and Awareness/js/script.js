<script>
        function submitBlog() {
            let title = document.getElementById("blog-title").value;
            let content = document.getElementById("blog-content").value;
    
            if (title.trim() === "" || content.trim() === "") {
                alert("Please fill in both fields!");
                return;
            }
    
            let blogList = document.getElementById("blog-list");
            let newPost = document.createElement("li");
            newPost.innerHTML = `<strong>${title}</strong> - ${content}`;
            blogList.appendChild(newPost);
    
            // Clear input fields after submission
            document.getElementById("blog-title").value = "";
            document.getElementById("blog-content").value = "";
        }
    </script>