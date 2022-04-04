import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { PostIndex } from './post-index.interface';

@Injectable()
export class SearchService {
  constructor(private readonly elasticsearchService: ElasticsearchService) {}

  public async indexPost(post: PostIndex) {
    try {
      await this.elasticsearchService.index<PostIndex>({
        index: 'posts',
        document: {
          id: post.id,
          content: post.content,
          title: post.title,
        },
      });
    } catch (e) {
      console.log(e);
    }
  }

  public async searchPost(text: string) {
    try {
      return await this.elasticsearchService.search<PostIndex>({
        index: 'posts',
        body: {
          query: {
            multi_match: {
              query: text,
              fields: ['title', 'content'],
            },
          },
        },
      });
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Error searching posts');
    }
  }
}
