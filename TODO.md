# Features missing from this implementation

- **Template expansion.** Squinting, this seems doable, but it's going to be a lot of messiness across `patterns` and `$ref`s throughout the schema. Not a good Hackathon-scoped problem.
- **Server-side task schema generation.** `task-schema.json` was built by reading all the task.jsons for all the in-box tasks. Checkout https://github.com/Microsoft/vsts-tasks/tree/hackathon/make-json-schema and run `node make.js genschema`. Ideally, we'd do this live on the server so that customer-supplied or Marketplace-derived tasks can be accounted for.
- **Trigger syntax.** Just didn't get to it today.
- **Non-GitHub repository references.** Unclear from the documentation what other source providers are available and what their parameters are. VSTS is "git".
- **Queue optional when steps are provider.** Just a bug that needs squashing. It's a bit of a tricky anyOf/oneOf nesting, and so far, it's easier just to specify a queue.