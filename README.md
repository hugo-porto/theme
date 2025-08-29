# hugo-porto theme

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/de8777e0fd0249d480a92da2dda5863d)](https://app.codacy.com/gh/hugo-porto/theme/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)

The `hugo-porto` is a personal portfolio theme for Hugo. It features a minimalist design that focuses on showcasing your
projects and achievements. This theme is perfect for developers, designers, and creatives who want to create a simple
yet powerful online portfolio.

The theme is under active development, and new features are being added regularly. If you have any suggestions or
feature requests, please open an [issue](https://github.com/hugo-porto/theme/issues) on the GitHub repository. I would
love to hear your feedback and ideas for improving the theme.

## Screenshots

![Screenshot](https://raw.githubusercontent.com/hugo-porto/theme/main/images/screenshot.png)

![Skills](https://raw.githubusercontent.com/hugo-porto/theme/main/images/skills.png)

![Experience](https://raw.githubusercontent.com/hugo-porto/theme/main/images/experience.png)

![Custom](https://raw.githubusercontent.com/hugo-porto/theme/main/images/custom.png)

![Posts](https://raw.githubusercontent.com/hugo-porto/theme/main/images/posts.png)

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
elements that the `hugo-porto` theme has to offer, providing a comprehensive overview of its capabilities.

You can find the source code for the demo website at
[https://github.com/hugo-porto/web](https://github.com/hugo-porto/web).

In addition, you can find a real-world example of the theme in action on my personal website at
[https://andrew.molyuk.com](https://andrew.molyuk.com). The source code for my website is available at
[https://github.com/andrewmolyuk/andrew.molyuk.com](https://github.com/andrewmolyuk/andrew.molyuk.com)

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

5. Add the `hugo-porto` theme as a Hugo module in your configuration file:

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

The `hugo-porto` theme is highly customizable and allows you to configure various aspects of your website.

You can find the configuration files in the `data` folder of the sample repository. You can adjust any setting to suit
your needs. So here is a list and the customizable content of the of configuration data files:

### `data/home.toml`

This file define the order of the sections on the home page. You can add or remove sections and change the order of the
sections.

```toml
[[section]]
  id      = "hero"
  enabled = true
  weight  = 1

...

[[section]]
  id      = "testimonials"
  enabled = true
  weight  = 6
```

Each section has three properties:

- `id` is the unique identifier of the section and should match the filename of the section template. For example, the
  `hero` section id corresponds to the `data/sections/hero.toml` configuration file.
- `enabled` is a boolean value to enable or disable the section.
- `weight` is the order of the section.

### `data/footer.toml`

This file contains the footer configuration. You can add your social media links and other information here.

```toml
[[social]]
  type = "github"
  url  = "add your GitHub profile link here"
```

The `social` section contains the following properties:

- `type` is the name of the social media platform. The following values allowed:
  - `facebook`
  - `linkedin`
  - `github`
  - `instagram`
  - `youtube`
  - `dribbble`
  - `behance`
  - `medium`
  - `telegram`
  - `whatsapp`

- `id`: is the profile id or username on the social media platform.

### `data/navbar.toml`

This file contains the navigation bar configuration. You can add or remove menu items here.

```toml
[[menu]]
  text        = "Home"
  description = "Welcome to my personal website"
  link        = "/"
  target      = "_self"
```

The `menu` section contains the following properties:

- `text` is the text of the menu item.
- `description` is the description of the menu item.
- `link` is the URL of the menu item.
- `target` is the target attribute of the menu item.

Additionally, you can configure the following properties in the `navbar.toml` file:

```toml
title = "#andrewmolyuk"
logo  = "img/logo.svg"

[button]
  enabled = true
  text    = "Get my CV"
  link    = "files/Andrew Molyuk.pdf"
  target  = "_blank"
```

Where:

- `title` is the title of the website.
- `logo` is the path to the logo image (supports both local asset paths like `"img/logo.svg"` and external URLs).
- `button` is the configuration of the button in the navigation bar.
  - `enabled` is a boolean value to enable or disable the button.
  - `text` is the text of the button.
  - `link` is the URL of the button.
  - `target` is the target attribute of the button.

## Troubleshooting

### Logo Not Displaying

If you encounter issues with logo rendering (e.g., "nil pointer evaluating resource.Resource.RelPermalink"), ensure your
`data/navbar.toml` file has a valid logo configuration:

```toml
# Use a local asset (preferred)
logo = "img/logo.svg"

# Or use an external URL
logo = "https://example.com/logo.png"

# Or use an empty string to use the default
logo = ""
```

The theme includes robust error handling to prevent rendering failures regardless of logo configuration.

## Real-world usage

If you want to see a real-world example of the theme in action, you can check out the following websites:

- [andrew.molyuk.com](https://andrew.molyuk.com) - my personal website, which uses the `hugo-porto` theme.

If you are using the `hugo-porto` theme on your website and would like to be featured here, please let me know. I would
be happy to include your website in the list of real-world examples.

## Contributing

If you have any suggestions, feature requests, or bug reports, please open an issue on the GitHub repository. I am open
to contributions and would be happy to discuss potential improvements to the theme.

If you would like to contribute to the theme, please fork the repository and submit a pull request. I will review any
pull requests and merge them if they provide value to the theme.

### Development Workflow

This project uses [semantic-release](https://semantic-release.gitbook.io/) for automated version management and
releases.

**Commit Message Format:**

Follow [Conventional Commits](https://www.conventionalcommits.org/) specification. Commit messages are automatically
validated using commitlint:

- `feat:` - new features (triggers minor version bump)
- `fix:` - bug fixes (triggers patch version bump)
- `docs:` - documentation changes
- `style:` - formatting, missing semicolons, etc.
- `refactor:` - code changes that neither fix bugs nor add features
- `perf:` - performance improvements
- `test:` - adding missing tests
- `build:` - changes that affect the build system
- `ci:` - changes to CI configuration files
- `chore:` - maintenance tasks

**Examples:**

```bash
feat: add dark mode toggle
fix: resolve navbar mobile menu issue
docs: update installation instructions
```

**Breaking Changes:** Add `BREAKING CHANGE:` in the commit body or use `!` after the type (e.g., `feat!:`) to trigger a
major version bump.

**Release Process:**

Releases are fully automated through GitHub Actions:

1. **On Pull Request**: CI workflow runs linting, building, and commit message validation
2. **On Push to Main**: CI workflow runs first, then release workflow triggers
3. **Semantic Release**: Analyzes commit messages to determine version bump type
4. **Automated Tasks**: Updates `package.json`, creates git tag, and publishes GitHub release with generated notes

**CI/CD Pipeline:**

- **Linting**: Markdown and SCSS validation
- **Building**: TailwindCSS compilation and Hugo static site generation
- **Commit Validation**: Commitlint ensures conventional commit format
- **Release**: Automatic versioning and GitHub release creation

**Local Testing:**

```bash
# Test what the next release would be (dry-run)
make release-dry

# Run CI checks locally
make build
make lint
```

I appreciate any contributions and would like to thank you in advance for your support.

## License

This theme is distributed under the MIT License. See
[LICENSE](https://raw.githubusercontent.com/hugo-porto/theme/main/LICENSE) for more information.
