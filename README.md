# theme

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/de8777e0fd0249d480a92da2dda5863d)](https://app.codacy.com/gh/hugo-porto/theme/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)

Hugo Porto is a personal portfolio theme for Hugo. It features a minimalist design that focuses on showcasing your
projects and achievements. This theme is perfect for developers, designers, and creatives who want to create a simple
yet powerful online portfolio.

The theme was inspired and based originally on the [Porto](https://boxmodel.dev/templates/porto/html) theme from
[BoxModelDev](https://boxmodel.dev/)'s guys.

## Features

- Clean and minimalist design
- Complete responsiveness for all devices
- Highly customizable blocks for personalized design
- Easily extendable landing page for more content
- Support for Google Analytics for tracking and insights

## Roadmap

I'm constantly working on improving and expanding the features of this theme. If you find that a feature you need is
missing, please feel free to contact me. I'm open to dialogue and would be happy to discuss potential additions to the theme.

Features planned to implement in the nearest time:

- Opengraph and SEO meta information
- Posts support
- Default mock data to easy install and implementaton
- Generator of configuration files

## Demo

For a live demonstration of the theme in action, please visit the demo website at
[https://hugo-porto.netlify.app/](https://hugo-porto.netlify.app/). This demo site showcases all the features and design
elements that the Hugo Porto theme has to offer, providing a comprehensive overview of its capabilities.

You can find the source code for the demo website at
[https://github.com/hugo-porto/web](https://github.com/hugo-porto/web).

## Screenshots

Here are some screenshots of the theme in action:

![Home Page Section](https://raw.githubusercontent.com/hugo-porto/theme/main/images/tn.png)
This is the home section

![Portfolio Section](https://raw.githubusercontent.com/hugo-porto/theme/main/images/portfolio.png)
This is the portfolio section where you can showcase your projects and achievements.

![Testimonials Section](https://raw.githubusercontent.com/hugo-porto/theme/main/images/testimonials.png)
This is the testimonials section where you can show your recommendations.

## Prerequisites

- [Hugo](https://gohugo.io/getting-started/installing/) - a popular open-source static site generator written in Go.

## Install

The simplest method to use this theme is by forking the [web](https://github.com/hugo-porto/web) sample repository.
Afterwards, adjust the configurations to suit your requirements.

If you want to install the theme from scratch using Hugo modules, follow these steps:

1. First, ensure that you have [Hugo](https://gohugo.io/getting-started/installing/) installed on your system. You need
   version 0.125.0 or higher.

2. Create a new Hugo site if you haven't already. You can do this by running the following command in your terminal:

   ```bash
   hugo new site mysite
   ```

   Replace `mysite` with the name of your site.

3. Navigate to the root directory of your new site:

   ```bash
   cd mysite
   ```

4. Initialize Hugo modules:

   ```shell
   hugo mod init github.com/<your username>/<your repo name>
   ```

5. Add the Hugo Porto theme as a Hugo module in your configuration file:

   ```toml
   [module]
   [[module.imports]]
   path = "github.com/hugo-porto/theme"
   ```

6. Download latest version of the theme:

   ```shell
   hugo mod tidy
   ```

7. Finally, start your Hugo server:

   ```bash
   hugo server
   ```

   You should now be able to see your new site at `http://localhost:1313`.

8. Now you have to add configuration files to your data folder according your needs. You can see example files at [https://github.com/hugo-porto/web/tree/main/data](https://github.com/hugo-porto/web/tree/main/data).

## Adding a Custom Section

The Hugo Porto theme allows you to add your own custom sections to your website, as demonstrated on the
[demo website](https://hugo-porto.netlify.app/). To add a custom section, you need to add a configuration file to the
`data/sections` directory and a template to the `layout/partials/sections` directory. The theme is built with Tailwind
CSS, enabling you to style your section as needed.

You can find and use the source code for the demo website at
[https://github.com/hugo-porto/web](https://github.com/hugo-porto/web).

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the terms of the MPL 2.0 license. For more details, see the [LICENSE](LICENSE) file in
the project root.
