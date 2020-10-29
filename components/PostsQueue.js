class PostsQueue{

    constructor(post){
        this.post = post;
    }

    render = ()=>{

        let component = document.createElement('div');
        component.innerHTML = (
            '<p>'+this.post.post+'</p>'
        );
        return component;
    }


}