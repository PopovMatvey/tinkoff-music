import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ObjectId } from "mongoose";
import { CreateTrackDto } from "./dto/create-track.dto";
import { TrackService } from "./track.service";


@Controller('/tracks')
export class TrackController {

    constructor(private trackService: TrackService) { }

    @Post()
    createTrack(@Body() dto: CreateTrackDto) {
        return this.trackService.createTrack(dto);
    }

    @Get()
    getAllTrack() {
        return this.trackService.getAllTrack();
    }

    @Get(':id')
    getOneTrack(@Param('id') id: ObjectId) {
        return this.trackService.getOneTrack(id);
    }

    @Delete(':id')
    deleteTrack(@Param('id') id: ObjectId) {
        return this.trackService.deleteTrack(id);
    }
}