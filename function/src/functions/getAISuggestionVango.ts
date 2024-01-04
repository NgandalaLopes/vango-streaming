import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function getAISuggestionVango(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    const name = request.query.get('name') || await request.text() || 'world';

    return { body: `Hello, ${name}!` };
};

app.http('getAISuggestionVango', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: getAISuggestionVango
});
