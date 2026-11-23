import { Component, inject, OnInit, signal } from '@angular/core';
import { ShoppingService } from '../../services/shopping-service';
import { PostService } from '../../services/post-service';
import { Post } from '../../models/post';
import { httpResource } from '@angular/common/http';

@Component({
  imports: [],
  selector: 'app-contact',
  styleUrl: './contact.scss',
  templateUrl: './contact.html',
})
export class Contact implements OnInit{
  //protected shoppingService = inject(ShoppingService);
  private postService = inject(PostService);

  posts = signal<Post[]>([]);

  ngOnInit(): void {
    //this.loadPosts();
  }

  // Async GET resource loading
  postsResource = httpResource<Post[]>(
    () => this.postService.endpoint
  );

  loadPosts(){
    // Shows Observable object, which is a stream that provides 
    // the data when subscribed to it - not the data itself
    //console.log(this.postService.getPost());

    //this.postService.getPost().subscribe(data => {
    //  this.posts.set(data);
    //});
    
    this.postsResource.reload();
  }

  createPost(){
    const newPost = {
      userId: 1,
      title: "New Post",
      body: "This is a new post"
    }

    this.postService.addPost(newPost).subscribe(data=>{
      //this.posts.update(posts=>[data, ...posts]);
      this.postsResource.update(posts => [data, ...(posts ?? [])])
    });
  }

  updatePost(post:Post){
    const updatedPost = {
      ...post,    // Copies everything from the existing post
      title: "Updated Title"
    }

    this.postService.updatePost(post.id, updatedPost).subscribe(data=>{
      //this.posts.update(posts =>
      //  posts.map(item=>item.id === updatedPost.id ? updatedPost : item)
      //);

      this.postsResource.update(posts =>
        (posts ?? []).map(item => item.id === updatedPost.id ? updatedPost : item)
      );
    });
  }

  removePost(id:number){
    //this.postService.deletePost(id).subscribe(()=>{
    //  this.posts.update(data=>data.filter(item=>item.id !== id));
    //});

    this.postService.deletePost(id).subscribe(()=>{
      this.postsResource.update(data=>(data ?? []).filter(item=>item.id !== id))
    })
  }
}
