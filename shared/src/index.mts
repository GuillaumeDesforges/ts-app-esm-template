import remult from "remult";
const {Entity, Fields} = remult;

@Entity('product', {allowApiCrud: true})
export class Post {
	@Fields.uuid()
	id!: string;

	@Fields.string()
	title!: string;
}
