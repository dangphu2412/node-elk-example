import { Module } from '@nestjs/common';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { SearchService } from './elastic.service';

@Module({
  imports: [
    ElasticsearchModule.register({
      node: 'http://localhost:9200',
      auth: {
        username: 'elastic',
        password: 'rqB1Dp6T1P-BNyOSFX0f',
      },
    }),
  ],
  providers: [SearchService],
  exports: [SearchService],
})
export class SearchModule {}
