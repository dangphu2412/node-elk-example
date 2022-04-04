import { PostService } from './post.service';
import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreatePostDto } from './create.dto';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  public createPost(@Body() createPostDto: CreatePostDto) {
    this.postService.create(createPostDto);
  }

  @Get()
  public search(@Query('text') text: string) {
    return this.postService.search(text);
  }
}
