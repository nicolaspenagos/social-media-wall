/**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * @author Nicolás Penagos Montoya
 * nicolas.penagosm98@gmail.com
 **~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

class PostsQueue{

    constructor(post){
        this.post = post;
    }

    render = ()=>{

        let component = document.createElement('div');
        component.className = 'postQueue';

        let postContainer = document.createElement('div');
        postContainer.className="pQueue";
        postContainer.innerHTML = this.post.post;

        let usernameContainer = document.createElement('div');
        usernameContainer.className='uQueue';
        usernameContainer.innerHTML = '@'+this.post.username;

        let inputContainer = document.createElement('div');
        inputContainer.className='icQueue';

        let postInput = document.createElement('input');
        postInput.placeholder="Write an answer";
        postInput.className='piQueue';

        let button = document.createElement('button');
        button.innerHTML='Reply'
        button.className = 'bQueue'

        inputContainer.appendChild(postInput);
        inputContainer.appendChild(button);

        component.appendChild(postContainer);
        component.appendChild(usernameContainer);
        component.appendChild(inputContainer);

        let arrayP = this.post.posts;
        arrayP.forEach(element => {
            
            if(element == '9dLEWtCNDOQarp$!FA&57kX'){
                
            }else{

                let answerContainer = document.createElement('div');
                answerContainer.className = 'acQueue';
                answerContainer.innerHTML=''+element;
                component.appendChild(answerContainer);

            }
            

        });
        

        button.addEventListener('click',()=>{

            const database = firebase.database();
            let text = postInput.value;
            let array = this.post.posts;
            array.push(text);
            this.post.posts = array;
            database.ref('posts/'+this.post.id).set(this.post);
            postInput.value='';

        });

        return component;
    }


}