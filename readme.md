# Blackbird Yoga Studio
Website for Blackbird Yoga Studio in Haworth, NJ. Built using the Metalsmith static site generator.

## Prerequisites

- Node.js
- npm

### Image optimization

Image optimization prerequisites requires the `jpeg` library. The easiest way to get this on a Mac, and all your other packages such as Node, is to use [Homebrew](https://brew.sh):

- `brew install jpeg`

Note: this is a required dependency for the `imagemin-jpegoptim` package, as this package is actually a wrapper around another wrapper -- `jpegoptim` -- which requires the `jpeg` library.
