/**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * @author Nicolás Penagos Montoya
 * nicolas.penagosm98@gmail.com
 **~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

// -------------------------------------
// DECLARATIONS
// -------------------------------------
const database = firebase.database();

const usernameInput = document.getElementById('usernameInput');
const postInput = document.getElementById('postInput');
const postButton = document.getElementById('postButton');
const postContainer = document.getElementById('postContainer');

// -------------------------------------
// FUNCTIONS
// -------------------------------------

/*
*   Post
*/
post = () =>{

    let u = usernameInput.value;
    let p = postInput.value;

    if(u == ''){
        alert('Username cannot be empty');
        usernameInput.value = '';
        postInput.value = '';
        return;
    }

    if(p == ''){
        alert('Post cannot be empty');
        usernameInput.value = '';
        postInput.value = '';
        return;
    }

    let reference = database.ref('posts').push();
    let post = {
        id: reference.key,
        username: u,
        post: p,
    }
    reference.set(post);

    usernameInput.value = '';
    postInput.value = '';

}

// -------------------------------------
// EVENTS
// -------------------------------------
postButton.addEventListener('click', post);

//Reading
database.ref('posts').on('value', function(data){
    postContainer.innerHTML = '';
    data.forEach(
        post => {
            let val = post.val();
            let queue = new PostsQueue(val);
            postContainer.appendChild(queue.render());
        }
    );
});