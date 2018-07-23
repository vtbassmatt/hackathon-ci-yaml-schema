# Features missing from this implementation

- **Template expansion.** Squinting, this seems doable, but it's going to be a lot of messiness across `patterns` and `$ref`s throughout the schema. Not a good Hackathon-scoped problem.
- **In-box task required inputs.** `task-schema.json` has a hand-crafted implementation of two tasks, showing how we can conditionally require inputs depending on the selected task. Ideally, we would read all the task.jsons for all the in-box tasks, then generate this file. Even more ideally, we'd do that on the server so that even customer-supplied or Marketplace-derived tasks can be accounted for.
- **Non-GitHub repository references.** Unclear from the documentation what other source providers are available and what their parameters are. VSTS is "git".
- **Queue optional when steps are provider.** Just a bug that needs squashing. It's a bit of a tricky anyOf/oneOf nesting, and so far, it's easier just to specify a queue.