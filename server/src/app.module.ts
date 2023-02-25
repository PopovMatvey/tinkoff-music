import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ServeStaticModule } from "@nestjs/serve-static";
import { FileModule } from "./entity/file/file.module";
import { TrackModule } from "./entity/track/track.module";
import * as path from 'path';

// Модуль приложения (сервер) 
@Module({
    imports: [
        FileModule,
        TrackModule,
        MongooseModule.forRoot('mongodb+srv://admin1:admin1@clustermusicplatform.sb8whly.mongodb.net/?retryWrites=true&w=majority'),
        ServeStaticModule.forRoot({ rootPath: path.resolve(__dirname, 'entity/static') }),
    ],
})
export class AppModule {

}