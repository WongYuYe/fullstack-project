import { prop, modelOptions, Ref } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger';
import { Course } from './course.model';

@modelOptions({
  schemaOptions: {
    timestamps: true
  }
})
export class Episode {
  @ApiProperty({description: '课时名称', example: '第一章nestjs'})
  @prop()
  name: string
  
  @ApiProperty({description: '文件', example: '这是xxxxxx'})
  @prop()
  file: string

  @ApiProperty({description: '所属课程'})
  @prop({ref: 'course'})
  course: Ref<Course>

}