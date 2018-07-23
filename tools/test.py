import yaml

build_def = """name: 'Simple example'
phases:
- phase: DoAThing
  queue: "Hosted VS2017"
  displayName: 'Do a thing'
  steps:
  - script: echo Hello world
"""

py_data = yaml.load(build_def)

print(build_def)
print(py_data)
