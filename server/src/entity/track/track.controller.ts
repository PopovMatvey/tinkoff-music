import { Body, Controller, Delete, Get, Param, Query, Post, UploadedFiles, UseInterceptors } from "@nestjs/common";
import { FileFieldsInterceptor } from "@nestjs/platform-express";
import { ObjectId } from "mongoose";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { CreateTrackDto } from "./dto/create-track.dto";
import { TrackService } from "./track.service";


@Controller('/tracks')
export class TrackController {

    constructor(private trackService: TrackService) { }

    @Post()
    @UseInterceptors(
        FileFieldsInterceptor(
            [
                { name: 'picture', maxCount: 1 },
                { name: 'audio', maxCount: 1 },
            ]
        )
    )
    createTrack(@UploadedFiles() files, @Body() dto: CreateTrackDto) {
        const { picture, audio } = files;

        return this.trackService.createTrack(dto, picture[0], audio[0]);
    }

    @Get('/search')
    getAllTrack(
        @Query('count') count: number,
        @Query('offset') offset: number,
    ) {
        return this.trackService.getAllTrack(count, offset);
    }

    @Get()
    searchsTracks(
        @Query('count') query: string,
    ) {
        return this.trackService.searchsTracks(query);
    }

    @Get(':id')
    getOneTrack(@Param('id') id: ObjectId) {
        return this.trackService.getOneTrack(id);
    }

    @Delete(':id')
    deleteTrack(@Param('id') id: ObjectId) {
        return this.trackService.deleteTrack(id);
    }

    @Post('/comment')
    addComment(@Body() dto: CreateCommentDto) {
        return this.trackService.addComment(dto);
    }

    @Post('/listen/:id')
    addListen(@Param('id') id: ObjectId) {
        return this.trackService.addListen(id);
    }
}