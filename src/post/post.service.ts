import { SearchService } from './../elastic/elastic.service';
import { Injectable, Logger } from '@nestjs/common';
import { CreatePostDto } from './create.dto';

@Injectable()
export class PostService {
  private primaryIncrement = 0;
  private logger: Logger;
  private readonly database: Map<number, object>;
  constructor(private readonly searchService: SearchService) {
    this.logger = new Logger('PostService');
    this.database = new Map();
  }

  public create(post: CreatePostDto) {
    this.database.set(this.primaryIncrement++, post);
    this.searchService.indexPost({
      ...post,
      id: this.primaryIncrement,
    });
    this.logger.log(`Created post: ${JSON.stringify(post)}`);
  }

  public search(text: string) {
    return this.searchService.searchPost(text);
  }
}
