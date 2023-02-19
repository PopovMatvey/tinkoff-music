import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TrackModule } from "./entity/track/track.module";

// Модуль приложения (сервер) 
@Module({
    imports: [
        TrackModule,
        MongooseModule.forRoot('mongodb+srv://admin:admin@clustermusicplatform.sb8whly.mongodb.net/music-platform?retryWrites=true&w=majority')
    ],
})
export class AppModule {

}