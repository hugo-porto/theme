# theme

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/de8777e0fd0249d480a92da2dda5863d)](https://app.codacy.com/gh/hugo-porto/theme/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)

Hugo Porto is a personal portfolio theme for Hugo. It features a minimalist design that focuses on showcasing your
projects and achievements. This theme is perfect for developers, designers, and creatives who want to create a simple
yet powerful online portfolio.

## Features

- **Responsive Design**: The theme is fully responsive and works on all devices, including smartphones, tablets, and
  desktops.
- **Customizable**: The theme is highly customizable and allows you to configure various aspects of your website.
- **Lightweight**: The theme is lightweight and optimized for performance, ensuring fast load times.
- **SEO Friendly**: The theme is SEO friendly and includes meta tags and structured data to help search engines index
  your site.
- **Social Media Integration**: The theme includes social media integration, allowing you to link to your social media
  profiles.
- **Google Analytics**: The theme includes Google Analytics integration, allowing you to track visitors to your site.
- **Syntax Highlighting**: The theme includes syntax highlighting for code snippets, making it easy to showcase your
  code.
- **Tailwind CSS**: The theme uses Tailwind CSS for styling, making it easy to customize the design of your site.

## Roadmap

I'm constantly working on improving and expanding the features of this theme. If you find that a feature you need is
missing, please feel free to contact me. I'm open to dialogue and would be happy to discuss potential additions to the
theme.

Features planned to implement in the nearest future:

- Opengraph and SEO meta information
- Default mock data to easy install and implementaton
- More configuration options
- More examples and documentation
- Dark mode switcher

If you have any suggestions or feature requests, please open an issue on the GitHub repository. I would love to hear
your feedback and ideas for improving the theme.

## Demo

For a live demonstration of the theme in action, please visit the demo website at
[https://hugo-porto.netlify.app/](https://hugo-porto.netlify.app/). This demo site showcases all the features and design
elements that the Hugo Porto theme has to offer, providing a comprehensive overview of its capabilities.

You can find the source code for the demo website at
[https://github.com/hugo-porto/web](https://github.com/hugo-porto/web).

## Prerequisites

- [Hugo](https://gohugo.io/getting-started/installing/) - a popular open-source static site generator written in Go.

## Installation

The simplest method to use this theme is by forking the [web](https://github.com/hugo-porto/web) sample repository.
Afterwards, adjust the configurations to suit your requirements.

If you want to install the theme from scratch using Hugo modules, follow these steps:

1. First, ensure that you have [Hugo](https://gohugo.io/getting-started/installing/) installed on your system. You need
   version 0.116.0 or higher.

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

8. Now you have to add configuration files to your data folder according your needs. You can see example files at
   [https://github.com/hugo-porto/web/tree/main/data](https://github.com/hugo-porto/web/tree/main/data).

## Configuration

The Hugo Porto theme is highly customizable and allows you to configure various aspects of your website. The possible
configuration options will be described in the future.

## Contributing

If you have any suggestions, feature requests, or bug reports, please open an issue on the GitHub repository. I am open
to contributions and would be happy to discuss potential improvements to the theme.

If you would like to contribute to the theme, please fork the repository and submit a pull request. I will review any
pull requests and merge them if they provide value to the theme.

I appreciate any contributions and would like to thank you in advance for your support.

## License

This theme is distributed under the MIT License. See [LICENSE](LICENSE) for more information.
