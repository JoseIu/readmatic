import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { People } from "../interfaces/people.interface";
import "./user.css";

type Pops = {
	people: People;
};

export const User = ({ people }: Pops) => {
	const { attributes, listeners, setNodeRef, transform, transition } =
		useSortable({ id: people.id });

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
	};
	return (
		<article
			style={style}
			ref={setNodeRef}
			{...attributes}
			{...listeners}
			className="user"
		>
			<h2 className="user__name">{people.name}</h2>
			<span className="user__id">ID:{people.id}</span>
		</article>
	);
};
