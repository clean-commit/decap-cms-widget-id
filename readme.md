# Decap CMS ID Widget

Decap CMS Widget that allows you to create permanent IDs for your content.

Widgets are inputs for the Decap CMS editor interface. It's a React component that receives user input and outputs a serialized value.

This widget allows you to create custom permalinks that can be used to generate pathnames for Decap CMS based websites. The widget mimics the behaviour of WordPress permalink input field automatically outputting correct slugs.

![ID widget](./assets/netlify-cms-widget-id.png)

## Installation

1. Install the widget

```
npm install decap-cms-widget-id
yarn add decap-cms-widget-id
```

2. Import the Permalink widget to your Netlify CMS setup file

```
import { Widget as IdWidget } from 'decap-cms-widget-id';
```

3. Register the widget for use

```
CMS.registerWidget(IdWidget);
```

## Usage details

Inside the YML collecitons file you should `uuid` as new widget

```
collections:
  - name: "example"
    label: "Example"
    folder: "/path/to/your/folder"
    create: true
    slug: "{{slug}}"
    fields:
      - label: "ID",
        name: "id",
        widget: "uuid",
        prefix: 'post', // This allows to add a prefix to the ID
```

You can also use it as a JS object using Netlify CMS [Manual Initialization](https://decapcms.org/docs/manual-initialization/)

Example:

```
{
  label: 'ID',
  name: 'id',
  widget: 'uuid'
  prefix: 'post', // This allows to add a prefix to the ID
},
```

This widget fields:

- `prefix` -> is used when you want to prefix IDs within the collection

### Additional guides

- [Permalink widget for Decap CMS](https://github.com/clean-commit/decap-cms-widget-permalink)
- [Efficient Netlify CMS config with Manual Initialization](https://mrkaluzny.com/blog/dry-decap-cms-config-with-manual-initialization/?utm_source=GitHub&utm_medium=henlo-gatsby)
- [How to optimize SEO with Gatsby & Netlify CMS](https://mrkaluzny.com/blog/how-to-optimize-seo-with-gatsby-netlify?utm_source=GitHub&utm_medium=henlo-gatsby)
- [Full text search with Gatsby & Decap CMS](https://mrkaluzny.com/blog/full-text-search-with-gatsby-and-decap-cms?utm_source=GitHub&utm_medium=henlo-gatsby)
