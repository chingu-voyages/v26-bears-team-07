## [**🎼 Bear Class**](https://bearclass.netlify.app/)

Voyage-26 | [chingu.io](https://chingu.io) | [Twitter](https://twitter.com/ChinguCollabs)

### We created a Google Classroom clone with the purpose of streamlining the process surrounding music teaching.

<a href="https://bearclass.netlify.app/" target="_blank">
  <p align="center">
    <img alt="preview" src="assets/images/preview.png">
  </p>
</a>

**[See it live!](https://bearclass.netlify.app/)**

## How Do I Deploy?

You'll need a Netlify and Fauna account.

1. Clone the repo and [deploy with Netlify](https://docs.netlify.com/site-deploys/create-deploys/#deploy-with-git)
2. Create a database in FaunaDB.
3. In the DB's dashboard...
   - GraphQL tab
     - Upload schema from the repo's `api/schema.gql`
   - Security tab
     - ROLES tab: Create a new role of `user` and use the `User` collection for membership. Give it access to all Collections & Indexes privileges (or as you see fit for fine-grained privileges).
     - KEYS tab: Create a new server role key and add it to your Netlify [environment variables](https://docs.netlify.com/configure-builds/environment-variables/#declare-variables) as `FAUNA_KEY`

## The 🐻 **Team & Testimonials**

**[Fang🦁](https://github.com/armchair-traveller)**

> I have to say, this voyage was a big win for me! I never intended to use GraphQL here. But due to the excessive bundle size of Fauna's polyfilled client driver, I took a dive... and let me say this: Best. Choice. Ever. GraphQL is amazing. It's true what they say, you never fully appreciate it until you've tried it! You get caching handled free with client libraries, and what further surprised me was the ease of using Fauna's GraphQL API. It's jaw-dropping that besides login, everything else in this app was achieved through its auto-generated queries and mutations, none of which I had to write custom resolvers for. I can't wait to use what I learned here for all my future database needs.

[**Olajide Olaniyan**](https://github.com/jidemobell)

> My best Chingu voyage. A drift away from comfort zone into interesting trends in web development. I have definitely picked a lot to engineer other projects or personal ideas. I probably would never have checked svelte if not for this voyage and I'm very grateful for that decision.

[**Tim Leonard**](https://github.com/iamtimleonard)

> This Voyage pushed me beyond my comfort zone because it was so many firsts for me: first Chingu Voyage, first time using Svelte, first team project, first time having deadlines. I am certainly a more confident coder than when I started six weeks ago. With every `git push`, I became more sure of my solutions and capabilities and that I am a useful team member. Svelte is an incredibly powerful tool and I'm looking forward to diving deeper into what it can offer. I'm excited for the next voyage!

## Objectives

Main: We used this project as an opportunity to take a deep dive into the world of Svelte with great success.

- [x] Sign up/in/out
- [x] Create & join class
- [x] View people in class
- [x] Announcements & comments
- [x] Create assignments
- [x] Calendar
- [ ] Submissions
- [ ] Settings
- [ ] Categories
- [ ] Archived Classes
- [ ] Review
- [ ] Grades

## **Tech**

**Frontend**

[Svelte](https://svelte.dev/)

[Routify](https://routify.dev/)

[urql](https://formidable.com/open-source/urql/)

**Database** [Fauna](https://fauna.com/) ([GraphQL](https://graphql.org/) frontend & FQL + serverless functions)

**Platform** [Netlify](https://www.netlify.com/)

**Architecture** [Jamstack](https://jamstack.org/) ([Serverless](https://serverless.css-tricks.com/), so hot right now 🌶. Serverless)

**Dates** [Day.js](https://day.js.org/)

**Project Management** [Notion](https://www.notion.so/)

## Acknowledgements

**[Fang🦁](https://github.com/armchair-traveller)**

> It's been an amazing time working with my fellow Chingus. Jide made an awesome landing page. Tim came up with our idea and helped us resolve feature details. Both of them did a great amount of work in the frontend and it definitely shows!

[**Olajide Olaniyan**](https://github.com/jidemobell)

> I'll keep it simple. I got myself a JS teacher in Fang and a cool and wonderful working partner in Tams. I wish we get to do some more things together.

[**Tim Leonard**](https://github.com/iamtimleonard)

> What a pleasure working with Fang and Jide! This was my first Chingu Voyage, and I really appreciate the flexibility and patience of my teammates. Fang was incredibly generous with his time, giving detailed explanations of the work he did and what I needed to accomplish. Also, he single-handedly built the whole backend and showed me how to wire it up to the UI. Jide picked up a lot of my slack as I got comfortable working in a collaborative environment. He made some of the sleekest frontend components I've seen.
