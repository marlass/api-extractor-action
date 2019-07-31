workflow "API extractor" {
  resolves = ["Hello World"]
  on = "push"
}

action "Hello World" {
  uses = "./.github/api-extractor-action"
  secrets = ["GITHUB_TOKEN"]
}
