# Nuxt3, Pinia, i18n, Histoire boilerpate

Instructions based on using Mac OSX with no current set up

## Recommended software

### Visual Studio code

We recommend using [VSCode](https://code.visualstudio.com) but it really doesn't matter if you wish to use an alternative IDE

### iTerm2 (optional)

[iTerm2](https://iterm2.com) is a more fully featured terminal than the in built one in Mac.

## Set up Host Dependancies

### Install Homebrew

[Homebrew](https://brew.sh) is a package manager for Mac, it makes installing some things easier

```node
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

### Install Node Version Manager (NVM)

```node
brew install nvm
```

Install Node Version 16.13.0

```node
nvm install 16.13.0
```

Instruct NVM to use the project's required version of Node as sset in the `.nvmrc` file (16.13.0)

```node
nvm use
```

## Running the code for the first time

Clone the repo into a location within your Mac (or PC)
Instruction TBC

Using terminal within VSCode or iTerm etc, run the following from within the website folder (See FontAwesome note below)

```node
npm install
```

## Run development server

```node
npm run dev
```

## Run Histoire server

I'd usually use Storybook, but playing with Histoire, it doesn't like i18n though.

```node
npm run story:dev
```

## Font Awesome Vue loader install

Use the following cmd to install Vue3 plugin, This causes an error with just doing an `npm install` for reason

```bash
npm i --save @fortawesome/vue-fontawesome@latest-3
```
