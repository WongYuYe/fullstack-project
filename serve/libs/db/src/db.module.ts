import { Module, Global } from "@nestjs/common";
import { DbService } from "./db.service";
import { TypegooseModule } from "nestjs-typegoose";
import { User } from "./models/user.model";
import { Course } from "./models/course.model";
import { Episode } from "./models/episode.model";

const models = TypegooseModule.forFeature([User, Course, Episode]);

@Global()
@Module({
  imports: [
    TypegooseModule.forRoot("mongodb://47.104.160.59/fullstack", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
      user: 'fullstack',
      pass: '123456',
    }),
    models
  ],
  providers: [DbService],
  exports: [DbService, models]
})
export class DbModule {}
