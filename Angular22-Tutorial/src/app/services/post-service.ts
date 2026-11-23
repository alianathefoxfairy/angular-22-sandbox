import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Post } from '../models/post';

@Service()
export class PostService {
    private http = inject(HttpClient);

    private endpoint = "https://jsonplaceholder.typicode.com/posts";

    // GET Request
    getPost(){
        //return this.http.get<Post[]>(this.endpoint);
        return this.http.get<Post[]>(`${this.endpoint}?_limit=5`);
    }

    // POST Request
    addPost(post: Omit<Post, 'id'>){
        return this.http.post<Post>(this.endpoint, post);
    }

    // PUT Request
    updatePost(id: number, post:Post){
        return this.http.put<Post>(`${this.endpoint}/${id}`, post);
    }

    // DELETE Request
    deletePost(id:number){
        return this.http.delete<Post>(`${this.endpoint}/${id}`);
    }
}
