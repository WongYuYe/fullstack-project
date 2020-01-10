import { prop, modelOptions, arrayProp, Ref } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger';
import { Episode } from './episode.model';

@modelOptions({
  schemaOptions: {
    timestamps: true
  }
})
export class Course {
  @ApiProperty({description: '课程名称', example: '第一章nestjs'})
  @prop()
  name: string
  
  @ApiProperty({description: '课程简介', example: '这是xxxxxx'})
  @prop()
  intro: string

  @ApiProperty({description: '课程封面'})
  @prop()
  cover: string

  @arrayProp({itemsRef: 'Episode'})
  episodes: Ref<Episode>[]
}