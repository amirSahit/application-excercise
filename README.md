## Welcome:

Hey there! Thanks for checking out the project.

## Tech Stack:

- TypeScript
- Next.js
- tRPC
- Prisma
- Planetscale

## Setup Instruction:

1. Planetscale

   - Create an account and a database @ Planetscale https://planetscale.com/

2. .env

   - Create an .env file in your project (there should be an .env.example file - you can rename it)
   - Switch out the `<myname>`,`<mypassword>`,`<host>`,`<dbName>` with your information @ Guide https://planetscale.com/docs/tutorials/connect-any-application

3. Install & Run
   - `npm install`
   - `npm run dev`

## Task Details:

I have implemented the following features

1.  Homepage:

    - Display a list of all blog posts with their titles and creation dates.
    - Clicking on a blog post should navigate to its detail page.

2.  Blog Post Detail Page:

    - Display the full content of the selected blog post.

3.  Create Blog Post Page:

    - Provide a form to allow users to create a new blog post.
    - Implement client-side form validation to ensure the title and content are not empty.

4.  Backend API:

    - Use tRPC to create the API endpoints for fetching all blog posts and fetching a single blog post by its ID.

Additionally

5. TypeScript:

   - Utilize TypeScript types for improved code safety and documentation.
   - Use interfaces and types for API responses and data models.

6. Next.js:

   - Utilize server-side rendering (SSR) and static site generation (SSG) where appropriate.
   - Use Next.js features such as dynamic routing.

7. Prisma:

   - Define the "BlogPost" model in the Prisma schema with appropriate fields.
   - Use Prisma to interact with the database and implement CRUD operations.

8. Tailwind

   - Used as main CSS styler
   - Added some custome colors and a scollbar

## Important Components

1. `<BestBlogHeader/>` @ src\components\BestBlogHeader.tsx
   - Just a small header `CreatePostProps` as Pops
   - It had a button in it that sets the visibility of the `<CreatePostFrom/>`
2. `<CreatePostForm/>` @ src\components\CreatePostForm.tsx
   - A Form that uses useForm and zod for validation
   - It has a mutation and useContext
   - It refreshes `<DisplayAllPosts/>` and closes itself onSuccess
3. `<DisplaySinglePost/>` @ src\pages\post\[id].tsx
   - It shows a single post in full
   - It also utilizes useRouter to give the trpc add procedure the Id
4. `<Home/>` @ src\pages\index.tsx
   - This is the main hub
   - It is the state manager that gives the setCreatePost to the `<BestBlogHeader/>` and `<CreatePostFrom/>`
5. @ src\server\api\routers\post.ts
   - This one holds the gold
   - Here you find the Procedure for the queries all & byId and the mutation add

## Important Types

1. PostType & postSchema @ src\types\post.ts
   - this one is important for the zod validation of adding a post
2. CreatePostProps @ src\types\post.ts
   - this one is important for the state management of setCreatePost (see above for components)

## Additional Libraries

- React Hook Form
- Faker
