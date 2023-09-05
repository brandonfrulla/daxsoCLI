---
title: Introduction
description: Introduction to Dax toolkit
layout: ../../layouts/docs.astro
lang: en
---

Welcome to the **Developer Acceleration eXperience for Smart-contract Organizations** cli toolkit. The fastest way to get a head start on your project.  Here are just a few things before we begin.

## Prerequisties

Make sure that you have an account on [**Infura**](https://www.infura.io) and understand how to add wallets to your favorite wallet provider.

## The Dax Stack

CREATE CLI LOGIN/SIGNUP FOR INFURA

The _"Dax Stack"_ is a selection of web development frameworks and blockchain developer toolkits by [Dax](https://twitter.com/haydenaylor) with a focus on leveling up Web3 projects and the developer experience.

The core pieces are [**Infura**](https://www.infura.io/) and [**TypeScript**](https://typescriptlang.org/), [**Truffle**](https://trufflesuite.com/), [**Ganache**](https://trufflesuite.com/ganache/) are included by default.

You may have noticed that there are a… lot of pieces. That's by design. Swap pieces in and out as you need - this stack is modular at its core :)

## So... what is daxso? A template?

Kind of? `daxso` is a CLI built by Dax to streamline the setup of a modular Web3 project from scratch. This means each piece is optional, and the "template" is generated based on your specific needs.

After countless projects and many years on this tech, we have lots of opinions and insights. We've done our best to encode them into this CLI.

This is **NOT** an all-inclusive template. We **expect** you to bring your own libraries that solve the needs of **YOUR** application. While we don't want to prescribe solutions to more specific problems like state management and deployment, we [do have some recommendations listed here](/en/other-recs).

## Dax's Axioms

We'll be frank - this is an _opinionated project_. We share a handful of core beliefs around building and we treat them as the basis for our decisions.

### Simplicity is Key

We believe in building tools that are intuitive, easy to use, and require minimal setup and configuration. Especially in Web3 where configuration and setup are the biggest roadblocks for both seasoned and new developers to onboard quickly and iterate early.

### Solve Problems

It's easy to fall into the trap of "adding everything" - we explicitly don't want to do that. Everything added to `create-daxso-proj` should solve a specific problem that exists within the core technologies included.
