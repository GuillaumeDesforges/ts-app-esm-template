import {Entity, Fields} from "remult";

@Entity('post', {allowApiCrud: true})
export class Post {
	@Fields.uuid()
	id!: string;

	@Fields.string()
	title!: string;
}
