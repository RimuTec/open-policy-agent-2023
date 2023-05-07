# Open Policy Agent in Dev Container (TypeScript)

This is the complete source code for the article ["Open Policy Agent in a Dev Container"](https://manfredmlange.medium.com/using-open-policy-agent-with-express-js-9cbcc96478d).

## Prerequisites

On your computer you need the following tools installed for the example code in this repository to work:

1. VS Code
2. VS Code Extension "Remote Development"
3. git command line client (CLI)
4. Docker Desktop

All other dependencies will be installed by the dev container that is included in this code base. The example code is designed and expected to work on Linux, MacOS and Windows.

## Note (Windows Only)

A note regarding Windows: You want to use Windows WSL and you want to clone this repo into the Linux filesystem. If you clone this repo into the Windows file system (NTFS) you are highly likely to experience obscure issues caused by a sub-par implementation of file change notifications. See article ["Docker Desktop on WSL2: The Problem with Mixing File Systems"](https://levelup.gitconnected.com/docker-desktop-on-wsl2-the-problem-with-mixing-file-systems-a8b5dcd79b22) for more details and how to avoid this problem.
