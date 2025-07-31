
import {posts } from "@/app/lib/blog/placeholder-data"

import { db } from "@vercel/postgres";


async function seedPosts(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossip"`;
        const createPost = await client.sql`CREATE TABLE IF NOT EXIST posts(
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        postTitle VARCHAR(255) NOT NULL,
        postContent TEXT NOT NULL
        ); `;
        console.log(`created "posts" table`)

        const insertedPost =  await Promise.all(
            posts.map((post)=> {
                const newDate = new Date().getTime().toString();
            return client.sql`
            INSERT INTO posts (id, date, postTitle, postContent)
            VALUES (${post.id}, ${newDate}, ${post.postTitle}, ${post.postContent}
            ON CONFLICT(id) DO NOTHING
            ON CONFLICT(newDate) DO NOTHING;
             `;
            }),
           
        );
        console.log(`seeded ${insertedPost.length} post`);
        return {
            createPost,
            posts:insertedPost,
        };
    } catch(error) {
            console.error("error seeding posts")
            throw error
    }
}

async function main() {
    const client = await db.connect();

    await seedPosts(client);

    await client.end();

}

main().catch((err) => {
    console.error(
        'An error occurred while attempting to seed the database:',
        err,
    );
});
