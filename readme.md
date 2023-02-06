# sampleMemoApp

<!-- procedure for global install -->

npm install -g expo-cli
expo init

# enter project name

<!-- for local install for typeScript-->

npm install expo-cli
npx create-expo-app --template
√ Choose a template: » Blank (TypeScript)
√ What is your app named? ... memo-app
✔ Downloaded and extracted project files.

<!-- under project folder -->

emulator -list-avds
emulator -avd Pixel_5_API_30

<!-- other memo -->

# emulator wipe data for avd device offline condition

clean AVD data by Android studio

# adb command

adb start-server
adb kill-server

# src

src
--components
--screens

# eslint

$ npm install --save-dev eslint
$ npx eslint --init
You can also run this command directly using 'npm init @eslint/config'.
√ How would you like to use ESLint? · style
√ What type of modules does your project use? · esm
√ Which framework does your project use? · react
√ Does your project use TypeScript? · No / Yes
√ Where does your code run? · node
√ How would you like to define a style for your project? · guide
√ Which style guide do you want to follow? · standard-with-typescript
√ What format do you want your config file to be in? · JSON
Checking peerDependencies of eslint-config-standard-with-typescript@latest
The config that you've selected requires the following dependencies:

eslint-plugin-react@latest eslint-config-standard-with-typescript@latest @typescript-eslint/eslint-plugin@^5.0.0 eslint@^8.0.1 eslint-plugin-import@^2.25.2 eslint-plugin-n@^15.0.0 eslint-plugin-promise@^6.0.0 typescript@_
√ Would you like to install them now? · No / Yes
√ Which package manager do you want to use? · npm
Installing eslint-plugin-react@latest, eslint-config-standard-with-typescript@latest, @typescript-eslint/eslint-plugin@^5.0.0, eslint@^8.0.1, eslint-plugin-import@^2.25.2, eslint-plugin-n@^15.0.0, eslint-plugin-promise@^6.0.0, typescript@_

added 102 packages, and audited 1329 packages in 13s

127 packages are looking for funding
run `npm fund` for details

5 high severity vulnerabilities

To address all issues (including breaking changes), run:
npm audit fix --force

Run `npm audit` for details.
Successfully created .eslintrc.json file in H:\projects\sampleMemoApp\sample-memo-app

# prop types

npm install prop-types

# prettier

npm install -D prettier eslint-config-prettier eslint-plugin-prettier

# memo

flex-box が基本のレイアウト
flex-direction が Web とは逆の作りになっている。

<!-- React props -->

Props(properties)
PropTypes
