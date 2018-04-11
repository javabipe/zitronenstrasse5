# Zitronenstrasse

#### Romantic Spots in Berlin.

[zitronenstrasse.com](http://www.zitronenstrasse.com/)

[ ![Codeship Status for valeriosillari/zitronenstrasse](https://app.codeship.com/projects/45f42180-b923-0135-4183-366309507115/status?branch=master)](https://app.codeship.com/projects/259131)

## GENERAL INFO

A side project with a list of romantic spots in Berlin.

Based on **VueJS (Nuxt)**, **Google Maps** and **Express Server**.


## Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

For detailed explanation on how Nuxt work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).


## DEPLOY INFO

We deploying on **Heroku**, using **Codeship**.


#### ENV OPTIONS

You need to set some CONFIG VAR options locally and on Heroku for custom Plugins as Google Map, Analytics and New Relic.

You can find which ones in the ENV example file:

``` html
# example file for CONFIG KEYS required. Based on dotenv package
./env_variables/env_keys_example
```

For detailed explanation on how dotenv work, checkout the [dotenv docs](https://github.com/motdotla/dotenv).


#### SERVER OPTIONS

We use Express as server.

For setting more server options for the application, we use Nuxt with Express.

Check the server.js file and documentation for more info.


#### Heroku CLI SHORTCUTS

**Login**: enter with your credentials in CLI

https://devcenter.heroku.com/articles/heroku-cli

```
heroku login
```

**CLI deploy**: when logged in, push your commits to heroku master for starting the deploy

https://devcenter.heroku.com/articles/git

```
git push heroku master
```

If you need to connect the local repo to the origin one (maybe from another machine), type this on CLI

```
heroku git:remote -a zitronenstrasse
```

**CLI show logs**: first command to run for seeing error on server.

```
heroku logs --tail --app zitronenstrasse
```

CLI Heroku: **re-start server**

```
heroku restart --app zitronenstrasse
```

CLI Heroku: **start a node command** on heroku server (as it was locally)

```
heroku run XXXyourcommandXXX
```


## ROAD MAP

#### TODO

- **IMAGES in ASSETS FOLDER**: set all images in asset folder. now in static folder. not quite sure if it is the right place.

- **LAZY LOAD**: set logic for place images. we have added plugin, but we got issues with images.

- **MAP PAN (movement)**: set it slow and nicer/smoother

- **MAP CUSTOM STYLES**: at map movement it is always flickering cause of image request. is is ok? could we prevent it?

- **FILTERS**: show places sorted by some kind of filter (only bars, only restaurants etc ...). Design + Code need to a concept.

- **SHARE SINGLE PLACES**: suggestion for sharing (on FB, twitter, as link) only a single place on the map. Conceptually possible? we have to check

- **HEADLINE**: on homepage/map set some kind of headline for recognising the website brand

- **SEO FIXES**: check how to improve SEO logic for pages

- **NO JS message**: if browser has NO-JS set ...

- **HTTPS**: this is connect to our provider and DNS ... long story ...



#### ISSUES

- **PERFORMANCE**:

  async / defer js as external JS has some issues on INCOGNITO and NORMAL mode.

  Looks like we have an issue with js map on http domain (http://www.zitronenstrasse.com)

  with https looks fine.

  https://security.googleblog.com/2017/04/next-steps-toward-more-connection.html


#### NICE TO HAVE

- **MAP COMPONENT**: set the JS code more modular

- **CONTACT PAGE**: set node mailer and all the logic for form mailer
