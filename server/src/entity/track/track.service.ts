import { Injectable } from "@nestjs/common";
import { Query } from "@nestjs/common/decorators";
import { InjectModel } from "@nestjs/mongoose";
import { count } from "console";
import { Model, ObjectId } from "mongoose";
import { FileService, FileType } from "../file/file.service";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { CreateTrackDto } from "./dto/create-track.dto";
import { Comment, CommentDocument } from "./schemas/comment.schema";
import { Track, TrackDocument } from "./schemas/track.schema";


@Injectable()
export class TrackService {
    constructor(
        @InjectModel(Track.name) private trackModel: Model<TrackDocument>,
        @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
        private fileService: FileService
    ) { }

    async createTrack(dto: CreateTrackDto, picture, audio): Promise<Track> {
        const audioPath = this.fileService.createFile(FileType.AUDIO, audio);
        const picturePath = this.fileService.createFile(FileType.IMAGE, picture);
        const track = await this.trackModel.create(
            {
                ...dto, listens: 0,
                audio: audioPath,
                picture: picturePath,
            }
        )

        return track;
    }

    async getAllTrack(
        count = 10,
        offset = 0
    ): Promise<Track[]> {
        const tracks = await this.trackModel.find().skip(Number(offset)).limit(count);

        return tracks;
    }

    async searchsTracks(
        query: string
    ): Promise<Track[]> {
        const tracks = await this.trackModel.find({
            name: { $regex: new RegExp(query, 'i') }
        });

        return tracks;
    }

    async getOneTrack(id: ObjectId): Promise<Track> {
        const track = await this.trackModel.findById(id).populate('comments');

        return track;
    }

    async deleteTrack(id: ObjectId): Promise<ObjectId> {
        const track = await this.trackModel.findByIdAndDelete(id);

        return track.id;
    }

    async addComment(dto: CreateCommentDto): Promise<Comment> {
        const track = await this.trackModel.findById(dto.trackId);
        const comment = await this.commentModel.create({ ...dto });

        track.comments.push(comment.id);
        await track.save();

        return comment;
    }

    async addListen(id: ObjectId) {
        const track = await this.trackModel.findById(id);

        track.listens += 1;
        await track.save();
    }
}