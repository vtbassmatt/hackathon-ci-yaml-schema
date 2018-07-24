# Pipelines schema

To get started, install the [Red Hat YAML language server](https://github.com/redhat-developer/yaml-language-server) extension to VS Code.
Then edit your workspace settings to include:

```json
    "yaml.schemas": {
        "https://url/to/ci-schema.json": ".vsts-ci.yml"
    }
```

Unfortunately, VS Code doesn't seem to want to load the schema from the local disk.
Instead, use your handy copy of node, Python, Ruby, or other tool to run a simple HTTP server.
In Python it's as simple as `python -m http.server` in the root directory.

If you have multiple build definitions, you can instead put `*.yml` on the right side of the schema declaration.

When you load .vsts-ci.yml in VS Code, you'll get decent Intellisense for the main schema and the default tasks installed on VSTS/TFS.

# Task schema

The task schema was generated from all in-box tasks.
See https://github.com/Microsoft/vsts-tasks/tree/hackathon/make-json-schema and run `node make.js genschema` to re-generate.
Post-Hackathon, this should happen on the VSTS server based on the actual tasks installed.

# Note to developers

If you edit the schema, you'll have to touch your workspace settings again to get VS Code to re-read them.
I've been adding a dummy character to the .json extension, saving, then removing the character and saving again.
