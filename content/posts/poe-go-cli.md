---
title: "Go CLI for Path of Exile"
date: "2020-05-26"
tags:
  - Go
---

Go is a statically typed language open sourced by Google in 2009. It is typically
used for backend services and CLIs (command line interfaces).

Path of Exile is an action RPG similar to Diablo. Every 3-4 months, PoE launches
a new league which introduces a new game mechanic. Players have to create new
characters and start from scratch (i.e. no items carried over).

PoE also has an official trading site where players can buy/sell items. There is
no underlying service matching bids ("price buyer is willing to pay") and asks
("price seller is willing to accept") which can result in negative bid-ask
spreads (buyer is willing to pay more and seller is willing to take less).

In order to make a quick profit, I decided to code up a Go CLI that will
detect these negative bid-ask spreads. `cobra` is a popular Go package for
creating CLIs and `viper` is a Go package for managing configurations.

The complete code can be found here: https://github.com/t73liu/poe-arbitrage

## Installation

The easiest way to get started would be installing Go and initializing an
empty project.

```bash
    # Install cobra CLI
    go get github.com/spf13/cobra/cobra
    # Make project directory
    mkdir poe-arbitrage
    cd poe-arbitrage
    # Initialize the Go project
    cobra init --pkg-name poe-arbitrage
    go mod init poe-arbitrage
```

Now we can start up the application to verify that it works.

```bash
    go run main.go
```

TODO ...

## Adding Commands

Let's add some commands to the CLI.

```bash
    cobra add configure
    cobra add list
    cobra add trade
```

TODO ...

## Finishing Touches

TODO ...

## Screenshots

![PoE Arbitrage](../images/poe-arbitrage.png)

## References

- [POE Arbitrage](/projects/poe-arbitrage/)
- [Code](https://github.com/t73liu/poe-arbitrage)
- [Go](https://golang.org/)
- [Cobra](https://github.com/spf13/cobra/)
- [Viper](https://github.com/spf13/viper/)
