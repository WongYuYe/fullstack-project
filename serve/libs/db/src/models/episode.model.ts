import { prop, modelOptions } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger';

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

}