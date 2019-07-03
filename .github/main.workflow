workflow "API extractor" {
  resolves = ["Hello World"]
  on = "pull_requests"
}

action "Hello World" {
  uses = "./.github/api-extractor-action"
}
