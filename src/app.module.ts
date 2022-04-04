import { Module } from '@nestjs/common';
import { SearchModule } from './elastic/elastic.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [SearchModule, PostModule],
})
export class AppModule {}
