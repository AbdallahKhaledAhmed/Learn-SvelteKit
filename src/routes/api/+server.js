import { json } from '@sveltejs/kit';

const data = [{ message: 'Hello World!' }];

export const GET = () => {
	return json(data);
};

export const POST = async (req) => {
	const reqBody = await req.request.json();
	data.push(reqBody);

	return json(data);
};

export const PUT = async (req) => {
	const message = await req.request.json();
	const id = Number(req.url.searchParams.get('id')) || 0;
	data[id] = message;

	return json(data);
};

export const DELETE = async (req) => {
	const id = Number(req.url.searchParams.get('id')) || 0;
	data.splice(id, 1);
	return json(data);
};

