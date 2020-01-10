import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Episode } from '@libs/db/models/episode.model';
import { InjectModel } from 'nestjs-typegoose';
import { Crud } from 'nestjs-mongoose-crud';

@Crud({
  model: Episode
})
@Controller('episode')
@ApiTags('课时')
export class EpisodeController {
  constructor(@InjectModel(Episode) private readonly model) {}
}
