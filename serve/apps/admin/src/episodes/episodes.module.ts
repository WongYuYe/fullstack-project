import { Module } from '@nestjs/common';
import { EpisodeController } from './episodes.controller';

@Module({
  controllers: [EpisodeController]
})
export class EpisodesModule {}
