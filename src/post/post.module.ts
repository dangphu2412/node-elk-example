import { Module } from '@nestjs/common';
import { SearchModule } from 'src/elastic/elastic.module';
import { PostController } from './post.controller';
import { PostService } from './post.service';

@Module({
  imports: [SearchModule],
  providers: [PostService],
  controllers: [PostController],
})
export class PostModule {}
