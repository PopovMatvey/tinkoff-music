import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { CreateTrackDto } from "./dto/create-track.dto";
import { Comment, CommentDocument } from "./schemas/comment.schema";
import { Track, TrackDocument } from "./schemas/track.schema";


@Injectable()
export class TrackService {
    constructor(
        @InjectModel(Track.name) private trackModel: Model<TrackDocument>,
        @InjectModel(Comment.name) private commentModel: Model<CommentDocument>
    ) { }

    async createTrack(dto: CreateTrackDto): Promise<Track> {
        const track = await this.trackModel.create(
            {
                ...dto, listens: 0
            }
        )

        return track;
    }

    async getAllTrack(): Promise<Track[]> {
        const tracks = await this.trackModel.find();

        return tracks;
    }

    async getOneTrack(id: ObjectId): Promise<Track> {
        const track = await this.trackModel.findById(id);

        return track;
    }

    async deleteTrack(id: ObjectId): Promise<ObjectId> {
        const track = await this.trackModel.findByIdAndDelete(id);

        return track.id;
    }
}